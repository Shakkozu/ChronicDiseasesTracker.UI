import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { DiseasesRestService } from '../services/diseases.service';
import { DiseasesStateModel, Diseases } from './disease.actions';
import { Disease } from '../model/model';
import { Router } from '@angular/router';

@State<DiseasesStateModel>({
	name: 'diseases',
	defaults: {
		diseases: [],
		loading: false,
	}
})
@Injectable()
export class DiseasesState {
	constructor (private diseaseService: DiseasesRestService,
		private router: Router) { }

	@Action(Diseases.FetchAll)
	fetchAllUserDiseases(ctx: StateContext<DiseasesStateModel>) {
		this.refreshDiseases(ctx);
	}

	@Action(Diseases.CreateNewDisease)
	createNewDisease(ctx: StateContext<DiseasesStateModel>, action: Diseases.CreateNewDisease) {
		this.diseaseService.createNewDisease(action.diseaseName)
			.subscribe(_ => ctx.dispatch(new Diseases.FetchAll()));
	}

	@Action(Diseases.EstablishNewTreatment)
	establishNewTreatment(ctx: StateContext<DiseasesStateModel>, action: Diseases.EstablishNewTreatment) {
		this.diseaseService.createNewTreatment(action.newDiseaseCommand)
			.subscribe(createdTreatmentGuid =>
				this.refreshDiseases(ctx, () => {
					this.router.navigate(['diseases', action.newDiseaseCommand.diseaseGuid, 'treatments', createdTreatmentGuid])
				}), error => {
					ctx.patchState({
						loading: false,
						error: 'Failed to fetch diseases. Please try again later. Error message: ' + error,
					})
				}
			)
	}

	@Action(Diseases.EstablishNewTreatmentSuccess)
	establishNewTreatmentSuccedeed(ctx: StateContext<DiseasesStateModel>, action: Diseases.EstablishNewTreatmentSuccess) {

		this.refreshDiseases(ctx, () => {
			this.router.navigate(['diseases', action.diseaseGuid, 'treatments', action.createdTreatmentGuid])
		});
	}
	@Selector()
	static diseasesList(state: DiseasesStateModel): Disease[] {
		return state.diseases.map(dis => ({
			name: dis.name,
			guid: dis.guid,
			currentTreatmentGuid: dis.currentTreatmentGuid
		}));
	}

	@Selector([DiseasesState])
	static getItemById(state: DiseasesStateModel) {
		return (guid: string) => {
			const result = state.diseases.find(disease => disease.guid === guid);
			if (!result)
				throw Error("Disease with guid: " + guid + " not found");

			return ({
				name: result.name,
				guid: result.guid,
				currentTreatmentGuid: result.currentTreatmentGuid
			});
		};
	}

	@Selector([DiseasesState])
	static findAllDiseaseTreatments(state: DiseasesStateModel) {
		return (diseaseGuid: string) => {
			const searchedDisease = state.diseases.find(disease => disease.guid === diseaseGuid);
			if (!searchedDisease)
				throw Error("Disease with guid: " + diseaseGuid + " not found");

			return searchedDisease.treatments;
		};
	}

	@Selector([DiseasesState])
	static findDiseaseTreatmentByGuid(state: DiseasesStateModel) {
		return (diseaseGuid: string, treatmentGuid: string) => {
			const searchedDisease = state.diseases.find(disease => disease.guid === diseaseGuid);
			if (!searchedDisease)
				throw Error("Disease with guid: " + diseaseGuid + " not found");

			const historicalTreatment = searchedDisease.treatments.find(tr => tr.guid === treatmentGuid);
			if (!historicalTreatment)
				throw Error(`Treatment with guid ${ treatmentGuid } not found`);
			return historicalTreatment;
		};
	}


	@Selector([DiseasesState])
	static findTreatmentRecommendationHistory(state: DiseasesStateModel) {
		return (diseaseGuid: string, treatmentGuid: string, recommendation: string) => {
			const searchedDisease = state.diseases.find(disease => disease.guid === diseaseGuid);
			if (!searchedDisease)
				throw Error("Disease with guid: " + diseaseGuid + " not found");

			const treatment = searchedDisease.treatments.find(tr => tr.guid === treatmentGuid);
			if (!treatment)
				throw Error(`Treatment with guid ${ treatmentGuid } not found`);

			const result = treatment.recommendations.find(rec => rec.name === recommendation);
			if (!result)
				throw Error(`Recommendation history with name ${ recommendation } not found within disease ${ diseaseGuid } and treatment ${ treatmentGuid }`);
			return result;
		};
	}

	refreshDiseases(ctx: StateContext<DiseasesStateModel>, afterRefreshFunc: any = undefined) {
		ctx.patchState({ loading: true });
		this.diseaseService.fetchAllDiseases().subscribe(diseases => {
			ctx.patchState({
				diseases: diseases,
				loading: false,
			});
			console.log(diseases);
			if (afterRefreshFunc)
				afterRefreshFunc();
		}, error => {
			ctx.patchState({
				loading: false,
				error: 'Failed to fetch diseases. Please try again later. Error message: ' + error, // Provide a more descriptive error message
			});
		})
	}
}
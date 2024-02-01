import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { DiseasesInMemoryService } from '../services/diseases.service';
import { DiseasesStateModel, Diseases } from './disease.actions';
import { Disease, TreatmentDetails } from '../model/model';

@State<DiseasesStateModel>({
	name: 'diseases',
	defaults: {
		diseases: [],
		loading: false,
	}
})
@Injectable()
export class DiseasesState {
	constructor (private diseaseService: DiseasesInMemoryService) { }

	@Action(Diseases.FetchAll)
	fetchAllUserDiseases(ctx: StateContext<DiseasesStateModel>) {
		ctx.patchState({ loading: true });
		this.diseaseService.fetchAllDiseases().subscribe(diseases => {
			ctx.patchState({
				diseases: diseases,
				loading: false,
			});
		}, error => {
			ctx.patchState({
				loading: false,
				error: 'Failed to fetch diseases. Please try again later. Error message: ' + error, // Provide a more descriptive error message
			});
		})
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
	static findDiseaseTreatmentByGuid(state: DiseasesStateModel) {
		return (diseaseGuid: string, treatmentGuid: string) => {
			const searchedDisease = state.diseases.find(disease => disease.guid === diseaseGuid);
			if (!searchedDisease)
				throw Error("Disease with guid: " + diseaseGuid + " not found");

			if (searchedDisease.currentTreatmentGuid === treatmentGuid) {
				return searchedDisease.currentTreatment;
			}

			const historicalTreatment = searchedDisease.historicalTreatments.find(tr => tr.guid === treatmentGuid);
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

			if (searchedDisease.currentTreatmentGuid === treatmentGuid) {
				const result = searchedDisease.currentTreatment.recommendationsHistory.find(rec => rec.name === recommendation);
				if (!result)
					throw Error(`Recommendation history with name ${recommendation} not found within disease ${diseaseGuid} and treatment ${treatmentGuid}`);
				return result;
			}

			const historicalTreatment = searchedDisease.historicalTreatments.find(tr => tr.guid === treatmentGuid);
			if (!historicalTreatment)
				throw Error(`Treatment with guid ${ treatmentGuid } not found`);

			const result = searchedDisease.currentTreatment.recommendationsHistory.find(rec => rec.name === recommendation);
			if (!result)
				throw Error(`Recommendation history with name ${ recommendation } not found within disease ${ diseaseGuid } and treatment ${ treatmentGuid }`);
			return result;
		};
	}
}
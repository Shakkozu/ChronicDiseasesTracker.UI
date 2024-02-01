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
			console.log(diseases);
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
		return (diseaseName: string, treatmentGuid: string) => {
			let result! : TreatmentDetails;
			const searchedDisease = state.diseases.find(disease => disease.name === diseaseName);
			if (!searchedDisease)
				throw Error("Disease with guid: " + diseaseName + " not found");

			if (searchedDisease.currentTreatmentGuid === treatmentGuid) {
				return searchedDisease.currentTreatment;
			}

			const historicalTreatment = searchedDisease.historicalTreatments.find(tr => tr.guid === treatmentGuid);
			if (!historicalTreatment)
				throw Error(`Treatment with guid ${ treatmentGuid } not found`);
			return historicalTreatment;
		};
	}
}
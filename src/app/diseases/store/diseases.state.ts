import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { DiseasesInMemoryService } from '../services/diseases.service';
import { DiseasesStateModel, Diseases } from './disease.actions';
import { Disease } from '../model/model';

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
		console.log('entered action fetchAllUserDiseases');
		ctx.patchState({ loading: true });
		this.diseaseService.fetchAllDiseases().subscribe(diseases => {
			ctx.patchState({
				diseases: diseases,
				loading: false,
			});
			console.log('state after updating')
			console.log(ctx.getState());
		}, error => {
			ctx.patchState({
				loading: false,
				error: 'Failed to fetch diseases. Please try again later.', // Provide a more descriptive error message
			});
		})
	}

	@Selector()
	static diseasesList(state: DiseasesStateModel) : Disease[] {
		return state.diseases.map(dis => ({
			name: dis.name,
			guid: dis.guid,
			currentTreatmentGuid: dis.currentTreatmentGuid
		}));
	}
}
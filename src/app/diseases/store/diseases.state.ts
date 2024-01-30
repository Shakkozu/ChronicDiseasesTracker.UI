import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { DiseasesInMemoryService } from '../services/diseases.service';
import { DiseasesStateModel, Diseases } from './disease.actions';

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

		return this.diseaseService.fetchAllDiseases().pipe(
			tap(result => {
				ctx.patchState({
					diseases: result,
					loading: false,
				});
			}),
			catchError(error => {
				ctx.patchState({
					loading: false,
					error: 'Failed to fetch diseases. Please try again later.', // Provide a more descriptive error message
				});
				return of(null);
			})
		);
	}
}
import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { DiseasesInMemoryService, DiseasesService } from "../services/diseases.service";

export namespace Diseases {
	export class FetchAll {
		static readonly type = '[Diseases] Fetch All';
		constructor () { }
	}
}

export interface DiseasesStateModel {

}

@State<DiseasesStateModel>({
	name: 'diseases',
	defaults: []
})
@Injectable()
export class DiseasesState {
	constructor(private diseaseService: DiseasesInMemoryService) {}
	@Action(Diseases.FetchAll)
	fetchAllUserDiseases(ctx: StateContext<DiseasesStateModel>) {
		this.diseaseService.fetchAllDiseases()

	}
}


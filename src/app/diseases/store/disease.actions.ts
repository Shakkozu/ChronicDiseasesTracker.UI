import { DiseaseDetails, EstablishNewTreatmentCommand } from "../model/model";

export namespace Diseases {
	export class FetchAll {
		static readonly type = '[Diseases] Fetch All';
		constructor () { }
	}
	
	export class FindByGuid {
		static readonly type = '[Diseases] Find By Guid';
		constructor (public guid: string) { }
	}
	
	export class EstablishNewTreatment {
		static readonly type = '[Diseases] Establish New Treatment';
		constructor (public newDiseaseCommand: EstablishNewTreatmentCommand) { }
	}
}

export interface DiseasesStateModel {
	diseases: DiseaseDetails[];
	loading: boolean;
	error?: string;
}



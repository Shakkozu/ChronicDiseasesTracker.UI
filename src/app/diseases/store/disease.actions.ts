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
	
	export class CreateNewDisease {
		static readonly type = '[Diseases] Create New Disease';
		constructor (public diseaseName: string) { }
	}
	
	export class EstablishNewTreatment {
		static readonly type = '[Diseases] Establish New Treatment';
		constructor (public newDiseaseCommand: EstablishNewTreatmentCommand) { }
	}
	
	export class EstablishNewTreatmentSuccess {
		static readonly type = '[Diseases] Establish New Treatment Success';
		constructor (public diseaseGuid: string, public createdTreatmentGuid: string) { }
	}
}

export interface DiseasesStateModel {
	diseases: DiseaseDetails[];
	loading: boolean;
	error?: string;
}



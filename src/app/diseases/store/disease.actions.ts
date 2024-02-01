import { DiseaseDetails } from "../model/model";

export namespace Diseases {
	export class FetchAll {
		static readonly type = '[Diseases] Fetch All';
		constructor () { }
	}
	
	export class FindByGuid {
		static readonly type = '[Diseases] Find By Guid';
		constructor (public guid: string) { }
	}
}

export interface DiseasesStateModel {
	diseases: DiseaseDetails[];
	loading: boolean;
	error?: string;
}



import { DiseaseDetails } from "../model/model";

export namespace Diseases {
	export class FetchAll {
		static readonly type = '[Diseases] Fetch All';
		constructor () { }
	}
}

export interface DiseasesStateModel {
	diseases: DiseaseDetails[];
	loading: boolean;
	error?: string;
}



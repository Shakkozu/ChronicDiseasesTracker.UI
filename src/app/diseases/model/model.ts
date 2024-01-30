export interface DiseaseDetails {
	name: string;
	guid: string;
	currentTreatmentGuid: string;
	currentTreatment: TreatmentDetails;
	historicalTreatments: TreatmentDetails[];
}

export interface TreatmentDetails {
	guid: string;
	diseaseGuid: string;
	disease: string;
	treatment: string;
	establishedBy: string;
	establishedOn: Date;
	startDate: Date;
	endDate?: Date;
	recommendations: Recommendation[];
}


export interface Recommendation {
	name: string;
	frequency: string;
	establishedOn: Date;
	frequencyEntries: FrequencyEntry[];
}

export interface FormRecommendation extends Recommendation {
	guid: string;
}

export interface FrequencyEntry {
	dosage: string;
	when: string;
}



export interface NewTreatmentDetails {
	diseaseGuid: string;
	treatment: string;
	startDate: Date;
	establishedBy: string;
	establishedOn: Date;
	additionalInfo: string;
	medications: Recommendation[];
}


export interface NewTreatmentMedication {
	name: string;
	frequency: string;
	frequencyEntries: FrequencyEntry[];
}
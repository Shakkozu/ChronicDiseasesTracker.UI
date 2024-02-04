export interface Disease {
	name: string;
	guid: string;
	currentTreatmentGuid: string;
}

export interface DiseaseDetails {
	name: string;
	guid: string;
	currentTreatmentGuid: string;
	// currentTreatment: TreatmentDetails;
	treatments: TreatmentDetails[];
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
	recommendationsHistory: RecommendationHistoryDetails[];
}

export interface RecommendationHistoryDetails {
	name: string;
	prescriptionEntries: PrescriptionEntry[];
};
export interface PrescriptionEntry {
	startDate: Date;
	endDate?: Date;
	frequency: string;
	frequencyEntries: FrequencyEntry[];
};

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
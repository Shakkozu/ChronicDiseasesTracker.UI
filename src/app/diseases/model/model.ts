export interface Disease {
	name: string;
	guid: string;
	currentTreatmentGuid: string;
}

export interface DiseaseDetails {
	name: string;
	guid: string;
	currentTreatmentGuid: string;
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



export interface EstablishNewTreatmentCommand {
	name: string;
	establishedBy: string;
	establishedAt: Date;
	diseaseGuid: string;
	startDate: Date;
	recommendations: Recommendation[];
}

export interface EstablishNewTreatmentRequest {
	name: string;
	establishedBy: string;
	establishedAt: Date;
	startDate: Date;
	prescribedRecommendations: RecommendationDto[]
}

export interface RecommendationDto {
	name: string;
	dosage: DosageEntryDto;
}
export interface DosageEntryDto {
	frequency: string;
	validFrom: Date;
	frequencyEntries: FrequencyEntry[]
}



export interface NewTreatmentMedication {
	name: string;
	frequency: string;
	frequencyEntries: FrequencyEntry[];
}
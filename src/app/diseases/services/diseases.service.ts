import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Store } from "@ngxs/store";
import { DiseaseDetails, Recommendation, TreatmentDetails } from "../model/model";


export interface DiseasesService {
	fetchAllDiseases(): Observable<DiseaseDetails[]>;
}

@Injectable({
	providedIn: 'root',
})
export class DiseasesRestService implements DiseasesService {
	private apiUrl = 'your_backend_api_url'; // Replace with your actual backend API URL

	constructor (private http: HttpClient, private store: Store) { }

	fetchAllDiseases(): Observable<DiseaseDetails[]> {
		throw new Error('Not implemented');
	}

	// Add other methods for CRUD operations if needed
}

@Injectable({
	providedIn: 'root',
})
export class DiseasesInMemoryService implements DiseasesService {
	fetchAllDiseases(): Observable<DiseaseDetails[]> {
		return of(this.sampleResult);
	}

	private sampleResult: DiseaseDetails[] = this.getSampleDiseases();


	private getSampleDiseases() {

		const recommendation1: Recommendation = {
			name: 'Follow a balanced diet',
			frequency: 'Daily',
			establishedOn: new Date('2023-01-15'),
			frequencyEntries: [
				{ dosage: 'Varies', when: 'With meals' },
				{ dosage: 'Once', when: 'Morning' },
			],
		};

		const recommendation2: Recommendation = {
			name: 'Regular exercise',
			frequency: 'Weekly',
			establishedOn: new Date('2023-02-10'),
			frequencyEntries: [
				{ dosage: '30 minutes', when: 'Every day' },
				{ dosage: '1 hour', when: 'Twice a week' },
			],
		};

		const treatment1: TreatmentDetails = {
			guid: 'treatment-guid-1',
			diseaseGuid: 'disease-guid-1',
			disease: 'Flu',
			treatment: 'Rest and hydration',
			establishedBy: 'Dr. Smith',
			establishedOn: new Date('2023-01-10'),
			startDate: new Date('2023-01-11'),
			recommendations: [recommendation1],
			recommendationsHistory: [{
				name: recommendation1.name,
				prescriptionEntries: [
					{
						frequency: 'Daily',
						frequencyEntries: [
							{ dosage: '10mg', when: 'After Breakfast' },
							{ dosage: '20mg', when: 'After Supper' }
						],
						startDate: new Date()
					},
					{
						frequency: 'Daily',
						frequencyEntries: [
							{ dosage: '10mg', when: 'After Breakfast' },
							{ dosage: '30mg', when: 'After Dinner' },
							{ dosage: '10mg', when: 'After Supper' }
						],
						startDate: new Date(),
						endDate: new Date()
					}
				]
			}]
		};

		const treatment2: TreatmentDetails = {
			guid: 'treatment-guid-2',
			diseaseGuid: 'disease-guid-2',
			disease: 'Common Cold',
			treatment: 'Antiviral medication',
			establishedBy: 'Dr. Johnson',
			establishedOn: new Date('2023-02-05'),
			startDate: new Date('2023-02-06'),
			endDate: new Date('2023-02-15'),
			recommendations: [recommendation2],
			recommendationsHistory: [{
				name: recommendation2.name,
				prescriptionEntries: [
					{
						frequency: 'Daily',
						frequencyEntries: [
							{dosage: '10mg', when:'After Breakfast'},
							{dosage: '20mg', when:'After Supper'}
						],
						startDate: new Date()
					}
				]
			}]
		};

		const diseaseDetails1: DiseaseDetails = {
			name: 'Flu',
			guid: 'disease-guid-1',
			currentTreatmentGuid: 'treatment-guid-1',
			currentTreatment: treatment1,
			historicalTreatments: [treatment2],
		};

		const diseaseDetails2: DiseaseDetails = {
			name: 'Common Cold',
			guid: 'disease-guid-2',
			currentTreatmentGuid: 'treatment-guid-2',
			currentTreatment: treatment2,
			historicalTreatments: [treatment1],
		};

		return [diseaseDetails1, diseaseDetails2];
	}
}
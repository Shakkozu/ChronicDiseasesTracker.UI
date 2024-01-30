import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Store } from "@ngxs/store";
import { DiseaseDetails } from "../model/model";


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
		// Implementation for generating data in memory
		// Assume a mock implementation for demonstration purposes
		return new Observable<any>();
	}

	private sampleResult: DiseaseDetails[] = [
	]
}




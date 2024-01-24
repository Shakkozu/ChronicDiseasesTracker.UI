import { Component } from '@angular/core';
import { TreatmentDetails } from '../treatment-details/treatment-details.component';
import { DateService } from '../../services/date-service';

@Component({
  selector: 'app-treatments-history',
  templateUrl: './treatments-history.component.html',
  styleUrl: './treatments-history.component.scss'
})
export class TreatmentsHistoryComponent {
  public treatments: TreatmentDetails[] = SAMPLE_DATA;

  constructor () { }

  public get getDiseaseName(): string {
    return this.treatments[0]?.disease ?? '';
  }

  public return() {
    window.history.back();
  }

  getInitials(establishedBy: string) {
    return establishedBy.split(' ').map(n => n[0]).join('').substring(1, 3);
  }

  getEndDate(treatment: TreatmentDetails) {
    return treatment.endDate ? treatment.endDate.toLocaleDateString() : 'now';
  }

  getDateString(treatment: TreatmentDetails) {
    return DateService.getDurationString(treatment.startDate, treatment.endDate);
  }
}


export const SAMPLE_DATA: TreatmentDetails[] = [
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Inhaled corticosteroids',
    establishedBy: 'Dr. Robert Johnson',
    establishedOn: new Date(),
    startDate: new Date(),
    medications: [
      {
        name: 'Fluticasone',
        frequencyEntries: [{ dosage: '100mcg', when: 'Morning' }, { dosage: '100mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      },
      {
        name: 'Budesonide',
        frequencyEntries: [{ dosage: '200mcg', when: 'Morning' }],
        frequency: 'Daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Long-acting beta agonists',
    establishedBy: 'Dr. Alice Williams',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Salmeterol',
        frequencyEntries: [{ dosage: '50mcg', when: 'Morning' }, { dosage: '50mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Inhaled corticosteroids',
    establishedBy: 'Dr. Robert Johnson',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Fluticasone',
        frequencyEntries: [{ dosage: '100mcg', when: 'Morning' }, { dosage: '100mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      },
      {
        name: 'Budesonide',
        frequencyEntries: [{ dosage: '200mcg', when: 'Morning' }],
        frequency: 'Daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Long-acting beta agonists',
    establishedBy: 'Dr. Alice Williams',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Salmeterol',
        frequencyEntries: [{ dosage: '50mcg', when: 'Morning' }, { dosage: '50mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Inhaled corticosteroids',
    establishedBy: 'Dr. Robert Johnson',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Fluticasone',
        frequencyEntries: [{ dosage: '100mcg', when: 'Morning' }, { dosage: '100mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      },
      {
        name: 'Budesonide',
        frequencyEntries: [{ dosage: '200mcg', when: 'Morning' }],
        frequency: 'Daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Long-acting beta agonists',
    establishedBy: 'Dr. Alice Williams',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Salmeterol',
        frequencyEntries: [{ dosage: '50mcg', when: 'Morning' }, { dosage: '50mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Inhaled corticosteroids',
    establishedBy: 'Dr. Robert Johnson',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Fluticasone',
        frequencyEntries: [{ dosage: '100mcg', when: 'Morning' }, { dosage: '100mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      },
      {
        name: 'Budesonide',
        frequencyEntries: [{ dosage: '200mcg', when: 'Morning' }],
        frequency: 'Daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Long-acting beta agonists',
    establishedBy: 'Dr. Alice Williams',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Salmeterol',
        frequencyEntries: [{ dosage: '50mcg', when: 'Morning' }, { dosage: '50mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Inhaled corticosteroids',
    establishedBy: 'Dr. Robert Johnson',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Fluticasone',
        frequencyEntries: [{ dosage: '100mcg', when: 'Morning' }, { dosage: '100mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      },
      {
        name: 'Budesonide',
        frequencyEntries: [{ dosage: '200mcg', when: 'Morning' }],
        frequency: 'Daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Long-acting beta agonists',
    establishedBy: 'Dr. Alice Williams',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Salmeterol',
        frequencyEntries: [{ dosage: '50mcg', when: 'Morning' }, { dosage: '50mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Inhaled corticosteroids',
    establishedBy: 'Dr. Robert Johnson',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Fluticasone',
        frequencyEntries: [{ dosage: '100mcg', when: 'Morning' }, { dosage: '100mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      },
      {
        name: 'Budesonide',
        frequencyEntries: [{ dosage: '200mcg', when: 'Morning' }],
        frequency: 'Daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Long-acting beta agonists',
    establishedBy: 'Dr. Alice Williams',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Salmeterol',
        frequencyEntries: [{ dosage: '50mcg', when: 'Morning' }, { dosage: '50mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Inhaled corticosteroids',
    establishedBy: 'Dr. Robert Johnson',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Fluticasone',
        frequencyEntries: [{ dosage: '100mcg', when: 'Morning' }, { dosage: '100mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      },
      {
        name: 'Budesonide',
        frequencyEntries: [{ dosage: '200mcg', when: 'Morning' }],
        frequency: 'Daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Long-acting beta agonists',
    establishedBy: 'Dr. Alice Williams',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Salmeterol',
        frequencyEntries: [{ dosage: '50mcg', when: 'Morning' }, { dosage: '50mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Inhaled corticosteroids',
    establishedBy: 'Dr. Robert Johnson',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Fluticasone',
        frequencyEntries: [{ dosage: '100mcg', when: 'Morning' }, { dosage: '100mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      },
      {
        name: 'Budesonide',
        frequencyEntries: [{ dosage: '200mcg', when: 'Morning' }],
        frequency: 'Daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Long-acting beta agonists',
    establishedBy: 'Dr. Alice Williams',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Salmeterol',
        frequencyEntries: [{ dosage: '50mcg', when: 'Morning' }, { dosage: '50mcg', when: 'Evening' }],
        frequency: 'Twice daily',
        establishedOn: new Date()
      }
    ]
  },
  {
    disease: 'Asthma',
    diseaseGuid: '00000000-0000-0000-0000-000000000000',
    guid: '00000000-0000-0000-0000-000000000000',
    treatment: 'Leukotriene modifiers',
    establishedBy: 'Dr. David Taylor',
    establishedOn: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    medications: [
      {
        name: 'Montelukast',
        frequencyEntries: [{ dosage: '10mg', when: 'Evening' }],
        frequency: 'Daily',
        establishedOn: new Date()
      }
    ]
  }
];
type SurveyState = 'active' | 'cancelled' | 'finalized';
type SurveyType = 'Beneficiado' | 'Doador' | 'Coleta';

export interface Survey {
  id: string;
  state: SurveyState;
  type: SurveyType;
  schedule: {
    date: string;
    time: string;
  };
  data: {
    name: string;
    location: string;
    description: string;
    phone: string;
    images: string[];
  };
}

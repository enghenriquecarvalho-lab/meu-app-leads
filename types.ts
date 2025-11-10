export enum Gender {
  Male = 'Masculino',
  Female = 'Feminino',
  Other = 'Outros',
  PreferNotToSay = 'Prefiro não declarar',
}

export enum EducationLevel {
  Technical = 'Ensino técnico',
  Higher = 'Ensino superior completo',
  Postgraduate = 'Pós-graduação/MBA',
  Masters = 'Mestrado',
  Doctorate = 'Doutorado',
}

export enum WorkStatus {
  PrivateEmployee = 'Sou funcionário de entidade privada',
  PublicServant = 'Sou servidor público',
  Entrepreneur = 'Sou empresário, empreendedor ou autônomo',
  Retired = 'Sou aposentado',
  Unemployed = 'No momento estou desempregado',
}

export enum CurrentPosition {
  EngineerAnalyst = 'Engenheiro ou Analista',
  CoordinatorSupervisor = 'Coordenador ou Supervisor',
  Manager = 'Gerente',
  Director = 'Diretor',
  PartnerFounder = 'Sócio ou Fundador',
  Other = 'Outro',
}

export enum MonthlyIncome {
  None = 'Não tenho renda',
  UpTo5k = 'Até R$ 5.000',
  From5kTo10k = 'Entre R$ 5.000 e R$ 10.000',
  From10kTo15k = 'Entre R$ 10.000 e R$ 15.000',
  From15kTo20k = 'Entre R$ 15.000 e R$ 20.000',
  Above20k = 'Acima de R$ 20.000',
}

export enum AiKnowledgeLevel {
  Beginner = '1 (iniciante)',
  Intermediate = '2 (intermediário)',
  Advanced = '3 (avançado)',
  Expert = '4 (expert)',
}

export interface LeadData {
  email: string;
  birthDate: string;
  gender: Gender | '';
  education: EducationLevel | '';
  workStatus: WorkStatus | '';
  sector: string;
  position: CurrentPosition | '';
  income: MonthlyIncome | '';
  aiChallenge: string;
  aiFocus: string;
  aiGoals: string;
  aiKnowledge: AiKnowledgeLevel | '';
}
import React, { useState, useCallback, useMemo } from 'react';
import { supabase } from './services/supabaseClient';
import { LeadData, Gender, EducationLevel, WorkStatus, CurrentPosition, MonthlyIncome, AiKnowledgeLevel } from './types';
import FormField from './components/FormField';
import Loader from './components/Loader';
import { MailIcon, AlertTriangleIcon, CalendarIcon, AcademicCapIcon, BriefcaseIcon, BuildingOfficeIcon, UserGroupIcon, ChartBarIcon, LightBulbIcon, RocketLaunchIcon, PuzzlePieceIcon, BrainCircuitIcon, WhatsappIcon, XMarkIcon, PencilSquareIcon } from './components/IconComponents';

const OnboardingForm = ({ onGenerationComplete, onClose }: { onGenerationComplete: () => void; onClose: () => void; }) => {
  const initialFormData: LeadData = {
    email: '',
    birthDate: '',
    gender: '',
    education: '',
    workStatus: '',
    sector: '',
    position: '',
    income: '',
    aiChallenge: '',
    aiFocus: '',
    aiGoals: '',
    aiKnowledge: '',
  };

  const [formData, setFormData] = useState<LeadData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const radioOptions = {
    gender: Object.values(Gender),
    education: Object.values(EducationLevel),
    workStatus: Object.values(WorkStatus),
    position: Object.values(CurrentPosition),
    income: Object.values(MonthlyIncome),
    aiKnowledge: Object.values(AiKnowledgeLevel),
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof LeadData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);

  const RadioField = ({ name, label, options, selectedValue, error, icon }: { name: keyof LeadData, label: string, options: string[], selectedValue: string, error?: string, icon: React.ReactNode }) => (
    <fieldset>
      <legend className="block text-lg font-medium text-accent-dark-gray dark:text-gray-300 mb-2 flex items-center">{icon}<span className="ml-2">{label}</span></legend>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
        {options.map((option) => (
          <label key={option} className={`flex items-center p-2.5 w-full border rounded-lg cursor-pointer transition-all duration-200 bg-white dark:bg-gray-700 border-sky-gray/50 dark:border-gray-600 text-accent-dark-gray dark:text-gray-300 hover:border-green-400 dark:hover:border-green-500 ${selectedValue === option ? 'bg-green-100 dark:bg-green-900/50 border-green-500' : ''}`}>
            <input type="radio" name={name} value={option} checked={selectedValue === option} onChange={handleChange} className="sr-only"/>
            <span className="ml-2 text-base font-medium">{option}</span>
          </label>
        ))}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </fieldset>
  );

  const questions: Array<{ key: keyof LeadData, isRequired: boolean, render: () => React.ReactNode }> = useMemo(() => [
    { key: 'email', isRequired: true, render: () => <FormField id="email" name="email" label="1. Insira seu e-mail" type="email" placeholder="seu.email@exemplo.com" value={formData.email} onChange={handleChange} error={errors.email} icon={<MailIcon className="w-5 h-5 text-gray-400" />} /> },
    { key: 'birthDate', isRequired: true, render: () => <FormField id="birthDate" name="birthDate" label="2. Insira sua data de nascimento" type="date" placeholder="DD/MM/AAAA" value={formData.birthDate} onChange={handleChange} error={errors.birthDate} icon={<CalendarIcon className="w-5 h-5 text-gray-400" />} /> },
    { key: 'gender', isRequired: true, render: () => <RadioField name="gender" label="3. Gênero" options={radioOptions.gender} selectedValue={formData.gender} error={errors.gender} icon={<UserGroupIcon className="w-5 h-5 text-gray-400"/>} /> },
    { key: 'education', isRequired: true, render: () => <RadioField name="education" label="4. Formação acadêmica" options={radioOptions.education} selectedValue={formData.education} error={errors.education} icon={<AcademicCapIcon className="w-5 h-5 text-gray-400"/>} /> },
    { key: 'workStatus', isRequired: true, render: () => <RadioField name="workStatus" label="5. Como você trabalha hoje?" options={radioOptions.workStatus} selectedValue={formData.workStatus} error={errors.workStatus} icon={<BriefcaseIcon className="w-5 h-5 text-gray-400"/>} /> },
    { key: 'sector', isRequired: false, render: () => <FormField id="sector" name="sector" label="6. Setor de atuação" type="text" placeholder="Ex: Construção Civil, Tecnologia, Varejo" value={formData.sector} onChange={handleChange} icon={<BuildingOfficeIcon className="w-5 h-5 text-gray-400" />} /> },
    { key: 'position', isRequired: true, render: () => <RadioField name="position" label="7. Posição atual" options={radioOptions.position} selectedValue={formData.position} error={errors.position} icon={<UserGroupIcon className="w-5 h-5 text-gray-400"/>} /> },
    { key: 'income', isRequired: true, render: () => <RadioField name="income" label="8. Renda mensal" options={radioOptions.income} selectedValue={formData.income} error={errors.income} icon={<ChartBarIcon className="w-5 h-5 text-gray-400"/>} /> },
    { key: 'aiChallenge', isRequired: false, render: () => <FormField id="aiChallenge" name="aiChallenge" label="9. Qual é o maior desafio que você enfrenta hoje ao lidar com Inteligência Artificial na sua carreira ou no seu negócio?" type="textarea" placeholder="Descreva seu principal desafio..." value={formData.aiChallenge} onChange={handleChange} icon={<PuzzlePieceIcon className="w-5 h-5 text-gray-400" />} /> },
    { key: 'aiFocus', isRequired: false, render: () => <FormField id="aiFocus" name="aiFocus" label="10. Se você dominar apenas UM aspecto da IA nos próximos 3 meses, qual seria?" type="textarea" placeholder="Ex: Automação de tarefas, análise de dados, criação de conteúdo..." value={formData.aiFocus} onChange={handleChange} icon={<LightBulbIcon className="w-5 h-5 text-gray-400" />} /> },
    { key: 'aiGoals', isRequired: false, render: () => <FormField id="aiGoals" name="aiGoals" label="11. O que você espera conquistar profissionalmente aplicando a IA nas suas rotinas?" type="textarea" placeholder="Ex: Ser promovido, aumentar minha produtividade, criar um novo negócio..." value={formData.aiGoals} onChange={handleChange} icon={<RocketLaunchIcon className="w-5 h-5 text-gray-400" />} /> },
    { key: 'aiKnowledge', isRequired: true, render: () => <RadioField name="aiKnowledge" label="12. Numa escala de 1 a 4, qual seu nível de conhecimento sobre IA para gestão de projetos e obras?" options={radioOptions.aiKnowledge} selectedValue={formData.aiKnowledge} error={errors.aiKnowledge} icon={<BrainCircuitIcon className="w-5 h-5 text-gray-400"/>} /> }
  ], [formData, errors, handleChange, radioOptions]);

  const validateStep = (step: number): boolean => {
    const currentQuestion = questions[step];
    if (!currentQuestion.isRequired) return true;
    const value = formData[currentQuestion.key];
    if (typeof value === 'string' && !value.trim()) {
      setErrors(prev => ({...prev, [currentQuestion.key]: 'Este campo é obrigatório.'}));
      return false;
    }
    if (currentQuestion.key === 'email' && !/\S+@\S+\.\S+/.test(value as string)) {
      setErrors(prev => ({...prev, [currentQuestion.key]: 'Formato de e-mail inválido.'}));
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setApiError(null);
    try {
      // Salva os dados no Supabase
      const { error: supabaseError } = await supabase.from('leads').insert([formData]);
      if (supabaseError) throw supabaseError;
      
      // Chama a nossa nova API segura para gerar a mensagem
      fetch('/api/generate', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(formData) });
      // Nota: Não esperamos pela resposta da IA para não bloquear o usuário.
      // A chamada é "dispare e esqueça". A mensagem pode ser enviada por e-mail depois.

      onGenerationComplete();

    } catch (error: any) {
      console.error("Ocorreu um erro ao salvar os dados:", error);
      let errorMessage = 'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.';
      if (error.message?.toLowerCase().includes('fetch')) {
          errorMessage = 'Erro de conexão. Verifique suas chaves do Supabase ou a conexão com a internet.';
      }
      setApiError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  
  const totalSteps = questions.length;
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-accent-dark-gray rounded-2xl shadow-2xl p-6 md:p-8 relative">
       <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors z-10" aria-label="Fechar">
            <XMarkIcon className="w-6 h-6" />
       </button>
      <div className="mb-4">
          <div className="flex items-center justify-start mb-2">
              <h2 className="text-sm font-semibold text-primary-500 dark:text-primary-300">IA EXPERT TURBO</h2>
          </div>
        <div className="w-full bg-primary-100 dark:bg-primary-900 rounded-full h-2">
          <div className="bg-primary-500 h-2 rounded-full transition-all duration-500 ease-out" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-accent-dark-gray dark:text-white">Bem-vindo(a)!</h1>
        <p className="text-gray-500 dark:text-sky-gray mt-2 text-base">O preenchimento deste formulário é essencial para personalizarmos sua jornada e garantir seu sucesso.</p>
      </div>
      {apiError && <div className="bg-red-100 dark:bg-red-900/50 border-l-4 border-red-500 dark:border-red-700 text-red-700 dark:text-red-300 p-4 rounded-lg mb-6 flex items-center" role="alert"><AlertTriangleIcon className="w-6 h-6 mr-3"/><p className="font-semibold">{apiError}</p></div>}
      <div key={currentStep} className="fade-in min-h-[190px]">{questions[currentStep].render()}</div>
      <div className="mt-6 flex justify-between items-center">
        <button type="button" onClick={handleBack} disabled={currentStep === 0} className="px-6 py-2 bg-sky-gray/20 text-accent-dark-gray dark:bg-sky-gray/30 dark:text-white font-semibold rounded-lg shadow-sm hover:bg-sky-gray/30 focus:outline-none focus:ring-2 focus:ring-sky-gray focus:ring-opacity-75 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">Voltar</button>
        <button type="button" onClick={handleNext} disabled={isLoading} className="w-48 flex items-center justify-center bg-primary-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-300 disabled:bg-primary-300 disabled:cursor-not-allowed">
          {isLoading ? <Loader /> : (currentStep === totalSteps - 1 ? 'Finalizar Inscrição' : 'Avançar')}
        </button>
      </div>
    </div>
  );
};

const FinalStepScreen = ({ onClose }: { onClose: () => void; }) => {
    return (
      <div className="w-full max-w-xl bg-white dark:bg-accent-dark-gray rounded-2xl shadow-2xl p-6 md:p-8 text-center space-y-6 fade-in relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors z-10" aria-label="Fechar">
            <XMarkIcon className="w-6 h-6" />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-accent-dark-gray dark:text-white">
            Obrigado pelo envio!
        </h1>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 my-4">
            <div className="bg-red-600 h-5 rounded-full flex items-center justify-end" style={{ width: '90%' }}>
                <span className="text-white text-xs font-bold pr-3">90%</span>
            </div>
        </div>
        
        <p className="text-lg text-gray-700 dark:text-sky-gray">
            Para finalizar a sua inscrição, entre agora em nosso grupo no Whatsapp e receba materiais exclusivos.
        </p>
        
        <a 
          href="https://chat.whatsapp.com/J1y5a7xZ8sL9cT0bK1fA0B"
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-bold text-base rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105"
        >
          <WhatsappIcon className="w-6 h-6" />
          ENTRAR NO GRUPO AGORA
        </a>
      </div>
    );
};


const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleFormSubmit = () => {
        setIsFormSubmitted(true);
    };

    const openModal = () => {
        setIsModalOpen(true);
        setIsFormSubmitted(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    const HomePage = () => (
        <div className="text-center p-8 fade-in max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                Sua inscrição está 80% concluída
            </h1>
            <div className="w-full max-w-md bg-gray-200 dark:bg-gray-700 rounded-full h-5 my-6 mx-auto">
              <div className="bg-red-600 h-5 rounded-full flex items-center justify-end" style={{ width: '80%' }}>
                <span className="text-white text-xs font-bold pr-3">80%</span>
              </div>
            </div>
            <p className="mt-4 text-lg text-gray-600 dark:text-sky-gray max-w-2xl mx-auto">
                Sua inscrição ainda não está concluída. Preencha o formulário no link abaixo para deixar sua jornada mais personalizada.
            </p>
            <button
                onClick={openModal}
                className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-white font-bold text-lg rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
                <PencilSquareIcon className="w-6 h-6" />
                Completar Inscrição Agora
            </button>
        </div>
    );

    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center p-4">
            {!isModalOpen && <HomePage />}
            
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 modal-backdrop" onClick={closeModal}>
                    <div className="modal-content max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        {isFormSubmitted ? (
                            <FinalStepScreen onClose={closeModal} />
                        ) : (
                            <OnboardingForm onGenerationComplete={handleFormSubmit} onClose={closeModal} />
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default App;
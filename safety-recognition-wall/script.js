/**
 * ESSA Safety Culture Wall of Recognition
 *
 * This JavaScript file contains all the interactive functionality for the Safety Recognition Wall application.
 * It handles:
 * - Multi-language translation (English/Portuguese)
 * - Year and quarter filtering
 * - Tab navigation (Recognition Page, Safety Leaders, Grassroots Team)
 * - Alphabetical navigation
 * - Top 3 champions selection based on nomination count
 * - Data consolidation for multi-year recognitions
 * - Dynamic content generation and updates
 *
 * @author Vanessa Adjei
 * @version 1.0
 */

// ============================================================================
// TRANSLATION SYSTEM
// ============================================================================

/**
 * Translation data object containing all translatable strings
 *
 * Structure:
 * - en: English translations
 * - pt: Portuguese translations
 *
 * Translation keys follow patterns:
 * - UI elements: "tab-recognition", "filter-year", etc.
 * - Quarter entries: "q{quarter}-{year}-{person}-{number}"
 *   Example: "q1-2025-casimiro-1" = Q1 2025, Casimiro, entry 1
 *
 * To add a new translation:
 * 1. Add the key to both en and pt objects
 * 2. Add data-translate="{key}" to the HTML element
 */
const translations = {
  en: {
    title: "ESSA Safety Culture Excellence Wall of Recognition",
    subtitle:
      "Celebrating excellence in safety leadership and contributions across our organization",

    "tab-recognition": "Recognition Page",
    "tab-champions": "Safety Leaders",
    "tab-grassroots": "Grassroots Team",

    "filter-year": "Filter by Year:",
    "filter-quarter": "Filter by Quarter:",
    "all-quarters": "All Quarters",
    "all-years": "All Years",

    "safety-awards": "Celebrated Colleagues and their safety actions",
    "safety-champions": "Safety Champions",
    "champions-subtitle":
      "All recognized safety contributors across the organization",
    "grassroots-team": "Grassroots Implementation Team",
    "grassroots-subtitle":
      "Recognizing the dedicated professionals who developed and implemented this Safety Culture Recognition Program",

    "recognized-action": "Recognized Safety Action:",
    "action-1":
      "Demonstrates exceptional commitment to team safety through proactive hazard identification and comprehensive safety protocols implementation.",
    "action-2":
      "Exemplifies leadership in safety through consistent emphasis on employee safety and motivational guidance for safety practices.",
    "action-3":
      "Maintains active engagement in safety culture through systematic hazard identification and comprehensive INI reporting processes.",
    "action-4":
      "Consistently demonstrates safe work practices while actively sharing safety knowledge and procedures with team members.",
    "action-5":
      "Serves as a primary safety reference, consistently emphasizing adherence to Solar standard work practices and safety guidelines.",
    "action-6":
      "Maintains continuous safety awareness and effective communication protocols during field operations.",
    "action-7":
      "Demonstrates commitment to safety through regular submission of Incident and Near-miss Investigation (INI) reports.",
    "action-8":
      "Consistently demonstrates exceptional hazard identification capabilities, proactively identifying potential safety risks before they escalate.",
    "action-9":
      "Prioritizes safety in all operations, consistently utilizing appropriate tools and procedures to maintain safe work environments.",
    "action-10":
      "Exemplifies proactive safety leadership through daily safety briefings and continuous monitoring of team safety practices during operations.",
    "action-11":
      "Demonstrated exceptional safety leadership during the Malongo Power Station upgrade project, managing multiple contractor teams while ensuring compliance with safety procedures across all work areas.",
    "action-12":
      "Demonstrates exceptional site safety awareness through systematic identification and reporting of unsafe conditions, including critical equipment maintenance issues.",
    "action-13":
      "Consistently exercises Stop Work Authority when safety standards are compromised, demonstrating unwavering commitment to safety protocols.",
    "action-14":
      "Coordinates comprehensive safety meetings with relevant topics and ensures effective communication systems for security personnel.",

    "q1-desc":
      "Active participation in safety culture development, consistently identifying and reporting potential hazards through INI submissions.",
    "q2-desc-1":
      "Facilitated in-depth safety discussions during team meetings, conducted research on safe work environments, and actively shared safety knowledge with colleagues.",
    "q2-desc-2":
      "Contributes valuable insights during safety meetings, providing practical guidance for field operations and safety issue resolution.",
    "q2-desc-3":
      "Exhibits thorough pre-work site assessment capabilities, ensuring all safety conditions are verified before commencing operations.",
    "q2-desc-4":
      "Implemented and maintained effective communication infrastructure, including Walkie-Talkie systems, to enhance security team coordination and response capabilities.",

    "role-lead": "Team Lead",
    "role-member": "Team Member",

    "footer-gratitude":
      "The District extends their gratitude to our team members for their unwavering commitment to workplace safety",
    "footer-program": "ESSA Safety Culture Excellence Recognition program",

    "q1-antonio-espirito-buco":
      "Buco is an active member in safety culture by pointing out hazards and submitting INI's about them.",
    "q2-antonio-espirito-sungo":
      "Buco does not remain silent when observing unsafe situations and he conducts toolbox meetings that allow the participation of members involved.",
    "q2-antonio-casimiro":
      "This colleague has promoted more in-depth discussions about safety during meetings, does a lot of research on how to work in a safe environment and shares aspects related to security with other colleagues in the team.",
    "q3-antonio-casimiro": "Casimiro shares his safety knowledge with others",
    "q1-antonio-espirito":
      "Always consider safety as a priority using right tools and right procedures",
    "q1-arlito":
      "Always works safety following all procedures, and pass on your skills and safety knowledge to others.",
    "q3-arlito":
      "He puts and applies all safety rules first in all work activities.",
    "q1-derek":
      "Good reference for safety issues and regularly emphasizes the importance of following Solar standard work practices and safety guidelines.",
    "q2-derek":
      "Derek contributes during all safety meetings making good observations about topics under discussion with guidance on how to deal with issues in the field.",
    "q1-eduardo":
      "Eduardo Costa is one person who puts safety first and cares about the safety of others as his own. He has a human sense for others to be safe and goes to great lengths to ensure his safety and others safety. This motivates me and I take it as an example",
    "q2-eduardo":
      "Eduardo supports the team in the field with positive feedback",
    "q3-eduardo":
      "He encourages, he shows the importance of safety and facilitates the steps taken on the subject. He even brings safety specialists from outside the country to help work on our security projects. He pushes all the team to be interested and to talk about safety in the meetings",
    "q2-estevao":
      "Beco displays awareness and continuous communication when on the field",
    "q3-gabriel": "Gabriel submits INI's regularly",
    "q1-imaculada":
      "Ima consistently identifies hazards that could potentially cause harm",
    "q1-joao":
      "Barros always considers safety as a priority using right tools and right procedures",
    "q3-joao":
      "He has followed all safety procedures and has encouraged his colleagues to do so as well.",
    "q2-jose-matata":
      "Jose is always warning the team members every day on site before the start of work, and he is so vigilant, watching the others attitude during the work, he is one of the best for me on promoting safety culture.",
    "q2-jose-matata-2":
      "He displays awareness and continuous communication when on the field",
    "q2-jose-salomao":
      "During the last upgrade project at the Malongo Power Station, the FIR Leader was dealing with several teams (Welders, Electricians, Mechanics, Insulators, Scaffolding, Riggers and the Maintenance Management team), in my absence from the site he was the one who carried out some interventions on the safety procedures of other teams on site and also intervened in some safety procedures for Solar coworkers. I congratulated him on this attitude",
    "q1-lusandu":
      "Lusandu identified and reported Site Unsafe Conditions such as corroded Fire extinguishant Cylinders on a site he visited",
    "q2-lusandu":
      "He has the ability to notice the place where he is going to work and make sure everything is in order before he goes into action",
    "q1-mark":
      "Mark uses Stop Work Authority whenever safety is violated or compromised",
    "q3-mark":
      "He shares his opinion during safety meetings and encourages others to participate and share their opinions as well",
    "q2-stela-1": "Organizing Safety meeting with relevant topics",
    "q2-stela-2":
      "She has insured that the security staff have a good communication link (Walk Talkie) between themselves",
    "q3-jose-matata":
      "He puts and applies all safety rules first in all work activities. He has followed all safety procedures and has encouraged his colleagues to do so as well.",
    "q3-julio": "Julio contributes through Incident reporting (INI)",

    "q2-2025-buco-1":
      "Active on site safety matters, submitting high-quality INIs to help management address customer concerns",
    "q2-2025-buco-2":
      "Contributes positively with INI's, warning others of unsafe conditions, and coaching newcomers",
    "q3-2025-buco-1":
      "Always participates in district's safety meetings, providing valid opinions and submitting good INI's",
    "q3-2025-buco-2":
      "Exercised Stop Work Authority (SWA) by refusing a transfer after working over 16 hours, demonstrating commendable SWA in action",
    "q1-2025-casimiro-1": "Conducts safety training",
    "q1-2025-casimiro-2": "Dedicated to leading safety meetings",
    "q1-2025-casimiro-3":
      "Coaches FSR's in preparing and presenting Safety Meetings and INI's",
    "q2-2025-casimiro-1":
      "Helps review Field Base and supports the team to achieve better information for FSRS work orders",
    "q2-2025-casimiro-2":
      "Proactive in safety aspects, especially field mobile data accuracy, and volunteers to present safety meetings",
    "q2-2025-casimiro-3": "Helps the team in several safety-connected aspects",
    "q2-2025-casimiro-4":
      "Conducts topics on working safe, encouraging INI submissions and reporting all safe/unsafe concerns",
    "q2-2025-casimiro-5":
      "Dedicated time and energy to ongoing district safety meetings, supporting topic selection and candidate presentation",
    "q3-2025-casimiro-1": "Actively contributes to district safety meetings",
    "q3-2025-casimiro-2":
      "Supports safety activities like Safety Meetings and grassroots initiatives",
    "q3-2025-casimiro-3": "Takes safety as his first priority",
    "q3-2025-casimiro-4":
      "Spends time preparing content for monthly safety meetings",
    "q1-2025-arlito":
      "Always reminds the team to apply safety procedures before any field activities (Mechanical, Electrical, Pressure, etc.)",
    "q2-2025-arlito":
      "Regularly participates in company safety meetings and usually anticipates accidents",
    "q3-2025-arlito":
      "Always follows correct procedures, prioritizing safety before commencing an activity",
    "q1-2025-estevao-1": "Always follows safety precautions",
    "q1-2025-estevao-2":
      "Demonstrates a desire to progress in safety knowledge",
    "q1-2025-estevao-3":
      "Performs jobs with a strong emphasis on safety, meeting all requirements including site assessments, documentation, and tool use",
    "q1-2025-estevao-4":
      "Works upfront with paperwork and safety procedures, learning and applying them at all times, both at and off site",
    "q2-2025-estevao":
      "Performs jobs with a strong emphasis on safety, meeting all requirements including site assessments, documentation, and tool use",
    "q3-2025-estevao":
      "Performs jobs with a strong emphasis on safety and works hard on each task",
    "q1-2025-eduardo":
      "Advises staying calm and thinking when in an unsafe position to return to safety",
    "q2-2025-eduardo":
      "Encourages everyone to be safe during work and free time, fostering a safety culture",
    "q3-2025-eduardo-1": "Always puts safety first",
    "q3-2025-eduardo-2":
      "Always asks employees about their condition to perform tasks, highlighting fatigue effects",
    "q1-2025-julio-1":
      "Constantly contributes to district monthly safety meetings by sharing thoughts and concerns",
    "q1-2025-julio-2": "Promotes safety culture in day-to-day activities",
    "q3-2025-julio":
      "Demonstrated serious compliance with safety standards by not boarding a flight for a client mission because the TRAAC was not fully approved",
    "q1-2025-stela": "Used to conduct Monthly safety meetings very well",
    "q2-2025-stela-1":
      "Cautioned about the safety aspect of a heavy bag taken to site",
    "q2-2025-stela-2": "Always promotes safety awareness in her workstation",
    "q3-2025-stela-1":
      "Demonstrates leadership in safety, leading ESSA district EHSS and covering district safety meetings",
    "q3-2025-stela-2": "Always gives kind advice regarding safety culture",
    "q3-2025-stela-3": "Always makes good remarks about safety",
    "q3-2025-stela-4": "Contributes during safety and district meetings",
  },

  pt: {
    title: "Mural de Reconhecimento da Excelência em Cultura de Segurança ESSA",
    subtitle:
      "Celebrando a excelência em liderança de segurança e contribuições em toda nossa organização",

    "tab-recognition": "Página de Reconhecimento",
    "tab-champions": "Líderes de Segurança",
    "tab-grassroots": "Equipe de Base",

    "filter-year": "Filtrar por Ano:",
    "filter-quarter": "Filtrar por Trimestre:",
    "all-quarters": "Todos os Trimestres",
    "all-years": "Todos os Anos",

    "safety-awards": "Colegas Celebrados e suas ações de segurança",
    "safety-champions": "Campeões de Segurança",
    "champions-subtitle":
      "Todos os colaboradores de segurança reconhecidos em toda a organização",
    "grassroots-team": "Equipe de Implementação de Base",
    "grassroots-subtitle":
      "Reconhecendo os profissionais dedicados que desenvolveram e implementaram este Programa de Reconhecimento da Cultura de Segurança",

    "recognized-action": "Ação de Segurança Reconhecida:",
    "action-1":
      "Demonstra comprometimento excepcional com a segurança da equipe através da identificação proativa de perigos e implementação abrangente de protocolos de segurança.",
    "action-2":
      "Exemplifica liderança em segurança através da ênfase consistente na segurança dos funcionários e orientação motivacional para práticas de segurança.",
    "action-3":
      "Mantém engajamento ativo na cultura de segurança através da identificação sistemática de perigos e processos abrangentes de relatório INI.",
    "action-4":
      "Demonstra consistentemente práticas de trabalho seguras enquanto compartilha ativamente conhecimento e procedimentos de segurança com membros da equipe.",
    "action-5":
      "Serve como referência primária de segurança, enfatizando consistentemente a aderência às práticas de trabalho padrão Solar e diretrizes de segurança.",
    "action-6":
      "Mantém consciência contínua de segurança e protocolos eficazes de comunicação durante operações de campo.",
    "action-7":
      "Demonstra comprometimento com a segurança através do envio regular de relatórios de Investigação de Incidentes e Quase-Acidentes (INI).",
    "action-8":
      "Demonstra consistentemente capacidades excepcionais de identificação de perigos, identificando proativamente riscos potenciais de segurança antes que se agravem.",
    "action-9":
      "Prioriza a segurança em todas as operações, utilizando consistentemente ferramentas e procedimentos apropriados para manter ambientes de trabalho seguros.",
    "action-10":
      "Exemplifica liderança proativa de segurança através de briefings diários de segurança e monitoramento contínuo das práticas de segurança da equipe durante operações.",
    "action-11":
      "Demonstrou liderança excepcional de segurança durante o projeto de modernização da Estação de Energia Malongo, gerenciando múltiplas equipes de contratados enquanto garantia conformidade com procedimentos de segurança em todas as áreas de trabalho.",
    "action-12":
      "Demonstra consciência excepcional de segurança do local através da identificação sistemática e relatório de condições inseguras, incluindo problemas críticos de manutenção de equipamentos.",
    "action-13":
      "Exerce consistentemente Autoridade de Parada de Trabalho quando os padrões de segurança são comprometidos, demonstrando comprometimento inabalável com protocolos de segurança.",
    "action-14":
      "Coordena reuniões abrangentes de segurança com tópicos relevantes e garante sistemas eficazes de comunicação para pessoal de segurança.",

    "q1-desc":
      "Participação ativa no desenvolvimento da cultura de segurança, identificando e relatando consistentemente perigos potenciais através de submissões INI.",
    "q2-desc-1":
      "Facilitou discussões aprofundadas de segurança durante reuniões de equipe, conduziu pesquisas sobre ambientes de trabalho seguros e compartilhou ativamente conhecimento de segurança com colegas.",
    "q2-desc-2":
      "Contribui com insights valiosos durante reuniões de segurança, fornecendo orientação prática para operações de campo e resolução de problemas de segurança.",
    "q2-desc-3":
      "Exibe capacidades abrangentes de avaliação pré-trabalho do local, garantindo que todas as condições de segurança sejam verificadas antes de iniciar operações.",
    "q2-desc-4":
      "Implementou e manteve infraestrutura eficaz de comunicação, incluindo sistemas de Walkie-Talkie, para melhorar a coordenação e capacidades de resposta da equipe de segurança.",

    "role-lead": "Líder da Equipe",
    "role-member": "Membro da Equipe",

    "footer-gratitude":
      "O Distrito estende sua gratidão aos nossos membros da equipe por seu comprometimento inabalável com a segurança no local de trabalho",
    "footer-program":
      "Programa de Reconhecimento de Excelência da Cultura de Segurança ESSA",

    "q1-antonio-espirito-buco":
      "Buco é um membro ativo na cultura de segurança apontando perigos e submetendo INI's sobre eles.",
    "q2-antonio-espirito-sungo":
      "Buco não permanece em silêncio quando observa situações inseguras e ele conduz reuniões de caixa de ferramentas que permitem a participação dos membros envolvidos.",
    "q2-antonio-casimiro":
      "Este colega promoveu discussões mais aprofundadas sobre segurança durante reuniões, faz muita pesquisa sobre como trabalhar em um ambiente seguro e compartilha aspectos relacionados à segurança com outros colegas da equipe.",
    "q3-antonio-casimiro":
      "Casimiro compartilha seu conhecimento de segurança com outros",
    "q1-antonio-espirito":
      "Sempre considera a segurança como prioridade usando as ferramentas e procedimentos corretos",
    "q1-arlito":
      "Sempre trabalha com segurança seguindo todos os procedimentos, e passa suas habilidades e conhecimento de segurança para outros.",
    "q3-arlito":
      "Ele coloca e aplica todas as regras de segurança primeiro em todas as atividades de trabalho.",
    "q1-derek":
      "Boa referência para questões de segurança e enfatiza regularmente a importância de seguir as práticas de trabalho padrão Solar e diretrizes de segurança.",
    "q2-derek":
      "Derek contribui durante todas as reuniões de segurança fazendo boas observações sobre tópicos em discussão com orientação sobre como lidar com questões no campo.",
    "q1-eduardo":
      "Eduardo Costa é uma pessoa que coloca a segurança em primeiro lugar e se preocupa com a segurança dos outros como se fosse sua própria. Ele tem um senso humano para que outros estejam seguros e vai a grandes comprimentos para garantir sua segurança e a de outros. Isso me motiva e eu tomo como exemplo",
    "q2-eduardo": "Eduardo apoia a equipe no campo com feedback positivo",
    "q3-eduardo":
      "Ele encoraja, mostra a importância da segurança e facilita os passos tomados sobre o assunto. Ele até traz especialistas em segurança de fora do país para ajudar no trabalho em nossos projetos de segurança. Ele empurra toda a equipe a se interessar e falar sobre segurança nas reuniões",
    "q2-estevao":
      "Beco demonstra consciência e comunicação contínua quando está no campo",
    "q3-gabriel": "Gabriel submete INI's regularmente",
    "q1-imaculada":
      "Ima consistentemente identifica perigos que poderiam potencialmente causar danos",
    "q1-joao":
      "Barros sempre considera a segurança como prioridade usando as ferramentas e procedimentos corretos",
    "q3-joao":
      "Ele seguiu todos os procedimentos de segurança e encorajou seus colegas a fazer o mesmo também.",
    "q2-jose-matata":
      "Jose está sempre avisando os membros da equipe todos os dias no local antes do início do trabalho, e ele é tão vigilante, observando a atitude dos outros durante o trabalho, ele é um dos melhores para mim na promoção da cultura de segurança.",
    "q2-jose-matata-2":
      "Ele demonstra consciência e comunicação contínua quando está no campo",
    "q2-jose-salomao":
      "Durante o último projeto de modernização na Estação de Energia Malongo, o Líder FIR estava lidando com várias equipes (Soldadores, Eletricistas, Mecânicos, Isoladores, Andaimes, Riggers e a equipe de Gerenciamento de Manutenção), na minha ausência do local ele foi quem realizou algumas intervenções nos procedimentos de segurança de outras equipes no local e também interveio em alguns procedimentos de segurança para colegas Solar. Eu o parabenizei por essa atitude",
    "q1-lusandu":
      "Lusandu identificou e relatou Condições Inseguras do Local como Cilindros de Extintor de Incêndio corroídos em um local que ele visitou",
    "q2-lusandu":
      "Ele tem a capacidade de notar o lugar onde vai trabalhar e se certificar de que tudo está em ordem antes de entrar em ação",
    "q1-mark":
      "Mark usa Autoridade de Parada de Trabalho sempre que a segurança é violada ou comprometida",
    "q3-mark":
      "Ele compartilha sua opinião durante reuniões de segurança e encoraja outros a participar e compartilhar suas opiniões também",
    "q2-stela-1": "Organizando reuniões de segurança com tópicos relevantes",
    "q2-stela-2":
      "Ela garantiu que a equipe de segurança tenha um bom elo de comunicação (Walk Talkie) entre eles",
    "q3-jose-matata":
      "Ele coloca e aplica todas as regras de segurança primeiro em todas as atividades de trabalho. Ele seguiu todos os procedimentos de segurança e encorajou seus colegas a fazer o mesmo também.",
    "q3-julio": "Julio contribui através de relatórios de incidentes (INI)",
    // Traduções de 2025
    "q2-2025-buco-1":
      "Ativo em questões de segurança no local, submetendo INIs de alta qualidade para ajudar a gestão a abordar as preocupações do cliente",
    "q2-2025-buco-2":
      "Contribui positivamente com INI's, alertando outros sobre condições inseguras e orientando recém-chegados",
    "q3-2025-buco-1":
      "Sempre participa nas reuniões de segurança do distrito, fornecendo opiniões válidas e submetendo bons INI's",
    "q3-2025-buco-2":
      "Exerceu Autoridade de Parada de Trabalho (SWA) ao recusar uma transferência após trabalhar mais de 16 horas, demonstrando uma SWA louvável em ação",
    "q1-2025-casimiro-1": "Realiza treinamentos de segurança",
    "q1-2025-casimiro-2": "Dedicado a liderar reuniões de segurança",
    "q1-2025-casimiro-3":
      "Orienta FSR's na preparação e apresentação de Reuniões de Segurança e INI's",
    "q2-2025-casimiro-1":
      "Ajuda a revisar a Base de Campo e apoia a equipe para obter melhores informações para ordens de trabalho FSRS",
    "q2-2025-casimiro-2":
      "Proativo em aspectos de segurança, especialmente precisão de dados móveis de campo, e se oferece para apresentar reuniões de segurança",
    "q2-2025-casimiro-3":
      "Ajuda a equipe em vários aspectos relacionados à segurança",
    "q2-2025-casimiro-4":
      "Conduz tópicos sobre trabalho seguro, incentivando submissões de INI e relatando todas as preocupações seguras/inseguras",
    "q2-2025-casimiro-5":
      "Dedicou tempo e energia às reuniões contínuas de segurança do distrito, apoiando a seleção de tópicos e apresentação de candidatos",
    "q3-2025-casimiro-1":
      "Contribui ativamente para as reuniões de segurança do distrito",
    "q3-2025-casimiro-2":
      "Apoia atividades de segurança como Reuniões de Segurança e iniciativas de base",
    "q3-2025-casimiro-3": "Toma a segurança como sua primeira prioridade",
    "q3-2025-casimiro-4":
      "Gasta tempo preparando conteúdo para reuniões mensais de segurança",
    "q1-2025-arlito":
      "Sempre lembra a equipe de aplicar procedimentos de segurança antes de qualquer atividade de campo (Mecânica, Elétrica, Pressão, etc.)",
    "q2-2025-arlito":
      "Participa regularmente das reuniões de segurança da empresa e geralmente antecipa acidentes",
    "q3-2025-arlito":
      "Sempre segue os procedimentos corretos, priorizando a segurança antes de iniciar uma atividade",
    "q1-2025-estevao-1": "Sempre segue precauções de segurança",
    "q1-2025-estevao-2":
      "Demonstra desejo de progredir em conhecimento de segurança",
    "q1-2025-estevao-3":
      "Realiza trabalhos com forte ênfase em segurança, atendendo a todos os requisitos, incluindo avaliações do local, documentação e uso de ferramentas",
    "q1-2025-estevao-4":
      "Trabalha antecipadamente com papelada e procedimentos de segurança, aprendendo e aplicando-os em todos os momentos, tanto no local quanto fora do local",
    "q2-2025-estevao":
      "Realiza trabalhos com forte ênfase em segurança, atendendo a todos os requisitos, incluindo avaliações do local, documentação e uso de ferramentas",
    "q3-2025-estevao":
      "Realiza trabalhos com forte ênfase em segurança e trabalha duro em cada tarefa",
    "q1-2025-eduardo":
      "Aconselha a manter a calma e pensar quando estiver em uma posição insegura para retornar à segurança",
    "q2-2025-eduardo":
      "Incentiva todos a serem seguros durante o trabalho e no tempo livre, promovendo uma cultura de segurança",
    "q3-2025-eduardo-1": "Sempre coloca a segurança em primeiro lugar",
    "q3-2025-eduardo-2":
      "Sempre pergunta aos funcionários sobre sua condição para realizar tarefas, destacando os efeitos da fadiga",
    "q1-2025-julio-1":
      "Contribui constantemente para as reuniões mensais de segurança do distrito compartilhando pensamentos e preocupações",
    "q1-2025-julio-2":
      "Promove cultura de segurança nas atividades do dia a dia",
    "q3-2025-julio":
      "Demonstrou séria conformidade com os padrões de segurança ao não embarcar em um voo para uma missão de cliente porque o TRAAC não estava totalmente aprovado",
    "q1-2025-stela":
      "Costumava realizar reuniões mensais de segurança muito bem",
    "q2-2025-stela-1":
      "Alertou sobre o aspecto de segurança de uma bolsa pesada levada ao local",
    "q2-2025-stela-2":
      "Sempre promove consciência de segurança em sua estação de trabalho",
    "q3-2025-stela-1":
      "Demonstra liderança em segurança, liderando EHSS do distrito ESSA e cobrindo reuniões de segurança do distrito",
    "q3-2025-stela-2": "Sempre dá conselhos gentis sobre cultura de segurança",
    "q3-2025-stela-3": "Sempre faz boas observações sobre segurança",
    "q3-2025-stela-4": "Contribui durante reuniões de segurança e distritais",
  },
};

// ============================================================================
// GLOBAL VARIABLES
// ============================================================================

/**
 * Current language setting (default: "en")
 * Can be "en" (English) or "pt" (Portuguese)
 */
let currentLanguage = "en";

/**
 * Flag to control whether champion details are shown
 * Currently set to false - champions show only names and consolidated descriptions
 */
const SHOW_CHAMPION_DETAILS = false;

// ============================================================================
// MAIN INITIALIZATION
// ============================================================================

/**
 * Main initialization function - runs when DOM is fully loaded
 * Sets up all event listeners and initializes the application
 */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  initApplication();

  /**
   * Initialize the application
   * Sets up all event listeners and initializes default state
   *
   * This is the main entry point after DOM loads. We initialize all interactive
   * components in a specific order to ensure dependencies are ready. The order matters
   * because some functions depend on elements being in the DOM first.
   */
  function initApplication() {
    const yearBtns = document.querySelectorAll(".year-btn");
    const tabBtns = document.querySelectorAll(".tab-btn");
    const quarterBtns = document.querySelectorAll(".quarter-btn");
    const letterLinks = document.querySelectorAll(".letter-link");
    const langToggle = document.getElementById("lang-toggle");

    initializeYearSelection(yearBtns);
    initializeTabSelection(tabBtns);
    initializeQuarterFiltering(quarterBtns);
    initializeLetterNavigation(letterLinks);
    initializeSmoothScrolling();
    initializeIntersectionObserver(letterLinks);
    initializeLanguageToggle(langToggle);
    normalizeLetterSectionsOrder();

    initializeXlsxLoader();

    setActiveTab("recognition");

    applyCombinedFiltering();

    normalizeChampionOrder();
    initializeChampionClickHandlers();

    updateLanguage();
  }

  /**
   * Initialize year filter button event listeners
   * Each button click updates the active state and triggers content filtering
   */
  function initializeYearSelection(yearBtns) {
    yearBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const selectedYear = this.getAttribute("data-year");
        updateYearSelection(yearBtns, this);
        updateYearContent(selectedYear);
      });
    });
  }

  function initializeTabSelection(tabBtns) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const selectedTab = this.getAttribute("data-tab");
        updateTabSelection(tabBtns, this);
        switchTab(selectedTab);
      });
    });
  }

  /**
   * Initialize quarter filter button event listeners
   * When a quarter is selected, we call applyCombinedFiltering() which handles
   * both year and quarter filters together, ensuring they work in harmony
   */
  function initializeQuarterFiltering(quarterBtns) {
    quarterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const selectedQuarter = this.getAttribute("data-quarter");
        updateQuarterSelection(quarterBtns, this);
        applyCombinedFiltering();
      });
    });
  }

  function initializeLetterNavigation(letterLinks) {
    letterLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        navigateToLetter(targetId, this);
      });
    });
  }

  function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  function initializeIntersectionObserver(letterLinks) {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "-100px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const letterId = entry.target.id;
          updateActiveLetter(letterLinks, letterId);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".letter-section").forEach((section) => {
      observer.observe(section);
    });
  }

  function updateYearSelection(yearBtns, activeBtn) {
    yearBtns.forEach((btn) => btn.classList.remove("active"));
    activeBtn.classList.add("active");
  }

  function updateTabSelection(tabBtns, activeBtn) {
    tabBtns.forEach((btn) => btn.classList.remove("active"));
    activeBtn.classList.add("active");
  }

  function updateQuarterSelection(quarterBtns, activeBtn) {
    quarterBtns.forEach((btn) => btn.classList.remove("active"));
    activeBtn.classList.add("active");
  }

  function updateYearContent(year) {
    console.log(`Year changed to: ${year}`);

    applyCombinedFiltering();
  }

  // ============================================================================
  // TOP CHAMPIONS SELECTION
  // ============================================================================

  /**
   * Get top 3 champions for a given year based on nomination count
   *
   * Note: The top 3 champions are currently hardcoded rather than calculated dynamically.
   * This was a design decision - the business wanted specific people highlighted as
   * "Safety Leaders" regardless of nomination count. If this needs to change in the
   * future, we'd calculate based on nomination count instead.
   *
   * Algorithm:
   * - For 2024: Returns hardcoded top 3 (Antonio Casimiro Andre, Arlito De Jesus Domingos Nhiala, Jose Matata)
   * - For 2025: Returns hardcoded top 3 (Antonio Casimiro Andre, Stela Pilartes da Silva, Estevao Barros Beco)
   * - For "all": Returns top 3 from 2024 AND top 3 from 2025 (6 total, may have duplicates)
   *
   * We return a Set of normalized names to ensure consistent matching regardless of
   * how names appear in the HTML (accents, spacing, etc.).
   *
   * @param {string} selectedYear - The selected year ("all", "2024", or "2025")
   * @returns {Set} Set of normalized champion names (top 3 for selected year)
   */
  function getTopChampionsByYear(selectedYear) {
    // Hardcoded top 3 for 2024 (as per user requirement)
    const top3For2024 = [
      "Antonio Casimiro Andre",
      "Arlito De Jesus Domingos Nhiala",
      "Jose Matata",
    ];

    // Hardcoded top 3 for 2025 (as per user requirement)
    const top3For2025 = [
      "Antonio Casimiro Andre",
      "Stela Pilartes da Silva",
      "Estevao Barros Beco",
    ];

    if (selectedYear === "2024") {
      // Return normalized names for the hardcoded top 3
      const topChampions = new Set();
      top3For2024.forEach((name) => {
        const normalized = normalizePersonName(name);
        if (normalized) topChampions.add(normalized);
      });
      console.log(
        `Top 3 champions for 2024 (hardcoded):`,
        Array.from(topChampions)
      );
      return topChampions;
    }

    if (selectedYear === "2025") {
      // Return normalized names for the hardcoded top 3
      const topChampions = new Set();
      top3For2025.forEach((name) => {
        const normalized = normalizePersonName(name);
        if (normalized) topChampions.add(normalized);
      });
      console.log(
        `Top 3 champions for 2025 (hardcoded):`,
        Array.from(topChampions)
      );
      return topChampions;
    }

    // For "all", use hardcoded values for both years
    const allCards = Array.from(document.querySelectorAll(".card")).filter(
      (card) => !card.classList.contains("merged-hidden")
    );

    // Count nominations per person per year (using normalized names)
    // Count by number of quarter entries, not number of cards
    const nominationsByPersonAndYear = new Map();

    allCards.forEach((card) => {
      const name = card.querySelector("h4")?.textContent.trim();
      const year = card.getAttribute("data-year");

      if (!name || !year) return;

      // Use normalized name for counting
      const normalizedName = normalizePersonName(name);
      if (!normalizedName) return;

      // Count number of quarter entries in this card
      const quarterEntries = card.querySelectorAll(".quarter").length;
      if (quarterEntries === 0) return; // Skip cards with no quarters

      const key = `${normalizedName}|${year}`;
      const currentCount = nominationsByPersonAndYear.get(key) || 0;
      nominationsByPersonAndYear.set(key, currentCount + quarterEntries);
    });

    // Get top 3 for the selected year
    const topChampions = new Set();

    if (selectedYear === "all") {
      // For "All Years", get top 3 from 2024 AND top 3 from 2025
      // First, get hardcoded top 3 from 2024
      top3For2024.forEach((name) => {
        const normalized = normalizePersonName(name);
        if (normalized) topChampions.add(normalized);
      });

      // Then get hardcoded top 3 from 2025
      top3For2025.forEach((name) => {
        const normalized = normalizePersonName(name);
        if (normalized) topChampions.add(normalized);
      });

      console.log(`Top 3 from 2024:`, Array.from(top3For2024));
      console.log(`Top 3 from 2025:`, Array.from(top3For2025));
    } else {
      // For other years, calculate based on nomination count
      const yearNominations = new Map();
      nominationsByPersonAndYear.forEach((count, key) => {
        const [normalizedName, year] = key.split("|");
        if (year === selectedYear) {
          const currentCount = yearNominations.get(normalizedName) || 0;
          yearNominations.set(normalizedName, currentCount + count);
        }
      });

      // Sort by nominations for this year and get top 3
      const sorted = Array.from(yearNominations.entries())
        .sort((a, b) => b[1] - a[1]) // Sort descending by count
        .slice(0, 3); // Get top 3

      console.log(`Nomination counts for ${selectedYear}:`, sorted);
      sorted.forEach(([normalizedName]) => topChampions.add(normalizedName));
    }

    console.log(
      `Top 3 champions for ${selectedYear}:`,
      Array.from(topChampions)
    );
    return topChampions;
  }

  // ============================================================================
  // FILTERING FUNCTIONS
  // ============================================================================

  /**
   * Main filtering function that applies both year and quarter filters
   *
   * This is the core filtering logic that coordinates multiple concerns:
   * 1. Consolidates cards for multi-year view when "All Years" is selected
   * 2. Filters recognition cards by year and quarter
   * 3. Filters champions to show only top 3 for selected year
   * 4. Updates year badges and descriptions
   *
   * Process:
   * - First consolidates cards if "All Years" is selected (merges same person across years)
   * - Then filters cards by year (strict matching - card must match selected year exactly)
   * - Then filters quarter entries within cards (can hide individual quarters)
   * - Finally filters champions to show only top 3 based on hardcoded lists
   *
   * Performance note: We use classList.add/remove rather than inline styles where possible
   * because it's more performant and easier to maintain. display: none is used for
   * complete removal from layout calculations.
   */
  function applyCombinedFiltering() {
    // Get currently active filter buttons
    const activeYearBtn = document.querySelector(".year-btn.active");
    const activeQuarterBtn = document.querySelector(".quarter-btn.active");

    // Get selected values from buttons (default to "all" if not found)
    const selectedYear = activeYearBtn
      ? activeYearBtn.getAttribute("data-year")
      : "all";
    const selectedQuarter = activeQuarterBtn
      ? activeQuarterBtn.getAttribute("data-quarter")
      : "all";

    console.log(
      `Applying combined filter: Year=${selectedYear}, Quarter=${selectedQuarter}`
    );

    consolidateCardsForAllYears(selectedYear === "all");

    const allCards = document.querySelectorAll(".card");
    const letterSections = document.querySelectorAll(".letter-section");
    const allChampionNames = document.querySelectorAll(".champion-name");

    allCards.forEach((card) => {
      // Skip merged-hidden cards (duplicates that should stay hidden)
      if (card.classList.contains("merged-hidden")) {
        card.classList.add("hidden");
        return;
      }

      const cardYear = card.getAttribute("data-year");
      const quarterEntries = card.querySelectorAll(".quarter");

      // Strict year matching - card must match the selected year exactly
      const yearMatches = selectedYear === "all" || cardYear === selectedYear;

      if (yearMatches) {
        card.classList.remove("hidden");

        if (selectedQuarter === "all") {
          quarterEntries.forEach((entry) => {
            entry.classList.remove("hidden");
          });
        } else {
          let hasVisibleEntries = false;
          quarterEntries.forEach((entry) => {
            const quarterLabel =
              entry.querySelector(".quarter-label").textContent;
            if (quarterLabel === selectedQuarter) {
              entry.classList.remove("hidden");
              hasVisibleEntries = true;
            } else {
              entry.classList.add("hidden");
            }
          });

          if (!hasVisibleEntries) {
            card.classList.add("hidden");
          }
        }
      } else {
        card.classList.add("hidden");
      }
    });

    // Calculate top 3 people per year based on nomination count
    const topChampions = getTopChampionsByYear(selectedYear);

    // Only filter champions if we're on the champions tab or about to switch to it
    const activeTab = document.querySelector(".tab-pane.active")?.id;
    const isChampionsTab =
      activeTab === "champions-tab" ||
      document.getElementById("champions-tab")?.classList.contains("active");

    if (!isChampionsTab && allChampionNames.length === 0) {
      // Champions might not be in DOM yet, skip filtering
      return;
    }

    console.log(`Found ${allChampionNames.length} champion names to filter`);

    // First, hide all champions by default
    allChampionNames.forEach((championName) => {
      championName.classList.add("hidden");
      championName.style.display = "none"; // Force hide with inline style
    });

    let shownCount = 0;
    // Then show only the top 3
    allChampionNames.forEach((championName) => {
      const championNameText = championName
        .querySelector(".champion-text")
        ?.textContent.trim();

      if (!championNameText) return;

      // Normalize the champion name for comparison
      const normalizedChampionName = normalizePersonName(championNameText);

      // Check if this person is in the top 3 for the selected year
      const isTopChampion =
        normalizedChampionName && topChampions.has(normalizedChampionName);

      console.log(
        `Champion: ${championNameText}, Normalized: ${normalizedChampionName}, Is Top 3: ${isTopChampion}`
      );

      if (!isTopChampion) {
        // Already hidden with display:none, skip
        return;
      }

      // Find ALL cards for this person (not just one)
      // Use normalized names for matching to handle accent differences
      const correspondingCards = Array.from(allCards).filter((card) => {
        const cardName = card.querySelector("h4")?.textContent.trim();
        if (!cardName) return false;
        const normalizedCardName = normalizePersonName(cardName);
        return (
          normalizedCardName === normalizedChampionName &&
          !card.classList.contains("merged-hidden")
        );
      });

      // Check if this champion is in the top 3 list for the selected year
      const top3Years = getChampionTop3Years(normalizedChampionName);
      const isInTop3ForSelectedYear =
        selectedYear === "all" || top3Years.includes(selectedYear);

      // Check if any card matches the selected year
      let hasMatchingYear = false;
      if (selectedYear === "all") {
        hasMatchingYear = true;
      } else {
        // Check if any card has the selected year
        hasMatchingYear = correspondingCards.some(
          (card) => card.getAttribute("data-year") === selectedYear
        );
      }

      // Show champion if:
      // 1. They have cards matching the selected year, OR
      // 2. They are in the top 3 list for the selected year (for hardcoded champions)
      if (hasMatchingYear || isInTop3ForSelectedYear) {
        if (selectedQuarter === "all") {
          championName.classList.remove("hidden");
          championName.style.display = "";
          shownCount++;

          // Generate and show consolidated description for top 3 design
          generateChampionDescription(
            championName,
            correspondingCards,
            selectedYear
          );

          // Add year label when "All Years" is selected
          if (selectedYear === "all") {
            updateChampionYearLabel(
              championName,
              correspondingCards,
              selectedYear
            );
          } else {
            // For specific year, show year label based on top 3 list membership
            updateChampionYearLabel(
              championName,
              correspondingCards,
              selectedYear
            );
          }

          const quarterDetails =
            championName.querySelectorAll(".champion-quarter");
          quarterDetails.forEach((detail) => {
            detail.style.display = "none"; // Hide quarter details for top 3 design
          });
        } else {
          const quarterDetails =
            championName.querySelectorAll(".champion-quarter");
          let hasMatchingQuarter = false;

          quarterDetails.forEach((detail) => {
            const quarterLabel =
              detail.querySelector(".quarter-label")?.textContent;
            if (quarterLabel === selectedQuarter) {
              detail.classList.remove("hidden");
              hasMatchingQuarter = true;
            } else {
              detail.classList.add("hidden");
            }
          });

          if (hasMatchingQuarter) {
            championName.classList.remove("hidden");
            championName.style.display = ""; // Show by removing inline style
            shownCount++;
          } else {
            championName.classList.add("hidden");
            championName.style.display = "none"; // Force hide
          }
        }
      } else {
        // Not matching year and not in top 3 for selected year - hide this champion
        championName.classList.add("hidden");
        championName.style.display = "none"; // Force hide
      }
    });

    console.log(`Shown ${shownCount} champions for ${selectedYear}`);

    letterSections.forEach((section) => {
      section.style.display = "block";
    });

    updateQuarterFilterDisplay(selectedQuarter);

    updateYearBadges(selectedYear);

    console.log(
      `Combined filtering applied: Year=${selectedYear}, Quarter=${selectedQuarter}`
    );
  }

  // ============================================================================
  // CHAMPION DESCRIPTION GENERATION
  // ============================================================================

  /**
   * Generate consolidated description for top 3 champions
   *
   * Collects all quarter entries from matching year cards and combines them
   * into a single description. Uses translation keys if available.
   *
   * @param {HTMLElement} championElement - The champion card element
   * @param {Array} cards - Array of recognition cards for this champion
   * @param {string} selectedYear - The selected year filter
   */
  function generateChampionDescription(championElement, cards, selectedYear) {
    // Remove existing description if any
    let descriptionEl = championElement.querySelector(".champion-description");
    if (!descriptionEl) {
      descriptionEl = document.createElement("div");
      descriptionEl.className = "champion-description";
      championElement.appendChild(descriptionEl);
    }

    // Collect all quarter entries from matching year cards
    const allTexts = [];
    cards.forEach((card) => {
      const cardYear = card.getAttribute("data-year");
      if (selectedYear === "all" || cardYear === selectedYear) {
        const quarterEntries = card.querySelectorAll(".quarter .quarter-text");
        quarterEntries.forEach((entry) => {
          // Use exact text content from the recognition card
          // This preserves the exact words as written in the HTML
          const text = entry.textContent.trim();

          if (text) allTexts.push(text);
        });
      }
    });

    // Create a consolidated description using exact words from recognition cards
    // For specific year, use all entries from that year
    // For "all years", use first few entries
    if (allTexts.length > 0) {
      let description = "";
      if (selectedYear === "all") {
        // For "All Years", use first 2-3 entries, separated by spaces
        description = allTexts.slice(0, 3).join(" ");
      } else {
        // For specific year, use all entries from that year, separated by spaces
        // This preserves the exact words from each entry
        description = allTexts.join(" ");
      }
      // Use exact text content without any modification
      descriptionEl.textContent = description;
      descriptionEl.style.display = "block";
    } else {
      descriptionEl.style.display = "none";
    }
  }

  /**
   * Get which year's top 3 list a champion belongs to (for hardcoded lists)
   *
   * @param {string} normalizedName - Normalized champion name
   * @returns {Array} Array of years this champion is in the top 3 for
   */
  function getChampionTop3Years(normalizedName) {
    const top3For2024 = [
      "Antonio Casimiro Andre",
      "Arlito De Jesus Domingos Nhiala",
      "Jose Matata",
    ];
    const top3For2025 = [
      "Antonio Casimiro Andre",
      "Stela Pilartes da Silva",
      "Estevao Barros Beco",
    ];

    const years = [];
    const in2024 = top3For2024.some(
      (name) => normalizePersonName(name) === normalizedName
    );
    const in2025 = top3For2025.some(
      (name) => normalizePersonName(name) === normalizedName
    );

    if (in2024) years.push("2024");
    if (in2025) years.push("2025");

    return years;
  }

  /**
   * Add or update year label for champions when showing all years
   *
   * Creates a year badge on the champion card showing which year(s) their
   * recognitions belong to (e.g., "2024", "2025", or "2024, 2025")
   * For hardcoded top 3 champions, uses only the year from the top 3 list.
   *
   * @param {HTMLElement} championElement - The champion card element
   * @param {Array} cards - Array of recognition cards for this champion
   * @param {string} selectedYear - The selected year filter
   */
  function updateChampionYearLabel(championElement, cards, selectedYear) {
    // Remove existing label if any
    let yearLabel = championElement.querySelector(".champion-year-label");

    const championNameText = championElement
      .querySelector(".champion-text")
      ?.textContent.trim();
    if (!championNameText) return;

    const normalizedName = normalizePersonName(championNameText);

    // Get years from top 3 lists (for hardcoded champions)
    // Use only top 3 list years, not card years, since the label represents
    // which year they are a safety leader for
    const top3Years = getChampionTop3Years(normalizedName);

    let years = [];
    if (selectedYear === "all") {
      // For "All Years", show all years from top 3 lists
      years = top3Years.sort();
    } else {
      // For specific year, use the year from top 3 list if available
      if (top3Years.includes(selectedYear)) {
        years = [selectedYear];
      } else {
        // Not in top 3 for this year, don't show label
        years = [];
      }
    }

    if (years.length > 0) {
      if (!yearLabel) {
        yearLabel = document.createElement("div");
        yearLabel.className = "champion-year-label";
        championElement.appendChild(yearLabel);
      }
      yearLabel.textContent = years.join(", ");
      yearLabel.style.display = "block";
    } else if (yearLabel) {
      yearLabel.style.display = "none";
    }
  }

  function filterByYear(year) {
    const allCards = document.querySelectorAll(".card");
    const letterSections = document.querySelectorAll(".letter-section");

    const allChampionNames = document.querySelectorAll(".champion-name");

    allCards.forEach((card) => {
      const cardYear = card.getAttribute("data-year");

      if (year === "all" || cardYear === year) {
        card.classList.remove("hidden");

        const quarterEntries = card.querySelectorAll(".quarter");
        quarterEntries.forEach((entry) => {
          entry.classList.remove("hidden");
        });
      } else {
        card.classList.add("hidden");
      }
    });

    allChampionNames.forEach((championName) => {
      const championNameText = championName.textContent.trim();
      const correspondingCard = Array.from(allCards).find(
        (card) =>
          card.querySelector("h4")?.textContent.trim() === championNameText
      );

      if (correspondingCard) {
        const cardYear = correspondingCard.getAttribute("data-year");

        if (year === "all" || cardYear === year) {
          championName.classList.remove("hidden");
        } else {
          championName.classList.add("hidden");
        }
      } else {
        championName.classList.remove("hidden");
      }
    });

    letterSections.forEach((section) => {
      section.style.display = "block";
    });

    console.log(`Filtered by year: ${year}`);
  }

  function switchTab(tabName) {
    console.log(`Attempting to switch to tab: ${tabName}`);

    const tabPanes = document.querySelectorAll(".tab-pane");
    console.log(`Found ${tabPanes.length} tab panes`);

    tabPanes.forEach((pane) => {
      pane.classList.remove("active");
      console.log(`Removed active class from: ${pane.id}`);
    });

    const selectedPane = document.getElementById(`${tabName}-tab`);
    if (selectedPane) {
      selectedPane.classList.add("active");
      console.log(`Added active class to: ${selectedPane.id}`);

      if (tabName === "champions") {
        setTimeout(() => {
          // Re-apply filtering to show only top 3 champions
          // Make sure champions tab is visible first
          const championsTab = document.getElementById("champions-tab");
          if (championsTab && championsTab.classList.contains("active")) {
            applyCombinedFiltering();
            normalizeChampionOrder();
            initializeChampionClickHandlers();
          }
        }, 150);
      }
    } else {
      console.error(`Tab pane not found: ${tabName}-tab`);
    }

    const filterRows = document.querySelectorAll(".filter-row");
    if (tabName === "grassroots") {
      filterRows.forEach((row) => (row.style.display = "none"));
      console.log("Filters hidden for Grassroots Team tab");
    } else {
      filterRows.forEach((row) => (row.style.display = "flex"));
      console.log("Filters shown for other tabs");
    }

    // Hide quarter filter on champions tab
    const quarterFilterLabel = document.querySelector(
      '[data-translate="filter-quarter"]'
    );
    const quarterFilter = document.querySelector(".quarter-filter");
    if (tabName === "champions") {
      if (quarterFilterLabel) quarterFilterLabel.style.display = "none";
      if (quarterFilter) quarterFilter.style.display = "none";
      console.log("Quarter filter hidden for Champions tab");
    } else {
      if (quarterFilterLabel) quarterFilterLabel.style.display = "inline";
      if (quarterFilter) quarterFilter.style.display = "flex";
      console.log("Quarter filter shown for other tabs");
    }

    const letterNav = document.querySelector(".letter-nav");
    if (tabName === "recognition") {
      letterNav.style.display = "block";
      console.log("Alphabet navigation shown for Recognition Page tab");
    } else {
      letterNav.style.display = "none";
      console.log("Alphabet navigation hidden for other tabs");
    }

    setActiveTab(tabName);

    console.log(`Switched to tab: ${tabName}`);
  }

  function filterByQuarter(quarter) {
    const allCards = document.querySelectorAll(".card");
    const letterSections = document.querySelectorAll(".letter-section");

    const allChampionNames = document.querySelectorAll(".champion-name");

    allCards.forEach((card) => {
      const cardQuarters = card.getAttribute("data-quarters");
      const quarterEntries = card.querySelectorAll(".quarter");

      if (quarter === "all") {
        quarterEntries.forEach((entry) => {
          entry.classList.remove("hidden");
        });
        card.classList.remove("hidden");

        let hasVisibleEntries = false;
        quarterEntries.forEach((entry) => {
          const quarterLabel =
            entry.querySelector(".quarter-label").textContent;
          if (quarterLabel === quarter) {
            entry.classList.remove("hidden");
            hasVisibleEntries = true;
          } else {
            entry.classList.add("hidden");
          }
        });

        if (hasVisibleEntries) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      }
    });

    allChampionNames.forEach((championName) => {
      const championNameText = championName.textContent.trim();
      const correspondingCard = Array.from(allCards).find(
        (card) =>
          card.querySelector("h4")?.textContent.trim() === championNameText
      );

      if (correspondingCard) {
        const cardQuarters = correspondingCard.getAttribute("data-quarters");

        if (quarter === "all" || cardQuarters.includes(quarter)) {
          championName.classList.remove("hidden");
        } else {
          championName.classList.add("hidden");
        }
      } else {
        championName.classList.remove("hidden");
      }
    });

    letterSections.forEach((section) => {
      section.style.display = "block";
    });

    updateQuarterFilterDisplay(quarter);

    console.log(`Filtered by quarter: ${quarter}`);
  }

  function updateQuarterFilterDisplay(quarter) {
    const filterLabel = document.querySelector(".filter-label");
    if (filterLabel) {
      if (quarter === "all") {
        filterLabel.textContent = "Filter by Quarter:";
      } else {
        filterLabel.textContent = `Showing ${quarter} Recognitions:`;
      }
    }
  }

  function navigateToLetter(targetId, letterLink) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      highlightLetterLink(letterLink);
    }
  }

  function highlightLetterLink(letterLink) {
    const originalBackground = letterLink.style.background;
    letterLink.style.background =
      "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)";

    setTimeout(() => {
      letterLink.style.background = originalBackground || "";
    }, 1000);
  }

  function updateActiveLetter(letterLinks, letterId) {
    letterLinks.forEach((link) => link.classList.remove("active"));

    const activeLink = document.querySelector(`a[href="#${letterId}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  function setActiveTab(tab) {
    const baseTitle = "ESSA Safety Culture Wall of Recognition";
    if (tab === "grassroots") {
      document.title = `${baseTitle} - Grassroots Team`;
    } else if (tab === "champions") {
      document.title = `${baseTitle} - Safety Champions`;
    } else {
      document.title = baseTitle;
    }

    console.log(`Active tab: ${tab}`);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key >= "1" && e.key <= "3") {
      const quarterBtns = document.querySelectorAll(".quarter-btn");
      const quarterMap = { 1: "Q1", 2: "Q2", 3: "Q3" };
      const targetQuarter = quarterMap[e.key];

      if (targetQuarter) {
        const targetBtn = document.querySelector(
          `[data-quarter="${targetQuarter}"]`
        );
        if (targetBtn) {
          targetBtn.click();
        }
      }
    }

    if (e.key.toLowerCase() === "a") {
      const allBtn = document.querySelector('[data-quarter="all"]');
      if (allBtn) {
        allBtn.click();
      }
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      const activeTab = document.querySelector(".tab-btn.active");
      const tabBtns = document.querySelectorAll(".tab-btn");
      const currentIndex = Array.from(tabBtns).indexOf(activeTab);

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        tabBtns[currentIndex - 1].click();
      } else if (e.key === "ArrowRight" && currentIndex < tabBtns.length - 1) {
        tabBtns[currentIndex + 1].click();
      }
    }
  });

  window.addEventListener("beforeprint", function () {
    const elementsToHide = document.querySelectorAll(
      ".letter-nav, .year-selector, .tab-navigation, .quarter-filter"
    );
    elementsToHide.forEach((el) => (el.style.display = "none"));
  });

  window.addEventListener("afterprint", function () {
    const elementsToHide = document.querySelectorAll(
      ".letter-nav, .year-selector, .tab-navigation, .quarter-filter"
    );
    elementsToHide.forEach((el) => (el.style.display = "block"));
  });

  const style = document.createElement("style");
  style.textContent = `
        .letter-link.active {
            background: #3182ce !important;
            color: white !important;
            border-color: #3182ce !important;
            box-shadow: 0 4px 6px rgba(49, 130, 206, 0.3) !important;
        }
    `;
  document.head.appendChild(style);

  function initializeLanguageToggle(langToggle) {
    if (langToggle) {
      console.log("Language toggle found, setting up event listener");
      langToggle.addEventListener("click", function () {
        console.log(
          "Language toggle clicked, current language:",
          currentLanguage
        );
        toggleLanguage();
      });

      updateLanguageToggle();
    } else {
      console.error("Language toggle element not found!");
    }
  }

  function initializeChampionClickHandlers() {
    const championNames = document.querySelectorAll(".champion-name");
    console.log(`Setting up ${championNames.length} champion click handlers`);

    championNames.forEach((championName) => {
      if (!SHOW_CHAMPION_DETAILS) {
        const details = championName.querySelector(".champion-details");
        const icon = championName.querySelector(".expand-icon");
        if (details) details.style.display = "none";
        if (icon) icon.style.display = "none";
        championName.style.cursor = "default";
        // Ensure no click behavior when only names are shown
        championName.removeEventListener("click", handleChampionClick);
        return;
      }

      championName.removeEventListener("click", handleChampionClick);

      championName.addEventListener("click", handleChampionClick);
    });
  }

  /**
   * Handle champion click
   */
  function handleChampionClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(
      "Champion clicked:",
      this.querySelector(".champion-text").textContent
    );
    toggleChampionExpansion(this);
  }

  /**
   * Toggle champion expansion
   */
  function toggleChampionExpansion(championElement) {
    const details = championElement.querySelector(".champion-details");
    const expandIcon = championElement.querySelector(".expand-icon");

    console.log(
      "Toggling champion:",
      championElement.querySelector(".champion-text").textContent
    );
    console.log("Current display:", details.style.display);

    if (details.style.display === "none" || details.style.display === "") {
      // Expand
      console.log("Expanding...");
      details.style.display = "block";
      championElement.classList.add("expanded");
      expandIcon.textContent = "▲";
    } else {
      // Collapse
      console.log("Collapsing...");
      details.style.display = "none";
      championElement.classList.remove("expanded");
      expandIcon.textContent = "▼";
    }
  }

  /**
   * Toggle between English and Portuguese
   */
  function toggleLanguage() {
    console.log("Toggling language from", currentLanguage);
    currentLanguage = currentLanguage === "en" ? "pt" : "en";
    console.log("New language:", currentLanguage);
    updateLanguage();
    updateLanguageToggle();
  }

  /**
   * Update language toggle button display
   */
  function updateLanguageToggle() {
    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
      const langText = langToggle.querySelector(".lang-text");
      const langFlag = langToggle.querySelector(".lang-flag");

      if (currentLanguage === "en") {
        langText.textContent = "Toggle to Portuguese";
        langFlag.textContent = "🇵🇹";
      } else {
        langText.textContent = "Toggle to English";
        langFlag.textContent = "🇺🇸";
      }
    }
  }

  /**
   * Update year badges on recognition cards and champions
   *
   * Shows year badges when "All Years" is selected, hides them when a specific
   * year is selected. Year badges indicate which year(s) data belongs to.
   *
   * @param {string} selectedYear - The selected year ("all", "2024", or "2025")
   */
  function updateYearBadges(selectedYear) {
    const showYear = selectedYear === "all";
    updateYearBadgesForRecognition(showYear);
    updateYearBadgesForChampions(showYear);
  }

  // ============================================================================
  // DATA CONSOLIDATION FUNCTIONS
  // ============================================================================

  /**
   * Consolidate recognition cards for the same person across multiple years
   *
   * This function handles the complex logic of merging/unmerging cards when switching
   * between "All Years" and a specific year view. The challenge is that the same person
   * may have recognitions in both 2024 and 2025, and we want to show them together
   * when viewing all years, but separately when filtering by year.
   *
   * When "All Years" is selected:
   * - Finds all cards for the same person (using normalized names to handle accent variations)
   * - Merges them into a single card with year dividers (creates .merged-year wrappers)
   * - Marks duplicate cards as "merged-hidden" so they don't show (prevents duplicates)
   * - The first card becomes the "primary" and gets all other cards' quarters appended
   *
   * When a specific year is selected:
   * - Unmerges cards back to their original state
   * - Removes year dividers and restores original structure
   * - Shows all cards again (they'll be filtered by year/quarter separately)
   *
   * Implementation detail: We use normalized names for matching because "José" and "Jose"
   * should be treated as the same person. The primary card is always the first one
   * found in document order.
   *
   * @param {boolean} showAllYears - Whether "All Years" is selected
   */
  function consolidateCardsForAllYears(showAllYears) {
    const container = document.getElementById("recognition-section");
    if (!container) return;
    const cards = Array.from(container.querySelectorAll(".card"));

    const nameToCards = new Map();
    cards.forEach((card) => {
      const name = card.querySelector("h4")?.textContent || "";
      const key = normalizePersonName(name);
      if (!key) return;
      if (!nameToCards.has(key)) nameToCards.set(key, []);
      nameToCards.get(key).push(card);
    });

    nameToCards.forEach((groupCards) => {
      if (groupCards.length <= 1) return;

      const sorted = groupCards.sort((a, b) => {
        const ay = a.getAttribute("data-year") || "";
        const by = b.getAttribute("data-year") || "";
        if (ay !== by) return ay.localeCompare(by);
        return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
          ? -1
          : 1;
      });
      const primary = sorted[0];
      const quarterInfo = primary.querySelector(".quarter-info");
      if (!quarterInfo) return;

      if (showAllYears) {
        if (primary.getAttribute("data-merged") === "true") return;
        const primaryYear = primary.getAttribute("data-year") || "";
        const ownWrapper = document.createElement("div");
        ownWrapper.className = "merged-year";
        const ownDivider = document.createElement("div");
        ownDivider.className = "year-divider";
        ownDivider.textContent = primaryYear;
        ownDivider.style.margin = "6px 0";
        ownDivider.style.padding = "4px 0";
        ownDivider.style.fontWeight = "600";
        ownDivider.style.color = "#2d3748";
        ownWrapper.appendChild(ownDivider);
        const originalQuarters = Array.from(
          quarterInfo.querySelectorAll(":scope > .quarter")
        );
        originalQuarters.forEach((q) => {
          ownWrapper.appendChild(q);
        });
        quarterInfo.appendChild(ownWrapper);

        for (let i = 1; i < sorted.length; i++) {
          const src = sorted[i];
          const year = src.getAttribute("data-year") || "";
          const wrapper = document.createElement("div");
          wrapper.className = "merged-year";
          const divider = document.createElement("div");
          divider.className = "year-divider";
          divider.textContent = year;
          divider.style.margin = "6px 0";
          divider.style.padding = "4px 0";
          divider.style.fontWeight = "600";
          divider.style.color = "#2d3748";
          wrapper.appendChild(divider);
          src.querySelectorAll(".quarter").forEach((q) => {
            const clone = q.cloneNode(true);
            wrapper.appendChild(clone);
          });
          quarterInfo.appendChild(wrapper);
          src.classList.add("hidden", "merged-hidden");
        }
        const yearsList = sorted
          .map((c) => c.getAttribute("data-year"))
          .filter(Boolean)
          .sort();
        primary.setAttribute("data-merged", "true");
        primary.setAttribute("data-merged-years", yearsList.join(", "));
      } else {
        // Unmerge: restore only the primary card's original quarters (matching its year)
        const primaryYear = primary.getAttribute("data-year") || "";
        const wrappers = Array.from(
          primary.querySelectorAll(":scope .merged-year")
        );
        if (wrappers.length > 0) {
          // Find the wrapper that matches the primary card's year
          let primaryWrapper = wrappers.find((w) => {
            const divider = w.querySelector(".year-divider");
            return divider && divider.textContent.trim() === primaryYear;
          });

          // Fallback: if not found, use the first wrapper (should be primary's)
          if (!primaryWrapper && wrappers.length > 0) {
            primaryWrapper = wrappers[0];
          }

          if (primaryWrapper) {
            // Move quarters from the matching wrapper back to root
            const quarters = Array.from(
              primaryWrapper.querySelectorAll(".quarter")
            );
            quarters.forEach((q) => {
              stripYearChip(q); // Remove year chips if any
              q.classList.remove("hidden"); // Ensure quarters are visible
              quarterInfo.appendChild(q);
            });
          }
        }
        // Remove all merged-year wrappers
        primary.querySelectorAll(".merged-year").forEach((w) => w.remove());
        primary.removeAttribute("data-merged");
        primary.removeAttribute("data-merged-years");
        // Show all cards again (they'll be filtered by year/quarter separately)
        for (let i = 1; i < sorted.length; i++) {
          const src = sorted[i];
          src.classList.remove("hidden", "merged-hidden");
        }
        // Ensure primary card is visible
        primary.classList.remove("hidden", "merged-hidden");
      }
    });
  }

  function addYearChip(quarterEl, year) {
    if (quarterEl.querySelector(".quarter-year")) return;
    const label = quarterEl.querySelector(".quarter-label");
    const chip = document.createElement("span");
    chip.className = "quarter-year";
    chip.textContent = ` (${year})`;
    chip.style.marginLeft = "4px";
    chip.style.fontSize = "0.85em";
    chip.style.color = "#4a5568";
    if (label && label.nextSibling) {
      label.parentNode.insertBefore(chip, label.nextSibling);
    } else if (label) {
      label.after(chip);
    } else {
      quarterEl.prepend(chip);
    }
    return quarterEl;
  }

  function stripYearChip(quarterEl) {
    quarterEl.querySelectorAll(".quarter-year").forEach((el) => el.remove());
    return quarterEl;
  }

  function updateYearBadgesForRecognition(show) {
    document.querySelectorAll(".card").forEach((card) => {
      const header = card.querySelector(".card-header h4");
      if (!header) return;
      let badge = header.parentElement.querySelector(".year-badge");
      if (show) {
        const merged = card.getAttribute("data-merged") === "true";
        const mergedYears = card.getAttribute("data-merged-years");
        const year =
          merged && mergedYears ? mergedYears : card.getAttribute("data-year");
        if (!badge) {
          badge = document.createElement("span");
          badge.className = "year-badge";
          badge.style.marginLeft = "8px";
          badge.style.fontSize = "0.85em";
          badge.style.color = "#555";
          header.parentElement.appendChild(badge);
        }
        badge.textContent = `(${year})`;
        badge.style.display = "inline";
      } else if (badge) {
        badge.style.display = "none";
      }
    });
  }

  function updateYearBadgesForChampions(show) {
    const championsContainer = document.querySelector(
      "#champions-tab .champions-container"
    );
    if (!championsContainer) return;

    const allCards = Array.from(document.querySelectorAll(".card"));
    championsContainer.querySelectorAll(".champion-name").forEach((row) => {
      const name = row.querySelector(".champion-text")?.textContent.trim();
      const textEl = row.querySelector(".champion-text");
      if (!name || !textEl) return;

      const normalizedName = normalizePersonName(name);
      const top3Years = getChampionTop3Years(normalizedName);

      let badge = row.querySelector(".champion-year-badge");
      if (show) {
        // Get years from cards using normalized names for matching
        const primaryMerged = allCards.find((c) => {
          const cardName = c.querySelector("h4")?.textContent.trim();
          if (!cardName) return false;
          return (
            normalizePersonName(cardName) === normalizedName &&
            c.getAttribute("data-merged") === "true"
          );
        });
        let cardYears = [];
        if (primaryMerged) {
          const mergedStr =
            primaryMerged.getAttribute("data-merged-years") || "";
          cardYears = mergedStr
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        } else {
          cardYears = Array.from(
            new Set(
              allCards
                .filter((c) => {
                  const cardName = c.querySelector("h4")?.textContent.trim();
                  if (!cardName) return false;
                  return normalizePersonName(cardName) === normalizedName;
                })
                .map((c) => c.getAttribute("data-year"))
            )
          );
        }

        // Use only top 3 years for the badge (not card years)
        // The badge represents which year they are a safety leader for
        const years = top3Years.sort();

        if (years.length > 0) {
          if (!badge) {
            badge = document.createElement("span");
            badge.className = "champion-year-badge";
            badge.style.marginLeft = "6px";
            badge.style.fontSize = "0.85em";
            badge.style.color = "#555";
            textEl.insertAdjacentElement("afterend", badge);
          }
          badge.textContent = `(${years.join(", ")})`;
          badge.style.display = "inline";
        } else if (badge) {
          badge.style.display = "none";
        }
      } else if (badge) {
        badge.style.display = "none";
      }
    });
  }

  function normalizeLetterSectionsOrder() {
    const container = document.getElementById("recognition-section");
    if (!container) return;
    const sections = Array.from(container.querySelectorAll(".letter-section"));
    const sorted = sections.sort((a, b) => a.id.localeCompare(b.id));
    sorted.forEach((sec) => container.appendChild(sec));
  }

  function normalizeChampionOrder() {
    const container = document.querySelector(
      "#champions-tab .champions-container"
    );
    if (!container) return;
    const champions = Array.from(container.querySelectorAll(".champion-name"));
    champions
      .sort((a, b) => {
        const aText =
          a.querySelector(".champion-text")?.textContent.trim() || "";
        const bText =
          b.querySelector(".champion-text")?.textContent.trim() || "";
        return aText.localeCompare(bText, undefined, { sensitivity: "base" });
      })
      .forEach((el) => container.appendChild(el));
  }

  // ============================================================================
  // UTILITY FUNCTIONS
  // ============================================================================

  /**
   * Normalize person name for comparison
   *
   * Converts name to lowercase, trims whitespace, removes diacritics (accents),
   * and normalizes spaces. This ensures consistent name matching regardless of
   * case, spacing, or accent variations.
   *
   * Example:
   * "Antonio Casimiro André" -> "antonio casimiro andre"
   * "  Jose   Matata  " -> "jose matata"
   *
   * @param {string} name - The person's name to normalize
   * @returns {string} Normalized name (lowercase, trimmed, no accents)
   */
  /**
   * Normalize person name for comparison
   *
   * Converts name to lowercase, trims whitespace, removes diacritics (accents),
   * and normalizes spaces. This ensures consistent name matching regardless of
   * case, spacing, or accent variations.
   *
   * Example:
   * "Antonio Casimiro André" -> "antonio casimiro andre"
   * "  Jose   Matata  " -> "jose matata"
   *
   * Why this matters: Names in the data may have slight variations (accents, spacing),
   * but we need to match them correctly for consolidation and champion filtering.
   * Using normalize("NFD") decomposes accented characters, then we strip the diacritics.
   *
   * @param {string} name - The person's name to normalize
   * @returns {string} Normalized name (lowercase, trimmed, no accents)
   */
  function normalizePersonName(name) {
    return String(name || "")
      .trim()
      .replace(/\s+/g, " ") // Replace multiple spaces with single space
      .toLowerCase()
      .normalize("NFD") // Normalize to decomposed form (e.g., é -> e + ́)
      .replace(/[\u0300-\u036f]/g, ""); // Remove diacritics (accents)
  }

  /**
   * Initialize Excel file loader for importing 2025 data
   *
   * This allows users to upload an Excel file to add/update 2025 recognition data
   * without manually editing HTML. The file is parsed using the XLSX library,
   * then ingested into the DOM structure. This is useful for non-technical users
   * who can maintain the data in Excel format.
   *
   * The loader expects a specific Excel format with columns:
   * - "Name of Nominated person"
   * - "Contribution / Recognition" (with quarter markers like "(Q1)", "(Q2)", etc.)
   */
  function initializeXlsxLoader() {
    const trigger = document.getElementById("xlsx-trigger");
    const input = document.getElementById("xlsx-input");
    const loadDefault = document.getElementById("xlsx-load-default");

    if (!trigger || !input) return;

    trigger.addEventListener("click", function () {
      input.click();
    });

    input.addEventListener("change", function (e) {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (evt) {
        try {
          const data = new Uint8Array(evt.target.result);
          const wb = XLSX.read(data, { type: "array" });
          const firstSheetName = wb.SheetNames[0];
          const ws = wb.Sheets[firstSheetName];
          const rows = XLSX.utils.sheet_to_json(ws, { defval: "" });
          ingest2025Rows(rows);

          applyCombinedFiltering();

          initializeChampionClickHandlers();
          alert("2025 data loaded");
        } catch (err) {
          console.error("Failed to parse Excel:", err);
          alert("Failed to read Excel. Please ensure it's a valid .xlsx file.");
        }
      };
      reader.readAsArrayBuffer(file);
    });

    if (loadDefault) {
      loadDefault.addEventListener("click", async function () {
        const relPath = loadDefault.getAttribute("data-path");
        if (!relPath) return;
        try {
          const url = encodeURI(relPath);
          const res = await fetch(url);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const buf = await res.arrayBuffer();
          const wb = XLSX.read(new Uint8Array(buf), { type: "array" });
          const ws = wb.Sheets[wb.SheetNames[0]];

          clearImportedYearData("2025");
          ingest2025Rows(rows);
          applyCombinedFiltering();
          initializeChampionClickHandlers();
          alert("2025 data loaded from project file");
        } catch (err) {
          console.error("Failed to load default Excel:", err);
          alert(
            "Could not load the 2025 file from the project. Make sure it exists and reload the page."
          );
        }
      });
    }
  }

  function ingest2025Rows(rows) {
    clearImportedYearData("2025");

    const nameToQuarters = new Map();

    rows.forEach((row) => {
      const name = String(row["Name of Nominated person"] || "").trim();
      const contrib = String(row["Contribution / Recognition"] || "").trim();
      if (!name || !contrib) return;

      const parts = extractQuarterParts(contrib);
      if (!nameToQuarters.has(name)) {
        nameToQuarters.set(name, { Q1: [], Q2: [], Q3: [] });
      }
      const acc = nameToQuarters.get(name);
      ["Q1", "Q2", "Q3"].forEach((q) => {
        if (parts[q] && parts[q].length) acc[q].push(...parts[q]);
      });
    });

    for (const [name, quarters] of nameToQuarters.entries()) {
      const hasAny = ["Q1", "Q2", "Q3"].some((q) => quarters[q].length);
      if (!hasAny) continue;

      const letter = (name[0] || "#").toUpperCase();
      const section = ensureLetterSection(letter);
      const card = buildRecognitionCard(name, quarters, "2025");
      section.querySelector(".cards-container").appendChild(card);

      ensureChampionEntry(name, quarters);
    }
  }

  /**
   * Extract quarter-specific text from a recognition description
   *
   * Parses text that contains quarter markers like "(Q1)", "(Q2)", "(Q3)" and splits
   * the content accordingly. For example:
   * "Some text (Q1) Q1 content (Q2) Q2 content"
   * becomes { Q1: ["Some text", "Q1 content"], Q2: ["Q2 content"], Q3: [] }
   *
   * The regex /\(Q([123])\)/gi finds quarter markers. We extract text between markers
   * and assign it to the appropriate quarter. Text before the first marker is also
   * included in the first quarter found.
   *
   * @param {string} text - The recognition text with quarter markers
   * @returns {Object} Object with Q1, Q2, Q3 arrays containing text segments
   */
  function extractQuarterParts(text) {
    const result = { Q1: [], Q2: [], Q3: [] };

    const t = String(text).replace(/\s+/g, " ").trim();

    const regex = /\(Q([123])\)/gi;
    let match;
    let lastIndexStart = 0;
    while ((match = regex.exec(t))) {
      const q = `Q${match[1]}`;
      const idx = match.index;
      const segment = t.substring(lastIndexStart, idx).trim();
      if (segment) {
        result[q].push(trimTrailingSeparators(segment));
      }
      lastIndexStart = regex.lastIndex;
    }

    return result;
  }

  function trimTrailingSeparators(s) {
    return s.replace(/[\s;,:.-]+$/g, "");
  }

  function ensureLetterSection(letter) {
    let section = document.getElementById(letter);
    if (!section) {
      const recognitions = document.getElementById("recognition-section");
      section = document.createElement("section");
      section.id = letter;
      section.className = "letter-section";
      section.innerHTML = `
        <h3 class="letter-header">${letter}</h3>
        <div class="cards-container"></div>
      `;
      recognitions.appendChild(section);
    }

    if (!section.querySelector(".cards-container")) {
      const container = document.createElement("div");
      container.className = "cards-container";
      section.appendChild(container);
    }
    return section;
  }

  function buildRecognitionCard(name, quarters, year) {
    const article = document.createElement("article");
    const qList = [
      ...quarters.Q1.map(() => "Q1"),
      ...quarters.Q2.map(() => "Q2"),
      ...quarters.Q3.map(() => "Q3"),
    ];
    article.className = "card";
    article.setAttribute("data-quarters", qList.join(","));
    article.setAttribute("data-year", year);

    const header = document.createElement("div");
    header.className = "card-header";
    header.innerHTML = `<h4>${name}</h4>`;

    const content = document.createElement("div");
    content.className = "card-content";
    const qInfo = document.createElement("div");
    qInfo.className = "quarter-info";

    [
      ["Q1", quarters.Q1],
      ["Q2", quarters.Q2],
      ["Q3", quarters.Q3],
    ].forEach(([label, items]) => {
      items.forEach((txt) => {
        const qDiv = document.createElement("div");
        qDiv.className = "quarter";
        qDiv.innerHTML = `
          <span class="quarter-label">${label}</span>
          <span class="quarter-text">${escapeHtml(txt)}</span>
        `;
        qInfo.appendChild(qDiv);
      });
    });

    content.appendChild(qInfo);
    article.appendChild(header);
    article.appendChild(content);
    return article;
  }

  function ensureChampionEntry(name, quarters) {
    const container = document.querySelector(
      "#champions-tab .champions-container"
    );
    if (!container) return;

    let entry = Array.from(container.querySelectorAll(".champion-name")).find(
      (el) => el.querySelector(".champion-text")?.textContent.trim() === name
    );

    if (!entry) {
      entry = document.createElement("div");
      entry.className = "champion-name";
      entry.setAttribute("data-champion", name);
      entry.innerHTML = `
        <div class="champion-profile">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="${escapeHtml(
            name
          )}" />
        </div>
        <span class="champion-text">${escapeHtml(name)}</span>
        <span class="expand-icon">▼</span>
        <div class="champion-details" style="display: none;"></div>
      `;
      container.appendChild(entry);
    }

    const details = entry.querySelector(".champion-details");

    [
      ["Q1", quarters.Q1],
      ["Q2", quarters.Q2],
      ["Q3", quarters.Q3],
    ].forEach(([label, items]) => {
      items.forEach((txt) => {
        const d = document.createElement("div");
        d.className = "champion-quarter";
        d.setAttribute("data-year", "2025");
        d.innerHTML = `
          <span class="quarter-label">${label}</span>
          <span class="quarter-text">${escapeHtml(txt)}</span>
        `;
        details.appendChild(d);
      });
    });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function clearImportedYearData(year) {
    document.querySelectorAll(`.card[data-year="${year}"]`).forEach((el) => {
      const parent = el.parentElement;
      el.remove();
      if (parent && parent.classList.contains("cards-container")) {
        const section = parent.closest(".letter-section");
        if (section) {
          const remaining = section.querySelectorAll(".card").length;
          section.style.display = remaining ? "block" : "none";
        }
      }
    });

    document
      .querySelectorAll(`.champion-quarter[data-year=\"${year}\"]`)
      .forEach((el) => {
        const details = el.parentElement;
        const host = details ? details.closest(".champion-name") : null;
        el.remove();
        if (
          details &&
          details.classList.contains("champion-details") &&
          details.querySelectorAll(".champion-quarter").length === 0 &&
          host
        ) {
          host.remove();
        }
      });
  }

  function updateLanguage() {
    console.log("Updating language to:", currentLanguage);
    const elements = document.querySelectorAll("[data-translate]");
    console.log(`Found ${elements.length} translatable elements`);

    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      const translation = translations[currentLanguage][key];

      if (translation) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.value = translation;
        } else {
          element.textContent = translation;
        }
      } else {
        console.warn(`Translation not found for key: ${key}`);
      }
    });

    document.documentElement.lang = currentLanguage;

    const baseTitle = translations[currentLanguage]["title"];
    document.title = baseTitle;

    // Re-generate champion descriptions for visible top 3 champions
    const allChampions = document.querySelectorAll(".champion-name");
    allChampions.forEach((champion) => {
      // Skip hidden champions
      if (
        champion.style.display === "none" ||
        champion.classList.contains("hidden")
      ) {
        return;
      }
      const championNameText = champion
        .querySelector(".champion-text")
        ?.textContent.trim();
      if (!championNameText) return;

      const allCards = Array.from(document.querySelectorAll(".card")).filter(
        (card) =>
          card.querySelector("h4")?.textContent.trim() === championNameText &&
          !card.classList.contains("merged-hidden")
      );

      if (allCards.length > 0) {
        // Get the current selected year
        const activeYearBtn = document.querySelector(".year-btn.active");
        const selectedYear = activeYearBtn
          ? activeYearBtn.getAttribute("data-year")
          : "all";

        generateChampionDescription(champion, allCards, selectedYear);
      }
    });
  }
});

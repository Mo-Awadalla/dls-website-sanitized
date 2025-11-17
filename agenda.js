document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Agenda Tabs Functionality (if needed)
    const agendaTabs = document.querySelectorAll('.agenda-tabs .tab-btn');
    const daySchedules = document.querySelectorAll('.day-schedule');
    
    if (agendaTabs.length > 0) {
        agendaTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                agendaTabs.forEach(tab => tab.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Get the schedule to show
                const scheduleId = this.getAttribute('data-schedule');
                
                // Hide all schedules
                daySchedules.forEach(schedule => schedule.classList.remove('active'));
                
                // Show the selected schedule
                const selectedSchedule = document.getElementById(scheduleId);
                if (selectedSchedule) {
                    selectedSchedule.classList.add('active');
                }
            });
        });
    }
    
    // Panel Modal Functionality
    const viewPanelBtns = document.querySelectorAll('.view-panel-btn');
    const panelModal = document.getElementById('panelModal');
    const panelModalTitle = document.getElementById('panelModalTitle');
    const panelModalSpeakers = document.getElementById('panelModalSpeakers');
    const closeBtn = document.querySelector('.close');
    
    // Course Information Modal
    const courseModal = document.getElementById('courseModal');
    const courseModalTitle = document.getElementById('courseModalTitle');
    const courseModalContent = document.getElementById('courseModalContent');
    
    // Individual Speaker Bio Modal
    const speakerBioModal = document.getElementById('speakerBioModal');
    const speakerBioPhoto = document.querySelector('#speakerBioModal .speaker-modal-photo');
    const speakerBioName = document.getElementById('speakerBioName');
    const speakerBioTitle = document.getElementById('speakerBioTitle');
    const speakerBioOrganization = document.getElementById('speakerBioOrganization');
    const speakerBioText = document.getElementById('speakerBioText');
    
    // Speaker Modal (from index page)
    const speakerModal = document.getElementById('speakerModal');
    const modalSpeakerName = document.getElementById('modalSpeakerName');
    const modalSpeakerTitle = document.getElementById('modalSpeakerTitle');
    const modalSpeakerOrganization = document.getElementById('modalSpeakerOrganization');
    const modalSpeakerBio = document.getElementById('modalSpeakerBio');
    const modalSpeakerPhoto = document.querySelector('#speakerModal .speaker-modal-photo');
    const speakerModalClose = document.querySelector('.speaker-modal-close');
    
    // Speaker data (from index page)
    const speakerData = {
        keynote: {
            name: "MaryAnn Tierney",
            title: "Keynote Speaker",
            organization: "Former Regional Administrator, FEMA Region 3",
            bio: "<p>MaryAnn spent 15 years with the Federal Emergency Management Agency as the Regional Administrator for FEMA Region 3. In January 2025 she served as the Acting Deputy Secretary of the Department of Homeland Security. MaryAnn served in a variety of roles across FEMA including as the Senior Official Performing the Duties of Deputy Administrator (2025), Acting Deputy Administrator (2021), Acting Regional Administrator for Region 2 (2013), and Associate Administrator for Mission Support (2017).</p><p>In addition to her permanent position, she is a qualified Federal Coordinating Officer (Type 1) and led one of FEMA's five National Incident Management Assistance Teams. She deployed to several Presidentially declared disasters to support survivors and communities and has served in senior coordinating roles for the Department of Homeland Security and National Security Council. MaryAnn has also worked in emergency management in New York City and Philadelphia.</p><p>She has a BA from American University, a MPA from New York University, and has completed the three primary professional military education courses for General and Flag officers. MaryAnn received the DHS Secretary's Outstanding Service Medal in 2021, the Presidential Rank Award, Distinguished Rank in 2022, and the DHS Secretary's Meritorious Service Silver Medal in 2023.</p><p>MaryAnn lives in South Philly with her husband, son, and dog; is an avid runner; and aspires to one day have a cooking show like Ina Garten.</p>",
            image: "SRC/Headshots/MaryAnn_Tierney_1.jpg"
        },
        counsel: {
            name: "Sonja Orgias, Esq.", 
            title: "Chief Counsel",
            organization: "New York City Emergency Management",
            bio: "<p>Sonja Orgias has served as the Chief Counsel of New York City Emergency Management since August 2022. Ms. Orgias joined the agency in 2015 as Director of Legal Affairs and was appointed to Deputy Chief Counsel in 2021 to oversee the expansion of the agency's legal operations.</p><p>In her role, Ms. Orgias oversees the Office of the Chief Counsel comprised of three units: Legal Affairs, DAFN Legal, and Records Management. She also provides legal guidance to the Commissioner, First Deputy Commissioner, and other executives.</p><p>As a native Brooklynite who is also a City employee, Ms. Orgias is attuned to the unique way that this city runs; the way that its agencies run; and, the expectations of the public.</p><p>She has overseen emergency legal operations in response to numerous incidents in and outside of NYC, including drafting executive orders for extreme weather events, multiple city-to-city agreements with NYC and other municipalities, drafting emergency contracts valued at more than $600 million for the procurement of goods and services during the COVID-19 response, and licenses needed for City operations during other emergency crises.</p><p>In addition, Ms. Orgias was instrumental in starting, and serving in a leadership role of, the inaugural Equity and Diversity Council at New York Emergency Management. Her work has facilitated discussions and raised issues related to diversity, equity, and inclusion, which are necessary components in addressing community needs during emergencies.</p><p>Prior to joining New York City Emergency Management, Ms. Orgias served as an Administrative Law Judge with the New York City Environmental Control Board – OATH and Assistant Counsel with FDNY. She has a background in bankruptcy, immigration, administrative law, and alternative dispute resolution. Ms. Orgias received her Juris Doctor Degree from Hofstra University School of Law and her Bachelor's Degree from Boston University and is a proud Stuyvesant High School alumna. She is a member of the New York State Bar Association Committee on Mass Disaster Response. Ms. Orgias is admitted to practice in the State of New York, the Eastern and Southern Districts of New York, and the Supreme Court of the United States.</p>",
            image: "SRC/Headshots/Sonja_Orgias.jpg",
            usePhoto: true
        }
    };
    
    // Panel data
    const panelData = {
        'ai-panel': {
            title: 'Emergence of Artificial Intelligence in Emergency Response Operations: Considerations in Efficiency, Privacy, and Security',
            description: 'This CLE explores the emergence and integration of Artificial Intelligence into local government operations, including emergency operations, and discusses the ongoing need to balance government efficiency, privacy, and security.',
            objectives: [
                'Understand the current landscape as local governments begin to incorporate Artificial Intelligence into its operational framework, including emergency response operations.',
                'Explore the ongoing need to balance government efficiency and productivity against growing concerns surrounding privacy and cyber security.',
                'Discuss how different jurisdictions have begun to address these issues.'
            ],
            speakers: [
                {
                    name: 'Sarah Carrier',
                    title: 'City of Seattle Privacy Program Manager',
                    organization: 'City of Seattle',
                    bio: '<p>Sarah has spent the last six years with the City of Seattle growing and maturing the City\'s Data Privacy & Surveillance Ordinance Compliance Programs. Now, as the City\'s Data Privacy & Responsible AI Program Manager, she helps ensure City departments incorporate best practices into daily operations and public service offerings, in alignment with regulatory and policy frameworks.</p><p>Sarah\'s interest in the intersection of data privacy, ethics, policy & emerging technology has driven the development of the City of Seattle\'s Responsible AI Program. The heart of the program focuses on transparent and responsible enablement of AI tools that will innovate and improve public services for Seattle residents.</p>',
                    image: 'SRC/Headshots/Sarah_Carrier_1.jpg'
                },
                {
                    name: 'Jiahao Chen',
                    title: 'Director of AI/ML',
                    organization: 'New York City Office of Technology and Innovation',
                    bio: '<p>Jiahao Chen, PhD, is the Director of AI/ML at New York City\'s Office of Technology and Innovation. He oversees the implementation of NYC\'s AI Action Plan, the city\'s roadmap for responsible AI innovation. His work includes publishing guidance on the use of AI by city agencies, writing technical reference materials on classifying AI systems and AI risks, creating training materials for city staff on AI basics, developing the city\'s AI risk assessment process, and conducting public listening sessions on the city\'s use of AI. Jiahao holds a PhD in chemical physics from the University of Illinois at Urbana-Champaign. He was formerly research faculty at MIT working on scientific big data, a Senior Manager of Data Science, an Executive Director at JPMorgan AI Research, and the CTO and co-founder of Parity Technologies, a startup focused on algorithmic auditing solutions. Jiahao continues to be active in academic AI research, including serving as Ethics Chair for the Conference on Neural Information Processing Systems (NeurIPS), the world\'s largest academic AI conference. Jiahao was recently invited to speak at the American Bar Association\'s Annual Section of Labor & Employment Law Conference for his work on algorithmic auditing.</p>',
                    image: 'SRC/Headshots/Jiahao_Chen.jpg'
                },
                {
                    name: 'Aaron Friedman',
                    title: 'Deputy Chief Privacy Officer',
                    organization: 'NYC Office of Information Privacy',
                    bio: '<p>Aaron Friedman, Deputy Chief Privacy Officer, has been part of the NYC Office of Information Privacy since 2019. He counsels agencies and the Chief Privacy Officer on privacy issues and teaches privacy law at Fordham Law School. Before joining the Office of Information Privacy, Aaron was a senior counsel with the NYC Department of Social Services. Aaron is a graduate of the Benjamin N. Cardozo School of Law and CUNY Queens College.</p>',
                    image: 'SRC/Headshots/Aaron_Friedman_1.jpg'
                },
                {
                    name: 'Robert Wilson',
                    title: 'Director of Legal Affairs and Agency Privacy Officer',
                    organization: 'NYC Emergency Management',
                    bio: '<p>Robert Wilson is the Director of Legal Affairs and Agency Privacy Officer for New York City Emergency Management. During emergency operations he serves as an Emergency Support Function Coordinator for transportation, utility, and infrastructure matters and is a member of the Planning Section. With a decade of experience in the field of Emergency Management, he has been involved in numerous operations ranging from smaller localized incidents to the global COVID-19 Pandemic. He also serves as a member of the Artificial Intelligence Committee for New York City Emergency Management.</p>',
                    image: 'SRC/Headshots/Robert_Wilson.JPG',
                    moderator: true
                }
            ]
        },
        'ethics-panel': {
            title: 'Ethics in Disaster Law Panel',
            speakers: [
                {
                    name: 'Denisse Mira',
                    title: 'Senior Counsel, Ethics & Compliance Division',
                    organization: 'New York City Law Department',
                    bio: '<p>Denisse Mira is a Senior Counsel in the Ethics and Compliance Division at the New York City Law Department. Prior to joining the Ethics and Compliance Division, Denisse was a Vice President of Global Financial Crimes Compliance for a financial institution. Additionally, she serves as an Adjunct Professor for New York School of Career & Applied Studies - Touro College ("NYSCAS"). She graduated Touro College Jacob D. Fuchsberg Law Center in 2017.</p>',
                    image: 'SRC/Headshots/Denisse_Mira.jpg'
                },
                {
                    name: 'Michael Ross',
                    title: 'Principal, Law Offices of Michael S. Ross',
                    organization: 'Adjunct Professor, Cardozo & Brooklyn Law Schools',
                    bio: '<p>Michael S. Ross is the principal of the Law Offices of Michael S. Ross, where he concentrates his practice in attorney ethics and professional responsibility matters. He is a former Assistant United States Attorney in the Criminal Division of the Southern District of New York and also served as an Assistant District Attorney in Kings County. Mr. Ross has been an Adjunct Professor at the Benjamin N. Cardozo School of Law for forty-five years, and has taught a variety of courses in Criminal and Civil Litigation; Appellate Advocacy; Judicial Administration; and Professional Responsibility. Mr. Ross currently teaches Litigation Ethics at Cardozo Law School during both the Fall and Spring semesters and simultaneously, for the last twenty years, he has taught Professional Responsibility at Brooklyn Law School during the Fall and Spring (and during most of those years taught the summer semester as well). He co-founded in 1983 Cardozo Law School\'s Intensive Trial Advocacy Program and for four decades served in roles as the Executive Director, Team Leader or Instructor/Lecturer of the Program. Mr. Ross has lectured widely on ethics-related topics to organizations such as the American Bar Association ("A.B.A."), the Practicing Law Institute, the Appellate Divisions of the First, Second and Third Judicial Departments, the Association of the Bar of the City of New York, the New York State Judicial Institute, the National Institute of Trial Advocacy, the New York State Bar Association, the New York County Lawyers\' Association, the New York State Academy of Trial Lawyers and the New York State Trial Lawyers Association. Mr. Ross has served as a member of the New York State Bar Association\'s Committee on Professional Discipline; the New York State Bar Association\'s Task Force On Lawyer Advertising; the New York County Lawyers\' Association\'s Committee on Professional Discipline; the New York State Bar Association\'s Special Committee on the Unlawful Practice of Law; the New York State Bar Association\'s Special Committee on Procedures for Judicial Discipline; and the New York State Bar Association\'s Committee on Mass Disasters. He previously served for a number of terms on the Association of the Bar of the City of New York\'s Committee on Professional Discipline. Mr. Ross completed a five-year tenure as an appointed member of the New York State Continuing Legal Education Board, which, among other things, formulates CLE guidelines in the State. Mr. Ross has chaired the A.B.A.\'s Grand Jury Committee and the City Bar Association\'s Committee on Criminal Advocacy. He previously served as the A.B.A. Criminal Justice Section\'s liaison to the A.B.A. Standing Committee on Ethics and Professional Responsibility and was an appointed member of the A.B.A.\'s Special "Criminal Justice In Crisis Committee." Among his writings, Mr. Ross has co-authored a chapter on "Client and Witness Perjury," for the A.B.A.\'s Section of Litigation ethics training course book entitled Litigation Ethics: Course Materials For Continuing Legal Education.</p>',
                    image: 'SRC/Headshots/Michael_Ross_1.jpg'
                },
                {
                    name: 'Traci Wheelwright',
                    title: 'Deputy Chief Counsel',
                    organization: 'NYC Emergency Management',
                    bio: '<p>Traci Wheelwright serves as Deputy Chief Counsel at NYC Emergency Management, where she leads a team of attorneys and professionals in providing strategic legal guidance on emergency response, civil rights, privacy, and procurement law. With over two decades of legal experience, Traci has built a distinguished career across city, state, and federal agencies, including the NYC Department of Transportation, Amtrak, the Long Island Railroad, and Nassau County. Her expertise spans rulemaking, litigation, public contracting, and compliance.</p><p>At NYCEM, she plays a critical role in shaping legal policy, managing document production and preservation efforts, and supporting the agency\'s emergency activations through legal research, contract development, and interagency coordination. Traci is also a passionate mentor and advocate for professional development, having created and led mentorship programs throughout her career.</p><p>She holds a J.D. from Hofstra University School of Law and an LL.M. Certificate in Real Estate from New York Law School. Her commitment to public service is matched by her global perspective—she is an avid traveler and lifelong learner with a deep appreciation for language and culture.</p>',
                    image: 'SRC/Headshots/Traci_Wheelwright_1.jpg',
                    moderator: true
                }
            ]
        },
        'foil-panel': {
            title: 'FOIL and Government Transparency Panel',
            speakers: [
                {
                    name: 'Gwynne Hogan',
                    title: 'Senior Reporter',
                    organization: 'THE CITY',
                    bio: '<p>Gwynne Hogan is a senior reporter covering immigration, homelessness, and many things in between. Her coverage of the migrant crisis earned her the Newswomen\'s Club of New York\'s Journalist of the Year award in 2023. Her reporting on the COVID-19 pandemic forced the New York City officials to admit they were undercounting the dead, and earned her a 2021 Gracie award.</p>',
                    image: 'SRC/Headshots/gwynne_headshot_1-scaled.webp'
                },
                {
                    name: 'Elisa Lee',
                    title: 'Senior Counsel',
                    organization: 'NYC Law Department',
                    bio: '<p>Elisa Lee is a Senior Counsel at the New York City Law Department in the Commercial and Real Estate Litigation Division. In her role, Elisa counsels and represents the City and its agencies in matters involving contract disputes with private companies that provide services for City projects. Representative matters involve contracts for the design, construction and construction management services rehabilitating private homes destroyed or damaged by Hurricane Sandy, design-build contracts for the four borough-based jails plan, the management of NYC hotel rooms to support operations during the COVID-19 pandemic, and upholding awards of contracts for health benefit services, for providing motor vehicle immobilization, towing, and related services, for recordkeeping services for the City\'s deferred compensation plan, and for administration of behavioral health services.</p>',
                    image: 'SRC/Headshots/Elisa_Lee_hs.jpeg'
                },
                {
                    name: 'Rob DeVoogd',
                    title: 'Senior Agency Counsel and FOIL Officer',
                    organization: 'NYC Emergency Management',
                    bio: '<p>Rob DeVoogd is Senior Agency Counsel and FOIL officer at New York City Emergency Management. He has been with the agency for 8 years.</p>',
                    image: 'SRC/Headshots/Rob_DeVoogd_1.jpg',
                },
                {
                    name: 'Sabrina T. Smith, Esq.',
                    title: 'Vice President of Continuing Legal Education (CLE) and Professional Development',
                    organization: 'Metropolitan Black Bar Association',
                    bio: '',
                    image: 'SRC/Headshots/Sabrina_Smith_HS.png',
                    moderator: true
                }
            ]
        },
        'disabilities-panel': {
            title: 'Invisible Disabilities and Disaster Law Panel',
            speakers: [
                {
                    name: 'Lisa Bothwell',
                    title: 'Federal Policy Professional',
                    organization: 'State Bar of Texas Licensed Attorney',
                    bio: '<p>Lisa Bothwell is a Texas-licensed attorney who, as a federal policy and program analyst with more than a decade of experience, navigates the intersection of disability rights, emergency management, healthcare law, federal funding, and public program operations. Until recently, she served at the Administration for Community Living, where she engaged in legal research and writing and managed agency responses to federal policy as part of the Administrative Procedures Act process. Additionally, she was part of teams that drafted and managed public comments for both Section 1557 of the Affordable Care Act of 2010 and Section 504 of the Rehabilitation Act of 1973 rulemakings. Before ACL, Ms. Bothwell previously held key advisory roles in accessible emergency management at the Federal Emergency Management Agency (FEMA). While balancing federal legal and programmatic requirements as well as operational coordination, she deployed to over 15 major disasters—including Hurricanes Harvey, Irma, and Maria—leading teams of up to 39 federal staff and contractors. Ms. Bothwell holds a Juris Doctor with a Civil Law Certificate from Loyola University-New Orleans.</p>',
                    image: 'SRC/Headshots/Lisa_Bothwell_1.jpg'
                },
                {
                    name: 'Dennis Debbaudt',
                    title: 'Autism Advocate',
                    organization: '',
                    bio: 'Dennis Debbaudt co-authored the article Contact with Individuals with Autism: Effective Resolutions published by the U.S. Department of Justice in the FBI Law Enforcement Bulletin. He testified about autism related contacts with police and the criminal justice system in 2009 before a working group of North Carolina state legislators that subsequently authorized production of the 2009 video Autism in the Criminal Justice System. Debbaudt produced that video and was a co-author of a companion report that year published in the North Carolina State Bar Association journal. He also developed and updated the Autism Trainer\'s Guide for NYPD from 2008 through 2018. He served as a Subject Matter Expert (SME) and training video contributor for the Florida Department of Law Enforcement\'s curriculum Autism Awareness for Law Enforcement in 2017 and the online FDLE Autism Awareness Training for 911 Telecommunicators in 2022. As a presenter, trainer and public speaker, Debbaudt is well known for his ability to connect with diverse audiences, his clear, concise and detailed handouts, creative and effective video illustrations and insight and experience with this subject matter. Debbaudt is retired from a 37-year career as a licensed private investigator. He is the proud father of Brad, an autistic adult. He resides in Port Saint Lucie, Florida, with his wife, Gay, and their son, Brad.',
                    image: 'SRC/Headshots/Dennis_Debbaudt_1.jpg'
                },
                {
                    name: 'Kristine Hoffman',
                    title: 'Deputy Counsel',
                    organization: 'NYS Division of Homeland Security and Emergency Services',
                    bio: '<p>Kristine Hoffman is a Deputy Counsel for the NYS Division of Homeland Security and Emergency Services with 23 years of experience as an emergency management attorney. She has extensive expertise in law and policy across preparedness, response, recovery, and hazard mitigation portfolios. During her career as state legal counsel, she has advised and provided guidance to the Executive Chamber, state agencies, municipalities, and emergency management partners. During her tenure at DHSES she has authored portions of Executive Law Article 2-B, including the Intrastate Mutual Aid Program legislation, has trained county executives statewide, and co-authored more 200 State Disaster Emergency Executive Orders during major disasters. She has assisted in securing more than 30 Presidential major disaster declarations, developed FEMA policy interpretations benefiting New York, and assisted in the advancement of multimillion-dollar resilience projects. Prior to joining DHSES, Ms. Hoffman worked as attorney for the NYS Department of Health\'s Office of Health Emergency Preparedness, where she helped craft isolation and quarantine protocols and first-in-the-nation Alternate Care Site guidelines. She is a graduate of Siena College and Albany Law School.</p>',
                    image: 'SRC/Headshots/Kristine_Hoffman.jpg'
                },
                {
                    name: 'Howard Rosenblum',
                    title: 'Founder and CEO, Deaf Equality',
                    organization: 'Deaf Equality',
                    bio: '<p>Howard Rosenblum is the founder and Chair of Deaf Equality, which he established to achieve true equality for all Deaf, Hard of Hearing, DeafBlind, DeafDisabled, and Late Deafened people in the USA and worldwide. The goal of this effort is to emphasize system change through litigation, policy and regulatory changes, and consulting. Licensed in Illinois as a lawyer for 32 years and adept as an computer engineer for 36 years, Howard has extensive experience in strategizing and directing successful precedential cases such as NAD v. Netflix, NAD v. Harvard, NAD v. MIT, Campbell v. U.S. Department of Agriculture, Perez v. Sturgis Public Schools, and NAD v. Donald Trump.</p><p>In addition, he has guided significant policy changes including convincing the US Department of Transportation to provide exemptions which led to over 1,500 Deaf individuals to obtain Commercial Driver\'s Licenses (CDLs) and drive trucks as well as getting the Federal Communications Commission to require texting and support the provision of an ASL option for the 988 suicide hotline. Howard has a B.S. in Computer Engineering from the University of Arizona, and a J.D. from the Illinois Institute of Technology/Chicago-Kent College of Law. He also serves as the legal advisor to the World Federation of the Deaf (WFD).</p>',
                    image: 'SRC/Headshots/Howard_Rosenblum.jpg'
                },
                {
                    name: 'Jo Anne Simon',
                    title: 'New York State Assembly Member',
                    organization: '52nd District',
                    bio: '<p>New York Assemblymember Jo Anne Simon has been fighting for the inclusion of people with disabilities her entire career. Through her Brooklyn, NY based law firm she has represented people with disabilities across the country. A graduate of Fordham University School of Law, Ms. Simon is known for her expertise on the Americans with Disabilities Act (ADA), particularly as it relates to higher education, high stakes testing and professional licensing bodies. She acted as lead counsel for the successful plaintiff in the seminal case of Bartlett v. New York State Board of Law Examiners. Ms. Simon was also an adjunct Associate Professor at Fordham Law School for nearly 20 years and served as staff attorney at Hofstra Law School\'s Disabilities Law Clinic from 1992-1996.</p><p>Ms. Simon testified before the U.S. Senate in support of the ADA Amendments Act in 2008. She was instrumental in securing passage of California\'s AB-2122, advising the Assembly and testifying before the Senate in support of the bill to ban "flagging" the scores of test takers who received disability accommodations on the LSAT. Her work was also instrumental in the U.S. Department of Justice\'s decision to bring pattern and practice claims against the Law School Admission Council in DFEH, et al v. LSAC. Disability rights advocacy precedes her career in the law. Ms. Simon holds an MA in the Education of the Deaf from Gallaudet University and a BA Speech pathology from Iona College.</p><p>She has worked as a teacher of deaf and deaf-blind students, as a postsecondary disability services provider and as a certified sign language interpreter for 20 years. She is a founding member of the Association on Higher Education And Disability (AHEAD). She regularly advises student with disabilities, their parents and school administrators and regularly associates with colleagues around the country in pursuing disability rights matters. Long active in civic affairs, in 2014 Ms. Simon was elected to the N.Y.S. Assembly for the 52nd District where she has led on issues such as the rights of women, children, and the elderly, the reduction of gun violence, environmental justice and resiliency and the rights of individuals with disabilities. She created and has organized Dyslexia Awareness Days at the New York State Capital for 10 years, passed a landscape shifting bill protecting rights of students with dyslexia and related learning disabilities and serves on the Steering Committee of the State Action Plan on Literacy. She has worked to increase the number of women in politics and government. She chairs the Assembly\'s Committee on Mental Health.</p>',
                    image: 'SRC/Headshots/Jo_Simon.jpg'
                },
                {
                    name: 'Dennis Boyd',
                    title: 'Senior Disability and Civil Rights Counsel',
                    organization: 'NYC Office of Emergency Management',
                    bio: 'Dennis Boyd grew up in New York City and attended Dartmouth College and Boston University School of Law. He works in the Office of Chief Counsel of New York City\'s Department of Emergency Management (NYCEM), where he oversees the Disability and Access and Functional Needs program. This entails a focus on agency compliance with human rights laws for people who tend to be most adversely affected during large scale emergencies, including people with disabilities, the elderly, children, non-English speakers, the unhoused and others. He has thirty-eight years\' experience handling trials and appeals, conducting trainings, lobbying and advocating for low-income New Yorkers, with the last thirty of those years focused primarily on the rights of people with disabilities. Before joining the City, he was with a local disability Protection and Advocacy law firm, trying cases and developing policy around de-institutionalization, access to housing, health care and public accommodations and on the implementation of the federal ADA, the Help America Vote Act, and on NYC Building Code revisions. He has also worked with individuals seeking accommodations on college and graduate school admission tests and on professional licensing exams, as well as in the areas of housing discrimination, elder law, social security benefits and estate planning.',
                    image: 'SRC/Headshots/Dennis_Boyd\'s_1.jpg',
                    moderator: true
                },
                {
                    name: 'Saiena Shafiezadeh',
                    title: 'Legal Director of Civil Rights',
                    organization: 'NYC Office of Emergency Management',
                    bio: '<p>Saiena Shafiezadeh is the Legal Director of Civil Rights at NYC Emergency Management, where she provides legal support to the Office of Chief Counsel and contributes to the City\'s emergency preparedness, response, and recovery efforts, particularly as they relate to individuals with disabilities, access, and functional needs. She also serves as co-chair of the agency\'s Equity and Diversity Council. Prior to her current position, Saiena practiced as a housing attorney, representing tenants facing eviction in Manhattan Housing Court.</p><p>She also worked at the NYC Commission on Human Rights, where she investigated and adjudicated discrimination claims under the NYC Human Rights Law. Saiena is also a past President of the Iranian American Bar Association\'s National Board of Directors, a national legal organization dedicated to informing and educating the Iranian American community about legal issues of interest. Saiena earned her J.D. from the University of Illinois Chicago School of Law and her B.A. from Loyola University Chicago.</p>',
                    image: 'SRC/Headshots/Saiena_Shafiezadeh_1.jpg',
                    moderator: true
                }
            ]
        }
    };
    
    // Course information data
    const courseData = {
        'ethics-course': {
            title: 'Ethics in Disaster Law - Course Information',
            content: `
                <div class="cle-overview">
                    <h4>CLE Overview:</h4>
                    <p>This CLE explores the volatile landscape of ethics attorneys must navigate in their legal practice during and after emergencies or disasters — particularly in a world where emergency support systems (like FEMA) are underfunded or dismantled. Participants will examine their ethical obligations to clients, communities, and the court system while facing conflicting demands, unreliable systems, vulnerable populations, and legal uncertainties created by federal financial withdrawal.</p>
                </div>
                <h4>Learning Objectives:</h4>
                <ul>
                    <li>Understand ethical obligations in disaster and emergency situations</li>
                    <li>Navigate conflicts between client needs and community resources</li>
                    <li>Address ethical challenges when support systems are unreliable</li>
                    <li>Examine professional responsibility in vulnerable population contexts</li>
                    <li>Develop strategies for ethical decision-making under uncertainty</li>
                </ul>
                <h4>Course Details:</h4>
                <p><strong>Duration:</strong> 1.5 hours</p>
                <p><strong>CLE Credits:</strong> 1.5 Ethics credits (pending approval)</p>
                <p><strong>Format:</strong> Interactive panel discussion with Q&A</p>
                <p><strong>Target Audience:</strong> Attorneys, legal professionals, and emergency management personnel</p>
            `
        },
        'disabilities-course': {
            title: 'Invisible Disabilities and Disaster Law - Course Information',
            content: `
                <div class="cle-overview">
                    <h4>CLE Overview:</h4>
                    <p>This course examines the legal protections and accommodations needed for individuals with invisible disabilities during disasters and emergencies. Participants will explore how to ensure equitable access to emergency services, disaster relief, and legal protections for those with conditions that may not be immediately apparent but significantly impact their ability to navigate crisis situations.</p>
                </div>
                <h4>Learning Objectives:</h4>
                <ul>
                    <li>Understand legal protections for individuals with invisible disabilities</li>
                    <li>Learn about accommodation requirements in emergency situations</li>
                    <li>Explore intersection of disability law and disaster response</li>
                    <li>Develop strategies for inclusive emergency planning</li>
                    <li>Address barriers to accessing disaster relief services</li>
                </ul>
                <h4>Course Details:</h4>
                <p><strong>Duration:</strong> 1.5 hours</p>
                <p><strong>CLE Credits:</strong> 1.5 Diversity, Inclusion, and Elimination of Bias credits (pending approval)</p>
                <p><strong>Format:</strong> Interactive panel discussion with Q&A</p>
                <p><strong>Target Audience:</strong> Attorneys, legal professionals, and emergency management personnel</p>
            `
        },
        'foil-course': {
            title: 'FOIL and Government Transparency - Course Information',
            content: `
                <div class="cle-overview">
                    <h4>CLE Overview:</h4>
                    <p>This course explores Freedom of Information Law (FOIL) applications in disaster and emergency situations. Participants will learn about public access to emergency management information, government transparency requirements during crises, and the balance between public disclosure and operational security in emergency response.</p>
                </div>
                <h4>Learning Objectives:</h4>
                <ul>
                    <li>Understand FOIL requirements in emergency contexts</li>
                    <li>Learn about exemptions and limitations during disasters</li>
                    <li>Explore public access to emergency management records</li>
                    <li>Develop strategies for effective FOIL requests in crisis situations</li>
                    <li>Address transparency vs. security considerations</li>
                </ul>
                <h4>Course Details:</h4>
                <p><strong>Duration:</strong> 1.5 hours</p>
                <p><strong>CLE Credits:</strong> 1.5 General credits (pending approval)</p>
                <p><strong>Format:</strong> Interactive panel discussion with Q&A</p>
                <p><strong>Target Audience:</strong> Attorneys, legal professionals, and emergency management personnel</p>
            `
        },
        'ai-course': {
            title: 'Emergence of Artificial Intelligence in Emergency Response Operations: Considerations in Efficiency, Privacy, and Security - Course Information',
            content: `
                <div class="cle-overview">
                    <h4>CLE Overview:</h4>
                    <p>This CLE explores the emergence and integration of Artificial Intelligence into local government operations, including emergency operations, and discusses the ongoing need to balance government efficiency, privacy, and security.</p>
                </div>
                <h4>Course Objectives:</h4>
                <ul>
                    <li>Understand the current landscape as local governments begin to incorporate Artificial Intelligence into its operational framework, including emergency response operations.</li>
                    <li>Explore the ongoing need to balance government efficiency and productivity against growing concerns surrounding privacy and cyber security.</li>
                    <li>Discuss how different jurisdictions have begun to address these issues.</li>
                </ul>
                <h4>Course Details:</h4>
                <p><strong>Duration:</strong> 1.5 hours</p>
                <p><strong>CLE Credits:</strong> 1.5 Cybersecurity, Privacy, and Data Protection credits (pending approval)</p>
                <p><strong>Format:</strong> Interactive panel discussion with Q&A</p>
                <p><strong>Target Audience:</strong> Attorneys, legal professionals, and emergency management personnel</p>
            `
        }
    };
    
    if (viewPanelBtns.length > 0) {
        viewPanelBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const panelId = this.getAttribute('data-panel');
                const panel = panelData[panelId];
                
                if (panel) {
                    panelModalTitle.textContent = panel.title;
                    panelModalSpeakers.innerHTML = '';
                    
                    panel.speakers.forEach(speaker => {
                        const speakerCard = document.createElement('div');
                        speakerCard.className = 'panel-speaker-card';
                        
                        // Add specific class for speaker images that need positioning adjustment
                        let imageClass = '';
                        if (speaker.name === 'Rob DeVoogd') {
                            imageClass = 'robert-devoogd-img';
                        } else if (speaker.name === 'Elisa Lee') {
                            imageClass = 'elisa-lee-img';
                        }
                        
                        speakerCard.innerHTML = `
                            <img src="${speaker.image}" alt="${speaker.name} headshot" class="${imageClass}" loading="lazy" decoding="async">
                            <h4>${speaker.name}${speaker.moderator ? ' <span class="moderator-label">Moderator</span>' : ''}</h4>
                            <p class="speaker-title">${speaker.title}</p>
                            <p class="speaker-organization">${speaker.organization}</p>
                        `;
                        
                        // Add click event to show individual bio only if speaker has a bio
                        if (speaker.bio && speaker.bio.trim() !== '') {
                            speakerCard.style.cursor = 'pointer';
                            speakerCard.addEventListener('click', function() {
                                showSpeakerBio(speaker);
                            });
                        }
                        
                        panelModalSpeakers.appendChild(speakerCard);
                    });
                    
                    panelModal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        });
    }
    
    // Course Information Modal Functionality
    const clickableCourses = document.querySelectorAll('.clickable-course');
    if (clickableCourses.length > 0) {
        clickableCourses.forEach(course => {
            course.addEventListener('click', function() {
                const courseId = this.getAttribute('data-course');
                const course = courseData[courseId];
                
                if (course) {
                    courseModalTitle.textContent = course.title;
                    courseModalContent.innerHTML = course.content;
                    courseModal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        });
    }
    
    // Function to show individual speaker bio
    function showSpeakerBio(speaker) {
        // Set photo
        if (speaker.image) {
            // Add specific class for Rob DeVoogd's image positioning
            const imageClass = speaker.name === 'Rob DeVoogd' ? 'robert-devoogd-bio-img' : '';
            speakerBioPhoto.innerHTML = `<img src="${speaker.image}" alt="${speaker.name}" class="${imageClass}">`;
        } else {
            speakerBioPhoto.innerHTML = '';
        }
        
        speakerBioName.textContent = speaker.name;
        speakerBioTitle.textContent = speaker.title;
        speakerBioOrganization.textContent = speaker.organization;
        // Render bio with proper paragraph spacing
        if (typeof speaker.bio === 'string' && speaker.bio.indexOf('<p') === -1) {
            // Check if bio is short (less than 200 characters) - keep as single paragraph
            if (speaker.bio.length < 200) {
                speakerBioText.innerHTML = `<p>${speaker.bio}</p>`;
            } else if (speaker.bio.length < 500) {
                // Medium length bios - 2 paragraphs
                const sentences = speaker.bio
                    .split(/(?<=[.!?])\s+/)
                    .map(s => s.trim())
                    .filter(Boolean);
                const paragraphs = [];
                const groupSize = Math.max(1, Math.ceil(sentences.length / 2)); // max 2 paragraphs
                for (let i = 0; i < sentences.length; i += groupSize) {
                    paragraphs.push(`<p>${sentences.slice(i, i + groupSize).join(' ')}</p>`);
                }
                speakerBioText.innerHTML = paragraphs.join('');
            } else {
                // Very long bios - 3 paragraphs
                const sentences = speaker.bio
                    .split(/(?<=[.!?])\s+/)
                    .map(s => s.trim())
                    .filter(Boolean);
                const paragraphs = [];
                const groupSize = Math.max(1, Math.ceil(sentences.length / 3)); // max 3 paragraphs
                for (let i = 0; i < sentences.length; i += groupSize) {
                    paragraphs.push(`<p>${sentences.slice(i, i + groupSize).join(' ')}</p>`);
                }
                speakerBioText.innerHTML = paragraphs.join('');
            }
        } else {
            speakerBioText.innerHTML = speaker.bio;
        }
        speakerBioModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Function to open speaker modal (from index page)
    function openSpeakerModal(speakerType) {
        const speaker = speakerData[speakerType];
        
        if (speaker) {
            modalSpeakerName.textContent = speaker.name;
            modalSpeakerTitle.textContent = speaker.title;
            modalSpeakerOrganization.textContent = speaker.organization;
            // Ensure bios have paragraph spacing. If no <p> tags, split
            // the bio into sentences and group them into short paragraphs.
            if (typeof speaker.bio === 'string' && speaker.bio.indexOf('<p') === -1) {
                // Check if bio is short (less than 200 characters) - keep as single paragraph
                if (speaker.bio.length < 200) {
                    modalSpeakerBio.innerHTML = `<p>${speaker.bio}</p>`;
                } else if (speaker.bio.length < 500) {
                    // Medium length bios - 2 paragraphs
                    const sentences = speaker.bio
                        .split(/(?<=[.!?])\s+/)
                        .map(s => s.trim())
                        .filter(Boolean);
                    const paragraphs = [];
                    const groupSize = Math.max(1, Math.ceil(sentences.length / 2)); // max 2 paragraphs
                    for (let i = 0; i < sentences.length; i += groupSize) {
                        paragraphs.push(`<p>${sentences.slice(i, i + groupSize).join(' ')}</p>`);
                    }
                    modalSpeakerBio.innerHTML = paragraphs.join('');
                } else {
                    // Very long bios - 3 paragraphs
                    const sentences = speaker.bio
                        .split(/(?<=[.!?])\s+/)
                        .map(s => s.trim())
                        .filter(Boolean);
                    const paragraphs = [];
                    const groupSize = Math.max(1, Math.ceil(sentences.length / 3)); // max 3 paragraphs
                    for (let i = 0; i < sentences.length; i += groupSize) {
                        paragraphs.push(`<p>${sentences.slice(i, i + groupSize).join(' ')}</p>`);
                    }
                    modalSpeakerBio.innerHTML = paragraphs.join('');
                }
            } else {
                modalSpeakerBio.innerHTML = speaker.bio;
            }
            
            // Set photo
            if (speaker.image) {
                // Check if image is a PDF file
                if (speaker.image.toLowerCase().endsWith('.pdf')) {
                    // For PDF files, we'll use a placeholder with the person's initials
                    const nameParts = speaker.name.split(' ');
                    let initials = '';
                    if (nameParts.length >= 2) {
                        initials = nameParts[0].charAt(0) + nameParts[1].charAt(0);
                    } else {
                        initials = nameParts[0].charAt(0);
                    }
                    modalSpeakerPhoto.innerHTML = `<div class="speaker-initials">${initials}</div>`;
                } else {
                    modalSpeakerPhoto.innerHTML = `<img src="${speaker.image}" alt="${speaker.name}">`;
                }
            } else {
                // No image - just show the name without any placeholder icon
                modalSpeakerPhoto.innerHTML = '';
            }
            
            speakerModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Add event listeners to clickable speaker names
    const clickableSpeakers = document.querySelectorAll('.clickable-speaker');
    clickableSpeakers.forEach(speaker => {
        speaker.addEventListener('click', function() {
            const speakerType = this.getAttribute('data-speaker');
            openSpeakerModal(speakerType);
        });
    });
    
    // Handle Traci's clickable name in Closing Remarks
    const traciClickable = document.querySelector('.clickable-traci');
    if (traciClickable) {
        traciClickable.addEventListener('click', function() {
            // Find Traci in the ethics panel
            const ethicsPanel = panelData['ethics-panel'];
            if (ethicsPanel) {
                const traciSpeaker = ethicsPanel.speakers.find(s => s.name === 'Traci Wheelwright');
                if (traciSpeaker) {
                    showSpeakerBio(traciSpeaker);
                }
            }
        });
    }
    
    // Close modal functionality
    const closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            panelModal.style.display = 'none';
            speakerBioModal.style.display = 'none';
            speakerModal.style.display = 'none';
            courseModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    });
    
    // Close modal when clicking outside of it
    if (panelModal) {
        window.addEventListener('click', function(event) {
            if (event.target === panelModal) {
                panelModal.style.display = 'none';
                document.body.style.overflow = '';
            }
            if (event.target === speakerBioModal) {
                speakerBioModal.style.display = 'none';
                document.body.style.overflow = '';
            }
            if (event.target === speakerModal) {
                speakerModal.style.display = 'none';
                document.body.style.overflow = '';
            }
            if (event.target === courseModal) {
                courseModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
});



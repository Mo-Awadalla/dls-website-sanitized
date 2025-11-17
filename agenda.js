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
            name: "Jane Doe",
            title: "Keynote Speaker",
            organization: "Emergency Management Professional",
            bio: "<p>Jane Doe is an experienced emergency management professional with extensive background in federal emergency response operations. With over a decade of service in emergency management, she has played key roles in coordinating disaster response efforts and supporting communities during major emergencies.</p><p>Her expertise spans emergency preparedness, disaster response coordination, and interagency collaboration. She has been involved in numerous emergency operations and has contributed to developing policies and procedures that enhance community resilience and emergency response capabilities.</p><p>As a keynote speaker, she brings valuable insights into the evolving landscape of emergency management and the critical importance of legal frameworks in disaster response operations.</p>",
            image: "SRC/PH_HS.png"
        },
        counsel: {
            name: "Joe Doe, Esq.", 
            title: "Chief Counsel",
            organization: "Emergency Management Organization",
            bio: "<p>Joe Doe serves as Chief Counsel for emergency management operations, providing strategic legal guidance on emergency response, disaster law, and regulatory compliance matters. With extensive experience in public sector legal practice, he oversees legal operations that support emergency preparedness and response activities.</p><p>His work focuses on ensuring legal compliance during emergency operations, developing legal frameworks for disaster response, and coordinating legal support across multiple agencies during crisis situations. He has been instrumental in developing policies that address the complex legal challenges that arise during emergencies.</p><p>His expertise in administrative law, emergency management law, and interagency coordination makes him a key contributor to effective emergency response planning and execution.</p>",
            image: "SRC/PH_HS.png",
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
                    name: 'Jane Doe',
                    title: 'City Privacy Program Manager',
                    organization: 'City Government',
                    bio: '<p>Jane Doe is a privacy program manager with extensive experience in developing and implementing data privacy and surveillance compliance programs for municipal governments. Her work focuses on ensuring that city departments incorporate privacy best practices into their daily operations and public service offerings.</p><p>She has been instrumental in developing responsible AI programs that balance innovation with privacy protection, working to create transparent frameworks for the use of emerging technologies in public service delivery.</p>',
                    image: 'SRC/PH_HS.png'
                },
                {
                    name: 'Joe Doe',
                    title: 'Director of AI/ML',
                    organization: 'City Office of Technology and Innovation',
                    bio: '<p>Joe Doe is a technology director specializing in artificial intelligence and machine learning applications for government operations. He oversees the implementation of responsible AI initiatives and develops guidance on the use of AI technologies by public agencies.</p><p>His work includes creating technical frameworks for AI risk assessment, developing training materials for government staff, and facilitating public engagement on the use of AI in public services.</p>',
                    image: 'SRC/PH_HS.png'
                },
                {
                    name: 'Jane Doe',
                    title: 'Deputy Chief Privacy Officer',
                    organization: 'City Office of Information Privacy',
                    bio: '<p>Jane Doe serves as a deputy privacy officer, providing counsel on privacy issues and developing privacy policies for government agencies. Her expertise includes privacy law, data protection, and regulatory compliance in the public sector.</p><p>She works to ensure that privacy considerations are integrated into government operations and that agencies comply with applicable privacy regulations and best practices.</p>',
                    image: 'SRC/PH_HS.png'
                },
                {
                    name: 'Joe Doe',
                    title: 'Director of Legal Affairs and Agency Privacy Officer',
                    organization: 'Emergency Management',
                    bio: '<p>Joe Doe is a legal affairs director and privacy officer with extensive experience in emergency management law. During emergency operations, he coordinates legal support for transportation, utility, and infrastructure matters.</p><p>With over a decade of experience in emergency management, he has been involved in numerous emergency operations and serves on committees addressing the intersection of technology and emergency response.</p>',
                    image: 'SRC/PH_HS.png',
                    moderator: true
                }
            ]
        },
        'ethics-panel': {
            title: 'Ethics in Disaster Law Panel',
            speakers: [
                {
                    name: 'Jane Doe',
                    title: 'Senior Counsel, Ethics & Compliance Division',
                    organization: 'City Law Department',
                    bio: '<p>Jane Doe is a senior counsel specializing in ethics and compliance matters for government agencies. Her work focuses on ensuring ethical standards and regulatory compliance in public sector legal practice.</p><p>She has extensive experience in ethics training, compliance program development, and providing guidance on professional responsibility matters in government service.</p>',
                    image: 'SRC/PH_HS.png'
                },
                {
                    name: 'Joe Doe',
                    title: 'Principal Attorney',
                    organization: 'Law Firm',
                    bio: '<p>Joe Doe is an attorney with extensive experience in professional ethics and attorney responsibility matters. He has served in various prosecutorial roles and has taught professional responsibility and ethics courses at law schools.</p><p>His practice focuses on attorney ethics, professional discipline matters, and providing guidance on ethical obligations in legal practice, particularly in challenging circumstances such as emergencies and disasters.</p>',
                    image: 'SRC/PH_HS.png'
                },
                {
                    name: 'Jane Doe',
                    title: 'Deputy Chief Counsel',
                    organization: 'Emergency Management',
                    bio: '<p>Jane Doe serves as Deputy Chief Counsel for emergency management operations, providing strategic legal guidance on emergency response, civil rights, privacy, and procurement law. With extensive legal experience in public sector practice, she leads teams of attorneys in supporting emergency preparedness and response activities.</p><p>Her work includes shaping legal policy, managing legal operations during emergency activations, and coordinating legal support across multiple agencies during crisis situations. She is committed to professional development and mentorship in the legal field.</p>',
                    image: 'SRC/PH_HS.png',
                    moderator: true
                }
            ]
        },
        'foil-panel': {
            title: 'FOIL and Government Transparency Panel',
            speakers: [
                {
                    name: 'Jane Doe',
                    title: 'Senior Reporter',
                    organization: 'News Organization',
                    bio: '<p>Jane Doe is a senior reporter with extensive experience covering government operations, public policy, and emergency management issues. Her reporting focuses on transparency, accountability, and public access to government information.</p><p>She has been recognized for her investigative work and commitment to informing the public about important government operations and policy matters.</p>',
                    image: 'SRC/PH_HS.png'
                },
                {
                    name: 'Joe Doe',
                    title: 'Senior Counsel',
                    organization: 'City Law Department',
                    bio: '<p>Joe Doe is a senior counsel specializing in commercial and real estate litigation for government agencies. His work includes representing the city in contract disputes and matters involving public-private partnerships.</p><p>He has extensive experience in contract law, procurement matters, and legal issues related to emergency response operations and disaster recovery efforts.</p>',
                    image: 'SRC/PH_HS.png'
                },
                {
                    name: 'Jane Doe',
                    title: 'Senior Agency Counsel and FOIL Officer',
                    organization: 'Emergency Management',
                    bio: '<p>Jane Doe serves as Senior Agency Counsel and Freedom of Information Law (FOIL) officer, managing public access to government records and ensuring compliance with transparency requirements.</p><p>She has extensive experience in handling FOIL requests, balancing public access with privacy and security considerations, particularly during emergency situations.</p>',
                    image: 'SRC/PH_HS.png',
                },
                {
                    name: 'Joe Doe, Esq.',
                    title: 'Vice President of Continuing Legal Education and Professional Development',
                    organization: 'Legal Association',
                    bio: '<p>Joe Doe oversees continuing legal education programs and professional development initiatives for legal professionals. His work focuses on providing quality educational opportunities that enhance legal practice and professional growth.</p>',
                    image: 'SRC/PH_HS.png',
                    moderator: true
                }
            ]
        },
        'disabilities-panel': {
            title: 'Invisible Disabilities and Disaster Law Panel',
            speakers: [
                {
                    name: 'Jane Doe',
                    title: 'Federal Policy Professional',
                    organization: 'Licensed Attorney',
                    bio: '<p>Jane Doe is an attorney and federal policy analyst with extensive experience navigating the intersection of disability rights, emergency management, healthcare law, and public program operations. Her work focuses on ensuring that federal policies and programs adequately address the needs of individuals with disabilities during emergencies.</p><p>She has been involved in developing and implementing policies related to accessible emergency management and has experience in legal research, policy analysis, and program coordination in the federal sector.</p>',
                    image: 'SRC/PH_HS.png'
                },
                {
                    name: 'Joe Doe',
                    title: 'Disability Advocate',
                    organization: 'Advocacy Organization',
                    bio: '<p>Joe Doe is a disability advocate with extensive experience in training and education on disability awareness, particularly in emergency and law enforcement contexts. His work focuses on improving understanding and response to individuals with disabilities during emergencies and in interactions with first responders.</p><p>He has developed training materials and programs that help emergency responders and law enforcement better serve individuals with disabilities, with a particular focus on invisible disabilities and communication needs.</p>',
                    image: 'SRC/PH_HS.png'
                },
                {
                    name: 'Jane Doe',
                    title: 'Deputy Counsel',
                    organization: 'State Division of Homeland Security and Emergency Services',
                    bio: '<p>Jane Doe is a deputy counsel with extensive experience as an emergency management attorney, providing legal guidance on preparedness, response, recovery, and hazard mitigation. Her work includes advising state agencies, municipalities, and emergency management partners on legal and policy matters.</p><p>She has been involved in developing emergency management legislation, drafting executive orders during disasters, and securing federal disaster declarations. Her expertise spans state emergency management law and federal disaster assistance programs.</p>',
                    image: 'SRC/PH_HS.png'
                },
                {
                    name: 'Joe Doe',
                    title: 'Founder and CEO',
                    organization: 'Disability Rights Organization',
                    bio: '<p>Joe Doe is the founder and leader of a disability rights organization focused on achieving equality for individuals with disabilities through litigation, policy advocacy, and consulting. His work emphasizes system change to improve access and inclusion.</p><p>With extensive experience in both law and technology, he has been involved in significant disability rights cases and policy initiatives that have advanced accessibility and inclusion in various sectors.</p>',
                    image: 'SRC/PH_HS.png'
                },
                {
                    name: 'Jane Doe',
                    title: 'State Assembly Member',
                    organization: 'State Legislature',
                    bio: '<p>Jane Doe is a state legislator with a long-standing commitment to disability rights and inclusion. Her work focuses on advancing policies that protect and promote the rights of individuals with disabilities across various sectors, including education, employment, and emergency services.</p><p>She has been instrumental in developing and passing legislation that enhances accessibility and ensures that the needs of individuals with disabilities are considered in policy development and implementation.</p>',
                    image: 'SRC/PH_HS.png'
                },
                {
                    name: 'Joe Doe',
                    title: 'Senior Disability and Civil Rights Counsel',
                    organization: 'Office of Emergency Management',
                    bio: '<p>Joe Doe is a senior counsel specializing in disability and civil rights law in emergency management contexts. He oversees programs focused on ensuring compliance with human rights laws for populations most affected during emergencies, including people with disabilities, the elderly, children, and others with access and functional needs.</p><p>With extensive experience in disability rights advocacy, he works to ensure that emergency planning, response, and recovery efforts are inclusive and accessible to all members of the community.</p>',
                    image: 'SRC/PH_HS.png',
                    moderator: true
                },
                {
                    name: 'Jane Doe',
                    title: 'Legal Director of Civil Rights',
                    organization: 'Office of Emergency Management',
                    bio: '<p>Jane Doe is the legal director of civil rights, providing legal support for emergency preparedness, response, and recovery efforts, with a particular focus on individuals with disabilities and access and functional needs. She also contributes to equity and diversity initiatives within emergency management.</p><p>Her background includes experience in civil rights law, housing law, and human rights enforcement, which she applies to ensure that emergency management operations protect and serve all members of the community equitably.</p>',
                    image: 'SRC/PH_HS.png',
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
                        // Image positioning classes removed since all images use placeholder
                        
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
            // Add specific class for image positioning
            // Image positioning class removed since all images use placeholder
            const imageClass = '';
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
    
    // Handle closing remarks speaker's clickable name
    const traciClickable = document.querySelector('.clickable-traci');
    if (traciClickable) {
        traciClickable.addEventListener('click', function() {
            // Find the speaker in the ethics panel
            const ethicsPanel = panelData['ethics-panel'];
            if (ethicsPanel) {
                const speaker = ethicsPanel.speakers.find(s => s.moderator === true && s.title === 'Deputy Chief Counsel');
                if (speaker) {
                    showSpeakerBio(speaker);
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



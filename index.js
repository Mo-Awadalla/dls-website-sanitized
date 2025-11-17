document.addEventListener('DOMContentLoaded', function() {
    // Optimize hero image loading with highest priority
    const heroImage = document.querySelector('.hero img[fetchpriority="high"]');
    if (heroImage) {
        // Force immediate loading of hero image
        heroImage.addEventListener('load', function() {
            console.log('Hero image loaded successfully');
            // Add a class to indicate hero is ready
            document.querySelector('.hero').classList.add('hero-loaded');
        });
        
        // If hero image is already cached, mark as loaded immediately
        if (heroImage.complete) {
            document.querySelector('.hero').classList.add('hero-loaded');
        }
        
        // Preload the hero image immediately
        const heroImg = new Image();
        heroImg.src = heroImage.src;
        heroImg.onload = function() {
            document.querySelector('.hero').classList.add('hero-loaded');
        };
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Speaker data
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

    // Speaker Modal Functionality
    const speakerCards = document.querySelectorAll('.about-speaker-card');
    const speakerBioButtons = document.querySelectorAll('.speaker-bio-btn');
    const modal = document.getElementById('speakerModal');
    const modalSpeakerName = document.getElementById('modalSpeakerName');
    const modalSpeakerTitle = document.getElementById('modalSpeakerTitle');
    const modalSpeakerOrganization = document.getElementById('modalSpeakerOrganization');
    const modalSpeakerBio = document.getElementById('modalSpeakerBio');
    const modalSpeakerPhoto = document.querySelector('.speaker-modal-photo');
    const closeBtn = document.querySelector('.speaker-modal-close');
    
    // Function to open speaker modal
    function openSpeakerModal(speakerType) {
        const speaker = speakerData[speakerType];
        
        if (speaker) {
            modalSpeakerName.textContent = speaker.name;
            modalSpeakerTitle.textContent = speaker.title;
            modalSpeakerOrganization.textContent = speaker.organization;
            modalSpeakerBio.innerHTML = speaker.bio;
            
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
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Add event listeners to speaker cards
    if (speakerCards.length > 0) {
        speakerCards.forEach(card => {
            card.addEventListener('click', function() {
                const speakerType = this.getAttribute('data-speaker');
                openSpeakerModal(speakerType);
            });
        });
    }
    
    // Add event listeners to speaker bio buttons
    if (speakerBioButtons.length > 0) {
        speakerBioButtons.forEach(button => {
            button.addEventListener('click', function() {
                const speakerType = this.getAttribute('data-speaker');
                openSpeakerModal(speakerType);
            });
        });
    }
    
    // Close modal functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    
    // Close modal when clicking outside of it
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
});



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



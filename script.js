document.addEventListener('DOMContentLoaded', function() {
    // Calendar functionality - simple .ics file download
    const addToCalendarLink = document.getElementById('add-to-calendar');
    
    if (addToCalendarLink) {
        addToCalendarLink.addEventListener('click', function(e) {
            e.preventDefault();
            createCalendarFile();
        });
    }

    function createCalendarFile() {
        // Event details
        const eventTitle = 'Disaster Law Symposium';
        const eventDescription = 'Law in Crisis: Building Capacity, Compliance, and Community in Emergency Management';
        const eventLocation = 'Brooklyn Law School';
        const eventStartDate = '20251105T090000'; // Format: YYYYMMDDTHHMMSS
        const eventEndDate = '20251105T170000';   // Assuming it's an all-day event
        
        // Create an iCal file that works with any calendar app
        const icsContent = 'BEGIN:VCALENDAR\n' +
            'VERSION:2.0\n' +
            'BEGIN:VEVENT\n' +
            'URL:' + window.location.href + '\n' +
            'DTSTART:' + eventStartDate + '\n' +
            'DTEND:' + eventEndDate + '\n' +
            'SUMMARY:' + eventTitle + '\n' +
            'DESCRIPTION:' + eventDescription + '\n' +
            'LOCATION:' + eventLocation + '\n' +
            'END:VEVENT\n' +
            'END:VCALENDAR';
        
        // Create and download the file
        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'disaster_law_symposium.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
    
    // Speaker Tabs Functionality
    const speakerTabs = document.querySelectorAll('.speaker-tabs .tab-btn');
    const speakerPanels = document.querySelectorAll('.speaker-panels .panel');
    
    if (speakerTabs.length > 0) {
        speakerTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                speakerTabs.forEach(tab => tab.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Get the panel to show
                const panelId = this.getAttribute('data-panel');
                
                // Hide all panels
                speakerPanels.forEach(panel => panel.classList.remove('active'));
                
                // Show the selected panel
                const selectedPanel = document.getElementById(panelId);
                if (selectedPanel) {
                    selectedPanel.classList.add('active');
                }
            });
        });
    }
    
    // Speaker Bio Modal Functionality
    const speakerNames = document.querySelectorAll('.speaker-name');
    const modal = document.getElementById('speakerModal');
    const modalSpeakerName = document.getElementById('modalSpeakerName');
    const modalSpeakerBio = document.getElementById('modalSpeakerBio');
    const closeBtn = document.querySelector('.close');
    
    if (speakerNames.length > 0) {
        speakerNames.forEach(speakerName => {
            speakerName.addEventListener('click', function() {
                const bio = this.getAttribute('data-bio');
                const name = this.textContent;
                
                modalSpeakerName.textContent = name;
                modalSpeakerBio.textContent = bio;
                modal.style.display = 'block';
            });
        });
    }
    
    // Close modal functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside of it
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
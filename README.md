# Disaster Law Symposium Website

A multi-page website for the Disaster Law Symposium conference, featuring a modern design and responsive layout.

## Website Structure

The website is divided into 5 main pages:

### 1. Home Page (`index.html`)
- **Hero Section**: Main conference banner with title, subtitle, date, venue, and registration button
- **About Section**: Conference overview and description
- **Featured Speakers**: Keynote speaker and chief counsel information with bio modals
- **Navigation**: Links to all other pages
- **Footer**: General information and navigation

### 2. Agenda Page (`agenda.html`)
- **Conference Schedule**: Single-day agenda with session details
- **Session Details**: Time, title, description, and speaker information for each session
- **Panel Modals**: Interactive panels with speaker information
- **Course Information**: CLE course details and objectives

### 3. Venue Page (`venue.html`)
- **Venue Information**: Conference venue details
- **Getting There**: Transportation and accessibility information
- **Accommodations**: Hotel information and booking options
- **Interactive Map**: Embedded Google Maps showing the venue location

### 4. Sponsors Page (`sponsors.html`)
- **Sponsor Information**: List of supporting organizations and sponsors
- **Sponsor Cards**: Display of sponsor names and descriptions

### 5. Registration Page (`register.html`)
- **Registration Status**: Registration information and status
- **Contact Information**: General contact details

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: 
  - Speaker bio modals
  - Panel information modals
  - Course information modals
  - Mobile-friendly navigation menu
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Cross-browser Compatible**: Works on all modern browsers

## Files

### HTML Files
- `index.html` - Home page
- `agenda.html` - Agenda page
- `venue.html` - Venue page
- `sponsors.html` - Sponsors page
- `register.html` - Registration page

### CSS Files
- `index.css` - Home page styling
- `agenda.css` - Agenda page styling
- `venue.css` - Venue page styling
- `sponsors.css` - Sponsors page styling
- `register.css` - Registration page styling
- `style.css` - Additional shared styles

### JavaScript Files
- `index.js` - Home page functionality and speaker modals
- `agenda.js` - Agenda page functionality, panel modals, and course information
- `venue.js` - Venue page functionality
- `sponsors.js` - Sponsors page functionality
- `register.js` - Registration page functionality
- `script.js` - Additional shared scripts

### Assets
- `SRC/` - Directory for website images and assets
  - Hero background image
  - Logo images
  - Placeholder headshot image

## Setup

1. Ensure all files are in the same directory
2. The `SRC/` folder should contain:
   - Hero background image
   - Logo images
   - Placeholder headshot image (`PH_HS.png`)
3. Open `index.html` in a web browser to view the website

## Customization

- **Colors**: Update the CSS variables in the respective CSS files to change the color scheme
- **Content**: Edit the HTML files to update conference information
- **Images**: Replace images in the `SRC/` folder with your own
- **Contact Information**: Update email, phone, and address in the footer sections
- **Speaker Information**: Update speaker data in `index.js` and `agenda.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Speaker information uses placeholder data - update speaker names, bios, and images in `index.js` and `agenda.js`
- Contact information uses placeholder values - update with actual contact details
- The Google Maps embed uses a placeholder URL - replace with the actual venue coordinates
- All external links have been removed for privacy
- Sponsor logos have been removed - add sponsor logos as needed 
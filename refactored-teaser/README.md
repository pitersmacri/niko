# Refactored Niko Atmosfera Coming Soon Page

This is a refactored version of the original "teaser" page for Niko Atmosfera, originally contained in a single HTML file.

## Changes Made

### 1. **Separation of Concerns**
- Split the original monolithic HTML file into separate HTML, CSS, and JavaScript files
- HTML file now contains only structure
- CSS file contains all styling
- JavaScript file contains all interactive functionality

### 2. **Performance Improvements**
- Added `loading="lazy"` attribute to the image for better performance
- Added `rel="noopener noreferrer"` to external links for security
- Used `requestAnimationFrame` for optimized scroll event handling
- Added font preconnect hints for faster font loading

### 3. **Accessibility Enhancements**
- Added ARIA labels to social media icons
- Improved semantic HTML structure
- Better contrast ratios for readability

### 4. **Code Quality**
- Organized CSS with clear comments and logical grouping
- Improved JavaScript with better variable names and documentation
- Used modern CSS features appropriately
- Added proper error checking in JavaScript

### 5. **Maintainability**
- Clear file structure makes future updates easier
- Modular approach allows for easier debugging
- Consistent coding style throughout

## File Structure
```
refactored-teaser/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # All JavaScript functionality
└── images/
    └── logo-branca.png # Logo image (placeholder)
```

## How to Use
1. Place the logo image at `images/logo-branca.png`
2. Open `index.html` in a web browser

## Features Maintained
- Smooth animations and transitions
- Responsive design for all screen sizes
- Social media hover effects
- Parallax scrolling effect
- Ripple click effects
- Gradient backgrounds
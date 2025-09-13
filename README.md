# Sanket's Portfolio Website

A modern, responsive portfolio website showcasing Sanket's skills, projects, and professional experience in both Software Development Engineering and Data Science & Machine Learning.

🔗 [Visit My Portfolio](https://sanket1305.github.io/portfolio/)

---

## Features

- **Responsive Design**: Works seamlessly on devices of all sizes
- **Light/Dark Mode**: Toggle between light and dark themes
- **Interactive UI**: Smooth animations and transitions
- **Resume Section**: Different resume versions for different career focuses
- **Project Showcase**: Filterable project gallery
- **Publications & Certifications**: Showcase of academic and professional achievements
- **Contact Form**: Easy way for visitors to get in touch

---

## Technology Stack

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- Component-based Architecture
- Font Awesome Icons
- Google Fonts
- Formspree (for form handling)

---

## CSS Organization

The CSS is organized using a component-based approach:

- **base.css**: Core styles, variables, and resets
- **common.css**: Shared styles used across the site (section headings, animations, utility classes, shared components)
- **responsive.css**: All media queries and responsive adaptations, organized by component
- **components/**: Each UI component has its own CSS file (e.g., `header.css`, `hero.css`, `about.css`, etc.)

### CSS Variables

The project uses CSS variables (custom properties) for consistent styling. Example:

```css
:root {
  --primary-color: #4361ee;
  --secondary-color: #3f37c9;
  --accent-color: #4895ef;
  --text-color: #333333;
  --text-color-light: #666666;
  --bg-color: #ffffff;
  --bg-color-alt: #f9f9f9;
  --card-bg: #ffffff;
  --border-color: #e0e0e0;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --success-color: #4caf50;
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 3rem;
  --spacing-xl: 5rem;
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;
  --border-radius-round: 50%;
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

### Best Practices

- Use existing CSS variables for colors, spacing, etc.
- Place component-specific styles in their dedicated files under `css/components/`
- Use BEM naming conventions for clarity
- Add all responsive styles to `responsive.css`
- Use `common.css` for shared components

### Dark Mode

The site supports dark mode through a class toggle on the `<body>` element. Dark mode styles are included in each component file.

---

## Project Structure

```
portfolio/
├── index.html
├── css/
│   ├── base.css
│   ├── common.css
│   ├── responsive.css
│   ├── components/
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── resume.css
│   │   ├── projects.css
│   │   ├── publications.css
│   │   ├── certifications.css
│   │   ├── education.css
│   │   ├── achievements.css
│   │   ├── skills.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   └── custom-icons.css
├── components/
│   ├── header.html
│   ├── hero.html
│   ├── about.html
│   ├── resume.html
│   ├── projects.html
│   ├── publications.html
│   ├── certifications.html
│   ├── education.html
│   ├── achievements.html
│   ├── skills.html
│   ├── contact.html
│   └── footer.html
├── js/
│   ├── main.js
│   └── template-engine.js
├── assets/
│   ├── favicon.svg
│   ├── images/
│   │   ├── Aravinth.jpg
│   │   ├── Abaram_Award.jpg
│   │   ├── Outstanding_Contributor.jpeg
│   │   ├── coursera-logo.svg
│   │   └── scaler-logo.svg
│   ├── projects/
│   │   ├── enterprise-dashboard.svg
│   │   ├── predictive-model.svg
│   │   └── ecg-classification.svg
│   └── resumes/
│       ├── Aravinth_Resume_SDE.pdf
│       ├── Aravinth_Resume_DSML.pdf
│       └── Aravinth_Resume.pdf
```

---

## Setup and Deployment

This website is designed to be hosted on GitHub Pages:

1. Fork this repository
2. Enable GitHub Pages in your repository settings
3. The site will be available at `https://aravinthvr.github.io/portfolio`

For local development:

1. Clone the repository
2. Open `index.html` in your browser

---

## Customization

- Update the profile image in the `assets/images/` folder
- Replace resume PDFs in `assets/resumes/` with your own
- Modify project details in the HTML
- Customize colors in CSS variables (in `base.css`)

---

## Contact Form

The contact form uses Formspree to handle submissions. To configure it for your own use:
1. Sign up for a free Formspree account
2. Create a new form and get your form endpoint
3. Replace the action URL in the HTML form

---

## License

This project is licensed under the Creative Commons Attribution 4.0 International License.

You are free to use, modify, and share this work, but **must provide appropriate credit** to the original author: **Aravinthaprasath V.**

---

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts](https://fonts.google.com/)
- Form Handling: [Formspree](https://formspree.io/)


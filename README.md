# Personal Portfolio Website

A modern, responsive developer portfolio built with **React 19** and **Vite**, styled with **Tailwind CSS** and animated with **Framer Motion**. All content is driven by a single JSON file — no code changes needed to update your info.

---

## Live Demo

> _Add your deployed URL here (e.g., Netlify, Vercel, GitHub Pages)_

---

## Screenshots

### Hero / Landing Section
![Hero Section](docs/screenshots/hero.png)
> _Replace with a screenshot of your hero/landing section_

### Skills Section
![Skills Section](docs/screenshots/skills.png)
> _Replace with a screenshot of your skills grid_

### Work Experience Section
![Work Experience Section](docs/screenshots/experience.png)
> _Replace with a screenshot of your work experience timeline_

### Projects Section
![Projects Section](docs/screenshots/projects.png)
> _Replace with a screenshot of your projects grid_

### Hackathons Section
![Hackathons Section](docs/screenshots/hackathons.png)
> _Replace with a screenshot of your hackathons section_

### Certifications & Awards
![Certifications Section](docs/screenshots/certifications.png)
> _Replace with a screenshot of your certifications and awards_

### Contact Section
![Contact Section](docs/screenshots/contact.png)
> _Replace with a screenshot of your contact section_

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons |
| Linting | ESLint |

---

## Project Structure

```
Portfolio/
├── public/                  # Static assets served as-is
├── src/
│   ├── assets/              # Images and static files used in JSX
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, Skills, WorkExperience, Projects,
│   │   │                    #   Hackathons, Certifications, Awards, Contact
│   │   └── ui/              # Reusable UI primitives
│   ├── data/
│   │   └── portfolio.json   # ← All site content lives here
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build       # Outputs to dist/
npm run preview     # Preview the production build locally
```

---

## Customisation

All content is managed through a single file: **`src/data/portfolio.json`**

### Sections you can configure

| Key | What it controls |
|---|---|
| `personal` | Name, title, bio, social links, resume URL |
| `workExperience` | Job history with role, company, bullets, and tech stack |
| `education` | Degrees, institutions, GPA, highlights |
| `skills` | Skill categories and individual skills |
| `projects` | Project cards with description, tech, GitHub, and demo links |
| `hackathons` | Hackathon events, results, and project descriptions |
| `certifications` | Certifications with issuer, date, and credential URL |
| `awards` | Awards and recognitions |

### Adding a profile photo

Place your photo in `src/assets/` and reference it inside the `Hero` component:

```jsx
import profilePhoto from '../assets/YourPhoto.png';
```

### Adding project screenshots

Add project images to `src/assets/` and set the `image` field in `portfolio.json`:

```json
{
  "id": 1,
  "title": "My Project",
  "image": "/src/assets/my-project-screenshot.png"
}
```

---

## Deployment

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder to Netlify, or connect your GitHub repo
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages

Add `base` to `vite.config.js`:

```js
export default {
  base: '/your-repo-name/',
}
```

Then build and push the `dist/` folder to the `gh-pages` branch.

---

## License

This project is open source and available under the [MIT License](LICENSE).

# Migration Guide: React + JS to React + TypeScript with Vite

## What Changed

### 1. Build Tool
- **Before**: Create React App (react-scripts)
- **After**: Vite (much faster builds and dev server)

### 2. Language
- **Before**: JavaScript
- **After**: TypeScript (better type safety and IDE support)

### 3. React Version
- **Before**: 18.2.0
- **After**: 19.2.4 (with improved features)

### 4. Package Manager
- Update to latest versions of all dependencies as of January 2026

## File Structure Changes

```
Old Structure:
- public/index.html
- src/index.js
- src/App.js
- src/components/*.js

New Structure:
- index.html (moved to root)
- src/main.tsx
- src/App.tsx
- src/components/*.tsx
- vite.config.ts
- tsconfig.json
```

## Key Changes to Understand

### Entry Point
- Old: `public/index.html` with React mounting
- New: `index.html` at root with script module pointing to `src/main.tsx`

### Environment Variables
- Old: `process.env.REACT_APP_*`
- New: `import.meta.env.VITE_*`
- Create `.env` file with your variables (see `.env.example`)

### Import Changes
All `.js` files are now `.tsx` files with TypeScript types.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Environment File
Copy `.env.example` to `.env` and fill in your EmailJS credentials:
```bash
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

### 3. Start Development Server
```bash
npm run dev
```
The app will open at `http://localhost:5173` (Vite's default port)

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## Important Notes

1. **TypeScript**: If you see any type errors, you may need to add type definitions for third-party libraries or use `any` types as needed.

2. **CSS/Tailwind**: Tailwind CSS should work as before. Make sure your CSS files are properly imported.

3. **Public Assets**: Assets in the `public/` folder should be referenced as `/filename` (e.g., `/Vamsi.png`).

4. **Lottie Files**: JSON animation files remain in `src/Assets/` and work the same way.

5. **React 19**: Some older React patterns may have changed. Check the official React documentation for updates.

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Clear Cache and Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Issues
Make sure all TypeScript files are correctly typed and check for any missing type definitions:
```bash
npm run build
```

## Migration Checklist

- [x] Converted all `.js` files to `.tsx`
- [x] Added TypeScript configuration
- [x] Updated package.json with latest versions
- [x] Created Vite configuration
- [x] Updated HTML entry point
- [x] Migrated environment variables
- [x] Created `.env.example` template
- [ ] Test all features locally
- [ ] Deploy to production

## Next Steps

1. Test the application locally with `npm run dev`
2. Update environment variables in `.env`
3. Run `npm run build` to create production bundle
4. Deploy to your hosting provider (Netlify, Vercel, etc.)

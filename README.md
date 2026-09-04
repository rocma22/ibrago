# IbraGo — React version

This is the React + Vite conversion of the IbraGo website, ready for adding new pages.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173).

## Project structure

```
src/
  main.jsx                 # entry point (Router, Theme, Language providers)
  App.jsx                  # layout: navbar, mobile menu, routes, footer
  index.css                # all global styles (design tokens, components)
  i18n/
    translations.js        # FR / EN / AR content dictionary
    LanguageContext.jsx     # language state + RTL handling
  theme/
    ThemeContext.jsx        # dark/light mode state
  hooks/
    useScrollReveal.js       # scroll-in animation, mirrors the old vanilla JS
  components/               # shared UI: Navbar, MobileMenu, Footer, WhatsAppFloat, LanguageSwitch
  data/
    restaurants.js           # restaurant cards data
  pages/
    Home.jsx                # assembles all sections for "/"
    sections/                # Hero, Services, Restaurants, HowItWorks, ContactCTA
```

## Adding a new page

1. Create a new file in `src/pages/`, e.g. `src/pages/About.jsx`:
   ```jsx
   export default function About() {
     return <section className="section"><h2>About</h2></section>
   }
   ```
2. Register it in `src/App.jsx`:
   ```jsx
   import About from './pages/About.jsx'
   // ...
   <Route path="/about" element={<About />} />
   ```
3. Link to it anywhere with `<Link to="/about">` (from `react-router-dom`) or a plain `<a href="/about">`.

The navbar, mobile menu, footer, theme toggle, language switcher, and floating WhatsApp button are all shared across every page automatically — no need to repeat them.

## Managing restaurants and photos

- **Text in 3 languages**: edit `src/i18n/translations.js` (one object per language, same keys).
- **Restaurant data**: edit `src/data/restaurants.js`. Each restaurant has a unique `key`, one `cover`, a `gallery` array, and a `menu` array.
- **Restaurant photos**: upload the cover to `public/restaurants/<key>/cover.jpg`, gallery photos to `public/restaurants/<key>/gallery/`, and menu photos to `public/restaurants/<key>/menu/`. Use names such as `gallery-1.jpg` and `menu-1.jpg`, then add every filename to the matching array in `restaurants.js`.
- **Add a restaurant**: create a new folder under `public/restaurants/`, add a new object to `restaurants` with a unique `key`, then add `rest.<key>.tag` and `rest.<key>.desc` in all three language objects in `src/i18n/translations.js`.
- **Remove a restaurant**: remove its object from `src/data/restaurants.js`, then delete its photo folder when it is no longer needed. Its detail URL will stop working automatically.
- **Colors, fonts, spacing**: edit the CSS variables at the top of `src/index.css`.

Photo paths are public URLs, so a file at `public/restaurants/littlejapan/menu/menu-1.jpg` is referenced as `/restaurants/littlejapan/menu/menu-1.jpg` in the data file. Keep keys lowercase and without spaces so the detail URL remains clean.

## Building for production

```bash
npm run build
```
Outputs a static site into `dist/`.

## Deploying

This project deploys to Vercel exactly like the previous static site:

1. Push this project to your GitHub repo (replacing the old single `index.html` version).
2. In Vercel, make sure the project's **Framework Preset** is set to **Vite** (Vercel usually auto-detects this from `package.json`).
3. Push to `main` — Vercel will run `npm install && npm run build` automatically and deploy the `dist/` folder.

No other config is needed; there's no `vercel.json` required for a standard Vite app.

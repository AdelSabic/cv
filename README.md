# Interactive CV/Resume Website - Multi-language Edition

A modern, responsive, and interactive personal resume/CV website with **English and Bosnian language support**, built with **React**, **TypeScript**, and **Vite**. Perfect for presenting yourself to potential employers with beautiful animations and smooth interactions.

## 🎨 Features

- **Hero Section** - Eye-catching introduction with smooth animations
- **About Section** - Showcase your professional background with statistics
- **Skills Section** - Display your technical skills with progress bars and category filtering
- **Experience Timeline** - Interactive timeline view of your professional experience
- **Projects Showcase** - Card-based project portfolio with hover effects
- **Contact Form** - Fully functional contact form for inquiries
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Scrolling** - Navigation with smooth scroll to sections
- **Modern Animations** - Engaging CSS animations and transitions
- **🌐 Multi-language Support** - English and Bosnian language selection
- **🎯 Language Selector Modal** - Visual language choice on first visit
- **💾 Language Persistence** - Saves language preference in localStorage
- **📷 LinkedIn Profile Picture** - Support for embedding your LinkedIn photo

## 🌍 Localization Features

- **Dual Language Support**: English and Bosnian
- **Language Selector Modal**: Beautiful UI for first-time visitors to choose language
- **Language Persistence**: Remember user's language choice
- **Complete Translations**: All content dynamically translated including:
  - Navigation
  - Section headings
  - Contact information
  - Experience and project data
  - Form labels and messages

## 🛠️ Tech Stack

- **React 18+** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 5** - Lightning-fast build tool and dev server
- **CSS3** - Modern styling with animations and flexbox/grid layouts
- **Responsive Design** - Mobile-first approach
- **Context API** - Global language state management

## 📁 Project Structure

```
src/
├── localization/
│   ├── LanguageContext.tsx    # Language context provider
│   ├── en.ts                  # English translations
│   └── bs.ts                  # Bosnian translations
├── components/
│   ├── Header.tsx             # Hero section with navigation
│   ├── Header.css
│   ├── LanguageSelector.tsx   # Language choice modal
│   ├── LanguageSelector.css
│   ├── About.tsx              # About section with LinkedIn photo support
│   ├── About.css
│   ├── Skills.tsx             # Skills showcase with filtering
│   ├── Skills.css
│   ├── Experience.tsx         # Professional experience timeline
│   ├── Experience.css
│   ├── Projects.tsx           # Project portfolio
│   ├── Projects.css
│   ├── Contact.tsx            # Contact form
│   ├── Contact.css
│   ├── Footer.tsx             # Footer section
│   └── Footer.css
├── App.tsx                    # Main app with LanguageProvider
├── App.css
├── index.css                  # Global styles
├── main.tsx                   # Entry point
└── vite-env.d.ts             # Vite type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20.12+ (or newer)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Update Your Information

Edit the component files to add your personal information:

- **Header** - Change name (already set to "Adel Sabic")
- **About** - Add your bio and statistics
- **Skills** - Update your technical skills
- **Experience** - Add your work experience
- **Projects** - Showcase your portfolio projects
- **Contact** - Update contact information and social links

### Add Your LinkedIn Profile Picture

1. Go to your LinkedIn profile: https://www.linkedin.com/in/adelsabic/
2. Right-click on your profile picture and select "Copy image link"
3. Open [src/components/About.tsx](src/components/About.tsx)
4. Find the `profileImageUrl` variable and replace with your LinkedIn image URL:

```typescript
const profileImageUrl = 'YOUR_LINKEDIN_IMAGE_URL_HERE';
```

### Manage Translations

Edit the language files to customize translations:

- **English**: [src/localization/en.ts](src/localization/en.ts)
- **Bosnian**: [src/localization/bs.ts](src/localization/bs.ts)

Each translation file contains all text used throughout the app. To add new translations:

1. Add the key-value pair to both language files
2. Use it in components with: `const { t } = useLanguage(); t.category.key`

### Using the Language Hook

In any component, use the `useLanguage` hook to access translations:

```typescript
import { useLanguage } from '../localization/LanguageContext';


# Interactive CV/Resume Website - Multi-language Edition

A modern, responsive, and interactive personal resume/CV website with **English and Bosnian language support**, built with **React**, **TypeScript**, and **Vite**. Perfect for presenting yourself to potential employers with beautiful animations and smooth interactions.

## 🎨 Features

- **Hero Section** – Eye-catching introduction with smooth animations
- **About Section** – Showcase your professional background with statistics
- **Skills Section** – Display your technical skills with progress bars and category filtering
- **Experience Timeline** – Interactive timeline view of your professional experience
- **Projects Showcase** – Card-based project portfolio with hover effects
- **Contact Form** – Fully functional contact form for inquiries
- **Responsive Design** – Works perfectly on desktop, tablet, and mobile devices
- **Smooth Scrolling** – Navigation with smooth scroll to sections
- **Modern Animations** – Engaging CSS animations and transitions
- **🌐 Multi-language Support** – English and Bosnian language selection
- **🎯 Language Selector Modal** – Visual language choice on first visit
- **💾 Language Persistence** – Saves language preference in localStorage
- **📷 LinkedIn Profile Picture** – Support for embedding your LinkedIn photo

## 🌍 Localization Features

- **Dual Language Support:** English and Bosnian
- **Language Selector Modal:** Beautiful UI for first-time visitors to choose language
- **Language Persistence:** Remember user's language choice
- **Complete Translations:** All content dynamically translated including:
  - Navigation
  - Section headings
  - Contact information
  - Experience and project data
  - Form labels and messages

## 🛠️ Tech Stack

- **React 18+** – UI library
- **TypeScript** – Type-safe JavaScript
- **Vite 5** – Lightning-fast build tool and dev server
- **CSS3** – Modern styling with animations and flexbox/grid layouts
- **Responsive Design** – Mobile-first approach
- **Context API** – Global language state management

## 📁 Project Structure

```text
src/
├── localization/
│   ├── LanguageContext.tsx    # Language context provider
│   ├── en.ts                 # English translations
│   └── bs.ts                 # Bosnian translations
├── components/
│   ├── Header.tsx            # Hero section with navigation
│   ├── Header.css
│   ├── LanguageSelector.tsx  # Language choice modal
│   ├── LanguageSelector.css
│   ├── About.tsx             # About section with LinkedIn photo support
│   ├── About.css
│   ├── Skills.tsx            # Skills showcase with filtering
│   ├── Skills.css
│   ├── Experience.tsx        # Professional experience timeline
│   ├── Experience.css
│   ├── Projects.tsx          # Project portfolio
│   ├── Projects.css
│   ├── Contact.tsx           # Contact form
│   ├── Contact.css
│   ├── Footer.tsx            # Footer section
│   └── Footer.css
├── App.tsx                   # Main app with LanguageProvider
├── App.css
├── index.css                 # Global styles
├── main.tsx                  # Entry point
└── vite-env.d.ts             # Vite type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.12+ (or newer)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`
3. **Build for production:**
   ```bash
   npm run build
   ```
4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Update Your Information

Edit the component files to add your personal information:

- **Header** – Change name (already set to "Adel Sabic")
- **About** – Add your bio and statistics
- **Skills** – Update your technical skills
- **Experience** – Add your work experience
- **Projects** – Showcase your portfolio projects
- **Contact** – Update contact information and social links

### Add Your LinkedIn Profile Picture

1. Go to your LinkedIn profile: https://www.linkedin.com/in/adelsabic/
2. Right-click on your profile picture and select "Copy image link"
3. Open [`src/components/About.tsx`](src/components/About.tsx)
4. Find the `profileImageUrl` variable and replace with your LinkedIn image URL:

   ```typescript
   const profileImageUrl = 'YOUR_LINKEDIN_IMAGE_URL_HERE';
   ```

### Manage Translations

Edit the language files to customize translations:

- **English**: [`src/localization/en.ts`](src/localization/en.ts)
- **Bosnian**: [`src/localization/bs.ts`](src/localization/bs.ts)

Each translation file contains all text used throughout the app. To add new translations:

1. Add the key-value pair to both language files
2. Use it in components with: `const { t } = useLanguage(); t.category.key`

### Using the Language Hook

In any component, use the `useLanguage` hook to access translations:

```typescript
import { useLanguage } from '../localization/LanguageContext';

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  return (
    <div>
      <h1>{t.about.heading}</h1>
      <p>Current language: {language}</p>
    </div>
  );
}
```

### Color Scheme

The project uses a purple-blue gradient (`#667eea` to `#764ba2`). To change colors, update the CSS variables in [`src/index.css`](src/index.css):

```css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
  /* ... other variables ... */
}
```

## 🎯 Key Components

### LanguageContext and Provider

- Global language state management
- Automatic localStorage persistence
- Type-safe translation system

### LanguageSelector Modal

- Beautiful first-time visitor experience
- Language choice with flag emojis
- Smooth animations

### Skills Section

- Interactive Filtering – Filter skills by frontend, backend, or tools
- Animated Progress Bars – Visual representation of skill levels
- Smooth Transitions – Professional animations on hover

### Experience Timeline

- Vertical Timeline – Clean, professional layout
- Interactive Cards – Hover effects and smooth transitions
- Skill Tags – Technologies used in each role

### Projects Showcase

- Card Layout – Modern card-based design
- Hover Effects – Image scaling and color transitions
- Category Tags – Technology stack display

### About Section with LinkedIn Photo

- LinkedIn profile picture integration
- Fallback placeholder if image fails
- Responsive image display

## 🌐 Deployment

Ready to deploy? Here are some options:

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px – 1023px
- **Mobile**: Below 768px

## ⚡ Performance

- Optimized for fast loading with Vite
- CSS-based animations (no JavaScript overhead)
- Minimal dependencies for smaller bundle size
- Production build: ~50KB gzipped
- Multi-language support without performance impact

## 🔧 Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

## 💾 Local Storage

The app uses localStorage to persist:

- **language** – User's language choice (en/bs)
- **languageSelected** – Whether user has selected language

To clear preferences: Open browser DevTools → Application → localStorage → delete entries

## 🤝 Language Support

Currently supports:

- 🇬🇧 English (en)
- 🇧🇦 Bosnian (bs)

To add more languages:
1. Create a new translation file: `src/localization/[lang].ts`
2. Follow the structure of existing files
3. Import and add to language options in translations

## 📄 License

This project is open source and available under the MIT License.

## 🎓 Tips for Using Your CV Website

- **Keep it professional** – Your CV website represents you
- **Update regularly** – Add new projects and experiences as you complete them
- **Use your real data** – Replace placeholder experience and projects with your actual work
- **Optimize images** – If adding portfolio images, optimize them for web
- **Test on mobile** – Ensure it looks great on all devices
- **Add social links** – Include GitHub (github.com/adelsabic), LinkedIn, Twitter, etc.
- **Test both languages** – Make sure content reads well in both English and Bosnian

## 🚀 Next Steps

1. Add your LinkedIn profile picture URL in [`src/components/About.tsx`](src/components/About.tsx)
2. Update your real experience in [`src/localization/en.ts`](src/localization/en.ts) and [`src/localization/bs.ts`](src/localization/bs.ts)
3. Update contact information (email, phone, social links)
4. Customize your projects and skills
5. Deploy to Vercel or your preferred hosting

---

Made with ❤️ using React + TypeScript + Vite + Multi-language Support
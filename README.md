# Jacob Mammen - Digital Portfolio

A modern, responsive digital portfolio built with React, TypeScript, and CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with React and optimized for speed
- **SEO Friendly**: Structured for better search engine visibility
- **Easy Customization**: Well-organized code structure with separate CSS files for easy modifications

## 📋 Sections

1. **Home/Hero**: Eye-catching landing section with your background image
2. **About**: Personal introduction with stats and profile image
3. **Skills**: Technical skills organized by categories
4. **Experience**: Timeline view of work experience and education
5. **Projects**: Showcase of featured projects with tech stacks
6. **Contact**: Contact form and social media links

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the portfolio directory:

   ```bash
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

### Adding Your Background Image

1. **Replace the hero background image**:
   - Add your image to the `public` folder and name it `background.jpg` (or update the path in `src/components/Home.css`)
   - The image should be high resolution (at least 1920x1080) for best quality
   - Your provided image of you standing by the waterfront would be perfect for this!

### Adding Your Profile Picture

1. **Replace the profile image**:
   - Add your profile photo to the `public` folder and name it `placeholder-avatar.jpg`
   - Update the path in `src/components/About.tsx` if needed
   - Recommended size: 400x400px or higher, square aspect ratio

### Updating Personal Information

#### Navigation (`src/components/Navigation.tsx`)

- Change "Jacob Mammen" to your name in the logo

#### Home Section (`src/components/Home.tsx`)

- Update the hero title, subtitle, and description
- Modify the call-to-action buttons

#### About Section (`src/components/About.tsx`)

- Update the personal description
- Modify the statistics (years of experience, projects completed, etc.)

#### Skills Section (`src/components/Skills.tsx`)

- Update the skill categories and individual skills
- Add or remove technologies based on your expertise

#### Experience Section (`src/components/Experience.tsx`)

- Replace the sample experience data with your actual work history
- Update job titles, companies, dates, and achievements

#### Projects Section (`src/components/Projects.tsx`)

- Replace sample projects with your actual portfolio projects
- Update project descriptions, tech stacks, and links
- Add real GitHub and live demo URLs

#### Contact Section (`src/components/Contact.tsx`)

- Update contact information (email, phone, location)
- Update social media links
- Modify the contact form action if needed

### Customizing Styles

Each component has its own CSS file for easy customization:

- `src/components/Navigation.css` - Navigation bar styles
- `src/components/Home.css` - Hero section styles and animations
- `src/components/About.css` - About section layout and stats
- `src/components/Skills.css` - Skills grid and categories
- `src/components/Experience.css` - Timeline layout and animations
- `src/components/Projects.css` - Project cards and grid layout
- `src/components/Contact.css` - Contact form and social links
- `src/App.css` - Global styles and utilities

### Color Scheme

The portfolio uses a blue gradient theme. To change colors, update these CSS custom properties:

- Primary: `#007bff`
- Secondary: `#00d4ff`
- Text: `#333`
- Light text: `#666`
- Background: `#f8f9fa`

You can find these colors throughout the CSS files and easily replace them with your preferred color scheme.

### Adding New Sections

To add new sections:

1. Create a new component in `src/components/`
2. Create a corresponding CSS file for the component
3. Add the route in `src/App.tsx`
4. Add the navigation link in `src/components/Navigation.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- Mobile-first design approach
- Flexible grid layouts
- Responsive navigation with hamburger menu
- Optimized images and typography for all screen sizes

## 🎭 Animations

The portfolio includes smooth animations defined in CSS:

- Fade-in effects and keyframe animations
- Hover animations on cards and buttons
- Smooth transitions and transforms
- Loading animations and scroll indicators

## 📄 Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deployment Options

1. **Netlify**: Drag and drop the `build` folder to Netlify
2. **Vercel**: Connect your GitHub repository for automatic deployments
3. **GitHub Pages**: Use `gh-pages` package for GitHub Pages deployment
4. **AWS S3**: Upload the build folder to an S3 bucket

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Modern styling with Flexbox and Grid
- **React Router** - Client-side routing
- **Create React App** - Project setup and build tools

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx & Navigation.css
│   ├── Home.tsx & Home.css
│   ├── About.tsx & About.css
│   ├── Skills.tsx & Skills.css
│   ├── Experience.tsx & Experience.css
│   ├── Projects.tsx & Projects.css
│   └── Contact.tsx & Contact.css
├── App.tsx
├── App.css (Global styles)
└── index.tsx
```

## 📞 Support

If you need help customizing your portfolio:

1. Check the CSS files for easy style modifications
2. Refer to the React documentation for component changes
3. Each component is self-contained with its own CSS file for easy maintenance

## 🎯 Quick Start Checklist

- [ ] Replace `background.jpg` with your hero image
- [ ] Replace `placeholder-avatar.jpg` with your profile photo
- [ ] Update personal information in all components
- [ ] Customize colors in CSS files to match your brand
- [ ] Add your actual projects and experience
- [ ] Update contact information and social links
- [ ] Test responsiveness on different devices
- [ ] Build and deploy to your preferred platform

---

**Happy coding! 🚀**

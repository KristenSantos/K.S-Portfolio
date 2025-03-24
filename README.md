# Kristen Santos Portfolio

A modern, responsive portfolio website built with React, showcasing my work as a software engineer and teaching assistant. The site features smooth animations, interactive elements, and a consistent design language throughout.

##  Live Demo
[Your deployed site URL here]

##  Features

- **Modern Design**: Clean, responsive interface with consistent styling
- **Interactive Elements**: Smooth animations and transitions
- **Full-Screen Sections**: Snap-scrolling sections for better navigation
- **Responsive Layout**: Optimized for all device sizes
- **PDF Resume**: Downloadable resume with matching portfolio styling

### Key Pages
- **Home**: Introduction and professional focus areas
- **About**: Detailed professional journey and technical skills
- **Work**: Showcase of projects and contributions
- **Resume**: Interactive resume with download option
- **Contact**: Contact form and professional links

##  Tech Stack

- React
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons
- EmailJS

##  Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Create a .env file in the root directory (if using EmailJS)
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## 📂 Project Structure

```
src/
  ├── components/
  │   ├── LoadingScreen.jsx
  │   ├── Navbar.jsx
  │   ├── ProjectCard.jsx
  │   ├── FocusCard.jsx
  │   └── TechnicalSkills.jsx
  ├── pages/
  │   ├── Home.jsx
  │   ├── About.jsx
  │   ├── Work.jsx
  │   ├── Resume.jsx
  │   └── Contact.jsx
  ├── App.jsx
  └── main.jsx
```

##  Color Palette

- Primary: `#E43D12` (Vivid Red-Orange)
- Secondary: `#D6536D` (Soft Pink-Red)
- Accent: `#FFA2B6` (Light Pink)
- Highlight: `#EFB11D` (Golden Yellow)
- Background: `#EBE9E1` (Off-White)

##  Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚙️ Configuration

### Tailwind Configuration
The project uses a custom Tailwind configuration for consistent styling:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E43D12',
        secondary: '#D6536D',
        accent: '#FFA2B6',
        highlight: '#EFB11D',
        background: '#EBE9E1',
      },
    },
  },
  plugins: [],
}
```

##  Development

### Running Tests
```bash
npm run test
```

### Linting
```bash
npm run lint
```

##  License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

##  Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Kristen Santos - [Kristensxntos@gmail.com](mailto:Kristensxntos@gmail.com)

Project Link: [https://github.com/KristenSantos/K.S-Portfolio](https://github.com/KristenSantos/K.S-Portfolio)


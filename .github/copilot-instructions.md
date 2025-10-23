# Portfolio Project - AI Agent Instructions

## Project Overview
This is a React-based portfolio website using modern web technologies. The project uses Create React App as its foundation, with Tailwind CSS for styling and Framer Motion for animations.

## Key Technologies
- React 19.x
- Tailwind CSS 3.x
- Framer Motion 12.x
- HeroUI Components

## Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components representing different sections
└── assets/        # Static assets
```

## Component Architecture
- `HomePage` (`src/pages/HomePage.js`) is the main container component
- Navigation and sections are split into separate components for maintainability
- UI components use HeroUI provider for consistent theming

## Development Workflow

### Setup
```bash
npm install    # Install dependencies
npm start     # Start development server at http://localhost:3000
```

### Building
```bash
npm run build  # Creates production build in build/
```

## Styling Patterns
- Uses Tailwind CSS for utility-first styling
- Configuration in `tailwind.config.js`
- PostCSS setup in `postcss.config.js`

## Best Practices
1. Component organization:
   - Pages in `src/pages/`
   - Reusable components in `src/components/`
   - Each component in its own file
2. Use HeroUI components for consistent UI elements
3. Animation guidelines:
   - Use Framer Motion for component animations
   - Keep animations subtle and performance-focused

## Common Operations
- Component creation: Place new components in appropriate directory (`pages/` or `components/`)
- Styling: Use Tailwind utility classes, following mobile-first responsive design
- Navigation: Edit `NavigationBar.js` for site navigation updates

## Testing
- Test files should be co-located with components (`*.test.js`)
- Run tests with `npm test`
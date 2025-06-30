# NHS Project

A modern web application for the NHS project, built with Next.js, TypeScript, and Tailwind CSS.

## Features
- Responsive design with Tailwind CSS
- Multi-language support (English, Urdu)
- Contact form and team profiles
- Interactive map and FAQ section
- Theming and dark mode
- Modular component structure

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/foamclass/nhs.git
   cd nhs
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Copy the example environment file and set your API keys:
   ```bash
   cp env.production.example .env
   # Edit .env with your credentials
   ```

### Running the Development Server
```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure
- `src/app/` – Main application pages
- `src/components/` – Reusable UI and layout components
- `src/ai/` – AI and flow logic
- `src/hooks/` – Custom React hooks
- `src/lib/` – Utility functions and constants
- `src/locales/` – Localization files

## Environment Variables
Create a `.env` file in the root directory. Example:
```
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## Deployment
See `DEPLOYMENT.md` for deployment instructions.

## License
This project is private and for authorized collaborators only.

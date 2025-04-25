# Toolbox Hub

A modern, fast, and responsive toolbox website built with Astro. This project provides a curated collection of useful tools and resources organized by categories.

## 🚀 Features

- ⚡️ Lightning-fast performance with Astro
- 📱 Fully responsive design
- 🎨 Modern and clean UI
- 🔍 Easy navigation and categorization
- 🔎 Real-time search functionality
- 🌙 Dark/Light mode support
- 🚀 Zero JavaScript by default
- 📦 Easy deployment

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vercel](https://vercel.com) - Deployment platform

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/toolbox-hub.git
cd toolbox-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🚀 Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

Or deploy manually:
```bash
npm run build
```

## 📁 Project Structure

```
toolbox-hub/
├── src/
│   ├── components/     # Reusable components
│   │   ├── ToolCard.astro    # Individual tool card component
│   │   └── SearchBar.astro   # Search functionality component
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
├── public/             # Static assets
├── astro.config.mjs    # Astro configuration
└── package.json        # Project dependencies
```

## 🎨 Customization

1. Edit `src/data/tools.ts` to modify the tools list
2. Customize styles in `src/styles/`
3. Modify layouts in `src/layouts/`

## 📝 License

MIT License @ Loong

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 
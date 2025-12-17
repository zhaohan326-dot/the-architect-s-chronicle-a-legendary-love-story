# The Architect's Chronicle: A Legendary Love Story

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/zhaohan326-dot/the-architect-s-chronicle-a-legendary-love-story)

A whimsical, illustrative dating simulator and visual novel (Galgame) inspired by *How I Met Your Mother*. Step into the shoes of The Architect navigating life, friendship, and romance in New York City. Featuring a robust Visual Novel engine with a 'Sketchbook' aesthetic mimicking architectural drawings and doodles, 'Playbook' decision engine, 'Suit Up' stylishness meter, and 'Blue French Horn' romanticism tracker.

## Features

- **Immersive Visual Novel Engine**: Hand-drawn character sprites, dynamic backgrounds, and typewriter-style dialogue.
- **Branching Narratives**: Player choices influence relationships with characters like Robin, Quinn, and Tracy.
- **Illustrative UI**: Sketchy borders, handwritten typography, paper textures, watercolor fades, and doodle animations.
- **Game Mechanics**: Track 'Suit Up' stylishness and romanticism stats; framed by future narrator storytelling.
- **Responsive Design**: Optimized for desktop and mobile with smooth interactions via Framer Motion.
- **Playbook History**: Review dialogue and choices in a Barney-inspired scribbled log.
- **Local Save System**: Persistence via localStorage for multiple playthroughs and endings.
- **Views**: Living Room (main menu), Storyboard (game loop), Playbook (history/log).

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS 3, shadcn/ui
- **State Management**: Zustand
- **Animations & UI**: Framer Motion, Lucide React icons
- **Routing**: React Router DOM 6
- **Utilities**: clsx, tailwind-merge, Zod, Sonner (toasts)
- **Deployment**: Cloudflare Workers/Pages, Wrangler
- **Data Flow**: Client-side JSON script graph with no backend required
- **Dev Tools**: Bun, ESLint, Prettier

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (package manager and runtime)
- [Node.js](https://nodejs.org/) (for some dev tools)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (for Cloudflare deployment)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd architects-chronicle
   ```

2. Install dependencies:
   ```
   bun install
   ```

### Development

1. Start the development server:
   ```
   bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. Lint and type-check:
   ```
   bun lint
   ```

### Build

Build for production:
```
bun build
```

Preview the build:
```
bun preview
```

## Usage

- **Play the Game**: Navigate from the Living Room menu to start episodes. Read dialogue, make choices via sticky-note buttons.
- **Views**:
  - **Living Room**: Main menu with hotspots for New Game, Gallery, Settings.
  - **Storyboard**: Core gameplay with stage, dialogue, and choices.
  - **Playbook**: History log of decisions and dialogue.
- **Controls**: Mouse/keyboard; mobile touch-friendly.
- **Customization**: Edit `src/data/script.json` for new story branches (see dataFlow in blueprint).

Example interaction flow:
1. Click "Start Legendary Story" → Intro narrator sequence.
2. Pub scene → Choose "Suit Up" or "Steal Blue French Horn" → Stats update → Branch.

## Deployment

Deploy to Cloudflare Workers/Pages:

1. Login to Cloudflare:
   ```
   wrangler login
   ```

2. Deploy:
   ```
   bun run deploy
   ```

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/zhaohan326-dot/the-architect-s-chronicle-a-legendary-love-story)

The app will be live at your Cloudflare Workers URL. Assets are served via Cloudflare for global CDN performance.

## Scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Start dev server |
| `bun build` | Build for production |
| `bun lint` | Run ESLint |
| `bun preview` | Preview production build |
| `bun deploy` | Deploy to Cloudflare |
| `wrangler types` | Generate Worker types |

## Project Structure

```
src/
├── components/     # UI components (shadcn/ui + custom)
├── hooks/          # Custom React hooks
├── lib/            # Utilities (error reporting, clsx)
├── pages/          # Route components (HomePage.tsx)
├── main.tsx        # App entry + Router
└── stores/         # Zustand game state (added)
worker/             # Cloudflare Worker routes
```

## Contributing

1. Fork the repo and create a feature branch (`git checkout -b feature/amazing-feature`).
2. Commit changes (`git commit -m 'Add amazing feature'`).
3. Push to branch (`git push origin feature/amazing-feature`).
4. Open a Pull Request.

Follow existing code style (ESLint, Prettier). Focus on visual excellence and zero runtime errors.

## License

MIT License. See [LICENSE](LICENSE) for details.
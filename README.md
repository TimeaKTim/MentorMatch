# MentorMatch — Frontend

React + Vite + TypeScript application for the MentorMatch mentorship platform.

## Prerequisites

- **Node.js** 20+ (check with `node -v`)
- **npm** 10+ (check with `npm -v`)

## Getting Started

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173**.

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Type-check and build for production      |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint on all TS/TSX files           |
| `npm run format`  | Format all source files with Prettier    |

## Project Structure

```
src/
├── components/
│   ├── ui/          # Base components (Button, Card, Input, Badge, etc.)
│   └── layout/      # App shell, route guards (ProtectedRoute, RoleRoute)
├── pages/           # Route-level page components
│   ├── Auth/        # SignIn, SignUp, SelectRole
│   ├── Onboarding/  # MenteeOnboarding, MentorOnboarding
│   ├── Dashboard/   # MenteeDashboard, MentorDashboard
│   ├── Mentors/     # FindMentors, MentorProfile, BookSession
│   ├── MyMentors/
│   ├── Progress/
│   └── Messages/
├── hooks/           # Custom React hooks
├── lib/             # API client (Axios), utilities
├── stores/          # Zustand stores (auth)
├── types/           # TypeScript interfaces
├── router.tsx       # All route definitions
├── App.tsx          # Root component
└── main.tsx         # Entry point with QueryClientProvider
```

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — Build tool and dev server
- **TypeScript** — Strict mode enabled
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — Component library (Radix UI primitives)
- **React Router 7** — Client-side routing
- **TanStack Query 5** — Server state and API caching
- **Zustand** — Client state management
- **Axios** — HTTP client with JWT interceptor
- **React Hook Form + Zod** — Form handling and validation
- **Lucide React** — Icons

## API Proxy

In development, all requests to `/api/*` are proxied to `http://localhost:8080` (the Spring Boot backend). This is configured in `vite.config.ts`.

Make sure the backend is running before testing any API calls.

## Design Tokens

The MentorMatch color palette is defined in `tailwind.config.ts`:

- **Primary (blue):** `primary-500` → `#4A56E2`
- **Purple:** `purple-500` → `#7C3AED`
- **Success (green):** `success-500` → `#16A34A`

Use these via Tailwind classes: `bg-primary-500`, `text-purple-600`, `border-success-500`, etc.

## Auth Flow

The app uses JWT authentication stored in localStorage via Zustand:

1. User signs up/in → backend returns a JWT
2. Token is stored in `authStore` and persisted to localStorage
3. Axios interceptor attaches the token to every `/api` request
4. If the backend returns 401, the user is logged out and redirected to `/signin`
5. Routes wrapped in `ProtectedRoute` require authentication
6. `RoleRoute` restricts access by user role (MENTEE / MENTOR)

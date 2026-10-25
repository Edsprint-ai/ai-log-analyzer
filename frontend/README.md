# AI Log Analyzer — Frontend

This folder contains the Next.js, TypeScript, and Tailwind CSS frontend
for the AI Log Analyzer project.

## Prerequisites

- Node.js 22+
- pnpm
- Docker Desktop

## Running the Project

### 1. Backend and Database

From the `squad-1` root directory:

```bash
pnpm install
cp .env.example .env
docker compose up -d db
pnpm doctor
pnpm dev
```

The Express backend runs at http://localhost:3000.

### 2. Frontend

Open another terminal:

```bash
cd frontend
pnpm install
pnpm dev --port 3001
```

The Next.js frontend runs at http://localhost:3001.

## Verification

From the repository root:

```bash
pnpm preflight
```

From the `frontend` directory:

```bash
pnpm build
```

## Current Status

- Express backend: Running
- PostgreSQL: Configured using Docker
- Next.js frontend: Initial setup complete
- Frontend and backend integration: Pending

The existing Express starter application remains unchanged.
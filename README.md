# AI Log Analyzer

AI Build Sprint, Cohort 5.

Helps a security analyst with one website access log and about 20 minutes answer:
**"Which activity looks suspicious, and which log lines support that?"**

The project skeleton, and full setup steps, are coming in the first pull request.

========================================STEPS======================================

## Local Development Setup

### Prerequisites
- Node.js 22+
- pnpm
- Docker Desktop

### Installation

Clone the repository and install all dependencies from the root:

```bash
git clone https://github.com/Edsprint-ai/ai-log-analyzer.git
cd ai-log-analyzer
pnpm install
```

This installs dependencies for both `frontend` and `backend`.

### Start PostgreSQL

Make sure Docker Desktop is running, then execute:

```bash
docker compose up -d db
```

PostgreSQL runs on port `5433`.

### Start the Backend

From the repository root:

```bash
pnpm dev:backend
```

Express runs on `http://localhost:4000`.

Verify: `http://localhost:4000/health` should return `ok`.

### Start the Frontend

In another terminal, from the repository root:

```bash
pnpm dev:frontend
```

Open `http://localhost:3000`.

The page should display:

**AI Log Analyzer**

Backend Status: ok

### Verification

From the repository root:

```bash
pnpm typecheck:backend
pnpm build:frontend
```

### Current Status

The frontend, backend, PostgreSQL container, and pnpm workspace are configured. The `/health` endpoint confirms frontend-backend communication. Log parsing, detection rules, and the investigation dashboard will be implemented in subsequent development.

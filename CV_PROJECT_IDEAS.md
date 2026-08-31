# CV-Improving Project Plan

Analysis of the current résumé (`src/app/core/shared/data/profile.data.ts`, `public/i18n/en.json`)
and which projects would strengthen it most.

## Current profile

- 5 yrs full-stack: Angular + Java / Spring Boot, enterprise apps (DXC Technology, Indra / Minsait)
- Résumé claims micro-frontend / micro-services architecture experience at both jobs
- Bachelor's in Computer Engineering **in progress** (UOC, since 2024)
- Front-end craft already provable: this portfolio repo (Angular 22 zoneless, signals, Signal Forms,
  Transloco i18n, Tailwind v4, Vitest, headless-Chrome PDF generation)
- Native ES/CA, advanced Chinese, English B2

## Gaps a project should close

- [ ] **Cloud / CI-CD / deployment footprint** — `Docker` is on the skills list with nothing behind
      it; no AWS/Azure/GCP, no pipeline, no orchestration. Biggest blocker for senior/staff roles.
- [ ] **Micro-frontend claim is unbacked** — listed on both jobs, nothing demonstrable.
- [ ] **No visible backend artifact** — Spring Boot claimed, nothing public to point a recruiter at.
- [ ] **Zero AI / LLM work** — strong current hiring signal, completely absent.
- [ ] **GitHub is nearly empty** — only this repo; no OSS contributions, no published package.

---

## Project 1 — Deployed full-stack app with its own backend (highest impact)

Proves the exact stack already on the résumé **and** fills the cloud / CI-CD / public-backend gaps
in one project.

- [ ] Pick a real, narrow problem domain (not a to-do app)
- [ ] Angular front-end (reuse patterns from this repo: standalone, signals, OnPush)
- [ ] Spring Boot REST API
- [ ] PostgreSQL with a non-trivial data model (migrations via Flyway/Liquibase)
- [ ] OAuth2 / JWT authentication + authorization
- [ ] OpenAPI / Swagger docs generated from the API
- [ ] Unit tests (JUnit, Vitest) + integration tests with Testcontainers
- [ ] `docker-compose.yml` for the full local stack
- [ ] GitHub Actions pipeline: lint → test → build → deploy
- [ ] Deployed to a cloud free tier (Fly.io / Render / Railway / AWS)
- [ ] Architecture README (diagram, decisions, trade-offs)
- [ ] Live URL + repo link added to the résumé

## Project 2 — Angular micro-frontend architecture demo

Converts an unbacked résumé claim into something clickable; signals architecture-level thinking.

- [ ] Shell app using Native Federation (Angular 22)
- [ ] 2–3 independently deployable remotes
- [ ] API gateway in front of 2 Spring Boot services
- [ ] Independent build + deploy per remote (separate pipelines)
- [ ] Shared design-system / component library across remotes
- [ ] README explaining the topology and why micro-frontends here

## Project 3 — LLM feature inside Project 1

Doesn't need to be large; it needs to exist and be well-built.

- [ ] Choose a feature: RAG over docs / semantic search / tool-using assistant
- [ ] Integrate the Claude API
- [ ] Streaming responses in the UI
- [ ] Proper error handling + retries
- [ ] Token / cost awareness (logging, limits)
- [ ] Evaluation notes: what works, what doesn't, prompts used

## Project 4 — Publish a small Angular library to npm

Shows you can ship to a standard others depend on. Leans on your bleeding-edge Angular knowledge.

- [ ] Pick a scope: signal-forms validator pack / Transloco helper / a component
- [ ] Build as an Angular library (ng-packagr)
- [ ] Docs site or thorough README with examples
- [ ] Tests + CI
- [ ] Publish to npm with semver
- [ ] (Alternative) land 2–3 PRs on Angular / Transloco / NgRx

## Project 5 — Platform / DevOps showcase (optional, if leaning that way)

- [ ] Terraform for the Project 1 infrastructure
- [ ] Kubernetes deployment (k3s / EKS)
- [ ] Prometheus + Grafana dashboards
- [ ] Structured logging + centralized log view
- [ ] Blue-green or canary deploy

---

## Quick wins (no new project)

- [ ] Fill in the `projects-section` on the home page — it's still a `works!` placeholder
- [ ] Link this portfolio repo prominently; it's your best front-end evidence and currently hidden
- [ ] Align your UOC final project (TFG) with Project 1 or 2 — degree credit + portfolio piece at once

## Avoid

- [ ] ~~Another to-do app~~
- [ ] ~~Another portfolio redesign~~
- [ ] ~~Tutorial clones~~
- [ ] ~~More front-end-only projects~~ — that skill is already covered; diminishing returns

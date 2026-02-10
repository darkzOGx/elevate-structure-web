# CLAUDE.md - elevate-structure-web (aaaengineeringdesign.com)

## Superpowers Integration

**On every query**, check if any superpowers skill applies before responding:

| Trigger | Skill |
|---------|-------|
| Creative/feature work | `superpowers:brainstorming` |
| 2+ independent tasks | `superpowers:dispatching-parallel-agents` |
| Bug/test failure | `superpowers:systematic-debugging` |
| Implementing feature | `superpowers:test-driven-development` |
| Multi-step task with spec | `superpowers:writing-plans` |
| About to claim complete | `superpowers:verification-before-completion` |
| Need code review | `superpowers:requesting-code-review` |
| Ready to merge | `superpowers:finishing-a-development-branch` |

**Rule**: If there's even a 1% chance a skill applies, invoke it first.

## Project Overview
Structural engineering firm website built with Next.js.

## Tech Stack
- **Frontend**: Next.js 14+ + React 18 + TypeScript
- **Styling**: Tailwind CSS v4 + PostCSS
- **Deployment**: Vercel/Netlify

## Commands
```bash
npm run dev       # Start dev server (port 3000)
npm run build     # Production build
npm run lint      # ESLint
npm run typecheck # TypeScript type checking
```

## Pre-commit Hooks

This project uses Husky + lint-staged for pre-commit validation:
- **ESLint**: Auto-fixes linting issues on staged .js/.jsx/.ts/.tsx files
- **TypeScript**: Runs type checking on staged .ts/.tsx files

To set up hooks after cloning: `npm install` (runs `prepare` script automatically)

## Blog Storage
Data file at `src/lib/blog-data.ts`

## Worktree Directory
`.worktrees/` - Use for parallel feature development

---

## MANDATORY
You MUST follow the Workflow Orchestration rules below. Before ANY implementation, confirm you've read and will follow them. Failure to follow these rules wastes time and produces inferior results.

---

## Workflow Orchestration

### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately - don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes - don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests - then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

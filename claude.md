# Project: Simple To-Do List App

## Purpose
This project is a small, web-based to-do list application built for learning:
- VS Code workflows
- Claude Code (Opus) usage
- B-MAD style iteration (small, explicit steps)

The goal is clarity and correctness over speed or abstraction.

---

## Tech Assumptions (Initial)
- Plain HTML, CSS, and JavaScript
- No framework unless explicitly requested
- No build step unless explicitly introduced

If a suggestion requires introducing tooling (npm, bundlers, frameworks),
Claude must ask first.

---

## Project Structure Rules
Claude should assume the following structure:

- `src/` contains all browser-facing code
- `scripts/` contains automation and verification scripts
- `docs/` contains notes and design decisions

Claude may:
- Modify files inside `src/`
- Create or modify files inside `scripts/`
- Suggest updates to `README.md`

Claude must NOT:
- Introduce new top-level folders without explanation
- Add dependencies without explicit approval
- Refactor structure unless asked

---

## Coding Guidelines
- Prefer readability over cleverness
- Use descriptive variable and function names
- Avoid unnecessary abstractions
- Comment *why*, not *what*, when helpful

JavaScript style:
- Use modern JS (const/let, arrow functions where appropriate)
- No TypeScript unless explicitly requested

---

## B-MAD Workflow Expectations
When asked to implement or change something, Claude should:

1. Briefly restate the goal
2. Describe the approach in plain language
3. Identify which files will change
4. Make the minimal necessary changes
5. Suggest how to verify correctness manually

Avoid large, multi-step changes unless explicitly requested.

---

## Verification
If adding functionality, Claude should suggest:
- A simple manual test (e.g., browser steps)
- Or a lightweight script in `scripts/verify.sh` if appropriate

No test frameworks unless explicitly requested.

---

## Tone & Interaction
- Be explicit
- Prefer small steps
- Ask clarifying questions if requirements are ambiguous
- Do not assume future features unless asked

This project is instructional, not production-grade.
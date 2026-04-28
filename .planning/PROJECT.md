# The Rising Times — School Magazine CMS

## What This Is

A school magazine website for "The Rising Times News" at Rising Stars Language School. Admin can create rich event articles using a visual element builder (text, images, slideshows, video, quotes, student links), manage star students, and publish — all as a static site deployable on GitHub Pages.

## Core Value

Admin can create and manage rich event articles with mixed content elements, and the site renders them beautifully for readers.

## Requirements

### Validated

- ✓ Homepage with hero, articles grid, about section, school section — existing
- ✓ Article detail page with multi-element rendering (image, text, slideshow, video, students) — existing
- ✓ Student profiles with star badge system — existing
- ✓ JSON data model for events (multi-element format) and students — existing
- ✓ Basic admin panel with login — existing
- ✓ Responsive CSS with gold/black school branding — existing

### Active

- [ ] Organize all images into `assets/images/` folder, clean up duplicates
- [ ] Element builder in admin — add/remove/reorder content blocks (text, image, slideshow, video, quote, students)
- [ ] Full CRUD for events — create, edit, delete with live preview
- [ ] Full CRUD for students — create, edit, delete, toggle star status
- [ ] JSON view + copy UI — admin edits in browser, copies JSON output, pastes into repo
- [ ] Link students to events from admin
- [ ] Modern, intuitive admin UI
- [ ] Clean up codebase — remove duplicate files, shared JS modules, consistent code structure

### Out of Scope

- Server-side backend — GitHub Pages is static only
- User authentication system — admin password is sufficient for school use
- Real-time collaboration — single admin at a time
- Mobile app — web only
- Database — JSON files committed to repo

## Context

- **Existing codebase**: Static HTML/CSS/JS site with 6 events and 3 students in JSON
- **Deployment target**: GitHub Pages (static hosting)
- **Current state**: Admin panel exists but only saves to console.log. Article viewer works with multi-element format. Images scattered in root directory. Duplicate index files exist.
- **Files to remove**: `index_1.html`, `index (2).html`, `article-editor.html`, `article-template.html`, `index_files/` directory (contains duplicate images)
- **Data format**: Already using multi-element event format in `data/events.json` with element types: image, text, quote, slideshow, video, students

## Constraints

- **Hosting**: GitHub Pages — no server, no dynamic backend
- **Persistence**: Pure JSON — admin edits in UI, views/copies JSON output, pastes into repo files
- **Stack**: Vanilla HTML/CSS/JS — no build tools, no frameworks (KISS)
- **KISS**: Keep it simple. This is a school project, not enterprise software

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Pure JSON copy/paste persistence | GitHub Pages = no server. Admin edits in UI, copies JSON, pastes into repo files. No LocalStorage. | — Pending |
| Element builder for articles | User wants rich content composition, not form-per-type | — Pending |
| Vanilla JS, no frameworks | KISS principle, school project, no build complexity | — Pending |
| Move images to assets/images/ | Root dir cluttered with 15+ loose image files | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-26 after initialization*

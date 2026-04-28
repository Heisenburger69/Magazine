# STATE: The Rising Times — School Magazine CMS

**Project:** The Rising Times
**Roadmap:** 5 phases over v1 release
**Current:** Roadmap initialized, awaiting phase planning
**Updated:** 2026-04-26

---

## Project Reference

**Core Value:** Admin can create and manage rich event articles with mixed content elements, and the site renders them beautifully for readers.

**Context:** Brownfield static HTML/CSS/JS site. Deployed on GitHub Pages (no server). Multi-element event data model exists. Admin exists but doesn't persist. Images scattered in root. Vanilla JS, no frameworks.

**Key Constraints:**
- GitHub Pages: static hosting only
- Persistence: LocalStorage + JSON export/import
- Stack: Vanilla HTML/CSS/JS (KISS)

---

## Current Position

**Milestone:** v1 Release
**Phase:** Planning (no phase active yet)
**Status:** Roadmap created; awaiting user approval and phase planning

**Progress:** Roadmap 100% defined
- Phases: 5 identified
- Requirements: 30/30 mapped
- Coverage: 100%

---

## Recent Decisions

| Decision | Rationale | Impact |
|----------|-----------|--------|
| 5-phase structure | Standard granularity; natural dependency flow | Manageable phases, all requirements covered |
| Asset cleanup first | Foundation for all downstream work | Phase 1 unblocks code organization |
| Persistence second | Required by CRUD phases | Phases 3-4 depend on this |
| Student CRUD before Element Builder | Simpler feature unblocks complex builder | Phase 4 can reference built students |
| Element builder as single phase | Largest phase; 15 requirements | UI phase candidate for special handling |
| Polish as final phase | Code quality across all pages | Ensures integration and consistency |

---

## Roadmap Phases

```
Phase 1: Asset Cleanup & Code Foundation (5 req)
  ├─ Asset organization
  ├─ Code deduplication
  └─ Shared modules

Phase 2: Persistence Layer (4 req)
  ├─ LocalStorage auto-save
  ├─ JSON export/import
  └─ Fallback load logic

Phase 3: Student Management CRUD (4 req)
  ├─ Create, read, update, delete
  ├─ Star toggle
  └─ Immediate persistence

Phase 4: Element Builder & Event CRUD (15 req)  ← Largest, UI phase
  ├─ Element builder (text, image, slideshow, video, quote, students)
  ├─ Element reorder/remove
  ├─ Live preview
  ├─ Event CRUD
  ├─ Student linking
  └─ Image preview

Phase 5: Admin UI Polish & Code Quality (2 req)
  ├─ Modern admin UI
  ├─ Consistent code structure
  └─ Integration finalization
```

---

## Accumulated Context

**Architecture Notes:**
- Data: events.json (multi-element format), students.json
- Admin: LocalStorage session → export JSON → commit to repo
- No server; GitHub Pages serves static files
- Image handling: assets/images/ for all media

**Implementation Patterns (Vanilla JS KISS):**
- No frameworks; plain HTML/CSS/JS
- Module pattern for shared code (data loading)
- Event-driven updates in LocalStorage
- Live preview via DOM manipulation

**Known Assets:**
- 6 existing events with multi-element support
- 3 existing students with star system
- Basic admin panel (login, no persistence)
- Responsive CSS (gold/black branding)

---

## Blockers

None currently. Roadmap is clean; awaiting phase planning.

---

## Next Steps

1. User reviews and approves roadmap
2. `/gsd-plan-phase 1` to create Phase 1 detailed plan
3. Execute phases sequentially

---

*State initialized: 2026-04-26*

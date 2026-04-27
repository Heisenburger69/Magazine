# ROADMAP: The Rising Times — School Magazine CMS

**Project:** The Rising Times — School Magazine CMS
**Defined:** 2026-04-26
**Phases:** 5
**Granularity:** Standard (5-8 phases)
**Total Requirements:** 30 v1 requirements

---

## Phases

- [ ] **Phase 1: Asset Cleanup & Code Foundation** - Organize assets, remove duplicates, establish shared code patterns
- [ ] **Phase 2: Persistence Layer** - LocalStorage auto-save and JSON import/export
- [ ] **Phase 3: Student Management CRUD** - Full student lifecycle (create, read, update, delete, star toggle)
- [ ] **Phase 4: Element Builder & Event CRUD** - Rich article composition, complete event management, student linking
- [ ] **Phase 5: Admin UI Polish & Code Quality** - Modern admin interface, consistent codebase, integration finalization

---

## Phase Details

### Phase 1: Asset Cleanup & Code Foundation

**Goal:** Clean codebase foundation with organized assets and shared modules

**Depends on:** Nothing (first phase)

**Requirements:** ASSET-01, ASSET-02, ASSET-03, CODE-01, CODE-02

**Success Criteria** (what must be TRUE):
  1. All images organized in assets/images/ with consistent naming convention
  2. Duplicate files removed (index_1.html, index (2).html, article-editor.html, article-template.html, index_files/)
  3. All image references updated across HTML and JSON files
  4. Shared data loading module used across all pages (no duplication)
  5. Dead files removed from repo; clean git history

**Plans:** TBD

**Dependencies:** None

---

### Phase 2: Persistence Layer

**Goal:** Admin can view, copy, and import JSON data — easy workflow for updating repo files

**Depends on:** Phase 1

**Requirements:** PERS-01, PERS-02, PERS-03, PERS-04

**Success Criteria** (what must be TRUE):
  1. Admin can view formatted events JSON and copy with one click
  2. Admin can view formatted students JSON and copy with one click
  3. Admin can paste/import JSON to load data into the editor
  4. Public pages load data from JSON files served by GitHub Pages
  5. Copy button shows confirmation feedback ("Copied!")

**Plans:** TBD

**Dependencies:** Phase 1

---

### Phase 3: Student Management CRUD

**Goal:** Full student lifecycle management in admin panel

**Depends on:** Phase 2

**Requirements:** STUD-01, STUD-02, STUD-03, STUD-04

**Success Criteria** (what must be TRUE):
  1. Admin can create a new student (name, role, quote, image, class)
  2. Admin can edit existing student profiles with all fields
  3. Admin can delete students with confirmation dialog
  4. Admin can toggle star student status on/off
  5. Student list updates immediately; changes persist to LocalStorage

**Plans:** TBD

**Dependencies:** Phase 2

---

### Phase 4: Element Builder & Event CRUD

**Goal:** Rich article composition with full event lifecycle management and student linking

**Depends on:** Phase 3

**Requirements:** ELEM-01, ELEM-02, ELEM-03, ELEM-04, ELEM-05, ELEM-06, ELEM-07, ELEM-08, ELEM-09, ELEM-10, EVNT-01, EVNT-02, EVNT-03, EVNT-04, STUD-05

**Success Criteria** (what must be TRUE):
  1. Admin can create new events with title, category, date, and elements
  2. Admin can add text blocks, single images, slideshows, videos, quotes to articles
  3. Admin can reorder elements using up/down controls
  4. Admin can remove elements; live preview updates in real time
  5. Admin can link students to events with role and achievement data
  6. Admin can edit existing events (all fields and elements)
  7. Admin can delete events with confirmation dialog
  8. Admin can mark events as featured
  9. Admin sees live preview of article as building it
  10. Admin can pick image files and see preview thumbnails

**Plans:** TBD

**Dependencies:** Phase 3

---

### Phase 5: Admin UI Polish & Code Quality

**Goal:** Modern, clean admin interface with consistent codebase

**Depends on:** Phase 4

**Requirements:** CODE-03, CODE-04

**Success Criteria** (what must be TRUE):
  1. Admin UI is modern, intuitive, visually coherent with school branding
  2. Code structure is consistent across all admin pages (naming, patterns, style)
  3. All phases 1-4 features integrated smoothly; no console errors
  4. Error handling is graceful; user receives clear feedback

**Plans:** TBD

**Dependencies:** Phase 4

---

## Progress Table

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Asset Cleanup & Code Foundation | 0/? | Not started | — |
| 2. Persistence Layer | 0/? | Not started | — |
| 3. Student Management CRUD | 0/? | Not started | — |
| 4. Element Builder & Event CRUD | 0/? | Not started | — |
| 5. Admin UI Polish & Code Quality | 0/? | Not started | — |

---

## Coverage Summary

**Total v1 requirements:** 30
**Mapped to phases:** 30
**Coverage:** 100% ✓

### Requirement Mapping

| Phase | Requirements | Count |
|-------|--------------|-------|
| 1 | ASSET-01, ASSET-02, ASSET-03, CODE-01, CODE-02 | 5 |
| 2 | PERS-01, PERS-02, PERS-03, PERS-04 | 4 |
| 3 | STUD-01, STUD-02, STUD-03, STUD-04 | 4 |
| 4 | ELEM-01, ELEM-02, ELEM-03, ELEM-04, ELEM-05, ELEM-06, ELEM-07, ELEM-08, ELEM-09, ELEM-10, EVNT-01, EVNT-02, EVNT-03, EVNT-04, STUD-05 | 15 |
| 5 | CODE-03, CODE-04 | 2 |

**No orphaned requirements.** Every v1 requirement maps to exactly one phase.

---

*Roadmap created: 2026-04-26*
*Last updated: 2026-04-26 at roadmap creation*

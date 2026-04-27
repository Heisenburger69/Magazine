# Requirements: The Rising Times — School Magazine CMS

**Defined:** 2026-04-26
**Core Value:** Admin can create and manage rich event articles with mixed content elements, and the site renders them beautifully for readers.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Asset Organization

- [ ] **ASSET-01**: All images moved to `assets/images/` with consistent naming
- [ ] **ASSET-02**: Duplicate files removed (`index_1.html`, `index (2).html`, `article-editor.html`, `article-template.html`, `index_files/`)
- [ ] **ASSET-03**: All image references updated across HTML and JSON files

### Element Builder

- [ ] **ELEM-01**: Admin can add a text block element to an article
- [ ] **ELEM-02**: Admin can add a single image element with alignment options (full/left/right)
- [ ] **ELEM-03**: Admin can add an image slideshow element with multiple images
- [ ] **ELEM-04**: Admin can add a video embed element (YouTube URL)
- [ ] **ELEM-05**: Admin can add a quote element with author attribution
- [ ] **ELEM-06**: Admin can add a students section element linking students to the event
- [ ] **ELEM-07**: Admin can reorder elements using up/down controls
- [ ] **ELEM-08**: Admin can remove any element from an article
- [ ] **ELEM-09**: Admin sees a live preview of the article as they build it
- [ ] **ELEM-10**: Admin can pick image files and see preview thumbnails

### Event CRUD

- [ ] **EVNT-01**: Admin can create a new event with title, category, date, and elements
- [ ] **EVNT-02**: Admin can edit an existing event (all fields including elements)
- [ ] **EVNT-03**: Admin can delete an event with confirmation
- [ ] **EVNT-04**: Admin can mark an event as featured

### Student Management

- [ ] **STUD-01**: Admin can create a student profile (name, role, quote, image, class)
- [ ] **STUD-02**: Admin can edit an existing student profile
- [ ] **STUD-03**: Admin can delete a student with confirmation
- [ ] **STUD-04**: Admin can toggle star student status
- [ ] **STUD-05**: Admin can link students to events with role and achievement from the element builder

### Persistence

- [ ] **PERS-01**: Admin can view formatted JSON output for events and copy with one click
- [ ] **PERS-02**: Admin can view formatted JSON output for students and copy with one click
- [ ] **PERS-03**: Admin can paste/import JSON to load data into the editor
- [ ] **PERS-04**: Public pages load data from JSON files served by GitHub Pages

### Code Quality

- [ ] **CODE-01**: Shared data loading module used across all pages (no duplication)
- [ ] **CODE-02**: Dead and duplicate files removed from repo
- [ ] **CODE-03**: Consistent code structure across all pages
- [ ] **CODE-04**: Admin UI is modern, clean, and intuitive

## v2 Requirements

Deferred to future release.

### Enhanced Media

- **MEDIA-01**: Drag-and-drop element reorder
- **MEDIA-02**: Image cropping/resizing in admin
- **MEDIA-03**: Bulk image upload

### Content

- **CONT-01**: Article categories with filtering on homepage
- **CONT-02**: Search functionality
- **CONT-03**: Pagination for articles list

## Out of Scope

| Feature | Reason |
|---------|--------|
| Server-side backend | GitHub Pages = static only |
| Database | JSON files committed to repo |
| Real user authentication | School project, admin password sufficient |
| Real-time collaboration | Single admin at a time |
| Mobile app | Web only |
| Build tools / frameworks | KISS — vanilla HTML/CSS/JS |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| ASSET-01 | Phase 1 | Pending |
| ASSET-02 | Phase 1 | Pending |
| ASSET-03 | Phase 1 | Pending |
| ELEM-01 | Phase 4 | Pending |
| ELEM-02 | Phase 4 | Pending |
| ELEM-03 | Phase 4 | Pending |
| ELEM-04 | Phase 4 | Pending |
| ELEM-05 | Phase 4 | Pending |
| ELEM-06 | Phase 4 | Pending |
| ELEM-07 | Phase 4 | Pending |
| ELEM-08 | Phase 4 | Pending |
| ELEM-09 | Phase 4 | Pending |
| ELEM-10 | Phase 4 | Pending |
| EVNT-01 | Phase 4 | Pending |
| EVNT-02 | Phase 4 | Pending |
| EVNT-03 | Phase 4 | Pending |
| EVNT-04 | Phase 4 | Pending |
| STUD-01 | Phase 3 | Pending |
| STUD-02 | Phase 3 | Pending |
| STUD-03 | Phase 3 | Pending |
| STUD-04 | Phase 3 | Pending |
| STUD-05 | Phase 4 | Pending |
| PERS-01 | Phase 2 | Pending |
| PERS-02 | Phase 2 | Pending |
| PERS-03 | Phase 2 | Pending |
| PERS-04 | Phase 2 | Pending |
| CODE-01 | Phase 1 | Pending |
| CODE-02 | Phase 1 | Pending |
| CODE-03 | Phase 5 | Pending |
| CODE-04 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 28 total
- Mapped to phases: 28
- Unmapped: 0 ✓

---

*Requirements defined: 2026-04-26*
*Last updated: 2026-04-26 after roadmap creation*

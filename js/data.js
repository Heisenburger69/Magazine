/**
 * Shared data module for The Rising Times Magazine
 * Handles loading, saving, and managing events and students data
 */

const DataStore = {
    events: { events: [] },
    students: { students: [] },
    _loaded: false,

    async load() {
        if (this._loaded) return;
        try {
            const [e, s] = await Promise.all([
                fetch('data/events.json'),
                fetch('data/students.json')
            ]);
            this.events = await e.json();
            this.students = await s.json();
        } catch (err) {
            console.warn('Could not load JSON files, using empty data');
        }
        this._loaded = true;
    },

    getEvents() {
        return this.events.events || [];
    },

    getStudents() {
        return this.students.students || [];
    },

    getEvent(id) {
        return this.getEvents().find(e => e.id === id);
    },

    getStudent(name) {
        return this.getStudents().find(s => s.name === name);
    },

    getStudentById(id) {
        return this.getStudents().find(s => s.id === id);
    },

    getStarStudents() {
        return this.getStudents().filter(s => s.star);
    },

    getStudentEvents(studentName) {
        return this.getEvents().filter(event => {
            if (event.elements) {
                return event.elements.some(el =>
                    el.type === 'students' && el.students &&
                    el.students.some(s => s.name === studentName)
                );
            }
            return false;
        });
    },

    getEventPreviewImage(event) {
        if (!event.elements) return '';
        for (const el of event.elements) {
            if (el.type === 'image' && el.image) return el.image;
            if (el.type === 'slideshow' && el.images && el.images.length) return el.images[0];
        }
        return '';
    },

    getEventExcerpt(event) {
        if (!event.elements) return '';
        const textEl = event.elements.find(e => e.type === 'text');
        return textEl ? textEl.content : '';
    },

    getEventStudents(event) {
        if (!event.elements) return [];
        const result = [];
        event.elements.forEach(el => {
            if (el.type === 'students' && el.students) {
                el.students.forEach(s => result.push(s));
            }
        });
        return result;
    },

    // --- Mutation methods (for admin) ---

    addEvent(event) {
        this.events.events.unshift(event);
    },

    updateEvent(id, updated) {
        const idx = this.events.events.findIndex(e => e.id === id);
        if (idx !== -1) this.events.events[idx] = updated;
    },

    deleteEvent(id) {
        this.events.events = this.events.events.filter(e => e.id !== id);
    },

    addStudent(student) {
        this.students.students.push(student);
    },

    updateStudent(id, updated) {
        const idx = this.students.students.findIndex(s => s.id === id);
        if (idx !== -1) this.students.students[idx] = updated;
    },

    deleteStudent(id) {
        this.students.students = this.students.students.filter(s => s.id !== id);
    },

    // --- JSON export ---

    getEventsJSON() {
        return JSON.stringify(this.events, null, 2);
    },

    getStudentsJSON() {
        return JSON.stringify(this.students, null, 2);
    },

    // --- JSON import ---

    importEvents(json) {
        const parsed = JSON.parse(json);
        if (parsed.events && Array.isArray(parsed.events)) {
            this.events = parsed;
            return true;
        }
        throw new Error('Invalid events JSON — must have "events" array');
    },

    importStudents(json) {
        const parsed = JSON.parse(json);
        if (parsed.students && Array.isArray(parsed.students)) {
            this.students = parsed;
            return true;
        }
        throw new Error('Invalid students JSON — must have "students" array');
    },

    // --- ID generation ---

    generateId(title) {
        return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }
};

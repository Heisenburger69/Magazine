/**
 * Shared data module for The Rising Times Magazine
 * Handles loading, saving, and managing events and students data
 */

const DataStore = {
    events: { events: [] },
    students: { students: [] },
    cseCouncil: {
        head: "Miss Somia",
        stages: {
            secondary: { president: "", vicePresident: "", science: "", religiousCulture: "", art: "", social: "", sports: "" },
            preparatory: { president: "", vicePresident: "", science: "", religiousCulture: "", art: "", social: "", sports: "" },
            primary: { president: "", vicePresident: "", science: "", religiousCulture: "", art: "", social: "", sports: "" }
        }
    },
    topStudents: [],
    _loaded: false,

async load() {
        if (this._loaded) return;
        
        try {
            // Server first - cache bust
            const e = await fetch('data/events.json?_=' + Date.now());
            if (e.ok) {
                this.events = await e.json();
                if (!this._offlineMode) localStorage.setItem('magazine_events', JSON.stringify(this.events));
            }
            
            const s = await fetch('data/students.json?_=' + Date.now());
            if (s.ok) {
                this.students = await s.json();
                this.topStudents = this.students.topStudents || [];
                if (!this._offlineMode) localStorage.setItem('magazine_students', JSON.stringify(this.students));
            }
        } catch (err) {
            // Offline fallback
            this._offlineMode = true;
            const storedEvents = localStorage.getItem('magazine_events');
            const storedStudents = localStorage.getItem('magazine_students');
            if (storedEvents) this.events = JSON.parse(storedEvents);
            if (storedStudents) this.students = JSON.parse(storedStudents);
        }
        
        // Fix: if type is teacher, ensure class is "Teacher"
        if (this.students.students) {
            this.students.students.forEach(s => {
                if (s.type === 'teacher') s.class = 'Teacher';
            });
        }
        
        this._loaded = true;
    },

    getEvents() {
        return this.events.events || [];
    },

    reorderEvent(fromIndex, toIndex) {
        const events = this.events.events;
        const [moved] = events.splice(fromIndex, 1);
        events.splice(toIndex, 0, moved);
        localStorage.setItem('magazine_events', JSON.stringify(this.events));
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
        const events = this.getEvents().filter(event => {
            if (event.id === 'top-students-competition') return false;
            if (event.elements) {
                return event.elements.some(el => {
                    if (el.type === 'students' && el.students) {
                        return el.students.some(s => s.name === studentName);
                    }
                    if (el.type === 'organizers' && el.organizers) {
                        return el.organizers.some(s => s.name === studentName);
                    }
                    return false;
                });
            }
            return false;
        });
        
        const council = this.getCSECouncil();
        
        let cseRole = null;
        if (council.head && council.head.toLowerCase() === studentName.toLowerCase()) {
            cseRole = { key: 'head', title: 'Council Head', icon: '👑' };
        } else {
            const roleMap = {
                president: { title: 'Stage President', icon: '👑' },
                vicePresident: { title: 'Vice President', icon: '⭐' },
                science: { title: 'Science Representative', icon: '🔬' },
                religiousCulture: { title: 'Religious & Culture Representative', icon: '🕌' },
                art: { title: 'Art Representative', icon: '🎨' },
                social: { title: 'Social Representative', icon: '🤝' },
                sports: { title: 'Sports Representative', icon: '🏆' }
            };
            const stageLabelMap = {
                secondary: 'Secondary',
                preparatory: 'Preparatory',
                primary: 'Primary'
            };
            for (const [stage, stageRoles] of Object.entries(council.stages)) {
                for (const [roleKey, memberName] of Object.entries(stageRoles)) {
                    if (memberName && memberName.toLowerCase() === studentName.toLowerCase()) {
                        const roleInfo = roleMap[roleKey] || { title: 'Member', icon: '👤' };
                        cseRole = { key: roleKey, title: stageLabelMap[stage] + ' ' + roleInfo.title, icon: roleInfo.icon, stage };
                        break;
                    }
                }
                if (cseRole) break;
            }
        }
        
        if (cseRole) {
            const cseEvent = {
                id: 'cse-council-event',
                title: 'CSE Council',
                featured: false,
                elements: [{ type: 'text', content: 'CSE Council Member' }],
                _isCSE: true,
                _cseRole: cseRole
            };
            events.unshift(cseEvent);
        }
        
        const topStudent = this.topStudents?.find(ts => ts.name === studentName);
        if (topStudent) {
            const topEvent = {
                id: 'top-students-competition',
                title: 'Top Students',
                featured: false,
                elements: [{ type: 'text', content: 'Outstanding Student Achievement' }],
                _isTopStudent: true,
                _topRole: { title: topStudent.role, icon: '★' }
            };
            events.unshift(topEvent);
        }
        
        return events;
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
        const council = this.getCSECouncil();
        return JSON.stringify({ ...this.events, cseCouncil: council }, null, 2);
    },

    getStudentsJSON() {
        return JSON.stringify({ ...this.students, topStudents: this.topStudents || [] }, null, 2);
    },

    // --- JSON import ---

    importEvents(json) {
        const parsed = JSON.parse(json);
        if (parsed.events && Array.isArray(parsed.events)) {
            this.events = parsed;
            localStorage.setItem('magazine_events', JSON.stringify(this.events));
            return true;
        }
        throw new Error('Invalid events JSON — must have "events" array');
    },

    importStudents(json) {
        const parsed = JSON.parse(json);
        if (parsed.students && Array.isArray(parsed.students)) {
            this.students = parsed;
            localStorage.setItem('magazine_students', JSON.stringify(this.students));
            return true;
        }
        throw new Error('Invalid students JSON — must have "students" array');
    },
    
    reload() {
        this._loaded = false;
        localStorage.removeItem('magazine_events');
        localStorage.removeItem('magazine_students');
        localStorage.removeItem('magazine_cse');
        return this.load();
    },
    
    // --- CSE Council methods ---
    
    getCSECouncil() {
        if (this.events?.cseCouncil) {
            return this.events.cseCouncil;
        }
        this.topStudents = this.topStudents || [];
        return { 
            head: "Miss Somia", 
            stages: { 
                secondary: { president: "", vicePresident: "", science: "", religiousCulture: "", art: "", social: "", sports: "" }, 
                preparatory: { president: "", vicePresident: "", science: "", religiousCulture: "", art: "", social: "", sports: "" }, 
                primary: { president: "", vicePresident: "", science: "", religiousCulture: "", art: "", social: "", sports: "" } 
            } 
        };
    },
    
    updateCSEPosition(stage, role, studentName) {
        if (this.cseCouncil?.stages?.[stage]) {
            this.cseCouncil.stages[stage][role] = studentName;
            localStorage.setItem('magazine_cse', JSON.stringify(this.cseCouncil));
        }
    },
    
    getCSEHead() {
        const council = this.getCSECouncil();
        return council.head || "Miss Somia";
    },

    // --- ID generation ---

    generateId(title) {
        return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }
};

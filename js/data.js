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
        
        // Always use inline data first
        this.events = {"events":[
            {"id":"english-day-2026","title":"The International English Day","type":"multi","category":"Cultural","featured":true,"date":"23/4/2026","elements":[{"type":"image","image":"assets/images/englishday1.jpg"},{"type":"text","content":"The celebration of the international English day"},{"type":"text","content":"This phenomenal day is a celebration of The English Language, it's not just a subject we take in school, it's a global Language that connects millions of people around the world, a bridge of culture and ideas with no borders, the greatest mean of communication and learning of all time.\n\nThis day is always celebrated worldwide on April 23rd, every year. It's also the birthday of William Shakespeare, the greatest writer of all time whose works inspire generations to this day.\n\nThe school's effort of honoring this day and language is astonishing. This day couldn't have been any more amazing\n"},{"type":"video","video":"mU1EPS0NXcI"},{"type":"slideshow","images":["assets/images/englishday2.jpg","assets/images/englishday5.jpg","assets/images/englishday4.jpg"],"caption":"Pictures of our Excellent Students and Organizers"},{"type":"slideshow","images":["assets/images/1.png","assets/images/2.png"],"caption":"Pictures of the main event"},{"type":"organizers","organizers":[{"name":"Miss Sahar","role":"Organizer"},{"name":"Miss Amany","role":"Co-Organizer"},{"name":"Mr. Amir Nagy","role":"Co-Organizer"},{"name":"Miss Eman Sabry","role":"Art Manager"}]},{"type":"students","students":[{"name":"Youssef Ahmed Sabry","role":"Event Speaker","achievement":"Speaker on the English day"},{"name":"Ahmed Adel Abd Elhafeez","role":"Mini Game Manager","achievement":"Correct Pronunciation Minigame"},{"name":"Hassan Mohamed","role":"Mini Game Manager","achievement":"Correct Pronunciation Minigame"},{"name":"Sama Alaa","role":"Presenter","achievement":"Presentation on Consumerism"},{"name":"Lili Ahmed","role":"The Riddler","achievement":"Riddles Minigame"},{"name":"Angelina Amjad","role":"Singer/Presenter","achievement":"Poetry & Song"}]},{"type":"image","image":"assets/images/englishday9.jpg","align":"left"},{"type":"text","content":"And we also got to play a movie <3"}]},
            {"id":"art-exhibition","title":"Art Exhibition","type":"multi","category":"Arts","featured":false,"date":"2024","elements":[{"type":"image","image":"assets/images/englishday2.jpg"},{"type":"text","content":"Students showcase their artwork in the annual exhibition."}]},
            {"id":"sports-day","title":"Sports Day","type":"multi","category":"Sports","featured":false,"date":"2024","elements":[{"type":"image","image":"assets/images/englishday3.jpg"},{"type":"text","content":"Exciting sports competition among all grades."}]},
            {"id":"music-concert","title":"Music Concert","type":"multi","category":"Cultural","featured":false,"date":"2024","elements":[{"type":"image","image":"assets/images/englishday4.jpg"},{"type":"text","content":"Students perform musical pieces for the school community."}]}
        ]};
        this.students = {"students":[
            {"id":"youssef-ahmed-sabry","name":"Youssef Ahmed Sabry","role":"Newspaper/Magazine Creator & Editor","quote":"Working on the school magazine is such an honor for me, I will gladly try to make this magazine the best there ever was in all of future's schools","image":"assets/images/Youssef.png","star":true,"type":"student","class":"Secondary","achievements":["Academic Excellence"]},
            {"id":"ahmed-alaadin-hassan","name":"Ahmed Alaadin Hassan Darmelli","role":"President of Preparatory & Newspaper Writer","quote":"You fell down so what? Get back up. For it is our destiny to rise, and in that there's no doubt","image":"assets/images/Ahmed.png","star":true,"type":"student","class":"Preparatory","achievements":["Debate Champion"]},
            {"id":"yassin-ahmed-sabry","name":"Yassin Ahmed Sabry","role":"Reporter & Channel Manager","quote":"I suppose leadership at one time meant muscles, but today it means getting along with people.","image":"assets/images/Yassin.webp","star":true,"type":"student","class":"Preparatory","achievements":["Best Reporter"]},
            {"id":"ahmed-adel-abd-elhafeez","name":"Ahmed Adel Abd Elhafeez","role":"Excellent Student","quote":"A perfect student that does his homework, and helps when he can.","image":"assets/images/ahmed.jpg","star":true,"type":"student","class":"Secondary","achievements":["Designer","Artist"]},
            {"id":"retaj-adel-abd-elhafeez","name":"Retaj Adel Abd Elhafeez","role":"Profound Artist","quote":"A great artist who never fails the school","image":"assets/images/32881 (2).jpg","star":false,"type":"student","class":"Preparatory","achievements":["Artist"]},
            {"id":"ahmed-mohamed","name":"Ahmed Mohamed","role":"Diligent pupil","quote":"","image":"assets/images/32896.jpg","star":false,"type":"student","class":"Preparatory","achievements":[]},
            {"id":"bola-amir","name":"Bola Amir","role":"Diligent pupil","quote":"","image":"assets/images/32893.jpg","star":false,"type":"student","class":"Preparatory","achievements":[]},
            {"id":"mina-maged","name":"Mina Maged","role":"Diligent pupil","quote":"","image":"assets/images/32899.jpg","star":false,"type":"student","class":"Preparatory","achievements":[]},
            {"id":"maroshka","name":"Maroshka Ayman","role":"Diligent pupil","quote":"","image":"assets/images/32898.jpg","star":false,"type":"student","class":"Preparatory","achievements":[]},
            {"id":"maya-maged","name":"Maya Maged","role":"Profound Artist","quote":"","image":"assets/images/32882 (2).jpg","star":false,"type":"student","class":"Preparatory","achievements":[]},
            {"id":"joy-fady","name":"Joy fady","role":"profound Artist","quote":"","image":"assets/images/32884.jpg","star":false,"type":"student","class":"Preparatory","achievements":[]},
            {"id":"perla","name":"Perla","role":"Profound Artist","quote":"","image":"assets/images/Screenshot_20260427_233626_WhatsApp.jpg","star":false,"type":"student","class":"Primary","achievements":[]},
            {"id":"miss-amany","name":"Miss Amany","role":"English Teacher","quote":"Incredible Teacher, The Greatest English teacher ever","image":"assets/images/Amany.jpg","star":false,"type":"teacher","class":"Secondary","achievements":["Excellent Teacher"]},
            {"id":"miss-sahar","name":"Miss Sahar","role":"English Supervisor","quote":"Responsible for Organizing and Perfecting most events and competitions in the Rising Stars School","image":"assets/images/sahar.png","star":true,"type":"teacher","class":"Secondary","achievements":["Event Organization","Incredible Leadership"]},
            {"id":"dr-raafat-omran","name":"Dr. Raafat Omran","role":"The Principal of Rising Stars","quote":"The principal of this incredible prestigious school, The reason the school keeps going forward and improving","image":"assets/images/Raafat.png","star":true,"type":"teacher","class":"Secondary","achievements":["School Principal","Ex Arabic Teacher"]},
            {"id":"miss-somia","name":"Miss Somia","role":"Social Specialist","quote":"Responsible for creating and providing the school magazine's resources.","image":"assets/images/32894.jpg","star":true,"type":"teacher","class":"Secondary","achievements":[]},
            {"id":"mr-amir-nagy","name":"Mr. Amir Nagy","role":"English Teacher","quote":"Profound teacher with excellent teaching methods","image":"assets/images/506766623_10235387618098383_3742940243125327954_n.jpg","star":false,"type":"teacher","class":"Secondary","achievements":["Excellent Teacher"]},
            {"id":"eyad-bahaa","name":"Eyad Bahaa","role":"Diligent pupil","quote":"","image":"assets/images/32897.jpg","star":false,"type":"student","class":"Preparatory","achievements":[]},
            {"id":"miss-eman-sabry","name":"Miss Eman Sabry","role":"Art Supervisor","quote":"Responsible for all art events from primary, all the way to secondary. incredible performance throughout the years","image":"assets/images/32889.jpg","star":true,"type":"teacher","class":"Secondary","achievements":["Artist"]},
            {"id":"bola-beshoy","name":"Bola Beshoy","role":"Great pupil","quote":"","image":"assets/images/32885.jpg","star":false,"type":"student","class":"Primary","achievements":[]},
            {"id":"marcelino-reda","name":"Marcelino Reda","role":"Excellent Designer","quote":"The designer of the school uniform that's currently going up against other future schools to be number 1 inshallah","image":"assets/images/32887.jpg","star":true,"type":"student","class":"Secondary","achievements":["Designer","Artist"]},
            {"id":"theodora-maged","name":"Theodora Maged","role":"Diligent pupil","quote":"","image":"assets/images/32891.jpg","star":false,"type":"student","class":"Secondary","achievements":[]},
            {"id":"lili-sheriff","name":"Lili Sheriff","role":"Student","quote":"","image":"assets/images/blank.jpg","star":false,"type":"student","class":"Preparatory","achievements":[]},
            {"id":"fayrouz-mohamed","name":"Fayrouz Mohamed","role":"Student","quote":"","image":"assets/images/blank.jpg","star":false,"type":"student","class":"Preparatory","achievements":[]},
            {"id":"remas-mahmoud","name":"Remas Mahmoud","role":"Student","quote":"","image":"assets/images/blank.jpg","star":false,"type":"student","class":"Primary","achievements":[]},
            {"id":"lili-ahmed","name":"Lili Ahmed","role":"Excellent Student","quote":"Great Academic Student","image":"assets/images/Lili.jpg","star":true,"type":"student","class":"Secondary","achievements":[]},
            {"id":"sama-alaa","name":"Sama Alaa","role":"Excellent Speaker","quote":"Greatest English speaking skills in all of secondary","image":"assets/images/Sama.jpg","star":true,"type":"student","class":"Secondary","achievements":["Speaker","Presenter"]},
            {"id":"miss-merna","name":"Miss Merna","role":"Social Media Manager","quote":"Responsible for documenting All important school events","image":"assets/images/blank.jpg","star":false,"type":"teacher","class":"Secondary","achievements":["Photographer"]},
            {"id":"hassan-mohamed","name":"Hassan Mohamed","role":"Cool dude fr","quote":"Runs the school, and is the most intellectual human being","image":"assets/images/hassan.jpg","star":true,"type":"student","class":"Secondary","achievements":["Just Incredible"]},
            {"id":"charlie-bin-elkirky","name":"Charlie bin Elkirky","role":"The Watcher","quote":"He Watches","image":"assets/images/Screenshot_20260428_001813_Gallery.jpg","star":false,"type":"student","class":"Secondary","achievements":["Graduated top of his class"]},
            {"id":"angelina-amjad","name":"Angelina Amjad","role":"Singer & Speaker & Musician","quote":"The face of the school, Participates in countless events","image":"assets/images/Angelina.webp","star":true,"type":"student","class":"Preparatory","achievements":["Excellent Singer","Musician","Face of the school"]}
        ]};
        
        // Try updating from JSON if available
        try {
            const [e, s] = await Promise.all([
                fetch('data/events.json'),
                fetch('data/students.json')
            ]);
            if (e.ok) this.events = await e.json();
            if (s.ok) this.students = await s.json();
        } catch (err) {
            console.log('Using inline data (JSON files not loaded)');
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

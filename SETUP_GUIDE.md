# Rising Stars Language School Magazine
## Complete Setup & Usage Guide

### Files Structure
```
/files/
├── index.html           # Main homepage
├── article.html       # Dynamic article page
├── student.html      # Student profile page
├── top-students.html # Star students listing
├── admin.html       # Admin dashboard (password: admin123)
├── article-editor.html # Multi-element article creator
├── css/
│   └── style.css  # Global styles
├── data/
│   ├── events.json  # Events (multi-element CMS)
│   └── students.json # Students (CMS)
└── [images]       # Student photos, event images
```

### Default Passwords
- **Admin Panel**: `admin123`

### Home Screen Articles
- 3-column grid on desktop
- 2-column on tablet (1024px)
- 2-column on mobile (768px/480px)
- Featured articles span 2 columns

### Article Editor - Multi-Element System
Now supports adding **multiple elements** to each article:

| Element | Options |
|--------|--------|
| 📝 **Text** | Paragraph content |
| 🖼️ **Image** | filename, caption, align (left/right/full) |
| 💬 **Quote** | quote text, author |
| 🎬 **Video** | YouTube embed URL |
| 🎠 **Slideshow** | comma-separated images |
| 👥 **Students** | name, role, achievement |

### Building an Article
1. Go to `article-editor.html`
2. Enter title, category, featured
3. Click element buttons to add (Text, Image, Quote, Video, Slideshow, Students)
4. Configure each element
5. Click "Generate Article JSON"
6. Copy to `data/events.json`

### Student-Event Linking
- Student names must **exactly match** between `events.json` and `students.json`
- When matched: click student name → see all their events
- Shows role + achievement per event
- Star students highlighted with gold badge

### Star Students
- Marked with gold badge "★ Star"
- Appear highlighted in listings
- Can filter by class (Preparatory/Secondary)

### Mobile Features
- Responsive at 1024px, 768px, 480px
- Touch-friendly hamburger menu
- 2-column article grid on all devices
- Readable typography

### Article Types (Legacy still supported)
- `text-only` - Plain article
- `image-text` - Image + text side by side  
- `full-image` - Full width image
- `text-image` - Text then large image
- `slideshow` - Image carousel
- `video` - YouTube embed
- `multi` - New multi-element format

### Video Embed Format
Use YouTube embed URL:
```
https://www.youtube.com/embed/VIDEO_ID
```

### Demo Mode
If JSON files fail to load, demo data is used automatically.
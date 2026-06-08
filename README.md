# FalseTube 🎬

A YouTube homepage clone built as part of my Zaio assignment.
Live demo: https://falsetube.netlify.app

## Built With
- HTML5
- CSS3
- Vanilla JavaScript

## File Structure scafolding:
**faketube/**
├── index.html      — structure and content
├── style.css       — all styling and responsive design
├── script.js       — all JavaScript functionality
├── favicon.ico     — browser tab icon
└── assets/         — all images and video files
    ├── thumbnails  — video thumbnail images (.avif)
    ├── channels    — channel avatar images (.jpg)
    └── previews    — hover preview clips (.mp4)

## Features

### Manual Feature (No AI)
- **Dark Mode** — Toggle between light and dark mode using a 
sun/moon icon in the navbar. Built with CSS variables and 
JavaScript classList toggle. No frameworks, no AI assistance.

### Cursor AI Features
- **Category Filter Bar** — Filter videos by category using 
pill-shaped chips. Built with data attributes and vanilla JS.
- **Hover Video Preview** — Hover over selected video cards 
to see a muted preview clip. CSS fade transitions with JS 
play/pause control.

## What I Learned
- CSS Variables and the :root selector
- CSS Grid for responsive layouts
- JavaScript DOM manipulation
- Git version control with meaningful commit messages

## Deployment
Deployed on Netlify with automatic GitHub integration.
Every push to main triggers a redeployment automatically.

## Author
Built by Nezokuhle Tshukuwlwana 
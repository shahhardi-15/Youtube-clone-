# YouTube Clone

A responsive, multi-page YouTube clone built with vanilla HTML, CSS, and JavaScript — no frameworks, no backend. Live demo: **[shahhardi-15.github.io/Youtube-clone-](https://shahhardi-15.github.io/Youtube-clone-/)**

## Features

- **6 fully linked pages** — Home, Explore, Subscriptions, Originals, YouTube Music, and Library, each with its own layout reusing a shared header and sidebar
- **Live search filtering** — client-side JavaScript filters the video grid by title or channel name as you type, no page reload
- **Dark mode toggle** — theme preference persists across pages and browser sessions using `localStorage`
- **Fully responsive** — custom mobile breakpoints with a horizontally scrollable header bar on small screens
- **Static, zero-dependency front end** — pure HTML/CSS/JS, deployed directly via GitHub Pages

## Tech Stack

- HTML5
- CSS3 (Flexbox, CSS variables for theming, media queries)
- Vanilla JavaScript (DOM manipulation, event listeners, localStorage)

## Project Structure

```
├── index.html              # Homepage (video grid)
├── explore.html            # Trending categories
├── subscriptions.html      # Subscribed channels
├── originals.html          # Featured/premium content grid
├── music.html               # Music-style cards
├── library.html             # History, Watch Later, Liked Videos
├── theme.js                 # Dark mode toggle logic
├── search.js                 # Live video search/filter logic
├── styles/                   # Page-specific and shared stylesheets
├── icons/                    # UI icons
├── sidebar/                  # Sidebar icons
├── channel-pictures/          # Channel avatar images
└── thumbnails/                 # Video thumbnail images
```

## Running Locally

This is a static site with no build step. Clone the repo and open `index.html` directly in your browser, or serve it with any static file server:

```bash
git clone https://github.com/shahhardi-15/Youtube-clone-.git
cd Youtube-clone-
# then just open index.html in your browser
```

## What I Learned

Building this project involved structuring a multi-page static site with shared, reusable components (header/sidebar across 6 pages), implementing client-side state without a framework (theme persistence via `localStorage`, live DOM filtering for search), and handling responsive design challenges at narrow mobile breakpoints.

# 🎬 Movie Explorer

Movie Explorer is a simple responsive React application where users can browse TV shows, search for a specific show, and view detailed information in a modal.

The project uses the **TVMaze API** to load and search show data.

## ✨ Features

* Home page with Navbar, Hero section, and Footer
* Browse all available TV shows
* Search shows by title
* Search using the **Search** button or **Enter** key
* Automatically show all movies again when the search box is cleared
* Responsive movie card layout
* Movie poster, title, rating, and release date
* `See Details` button for every movie
* Movie details modal
* Modal shows:

  * Movie/show name
  * Poster
  * Rating
  * Release date
  * Genres
  * Language
  * Runtime
  * Overview / Summary
* Close modal using:

  * `✕` button
  * `Close` button
  * Clicking outside the modal
* Loading message while data is being fetched
* Error message if the API request fails
* `No movies found` message when search returns no result
* Handles missing image, rating, release date, genre, and summary
* Responsive layout for desktop, tablet, and mobile devices

## 🛠️ Technologies Used

* React
* JavaScript
* CSS
* Vite
* TVMaze API

## 🌐 API Used

### All Shows

```text
https://api.tvmaze.com/shows
```

### Search Shows

```text
https://api.tvmaze.com/search/shows?q=searchQuery
```

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── MovieCard.jsx
│   └── MovieModal.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Movies.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## ▶️ How to Run the Project

Clone the repository:

```bash
git clone https://github.com/tamim-ahmed-15/MovieExplorer.git
```

Go to the project folder:

```bash
cd MovieExplorer
```

Install the required packages:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## 🔨 Build the Project

To create a production build:

```bash
npm run build
```

## 🚀 Live Site

Live Link: `https://movie-explorer-ecru-delta.vercel.app/`

## 👨‍💻 Author

Tamim Ahmed

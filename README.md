# 🏨 StayFinder — Hotel Listing MVP

A simple, responsive hotel listing app built with **React 18 + Vite** and **plain CSS**.
It fetches data from a public hotels API, lets you search hotels, and view details.

## Features

- Fetch and display a list of hotels in a responsive grid
- Search hotels by name or location
- View a single hotel's details with a photo gallery
- Loading spinner, error message, and empty state
- Mobile-first responsive layout (CSS Grid + Flexbox)

## Tech Stack

- React 18 (Vite)
- JavaScript (no TypeScript)
- Plain CSS (no UI/CSS frameworks)
- Native Fetch API
- React Router for routing
- React hooks (`useState`, `useEffect`) only

## API

Base URL: `https://demohotelsapi.pythonanywhere.com/hotels/`

| Endpoint            | Description                          |
| ------------------- | ------------------------------------ |
| `GET /hotels/`      | List hotels (supports `?search=`)    |
| `GET /hotels/{id}/` | Get a single hotel by id             |

Responses are wrapped as `{ status, message, data }`, so the service layer
returns `result.data` to the components.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── HotelCard.jsx
│   ├── HotelList.jsx
│   ├── SearchBar.jsx
│   └── Loader.jsx
├── pages/
│   ├── Home.jsx
│   └── HotelDetails.jsx
├── services/
│   └── api.js
├── styles/
│   ├── global.css
│   ├── home.css
│   └── hotel.css
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Routes

- `/` — Hotel listing page
- `/hotel/:id` — Hotel details page

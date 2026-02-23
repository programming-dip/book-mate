# Book Mate

> A small React app for browsing and reading books locally — built with Vite.

## Overview

Book Mate is a client-side React application that displays a collection of books, allows reading book details, adding to a wishlist and readlist. It uses a simple JSON data source bundled in the repo for demo purposes.

## Live Link
https://book-mate-react.netlify.app/

## Features

- Browse books list and view details
- Add/remove books to a readlist
- Add/remove books to a wishlist
- Simple client-side state and localStorage persistence for wishlist

## Data

- Primary demo data: `public/booksData.json`
- Alternate source included: `book-mate-Resources-main/data/booksData.json`

## Prerequisites

- Node.js 16+ (or a recent LTS)
- npm or yarn

## Quick Start

Install dependencies:

```bash
npm install
```

Run the dev server (Vite):

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure (key files)

- `index.html` — app entry HTML
- `src/main.jsx` — React app bootstrap
- `src/App.jsx` — top-level app component
- `src/Components/` — React components (Header, Footer, Pages, Book, etc.)
- `public/booksData.json` — demo books JSON used by the app
- `book-mate-Resources-main/data/booksData.json` — alternate data file included in repo

For a more detailed view, open the `src/Components` and `src/Routes` folders.

## Utility helpers

Two small utilities are included to persist data to localStorage:

- `src/utility/addToDB.js`
- `src/utility/removeFromDB.js`

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — produce production build
- `npm run preview` — preview production build locally

These scripts are defined in `package.json`.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

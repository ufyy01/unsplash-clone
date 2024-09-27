# Unsplash Clone 🎉

An elegant Unsplash clone that fetches images from the Unsplash API and displays them in a beautifully staggered grid. The app features smooth CSS animations, pagination, search functionality, and a loading screen for a seamless user experience.

## Features

Staggered Image Grid: A responsive, staggered image layout similar to the official Unsplash site.
Search Functionality: Search for images using the Unsplash API.
Pagination: Navigate through different pages of results.
Loading Screen: Custom loading animation displayed while fetching data.
Smooth Animations: Fun CSS animations for a modern and sleek user experience.

## Tech Stack

Vue 3 with Composition API (Vue CLI)
TypeScript for type safety and better developer experience
Axios for HTTP requests to the Unsplash API
SCSS for modern, maintainable styles
Unsplash API for fetching images

## Project setup

### Install dependencies

```
npm install
```

### Don't forget your .env 😉

### Run the app

```
npm run serve
```

## Usage

### Fetching Images

Images are fetched from the Unsplash API using Axios. When the user visits the app, the initial batch of images is fetched and displayed in a staggered grid layout. You can search for images using the search bar, and the app will update the grid accordingly.

### Search

You can search for any keyword using the search bar. The app will fetch and display relevant images from the Unsplash API.

### Pagination

Pagination allows users to load more images by clicking a "Load More" button at the bottom of the page. Images load smoothly with a custom animation as new results are fetched from the API.

### Loading Screen

A loading screen is displayed when images are being fetched from the API, ensuring a smooth user experience.

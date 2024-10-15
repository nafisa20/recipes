# React App with Service Worker, and API Caching

## Project Overview

This application consists of a simple React app that features a dropdown menu which allows users to select a recipe name. Once selected, the recipe's details are displayed to the user. I've implemented a service worker that caches the fetched data from the DummyJSON API, and will either retreive the cached data on subsequent requests or fetch it from the API.

## Installation

To run this project locally:

Clone the project, change into the directory and install the dependencies. Then you'll need to start the React application, which will run on port 3000.

```bash
 git clone https://github.com/nafisa20/recipes.git
 cd recipes
 npm install
 npm start
```

## Improvements

If i were to spend more time on this application I'd like to add:

* some error handling in case the api call were to fail 
* a test which checks if the fetch event makes a network call & updates the cache
* a test which checks if the service worker's fetch returns a cached response
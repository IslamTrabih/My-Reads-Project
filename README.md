# My Reads Project

## Overview

- The project uses React to build the application and uses BooksAPI server provided by Udacity.
- This project is a bookshelf app that helps users to manage your book and allows users to categorize books they have read, are currently reading or want to read.

## Features

- Main Page (My Reads).
    - The main page shows three shelves for books:
        - Currently reading.
        - Want to read.
        - Read.
    - The main page shows a control that allows users to move books between shelves.
    - When the browser is refreshed, the same information is displayed on the page.
- Search Page.
    - The search page has a search input field.
    - As the user types into the search field, books that match the query are displayed on the page.
    - The user is able to search for multiple words, such as “artificial intelligence.”
    - Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf and change shelf of this book in the main page.
    - When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

## Getting Started

The project can be start with npm or yarn, so you can choose one of them and start with the following instructions.

### Installing

#### Instructions

To download the project:

```
git clone https://github.com/IslamTrabih/My-Reads-Project.git
```
then
```
cd My-Reads-Project
```

or download [Zip File](https://github.com/IslamTrabih/My-Reads-Project)

Then install all dependencies and run The project:

```
yarn install
```
then
```
yarn start
```

or

```
npm install
```
then
```
npm run start
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
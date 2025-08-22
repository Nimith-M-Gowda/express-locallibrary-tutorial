# Express Local Library Tutorial

A simple web application that manages a local library. Built with Express, Mongoose, and Pug, it allows users to browse, create, update, and delete records for books, authors, genres, and book instances.

## Live Demo

[https://local-meza.herokuapp.com/catalog](https://local-meza.herokuapp.com/catalog)

## Features
- Home page showing overall counts of books, available book instances, authors, and genres
- CRUD functionality for Books, Authors, Genres, and BookInstances
- Form validation and sanitization using express-validator
- Mongoose models with virtual properties for URLs and formatted dates

## Prerequisites
- Node.js v10 or higher
- MongoDB (running locally or via cloud)

## Installation
```bash
# Clone repository
git clone https://github.com/Nimith-M-Gowda/express-locallibrary-tutorial.git
cd express-locallibrary-tutorial

# Install dependencies
npm install
```

## Configuration
By default the app connects to a local MongoDB instance at `mongodb://localhost:27017/local_library`. To use a different URI, set the environment variable:
```bash
export MONGODB_URI="your_mongo_uri"
```

## Running the App
```bash
npm start
```
Then open [http://localhost:3000/catalog](http://localhost:3000/catalog) in your browser.

## Project Structure
```
├── app.js                 # Application entry point
├── bin/www                # HTTP server launcher
├── controllers/           # Route controllers for handling requests
│   ├── authorController.js
│   ├── bookController.js
│   ├── bookinstanceController.js
│   └── genreController.js
├── models/                # Mongoose models and schemas
│   ├── author.js
│   ├── book.js
│   ├── bookinstance.js
│   └── genre.js
├── node_modules/          # Installed packages
├── public/                # Static assets (CSS, images, JS)
├── routes/                # Route definitions (if any)
├── views/                 # Pug templates
└── README.md              # Project documentation
```

## Data Models

### Book
- **title** (String, required)
- **author** (ObjectId ref to Author, required)
- **summary** (String, required)
- **isbn** (String, required)
- **genre** (Array of ObjectId refs to Genre)

Virtuals:
- `url` &rarr; `/catalog/book/:id`

### Author
- **first_name** (String, required)
- **family_name** (String, required)
- **date_of_birth** (Date)
- **date_of_death** (Date)

Virtuals:
- `name` &rarr; full name
- `lifespan` &rarr; formatted birth–death dates
- `url` &rarr; `/catalog/author/:id`

### Genre
- **name** (String, required, minlength 3)

Virtuals:
- `url` &rarr; `/catalog/genre/:id`

### BookInstance
- **book** (ObjectId ref to Book, required)
- **imprint** (String, required)
- **status** (String enum: Available, Maintenance, Loaned, Reserved; default Maintenance)
- **due_back** (Date; default now)

Virtuals:
- `url` &rarr; `/catalog/bookinstance/:id`
- `due_back_formatted` &rarr; human-friendly date

## Controllers & Routes

All routes are prefixed with `/catalog`.

### Home
- **GET** `/catalog/` &ndash; Home page with counts.

### Books
- **GET** `/catalog/books` &ndash; List all books.
- **GET** `/catalog/book/create` &ndash; Display book creation form.
- **POST** `/catalog/book/create` &ndash; Handle book creation.
- **GET** `/catalog/book/:id` &ndash; Display book detail.
- **GET** `/catalog/book/:id/update` &ndash; Display book update form.
- **POST** `/catalog/book/:id/update` &ndash; Handle book update.
- **GET** `/catalog/book/:id/delete` &ndash; Display book delete confirmation.
- **POST** `/catalog/book/:id/delete` &ndash; Handle book deletion.

### Authors
- **GET** `/catalog/authors` &ndash; List all authors.
- **GET** `/catalog/author/create` &ndash; Display author creation form.
- **POST** `/catalog/author/create` &ndash; Handle author creation.
- **GET** `/catalog/author/:id` &ndash; Display author detail.
- **GET** `/catalog/author/:id/update` &ndash; Display author update form.
- **POST** `/catalog/author/:id/update` &ndash; Handle author update.
- **GET** `/catalog/author/:id/delete` &ndash; Display author delete confirmation.
- **POST** `/catalog/author/:id/delete` &ndash; Handle author deletion.

### Genres
- **GET** `/catalog/genres` &ndash; List all genres.
- **GET** `/catalog/genre/create` &ndash; Display genre creation form.
- **POST** `/catalog/genre/create` &ndash; Handle genre creation.
- **GET** `/catalog/genre/:id` &ndash; Display genre detail.
- **GET** `/catalog/genre/:id/update` &ndash; Display genre update form.
- **POST** `/catalog/genre/:id/update` &ndash; Handle genre update.
- **GET** `/catalog/genre/:id/delete` &ndash; Display genre delete confirmation.
- **POST** `/catalog/genre/:id/delete` &ndash; Handle genre deletion.

### BookInstances
- **GET** `/catalog/bookinstances` &ndash; List all book instances.
- **GET** `/catalog/bookinstance/create` &ndash; Display bookinstance creation form.
- **POST** `/catalog/bookinstance/create` &ndash; Handle bookinstance creation.
- **GET** `/catalog/bookinstance/:id` &ndash; Display bookinstance detail.
- **GET** `/catalog/bookinstance/:id/update` &ndash; Display bookinstance update form.
- **POST** `/catalog/bookinstance/:id/update` &ndash; Handle bookinstance update.
- **GET** `/catalog/bookinstance/:id/delete` &ndash; Display bookinstance delete confirmation.
- **POST** `/catalog/bookinstance/:id/delete` &ndash; Handle bookinstance deletion.

## Contributing
Pull requests are welcome. Please follow standard GitHub fork-and-pull request workflow.

## License
This project is licensed under the MIT License.
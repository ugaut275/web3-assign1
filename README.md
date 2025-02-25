# Artwork API

This project provides a RESTful API to interact with an artwork database. The data is stored in a Supabase database.

The API runs on port **8080**.

## Endpoints

### Eras
- **GET http://34.121.50.50:8080/api/eras**  
  Returns all the eras.

### Galleries
- **GET http://34.121.50.50:8080/api/gallery**  
  Returns all the galleries (returns all fields in the galleries table).

- **GET http://34.121.50.50:8080/api/galleries/1**  
  Returns just the specified gallery (use the `galleryId` field, e.g., gallery ID 1).

- **GET http://34.121.50.50:8080/api/galleries/country/fr**  
  Returns galleries whose `galleryCountry` (case insensitive) begins with the provided substring (e.g., "fr").

### Artists
- **GET http://34.121.50.50:8080/api/artists**  
  Returns all the artists (returns all fields in the artists table).

- **GET http://34.121.50.50:8080/api/artists/ref/1**  
  Returns just the specified artist (use the `artistId` field, e.g., artist ID 1).

- **GET http://34.121.50.50:8080/api/artists/search/van**  
  Returns artists whose last name (case insensitive) begins with the provided substring (e.g., "van").

- **GET http://34.121.50.50:8080/api/artists/country/ita**  
  Returns artists whose nationality (case insensitive) begins with the provided substring (e.g., "ita").

### Paintings
- **GET http://34.121.50.50:8080/api/paintings**  
  Returns all the paintings (returns all fields in the paintings table, excluding foreign keys). Includes all artist and gallery fields. Sorted by title by default.

- **GET http://34.121.50.50:8080/api/paintings/sort/title**  
  Returns all paintings sorted by title.

- **GET http://34.121.50.50:8080/api/paintings/sort/year**  
  Returns all paintings sorted by `yearOfWork`.

- **GET http://34.121.50.50:8080/api/paintings/ref/1**  
  Returns just the specified painting (use the `paintingId` field, e.g., painting ID 1).

- **GET http://34.121.50.50:8080/api/paintings/search/mona**  
  Returns paintings whose title (case insensitive) contains the provided substring (e.g., "mona").

- **GET http://34.121.50.50:8080/api/paintings/years/1500/1600**  
  Returns paintings between two years (inclusive), ordered by `yearOfWork` (e.g., years 1500 to 1600).

- **GET http://34.121.50.50:8080/api/paintings/galleries/ref/20**  
  Returns all paintings in a given gallery (use the `galleryId` field, e.g., gallery ID 1).

- **GET http://34.121.50.50:8080/api/paintings/artist/ref/1**  
  Returns all paintings by a given artist (use the `artistId` field, e.g., artist ID 1).

- **GET http://34.121.50.50:8080/api/paintings/artists/country/ita**  
  Returns all paintings by artists whose nationality begins with the provided substring (e.g., "ita").

### Genres
- **GET http://34.121.50.50:8080/api/genres**  
  Returns all genres (includes all era fields).

- **GET http://34.121.50.50:8080/api/genres/ref/1**  
  Returns just the specified genre (use the `genreId` field, e.g., genre ID 1).

- **GET http://34.121.50.50:8080/api/genres/painting/ref/1**  
  Returns the genres used in a given painting (ordered by `genreName` in ascending order, e.g., painting ID 1).

- **GET http://34.121.50.50:8080/api/paintings/genre/ref/1**  
  Returns all paintings for a given genre (use the `genreId` field, e.g., genre ID 1). Returns only `paintingId`, `title`, and `yearOfWork`, sorted by `yearOfWork`.

- **GET http://34.121.50.50:8080/api/paintings/era/ref/1**  
  Returns all paintings for a given era (use the `eraId` field, e.g., era ID 1). Returns only `paintingId`, `title`, and `yearOfWork`, sorted by `yearOfWork`.

### Counts
- **GET http://34.121.50.50:8080/api/counts/genres**  
  Returns the genre name and the number of paintings for each genre, sorted by the number of paintings (fewest to most).

- **GET http://34.121.50.50:8080/api/counts/artists**  
  Returns the artist name (first name + last name) and the number of paintings for each artist, sorted by the number of paintings (most to fewest).

- **GET http://34.121.50.50:8080/api/counts/topgenres/10**  
  Returns the genre name and the number of paintings for each genre, sorted by the number of paintings (most to least), for genres with more than the specified number of paintings (e.g., 10).

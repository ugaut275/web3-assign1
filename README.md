# Artwork API

This project provides a RESTful API to interact with an artwork database. The API allows you to retrieve information about various artworks, artists, galleries, genres, and more. The data is stored in a Supabase database.

The API runs on port **8080**.

## Endpoints

### Eras
- **GET http://34.121.50.50:8080/api/eras**  
  Retrieves a list of all eras.

### Galleries
- **GET http://34.121.50.50:8080/api/galleries**  
  Retrieves a list of all galleries.
  
- **GET http://34.121.50.50:8080/api/galleries/:id**  
  Retrieves a specific gallery by its ID.
  
- **GET http://34.121.50.50:8080/api/galleries/country/:substring**  
  Retrieves galleries by country name substring.

### Artists
- **GET http://34.121.50.50:8080/api/artists**  
  Retrieves a list of all artists.
  
- **GET http://34.121.50.50:8080/api/artists/ref/:id**  
  Retrieves a specific artist by their ID.
  
- **GET http://34.121.50.50:8080/api/artists/search/:substring**  
  Searches for artists by their last name.

- **GET http://34.121.50.50:8080/api/artists/country/:substring**  
  Searches for artists by their nationality.

### Paintings
- **GET http://34.121.50.50:8080/api/paintings**  
  Retrieves a list of all paintings, including artist and gallery details.
  
- **GET http://34.121.50.50:8080/api/paintings/sort/:field**  
  Retrieves a list of paintings sorted by `title` or `year`.
  
- **GET http://34.121.50.50:8080/api/paintings/ref/:id**  
  Retrieves a specific painting by its ID.
  
- **GET http://34.121.50.50:8080/api/paintings/search/:substring**  
  Searches for paintings by their title.
  
- **GET http://34.121.50.50:8080/api/paintings/years/:start/:end**  
  Retrieves paintings within a range of years.
  
- **GET http://34.121.50.50:8080/api/paintings/galleries/ref/:id**  
  Retrieves paintings by gallery ID.
  
- **GET http://34.121.50.50:8080/api/paintings/artist/ref/:id**  
  Retrieves paintings by artist ID.
  
- **GET http://34.121.50.50:8080/api/paintings/artists/country/:substring**  
  Retrieves paintings by artist nationality substring.
  
- **GET http://34.121.50.50:8080/api/paintings/genre/ref/:id**  
  Retrieves paintings by genre ID.
  
- **GET http://34.121.50.50:8080/api/paintings/era/ref/:id**  
  Retrieves paintings by era ID.

### Genres
- **GET http://34.121.50.50:8080/api/genres**  
  Retrieves a list of all genres with associated era details.
  
- **GET http://34.121.50.50:8080/api/genres/ref/:id**  
  Retrieves a specific genre by its ID.
  
- **GET http://34.121.50.50:8080/api/genres/painting/ref/:id**  
  Retrieves genres associated with a specific painting.
  
- **GET http://34.121.50.50:8080/api/counts/genres**  
  Retrieves genre counts (how many paintings are associated with each genre).

### Counts
- **GET http://34.121.50.50:8080/api/counts/artists**  
  Retrieves artist counts (how many paintings each artist has).

- **GET http://34.121.50.50:8080/api/counts/topgenres/:min**  
  Retrieves the top genres by painting count, filtering genres with a minimum count of `min`.

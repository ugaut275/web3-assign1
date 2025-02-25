# Artwork API

This project provides a RESTful API to interact with an artwork database.The data is stored in a Supabase database.

The API runs on port **8080**.

## Endpoints

### Eras
- **GET http://34.121.50.50:8080/api/eras**  
  Retrieves a list of all eras.

### Galleries
- **GET http://34.121.50.50:8080/api/galleries**  
  Retrieves a list of all galleries.
  
- **GET http://34.121.50.50:8080/api/galleries/30**  
  Retrieves a specific gallery by its ID (e.g., gallery ID 30).
  
- **GET http://34.121.50.50:8080/api/galleries/country/fra**  
  Retrieves galleries whose country name begins with "fra" (e.g., France).

### Artists
- **GET http://34.121.50.50:8080/api/artists**  
  Retrieves a list of all artists.
  
- **GET http://34.121.50.50:8080/api/artists/12**  
  Retrieves a specific artist by their ID (e.g., artist ID 12).
  
- **GET http://34.121.50.50:8080/api/artists/search/ma**  
  Searches for artists whose last name begins with "ma".
  
- **GET http://34.121.50.50:8080/api/artists/country/fra**  
  Searches for artists whose nationality begins with "fra" (e.g., French).

### Paintings
- **GET http://34.121.50.50:8080/api/paintings**  
  Retrieves a list of all paintings, including artist and gallery details.
  
- **GET http://34.121.50.50:8080/api/paintings/sort/title**  
  Retrieves a list of paintings sorted by title.
  
- **GET http://34.121.50.50:8080/api/paintings/63**  
  Retrieves a specific painting by its ID (e.g., painting ID 63).
  
- **GET http://34.121.50.50:8080/api/paintings/search/port**  
  Searches for paintings whose title contains "port".
  
- **GET http://34.121.50.50:8080/api/paintings/years/1800/1850**  
  Retrieves paintings from the years 1800 to 1850.
  
- **GET http://34.121.50.50:8080/api/paintings/galleries/5**  
  Retrieves paintings from gallery ID 5.
  
- **GET http://34.121.50.50:8080/api/paintings/artist/16**  
  Retrieves paintings by artist ID 16.
  
- **GET http://34.121.50.50:8080/api/paintings/artists/country/ital**  
  Retrieves paintings by artists whose nationality begins with "ital" (e.g., Italian artists).
  
- **GET http://34.121.50.50:8080/api/paintings/genre/78**  
  Retrieves paintings for genre ID 78.
  
- **GET http://34.121.50.50:8080/api/paintings/era/2**  
  Retrieves paintings for era ID 2.

### Genres
- **GET http://34.121.50.50:8080/api/genres**  
  Retrieves a list of all genres.
  
- **GET http://34.121.50.50:8080/api/genres/76**  
  Retrieves a specific genre by its ID (e.g., genre ID 76).
  
- **GET http://34.121.50.50:8080/api/genres/painting/408**  
  Retrieves genres associated with painting ID 408.
  
- **GET http://34.121.50.50:8080/api/paintings/genre/78**  
  Retrieves all paintings for genre ID 78.

### Counts
- **GET http://34.121.50.50:8080/api/counts/genres**  
  Retrieves genre counts (how many paintings are associated with each genre).

- **GET http://34.121.50.50:8080/api/counts/artists**  
  Retrieves artist counts (how many paintings each artist has).

- **GET http://34.121.50.50:8080/api/counts/topgenres/20**  
  Retrieves the top genres by painting count, filtering genres with a minimum count of 20.

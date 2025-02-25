# Artwork API

This project provides a RESTful API to interact with an artwork database. The API allows you to retrieve information about various artworks, artists, galleries, genres, and more. The data is stored in a Supabase database.

## Endpoints

### Eras
- **GET /api/eras**  
  Retrieves a list of all eras.

### Galleries
- **GET /api/gallery**  
  Retrieves a list of all galleries.
  
- **GET /api/galleries/:id**  
  Retrieves a specific gallery by its ID.
  
- **GET /api/galleries/country/:substring**  
  Retrieves galleries by country name substring.

### Artists
- **GET /api/artists**  
  Retrieves a list of all artists.
  
- **GET /api/artists/ref/:id**  
  Retrieves a specific artist by their ID.
  
- **GET /api/artists/search/:substring**  
  Searches for artists by their last name.

- **GET /api/artists/country/:substring**  
  Searches for artists by their nationality.

### Paintings
- **GET /api/paintings**  
  Retrieves a list of all paintings, including artist and gallery details.
  
- **GET /api/paintings/sort/:field**  
  Retrieves a list of paintings sorted by `title` or `year`.
  
- **GET /api/paintings/ref/:id**  
  Retrieves a specific painting by its ID.
  
- **GET /api/paintings/search/:substring**  
  Searches for paintings by their title.
  
- **GET /api/paintings/years/:start/:end**  
  Retrieves paintings within a range of years.
  
- **GET /api/paintings/galleries/ref/:id**  
  Retrieves paintings by gallery ID.
  
- **GET /api/paintings/artist/ref/:id**  
  Retrieves paintings by artist ID.
  
- **GET /api/paintings/artists/country/:substring**  
  Retrieves paintings by artist nationality substring.
  
- **GET /api/paintings/genre/ref/:id**  
  Retrieves paintings by genre ID.
  
- **GET /api/paintings/era/ref/:id**  
  Retrieves paintings by era ID.

### Genres
- **GET /api/genres**  
  Retrieves a list of all genres with associated era details.
  
- **GET /api/genres/ref/:id**  
  Retrieves a specific genre by its ID.
  
- **GET /api/genres/painting/ref/:id**  
  Retrieves genres associated with a specific painting.
  
- **GET /api/counts/genres**  
  Retrieves genre counts (how many paintings are associated with each genre).

### Counts
- **GET /api/counts/artists**  
  Retrieves artist counts (how many paintings each artist has).

- **GET /api/counts/topgenres/:min**  
  Retrieves the top genres by painting count, filtering genres with a minimum count of `min`.


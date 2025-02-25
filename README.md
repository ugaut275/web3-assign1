# Artwork API

This project provides a RESTful API to interact with an artwork database. The API allows you to retrieve information about various artworks, artists, galleries, genres, and more. The data is stored in a Supabase database.

## Endpoints

### Eras
- **GET /api/eras**  
  Retrieves a list of all eras.  
  [Link](http://34.121.50.50/api/eras)

### Galleries
- **GET /api/galleries**  
  Retrieves a list of all galleries.  
  [Link](http://34.121.50.50/api/galleries)

- **GET /api/galleries/:id**  
  Retrieves a specific gallery by its ID.  
  Example: [Link](http://34.121.50.50/api/galleries/30)

- **GET /api/galleries/country/:substring**  
  Retrieves galleries by country name substring.  
  Example: [Link](http://34.121.50.50/api/galleries/country/fra)

### Artists
- **GET /api/artists**  
  Retrieves a list of all artists.  
  [Link](http://34.121.50.50/api/artists)

- **GET /api/artists/ref/:id**  
  Retrieves a specific artist by their ID.  
  Example: [Link](http://34.121.50.50/api/artists/12)

- **GET /api/artists/search/:substring**  
  Searches for artists by their last name.  
  Example: [Link](http://34.121.50.50/api/artists/search/ma)

- **GET /api/artists/country/:substring**  
  Searches for artists by their nationality.  
  Example: [Link](http://34.121.50.50/api/artists/country/fra)

### Paintings
- **GET /api/paintings**  
  Retrieves a list of all paintings, including artist and gallery details.  
  [Link](http://34.121.50.50/api/paintings)

- **GET /api/paintings/sort/:field**  
  Retrieves a list of paintings sorted by `title` or `year`.  
  Example: [Link](http://34.121.50.50/api/paintings/sort/title)

- **GET /api/paintings/ref/:id**  
  Retrieves a specific painting by its ID.  
  Example: [Link](http://34.121.50.50/api/paintings/63)

- **GET /api/paintings/search/:substring**  
  Searches for paintings by their title.  
  Example: [Link](http://34.121.50.50/api/paintings/search/port)

- **GET /api/paintings/years/:start/:end**  
  Retrieves paintings within a range of years.  
  Example: [Link](http://34.121.50.50/api/paintings/years/1800/1850)

- **GET /api/paintings/galleries/ref/:id**  
  Retrieves paintings by gallery ID.  
  Example: [Link](http://34.121.50.50/api/paintings/galleries/5)

- **GET /api/paintings/artist/ref/:id**  
  Retrieves paintings by artist ID.  
  Example: [Link](http://34.121.50.50/api/paintings/artist/16)

- **GET /api/paintings/artists/country/:substring**  
  Retrieves paintings by artist nationality substring.  
  Example: [Link](http://34.121.50.50/api/paintings/artists/country/ital)

- **GET /api/paintings/genre/ref/:id**  
  Retrieves paintings by genre ID.  
  Example: [Link](http://34.121.50.50/api/paintings/genre/78)

- **GET /api/paintings/era/ref/:id**  
  Retrieves paintings by era ID.  
  Example: [Link](http://34.121.50.50/api/paintings/era/2)

### Genres
- **GET /api/genres**  
  Retrieves a list of all genres with associated era details.  
  [Link](http://34.121.50.50/api/genres)

- **GET /api/genres/ref/:id**  
  Retrieves a specific genre by its ID.  
  Example: [Link](http://34.121.50.50/api/genres/76)

- **GET /api/genres/painting/ref/:id**  
  Retrieves genres associated with a specific painting.  
  Example: [Link](http://34.121.50.50/api/genres/painting/408)

- **GET /api/counts/genres**  
  Retrieves genre counts (how many paintings are associated with each genre).  
  [Link](http://34.121.50.50/api/counts/genres)

### Counts
- **GET /api/counts/artists**  
  Retrieves artist counts (how many paintings each artist has).  
  [Link](http://34.121.50.50/api/counts/artists)

- **GET /api/counts/topgenres/:min**  
  Retrieves the top genres by painting count, filtering genres with a minimum count of `min`.  
  Example: [Link](http://34.121.50.50/api/counts/topgenres/20)

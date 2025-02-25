import express from 'express';
import * as router from './scripts/router.js'; 

const app = express(); // create an express app

let port = process.env.PORT || 8080;

app.listen(port, () => { // starting the server
    console.log(`Server running at port ${port}`);
});
// call the router functions
router.allEras(app);
router.allGallery(app);
router.getGallery(app);
router.galleriesByCountry(app);
router.allArtists(app);
router.artistById(app);
router.artistsByLastName(app);
router.artistsByNationality(app);
router.allPaintings(app);
router.paintingsSorted(app);
router.paintingById(app);
router.paintingsByTitle(app);
router.paintingsByYearRange(app);
router.paintingsByGallery(app);
router.paintingsByArtist(app);
router.paintingsByArtistNationality(app);
router.allGenres(app);
router.genreById(app);
router.genresByPainting(app);
router.paintingsByGenre(app);
router.paintingsByEra(app);
router.genreCounts(app);
router.artistCounts(app);
router.topGenres(app);


// This file contains the routes for the API.
import { createClient } from '@supabase/supabase-js';
import { parse } from 'path';
const supaURL = process.env.API_URL; // URL for Supabase API from .env file
const supaKey = process.env.API_KEY;
const supabase = createClient(supaURL, supaKey);

const allEras = (app)=>{
    app.get('/api/eras', async (req, res) => {
        try {
            const { data, error } = await supabase.from('eras').select('*');
            if (error) {
                throw error;
            }
            if (data) {
                res.json(data);
            } else {
                res.send("No data");
            }
        } catch (err) {
            console.log(err);
            res.status(500).send("Error fetching data");
        }
    });
}

const allGallery = (app)=>{
    app.get('/api/gallery', async (req,res)=>{
        try{
            const {data,error} = await supabase.from('gallery').select('*');
            if(error){
                throw error;
            }
            if(data){
                res.json(data)
            } else{
                res.send("No data");
                
            }
        }
        catch(err){
            console.log(err);
            res.status(500).send("Error fetching data"); 
        }
        
    });
}

const getGallery = (app)=>{
    app.get('/api/galleries/:id', async(req,res)=>{
        try{
            const data = await supabase.from('gallery').select('*').eq('id',parseInt(parseInt(req.params.id)));
            if (error){
                throw error
            }
            if(data){
                res.json(data);
            }
            else{
                res.send("No data");
            }

        }catch(err){
            console.log(err);
            res.status(500).send("Error fetching data");
        }
    });
}

// Endpoint to get galleries by country substring
const galleriesByCountry = (app) => {
    app.get('/api/galleries/country/:substring', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('galleries')
                .select('*')
                .ilike('galleryCountry', `${req.params.substring.toLowerCase()}%`);
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get all artists
const allArtists = (app) => {
    app.get('/api/artists', async (req, res) => {
        try {
            const { data, error } = await supabase.from('artists').select('*');
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get a specific artist by ID
const artistById = (app) => {
    app.get('/api/artists/ref/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('artists')
                .select('*')
                .eq('artistId', parseInt(req.params.id));
            if (error) throw error;
            res.json(data.length ? data[0] : {});
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to search artists by last name substring
const artistsByLastName = (app) => {
    app.get('/api/artists/search/:substring', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('artists')
                .select('*')
                .ilike('lastName', `${req.params.substring.toLowerCase()}%`);
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get artists by nationality substring
const artistsByNationality = (app) => {
    app.get('/api/artists/country/:substring', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('artists')
                .select('*')
                .ilike('nationality', `${req.params.substring.toLowerCase()}%`);
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get all paintings with artist and gallery details
const allPaintings = (app) => {
    app.get('/api/paintings', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('paintings')
                .select('*, artists(*), galleries(*)')
                .order('title', { ascending: true });
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get paintings sorted by title or year
const paintingsSorted = (app) => {
    app.get('/api/paintings/sort/:field', async (req, res) => {
        try {
            let { field } = req.params;
            const validFields = ['title', 'year'];
            if (!validFields.includes(field)) {
                return res.status(400).send("Invalid sort field");
            }
            if (field === 'year') {
                field = 'yearOfWork';
            }
            const { data, error } = await supabase
                .from('paintings')
                .select('*, artists(*), galleries(*)')
                .order(field, { ascending: true });
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get a specific painting by ID
const paintingById = (app) => {
    app.get('/api/paintings/ref/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('paintings')
                .select('*, artists(*), galleries(*)')
                .eq('paintingId', parseInt(req.params.id));
            if (error) throw error;
            res.json(data.length ? data[0] : {});
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to search paintings by title substring
const paintingsByTitle = (app) => {
    app.get('/api/paintings/search/:substring', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('paintings')
                .select('*, artists(*), galleries(*)')
                .ilike('title', `%${req.params.substring.toLowerCase()}%`);
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get paintings within a range of years
const paintingsByYearRange = (app) => {
    app.get('/api/paintings/years/:start/:end', async (req, res) => {
        try {
            const { start, end } = req.params;
            const { data, error } = await supabase
                .from('paintings')
                .select('*, artists(*), galleries(*)')
                .gte('yearOfWork', parseInt(start))
                .lte('yearOfWork', parseInt(end))
                .order('yearOfWork', { ascending: true });
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get paintings by gallery ID
const paintingsByGallery = (app) => {
    app.get('/api/paintings/galleries/ref/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('paintings')
                .select('*, artists(*), galleries(*)')
                .eq('galleryId', parseInt(req.params.id));
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get paintings by artist ID
const paintingsByArtist = (app) => {
    app.get('/api/paintings/artist/ref/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('paintings')
                .select('*, artists(*), galleries(*)')
                .eq('artistId', parseInt(req.params.id));
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get paintings by artist nationality substring
const paintingsByArtistNationality = (app) => {
    app.get('/api/paintings/artists/country/:substring', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('paintings')
                .select('*, artists(*), galleries(*)')
                .ilike('artists.nationality', `${req.params.substring.toLowerCase()}%`);
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get all genres with era details
const allGenres = (app) => {
    app.get('/api/genres', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('genres')
                .select('*, eras(*)');
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get a specific genre by ID
const genreById = (app) => {
    app.get('/api/genres/ref/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('genres')
                .select('*, eras(*)')
                .eq('genreId', parseInt(req.params.id));
            if (error) throw error;
            res.json(data.length ? data[0] : {});
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get genres by painting ID
const genresByPainting = (app) => {
    app.get('/api/genres/painting/ref/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('painting_genres_view')
                .select('*')
                .eq('paintingId', parseInt(req.params.id))
                .order('genreName', { ascending: true });
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get paintings by genre ID
const paintingsByGenre = (app) => {
    app.get('/api/paintings/genre/ref/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('painting_by_genre')
                .select('paintingId, title, yearOfWork')
                .eq('genreId', parseInt(req.params.id))
                .order('yearOfWork', { ascending: true });
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get paintings by era ID
const paintingsByEra = (app) => {
    app.get('/api/paintings/era/ref/:id', async (req, res) => {
        try {
            const { data, error } = await supabase
            .from('painting_by_era')
            .select('paintingId, title, yearOfWork')
            .eq('eraId', parseInt(req.params.id))
            .order('yearOfWork', { ascending: true });
            if (error) throw error;
            res.json(data || []);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get genre counts
const genreCounts = (app) => {
    app.get('/api/counts/genres', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('genre_painting_counts')
                .select('*')
                .order('painting_count', { ascending: true });
            if (error) throw error;
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get artist counts
const artistCounts = (app) => {
    app.get('/api/counts/artists', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('artist_painting')
                .select('*')
                .order('painting_count', { ascending: false });

            if (error) throw error;

            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};

// Endpoint to get top genres by count
const topGenres = (app) => {
    app.get('/api/counts/topgenres/:min', async (req, res) => {
        try {
            const { min } = req.params;

            // Query the genre_painting_counts view
            const { data, error } = await supabase
                .from('genre_painting_counts')
                .select('*')
                .gt('painting_count', parseInt(min)) 
                .order('painting_count', { ascending: false }); 

            if (error) throw error;


            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error fetching data");
        }
    });
};


export {allEras, allGallery, getGallery,
    galleriesByCountry, allArtists, artistById, artistsByLastName, artistsByNationality,
    allPaintings, paintingsSorted, paintingById, paintingsByTitle, paintingsByYearRange,
    paintingsByGallery, paintingsByArtist, paintingsByArtistNationality, allGenres,
    genreById, genresByPainting, paintingsByGenre, paintingsByEra, genreCounts,
    artistCounts, topGenres
};
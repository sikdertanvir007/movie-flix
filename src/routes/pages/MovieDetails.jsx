import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import MovieDetailsCard from '../../components/MovieDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const MovieDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [movie,setMovie] = useState({})
    //console.log(data,id,movie);

    useEffect(()=> {
        const movieDetails = data.find((singleMovie) => singleMovie.id == id );
        setMovie(movieDetails);
    },[data,id]);

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto mt-10 bg-slate-200'>
            <MovieDetailsCard movie={movie}></MovieDetailsCard>
            </main>
        </div>
    );
};

export default MovieDetails;
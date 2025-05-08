import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const MoviesContainer = ({movies}) => {
    const [displayMovies,setDisplayMovies] = useState([]);
    const [showAll,setShowAll] = useState(false)
useEffect(()=> {
    if (showAll) {
        setDisplayMovies(movies)
    }
    else {
        setDisplayMovies(movies.slice(0,6))
    }
},[movies,showAll])
    return (
        <div className='mt-18'>
            <h3 className="text-3xl text-center font-bold text-red-600  ">POPULAR  SUBSCRIPTION BOXES </h3>
            <div className='px-3 md:px-8 lg:px-10 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4 md:mb-6 lg:mb-8 mt-4 md:mt-6 lg:mt-8'>
{
    displayMovies.map((movie)=> {
    
     return   <MovieCard key={movie.id} movie={movie}></MovieCard>
    })
}

            </div>
            <div className='mb-6 flex items-center justify-center '><button onClick={()=>{
                setShowAll(prv =>!prv)
                if (showAll) window.scrollTo(0,400)
            }} className='btn btn-primary rounded-full '>{showAll ? 'Show Less' : "Show All Movies"}</button></div>
       

        </div>
    );
};

export default MoviesContainer;
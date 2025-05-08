import React from 'react';
import { Link } from 'react-router';

const MovieCard = ({ movie }) => {
  const { name, thumbnail, id, tech_category, frequency, price, release_year } = movie;

  return (
    <div>
      <div className="card card-side flex-col bg-base-100 shadow-lg gap-8 px-4 py-10">
        {/* Image container with relative positioning */}
        <div className="relative w-full">
          <img
            src={thumbnail}
            alt="Movie"
            className="w-120"
          />
          {/* tech_category positioned at bottom-left of the image */}
          <div className="absolute -bottom-2 -left-1 m-2 px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-sm">
            {tech_category}
          </div>
        </div>

        {/* Movie info */}
        <div className='flex justify-between items-center'>
          <div className=' flex'>
            <p className='font-bold'>{name}</p>
            <p className='font-bold'>({release_year})</p>
          </div>
          
        </div>
        <div className='flex justify-between items-center'>
          
            <p className='text-lg'>Subscription :  <span className='px-3 py-1      rounded-full font-bold bg-amber-300'>{frequency}</span></p>
            <p className='text-lg'>Price : <span className='px-3 py-1 text-white      rounded-full font-bold bg-primary'>${price}</span></p>
        
        </div>
        <Link className='btn btn-outline btn-primary w-full rounded-full' to={`/movie-details/${id}`}>View More</Link>
      
        </div>
      </div>
    
  );
};

export default MovieCard;

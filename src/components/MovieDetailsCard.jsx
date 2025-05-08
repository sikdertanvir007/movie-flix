import React, { useState } from 'react';
import { FaImdb } from "react-icons/fa6";
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";

const MovieDetailsCard = ({ movie }) => {
  const {
    name,
    thumbnail,
    id,
    tech_category,
    frequency,
    price,
    release_year,
    description,
    ratings,
    number_of_reviews
  } = movie;

  const [reviewText, setReviewText] = useState('');
  const [ratingValue, setRatingValue] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = () => {
    const ratingNum = parseInt(ratingValue);
    if (!reviewText || isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      alert('Please enter a valid review and rating (1-5)');
      return;
    }

    const newReview = {
      text: reviewText,
      rating: ratingNum,
      date: new Date().toLocaleString()
    };

    setReviews([...reviews, newReview]);
    setReviewText('');
    setRatingValue('');
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="card card-side flex-col bg-base-100 shadow-lg gap-6 px-6 py-10">

        {/* Image and Category */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative">
            <img
              src={thumbnail}
              alt="Movie"
              className="w-[460px] h-auto mx-auto"
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-sm">
              {tech_category}
            </div>
          </div>
        </div>

        {/* Movie Info */}
        <div className="flex flex-col space-y-8">
          <div className="text-xl font-bold">{name} <span className="text-gray-500">({release_year})</span></div>
          <div className="flex justify-between items-center">
            <p className="text-lg">
              Subscription: <span className="px-3 py-1 rounded-full font-bold bg-amber-300">{frequency}</span>
            </p>
            <p className="text-lg">
              Price: <span className="px-3 py-1 text-white rounded-full font-bold bg-primary">${price}</span>
            </p>
          </div>
          <div className=" flex gap-2">
            <p className="font-bold"> Plot:</p>
            <p>{description}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaImdb size={40} className="text-yellow-500" />
              <p>Ratings: <span className="font-bold">{ratings}</span></p>
            </div>
            <p className="font-semibold">
              Number Of Reviews:
              <span className="px-3 py-1 text-white rounded-full font-bold bg-red-400 ml-2">{number_of_reviews}</span>
            </p>
          </div>
        </div>

        {/* Review Input Section */}
        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <input
              type="number"
              className="input input-bordered w-32"
              placeholder="Rating (1-5)"
              value={ratingValue}
              min="1"
              max="5"
              onChange={(e) => setRatingValue(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={handleReviewSubmit}
            >
              Submit Review
            </button>
          </div>
        </div>

        {/* Display Reviews */}
        {reviews.length > 0 && (
          <div className="mt-6 border-t pt-4">
            <h4 className="text-lg font-semibold mb-2">User Reviews:</h4>
            <ul className="space-y-2">
              {reviews.map((rev, index) => (
                <li key={index} className="bg-gray-100 p-3 rounded-md shadow-sm">
                  <p className="font-medium">"{rev.text}"</p>
                  <div className="text-sm text-gray-600">Rating: {rev.rating} | {rev.date}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
<Link className='btn btn-secondary' to="/"><FaArrowLeft /> Back to Subscription Box</Link>
      </div>
    </div>
  );
};

export default MovieDetailsCard;

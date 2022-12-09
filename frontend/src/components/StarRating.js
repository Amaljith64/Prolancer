import React,{useContext,useState , useEffect} from 'react'

const StarRating = ({setRating,setHover,rating,hover}) => {
    
    return (
        <div className="star-raating">
        {[...Array(5)].map((star, index) => {
            index += 1;
            return (
            <button 
            style={{ backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',}}
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
            >
                <span className="star">&#9733;</span>
            </button>
            );
        })}
        </div>
      );
    };

export default StarRating

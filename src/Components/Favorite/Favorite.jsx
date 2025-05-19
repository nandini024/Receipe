import React, { useEffect, useState } from "react";
import "./Favorite.css";       

export default function Favorite() {
const[favReceipe,setFavReceipe]=useState([])

useEffect(()=>{
    const favItemData= JSON.parse(localStorage.getItem("favItems")) || [];
    console.log(favItemData)
    setFavReceipe(favItemData)
},[])

  if (!favReceipe.length) {
    return (
      <div className="alert">
         No favourites yet. Go add some tasty recipes!
      </div>
    );
  }

  //delete function
  const deleteFav=(cardId)=>{
    console.log(cardId);
  
    
   const matchesData= favReceipe.filter((f)=>f.id!==cardId)
   console.log(matchesData);
   setFavReceipe(matchesData)
   localStorage.setItem("favItems",JSON.stringify(matchesData))
   
    
  }

  return (
    <section className="fav-grid">
      {favReceipe.map((matchedRecipe , i) => (
        <div key={i} className="card">
          <img
            src={matchedRecipe.image}
            alt={matchedRecipe.name}
            className="card-img"
          />

          <div className="card-body">
            <h2>{matchedRecipe.name}</h2>
            <p>
              <strong>⭐ Rating:</strong> {matchedRecipe.rating} (
              {matchedRecipe.reviewCount} reviews)
            </p>
            <p>
              <strong>⏱ Prep Time:</strong> {matchedRecipe.prepTimeMinutes} mins
            </p>
            <p>
              <strong>🍽 Servings:</strong> {matchedRecipe.servings}
            </p>
            <p>
              <strong>🏷 Tags:</strong> {matchedRecipe.tags.join(", ")}
            </p>

            <button className="btn"  onClick={()=>deleteFav(matchedRecipe.id)}>Delete</button>
          </div>
        </div>
      ))}
    </section>
  );
}

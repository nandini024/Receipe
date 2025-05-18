import React from "react";
import "./favorite.css";        // ⬅️ styles just below

export default function Favorite() {
  const favItemData = JSON.parse(localStorage.getItem("favItems")) ?? [];

  if (!favItemData.length) {
    return (
      <div className="alert">
        😔 No favourites yet. Go add some tasty recipes!
      </div>
    );
  }

  return (
    <section className="fav-grid">
      {favItemData.map((matchedRecipe) => (
        <div key={matchedRecipe.id} className="card">
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

            <button className="btn">Delete</button>
          </div>
        </div>
      ))}
    </section>
  );
}

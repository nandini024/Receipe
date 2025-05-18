import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ReceipeDataInformation.css';

const ReceipeDataInformation = ({ recipeInfo }) => {
  const { id } = useParams();
  const matchedRecipe = recipeInfo.find((rec) => rec.id === Number(id));

  if (!matchedRecipe) {
    return <p className="not-found">Recipe not found 😢</p>;
  }

  const AddToFav = (recipe) => {
  const favArr = JSON.parse(localStorage.getItem("favItems")) || [];
  favArr.push(recipe);
  localStorage.setItem("favItems", JSON.stringify(favArr));

  // simple browser alert
  alert(`${recipe.name} added to Favourites! ❤️`);
};

const AddToCart = () => {
  const cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartArr.push(matchedRecipe);
  localStorage.setItem("cartItems", JSON.stringify(cartArr));

  alert(`${matchedRecipe.name} added to Cart 🛒`);
};





 /* …everything above stays the same … */

return (
  <div className="recipe-detail-container">
    <div className="recipe-card">
      {/* IMAGE BLOCK */}
      <div className="image-section">
        <img src={matchedRecipe.image} alt={matchedRecipe.name} className="recipe-image" />
      </div>

      {/* INFO BLOCK */}
      <div className="info-section">
        <h2 className="recipe-title">{matchedRecipe.name}</h2>

        <p><strong>⭐ Rating:</strong> {matchedRecipe.rating} ({matchedRecipe.reviewCount} reviews)</p>
        <p><strong>⏱ Prep Time:</strong> {matchedRecipe.prepTimeMinutes} mins</p>
        <p><strong>🍽 Servings:</strong> {matchedRecipe.servings}</p>
        <p><strong>🏷 Tags:</strong> {matchedRecipe.tags.join(", ")}</p>

        {/* 🔼 BUTTONS NOW COME HERE */}
        <div className="button-group">
          <button className="fav-btn"  onClick={() => AddToFav(matchedRecipe)}>
            Add&nbsp;to&nbsp;Favourite
          </button>
          <button className="cart-btn" onClick={AddToCart}>
            Add&nbsp;to&nbsp;Cart
          </button>
        </div>

        {/* INGREDIENTS + STEPS */}
        <div className="section">
          <h3>🧂 Ingredients</h3>
          <ul className="ingredients-list">
            {matchedRecipe.ingredients?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="section">
         
         
        </div>

        <Link to="/receipes" className="back-btn">⟵ Back to All Recipes</Link>
      </div>
    </div>
  </div>
);

};

export default ReceipeDataInformation;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Receipe.css";

export default function Receipe({ singleReceipe }) {
  const navigate = useNavigate();

  return (
    <section className="recipe-section">
      <h2 className="fancy-heading">🍽️ Explore Our Special Recipes</h2>

      <div className="recipe-grid">
        {singleReceipe.map((r) => (
          <article key={r.id} className="recipe-card-glass">
            <div className="image-container">
              <img src={r.image} alt={r.name} loading="lazy" />
            </div>
            <div className="recipe-info">
              <h3>{r.name}</h3>
              <div className="badge">{r.cuisine}</div>
              <button
                className="view-more-btn"
                onClick={() => navigate(`/receipes/${r.id}`)}
              >
                View More
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

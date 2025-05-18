import React from "react";
import "./AddToCart.css";   // 👈 if you put the CSS in its own file

function AddToCart() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? [];

  if (!cartItems.length) return <p className="empty">Your cart is empty ☹️</p>;

  return (
    <div className="cart-grid">
      {cartItems.map((item) => (
        <article key={item.id} className="card">
          <img src={item.image} alt={item.name} className="card-img" />

          <section className="card-body">
            <h2 className="card-title">{item.name}</h2>

            <ul className="meta">
              <li>⭐ {item.rating} <span className="sub">({item.reviewCount})</span></li>
              <li>⏱ {item.prepTimeMinutes} mins</li>
              <li>🍽 {item.servings} servings</li>
              <li>🏷 {item.tags.join(", ")}</li>
            </ul>

            <button
              className="btn-delete"
              onClick={() => {
                const updated = cartItems.filter((i) => i.id !== item.id);
                localStorage.setItem("cartItems", JSON.stringify(updated));
                window.location.reload(); // quick-n-dirty re-render
              }}
            >
              Remove
            </button>
          </section>
        </article>
      ))}
    </div>
  );
}

export default AddToCart;

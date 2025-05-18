import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

/* 👉 Replace these URLs with your own images or /assets files */
const sampleImages = [
  {
    id: 1,
    name: "Sushi Platter",
    image:
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Avocado Toast",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Berry Pancakes",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Veggie Salad",
    image:
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    name: "Ramen Bowl",
    image:
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60",
  },
   {
    id: 5,
    name: "Chocolate Cake",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    name: "Ramen Bowl",
    image:
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60",
  }
];


export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-wrapper">
      {/* HERO */}
      <section className="hero">
  <h1 className="hero-title">Cook • Taste • Enjoy</h1>
  <p className="hero-sub">
    Discover hand-picked recipes from around the world.
  </p>
  
  {/* New catchy content */}
  <p className="hero-highlight">
    🍳 Ready to impress your taste buds? Find your next favorite dish today! 🍴
  </p>

  <button className="explore-btn" onClick={() => navigate("/receipes")}>
    Explore&nbsp;More
  </button>
</section>


      {/* GALLERY */}
      <section className="sample-section">
        <h2 className="section-heading">Food Gallery</h2>

        <div className="sample-grid">
          {sampleImages.map((item) => (
            <div key={item.id} className="sample-card">
              <img src={`${item.image}?auto=format&fit=crop&w=800&q=60`} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

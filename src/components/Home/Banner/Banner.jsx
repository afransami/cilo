import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Banner = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/src/assets/BannerData.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(cards);
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id} className="relative w-full">
          <img
            // src={imageUrl}
            src={card.imageLg}
            alt="Your Image"
            className="lg:block hidden w-full h-auto"
          />
          <img
            src={card.imageM}
            alt="Your Image"
            className="w-full h-auto block lg:hidden"
          />
          <div
            className="absolute left-0 w-full h-full"
            style={{ fontFamily: "Gotham, sans-serif" }}
          >
            <p className="vtitle font-bold">{card.name}</p>
            <p className="underline mt-1 sm:mt-2 md:mt-6 lg:mt-8 font-semibold">
              <Link to={`/productDetails/${card.id}`}>Explore Details</Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;

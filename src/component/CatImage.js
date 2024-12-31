import React, { useEffect, useState } from "react";

const CatImage = () => {
  const [catImage, setCatImage] = useState("");

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        if (data && data[0] && data[0].url) {
          setCatImage(data[0].url);
        }
      });
  }, []);

  return (
    <div>
      <h2>Gambar Kucing Acak</h2>
      {catImage && (
        <img src={catImage} alt="Kucing Acak" className="cat-image" />
      )}
    </div>
  );
};

export default CatImage;

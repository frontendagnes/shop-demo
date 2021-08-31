import React from "react";
import "./Feed.css";

import Product from "../Product/Product";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__products">
        <Product
          id="1"
          title="Kgniga"
          picphoto="https://ksiegarnia.edu.pl/galerie/m/mechatronika-samochodu-u_7748.jpg"
          price="99 zł"
        />
        <Product
          id="2"
          title="coś tan"
          picphoto="https://ksiegarnia.edu.pl/galerie/m/mechatronika-samochodu-u_7748.jpg"
          price="15 zł"
        />
        <Product
          id="3"
          title="Auto z mobilu"
          picphoto="https://ksiegarnia.edu.pl/galerie/m/mechatronika-samochodu-u_7748.jpg"
          price="100 zł"
        />
        <Product
          id="4"
          title="Auto z mobilu"
          picphoto="https://ksiegarnia.edu.pl/galerie/m/mechatronika-samochodu-u_7748.jpg"
          price="100 zł"
        />
        <Product
          id="5"
          title="Auto z mobilu"
          picphoto="https://ksiegarnia.edu.pl/galerie/m/mechatronika-samochodu-u_7748.jpg"
          price="100 zł"
        />
        <Product
          id="6"
          title="Auto z mobilu"
          picphoto="https://ksiegarnia.edu.pl/galerie/m/mechatronika-samochodu-u_7748.jpg"
          price="100 zł"
        />
        <Product
          id="7"
          title="Auto z mobilu"
          picphoto="https://ksiegarnia.edu.pl/galerie/m/mechatronika-samochodu-u_7748.jpg"
          price="100 zł"
        />
        <Product
          id="8"
          title="Auto z mobilu"
          picphoto="https://ksiegarnia.edu.pl/galerie/m/mechatronika-samochodu-u_7748.jpg"
          price="100 zł"
        />
        <Product
          id="9"
          title="Auto z mobilu"
          picphoto="https://ksiegarnia.edu.pl/galerie/m/mechatronika-samochodu-u_7748.jpg"
          price="100 zł"
        />
        <Product
          id="10"
          title="Auto z mobilu"
          picphoto="https://ksiegarnia.edu.pl/galerie/m/mechatronika-samochodu-u_7748.jpg"
          price="100 zł"
        />
        <Product
          id="11"
          title="Auto z mobilu"
          picphoto="https://ksiegarnia.edu.pl/galerie/m/mechatronika-samochodu-u_7748.jpg"
          price="100 zł"
        />
      </div>
    </div>
  );
}

export default Feed;

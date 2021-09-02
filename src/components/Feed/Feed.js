import React from "react";
import "./Feed.css";
import { nanoid } from "nanoid";
import baner from "../../assets/baner.jpg";
import Product from "../Product/Product";

function Feed() {
  const index = () => {
    return `SHOP-${nanoid(8)}`;
  };

  return (
    <div className="feed">
      <div className="feed__baner">
        <img src={baner} className="feed__image" alt="" />
        <div className="feed__description">
          <p>Aut fuga reprehenderit repellat rem.</p>
          <p>Dolorem libero dolore.</p>
        </div>
      </div>
      <div className="feed__products">
        <div className="feed__row">
          <Product
            id={index()}
            title="Headphones"
            picphoto="https://images-na.ssl-images-amazon.com/images/I/71ITEaodrZL._AC_SL1500_.jpg"
            price={99}
          />
          <Product
            id={index()}
            title="Camera"
            picphoto="https://images-na.ssl-images-amazon.com/images/I/71EzZHveM-L._AC_SL1500_.jpg"
            price={150}
          />
          <Product
            id={index()}
            title="Coffee machine"
            picphoto="https://images-na.ssl-images-amazon.com/images/I/51eqU4jOrLL._AC_SL1199_.jpg"
            price={399}
          />
        </div>
        <div className="feed__row">
          <Product
            id={index()}
            title="Smart speaker with Alexa"
            picphoto="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            price={100}
          />
          <Product
            id={index()}
            title="Wywrotka Volvo Ze Światłem I Dźwiękiem"
            picphoto="https://images-na.ssl-images-amazon.com/images/I/71e7WRVuoyL._AC_SL1500_.jpg"
            price={150}
          />
          <Product
            id={index()}
            title="Telewizor Smart TV"
            picphoto="https://images-na.ssl-images-amazon.com/images/I/71e0LNY9YeL._AC_SL1500_.jpg"
            price={1000}
          />
        </div>
        <div className="feed__row">
          <Product
            id={index()}
            title="Headphones"
            picphoto="https://images-na.ssl-images-amazon.com/images/I/71ITEaodrZL._AC_SL1500_.jpg"
            price={99}
          />
          <Product
            id={index()}
            title="Camera"
            picphoto="https://images-na.ssl-images-amazon.com/images/I/71EzZHveM-L._AC_SL1500_.jpg"
            price={150}
          />
          <Product
            id={index()}
            title="Coffee machine"
            picphoto="https://images-na.ssl-images-amazon.com/images/I/51eqU4jOrLL._AC_SL1199_.jpg"
            price={399}
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;

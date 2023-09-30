import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Page } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import "./Product.style.scss";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const json = await ServiceAPI.fetchProduct(id);
      if (json.error !== null) {
        setMessage(json.error);
        return;
      }

      setProduct(json.data.product);
    };

    fetchData();
  }, []);

  return (
    <Page>



      <div className="product-page">
        {message && <p>{message}</p>}
        {product && (
          <>
            <div className="product-page__product">
              <h3 className="product_title">Title: {product.title} </h3>
              <p className="product_id">ID: {id}</p>
              <p className="product_description">Description: {product.description}</p>
              <div className="product_image">
                <img className="image" src="./images/" />
              </div>
            </div>
            <Link to={`/checkout/${product.id}`}>
              <button>Buy Now</button>
            </Link>
          </>
        )}
      </div>

    </Page>
  );
}

export default Product;

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
              <div className="product_image">
                <img className="image" src="http://images.amazon.com/images/P/0596004605.01._SCMZZZZZZZ_.jpg" />
              </div>
              <div className="product_title1">
                <h3 className="product_title">Title: {product.title} </h3>
              </div>
              <div className="product_id1">
                <p className="product_id">ID: {id}</p>
              </div>
              <div className="product_description">
                <p className="product_description">Description: {product.description}</p>
              </div>
              <div>
                <Link to={`/checkout/${product.id}`}>
                  <button>Buy Now</button>
                </Link>
              </div>

            </div>


          </>
        )}
      </div>

    </Page>
  );
}

export default Product;

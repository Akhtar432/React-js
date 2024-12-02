import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../store/StoreSlice";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const SingleProduct = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.singleProduct);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="flex justify-center">
      {product && (
        <div>
          <Card key={product.id} sx={{ maxWidth: 345 }}> {/* Added key prop */}
            <CardMedia
              sx={{ height: 140 }}
              image={product.image}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <p>Prize${product.price}</p>
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button  className="text-red-800" size="small">
                Delete Product
              </Button>
              <Button  className="text-red-800" size="small">
                Update Product
              </Button>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
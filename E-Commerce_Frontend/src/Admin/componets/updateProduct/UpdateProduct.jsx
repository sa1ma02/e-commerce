import { useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  findProductById,
  updateProduct,
} from "../../../Redux/Customers/Product/Action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const UpdateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { productId } = useParams();
  const { customersProduct } = useSelector((store) => store);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setProductData((prevState) => {
      let updatedState = { ...prevState, [name]: value };
  
      if (name === "discountPersent" || (name === "price" && prevState.discountPersent)) {
        const discountPersent = name === "discountPersent" ? value : prevState.discountPersent;
        const price = name === "price" ? value : prevState.price;
        if (discountPersent && price) {
          updatedState.discountedPrice = price - (price * discountPersent) / 100;
        }
      }
  
      return updatedState;
    });
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ productId, data: productData }));
    console.log(productData);
  };

  useEffect(() => {
    dispatch(findProductById({productId}));
  }, [productId]);

  useEffect(()=>{
    if(customersProduct.product){
        for(let key in productData){
    setProductData((prev)=>({...prev,[key]:customersProduct.product[key]}))
    console.log(customersProduct.product[key],"--------",key)
}
    }

  },[customersProduct.product])

  return (
    <Fragment className="createProductContainer ">
      <Typography
        variant="h4"
        sx={{ 
          textAlign: "center",
          fontWeight: "bold", 
          color: "brown" 
        }}
        className="py-10 text-center "
      >
        Update Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-root": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-root": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#000000' }}}}>
              <InputLabel sx={{ color: "black" }}>Color</InputLabel>
              <Select
                fullwidth
                name="color"
                label="Color"
                value={productData.color}
                onChange={handleChange}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "black",
                  },
                  
                  "& .MuiInputLabel-root": {
                    color: "black",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black"
                  },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "black",
                  },}}
              >
                <MenuItem value="Black"> Black</MenuItem>
                <MenuItem value="White">White</MenuItem>
                <MenuItem value="Pink">Pink</MenuItem>
                <MenuItem value="Yellow">Yellow</MenuItem>
                <MenuItem value="Purpel">Purpel</MenuItem>
                <MenuItem value="Red">Red</MenuItem>
                <MenuItem value="Green"> Green</MenuItem>
                <MenuItem value="Blue">Blue</MenuItem>
                <MenuItem value="Pink">Pink</MenuItem>
                <MenuItem value="Beige">Beige</MenuItem>
                <MenuItem value="Orange">Orange</MenuItem>
                <MenuItem value="Brown">Brown</MenuItem>
                <MenuItem value="Gray">Gray</MenuItem>
                <MenuItem value="Silver">Silver</MenuItem>
                <MenuItem value="Gold">Gold</MenuItem>
        

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
              sx={{
                "& .MuiInputBase-root": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
              sx={{
                "& .MuiInputBase-root": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
              sx={{
                "& .MuiInputBase-root": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
              
              sx={{
                "& .MuiInputBase-root": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                
              
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#000000' }}}}>
              <InputLabel sx={{ color: "black" }}>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Top Level Category"
                
              >
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="Women">Women</MenuItem>
          
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#000000' }}}}>
              <InputLabel sx={{ color: "black" }}>Second Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
                
              >
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="Accessories">Accessories</MenuItem>
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#000000' }}}}>
              <InputLabel sx={{ color: "black" }}>Third Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label="Third Level Category"
                
              >
                 <MenuItem value="women_top" > Women Top</MenuItem>
                <MenuItem value="women_Dresses">Women Dress</MenuItem>
                <MenuItem value="women_Bottom">Women Bottom</MenuItem>
                <MenuItem value="women_Jackets">Women Jacket</MenuItem>
                <MenuItem value="women_Suit">Women Suit</MenuItem>
                <MenuItem value="women_Jumpsuit">Women Jumpsuit</MenuItem>
                <MenuItem value="women_watch">Women Watches</MenuItem>
                <MenuItem value="women_wallet">Women Wallets</MenuItem>
                <MenuItem value="women_bag">Women Bags</MenuItem>
                <MenuItem value="women_sunglasse">Women Sunglasses</MenuItem>
                <MenuItem value="women_hat">Women Hats</MenuItem>
                <MenuItem value="women_belt">Women Belts</MenuItem>
                <MenuItem value="men_tops">Men Tops</MenuItem>
                <MenuItem value="men_bottom">Men Bottom</MenuItem>
                <MenuItem value="men_activewear">Men Activewear</MenuItem>
                <MenuItem value="men_outwear">Men Outwear</MenuItem>
                <MenuItem value="men_watches">Men Watches</MenuItem>
                <MenuItem value="men_wallets">Men Wallets</MenuItem>
                <MenuItem value="women_bags">Men Bags</MenuItem>
                <MenuItem value="men_sunglasses">Men Sunglasses</MenuItem>
                <MenuItem value="men_hats">Men Hats</MenuItem>
                <MenuItem value="men_belts">Men Belts</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
              sx={{
                "& .MuiInputBase-root": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
              }}
              
            />
          </Grid>
         
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                p: 1.8,
                backgroundColor: "brown",
                color: "white",
                "&:hover": {
                  backgroundColor: "#793e02",
                },
              }}
              className="py-20"
              size="large"
              type="submit"
            >
              Update Product
            </Button>
          
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default UpdateProductForm;
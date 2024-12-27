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
import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../Redux/Customers/Product/Action";

const initialSizes = [
  { name: " ", quantity: 0 },
  { name: " ", quantity: 0 },
  { name: " ", quantity: 0 },
];

const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    // brand: "",
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

  const handleAddSize = () => {
    const sizes = [...productData.size];
    sizes.push({ name: "", quantity: "" });
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ data: productData, jwt }));
    console.log(productData);
  };

  return (
    <Fragment className="createProductContainer">
      <Typography
  variant="h4"
  sx={{ 
    textAlign: "center",
    fontWeight: "bold", 
    color: "brown" 
  }}
  className="py-10 text-center"
>
  Add New Product
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
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
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
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#000000' }}}}>
              <InputLabel sx={{ color: "black" }}>Color</InputLabel>
              <Select
                name="color"
                value={productData.color}
                onChange={handleChange}
                label="Color"
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
                    borderColor: "black",}
                }}
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
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
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
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
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
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
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
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
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
                }}
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                
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
                }}
              >
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
               
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
                }}
              >
                <MenuItem value="women_top"> Women Top</MenuItem>
                <MenuItem value="women_Dresses">Women Dress</MenuItem>
                <MenuItem value="women_Bottom">Women Bottom</MenuItem>
                <MenuItem value="women_Jackets">Women Jacket</MenuItem>
                <MenuItem value="women_Suit">Women Suit</MenuItem>
                <MenuItem value="women_Jumpsuit">Women Jumpsuit</MenuItem>
                <MenuItem value="women_watch">Women Watches</MenuItem>
                <MenuItem value="women_wallet">Women Wallets</MenuItem>
                <MenuItem value="women_bag">Women Bags</MenuItem>
                <MenuItem value="women_sunglasses">Women Sunglasses</MenuItem>
                <MenuItem value="women_hat">Women Hats</MenuItem>
                <MenuItem value="women_belt">Women Belts</MenuItem>
                <MenuItem value="men_tops">Men Tops</MenuItem>
                <MenuItem value="men_bottom">Men Bottom</MenuItem>
                <MenuItem value="men_activewear">Men Activewear</MenuItem>
                <MenuItem value="men_outwear">Men Outwear</MenuItem>
                <MenuItem value="men_watches">Men Watches</MenuItem>
                <MenuItem value="men_wallets">Men Wallets</MenuItem>
                <MenuItem value="men_bags">Men Bags</MenuItem>
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
                "& .MuiInputLabel-root": {
                  color: "black",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
              }}
            />
          </Grid>

          {productData.size.map((size, index) => (
            <Grid container item spacing={3} key={index}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  fullWidth
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "black",
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                    },
                    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  onChange={(event) => handleSizeChange(event, index)}
                  fullWidth
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "black",
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                    },
                    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                  }}
                />
              </Grid>
            </Grid>
          ))}

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
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateProductForm;

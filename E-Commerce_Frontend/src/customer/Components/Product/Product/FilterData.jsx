export const color = [
  "white",
  "Black",
  "Red",
  "Pink",
  "Being",
  "Purpel",
  "Green",
  "Yellow",
  "Blue",
  "Orange",
  "Brown",
  "Gray",
  "Silver",
  "Gold",
];


export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      {value:"yellow",label:"Yellow"},
      { value: "Red", label: "Red" },
      { value: "Black", label: "Black" },
      { value: "Purpel", label: "Purpel" },
      { value: "Orange", label: "Orange" },
      { value: "Gray", label: "Gray" },
      { value: "Silver", label: "Silver" },
      {value:"Gold",label:"Gold"},
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "XS", label: "XS" },
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
      { value: "XXL", label: "XXL" },
      { value: "XXXL", label: "XXXL" },
    ],
  },
  
];

export const singleFilter=[
  {
    id: "price",
    name: "Price",
    options: [
      { value: "50-100", label: "50DH To 100DH" },
      { value: "100-300", label: "100DH To 300DH" },
      { value: "300-400", label: "300DH To 400DH" },
      { value: "400-500", label: "400DH To 500DH" },
      { value: "500-2000", label: "500DH To 2000DH" },
    ],
  },
  {
    id: "disccout",
    name: "Disccount Range",
    options: [
      {
        value: "10",
        label: "10% And Above",
      },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
      
    ],
  },
]

export const sortOptions = [
  
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
import * as actionsTypes from "../actions/actionsTypes.js";

const initialState = {
  products: [
    {
      id: "gdvgh",
      name: "iphone12",
      price: "5000",
      descrtption:
        "The phone comes with a 6.10-inch touchscreen display with a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). The iPhone 12 supports wireless charging, as well as proprietary fast charging. As far as the cameras are concerned, the iPhone 12 on the rear packs a 12-megapixel primary camera with an f/1.6 aperture and a second 12-megapixel camera with an f/2.4 aperture. The rear camera setup has autofocus. It sports a 12-megapixel camera on the front for selfies, with an f/2.2 aperture.",
      images: [
        "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/63/733376/1.jpg?4732",
      ],
    },
    {
      id: "gbvgh",
      name: "smartwatch",
      price: "5000",
      descrtption: "Smart Watches Waterproof Heart Rate Watch Sports Watches",
      images: [
        "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/54/769436/1.jpg?1419",
      ],
    },
    {
      id: "gdvgv",
      name: "hp15",
      price: "20000",
      descrtption:
        "HP Notebook 15-dy1751ms - Intel® Core™ i5-1035G1 (1.0 GHz base frequency, up to 3.6 GHzwith Intel® Turbo Boost Technology, 6 MB cache, 4 cores), 15.6'' diagonal HD SVA BrightViewmicro-edge WLED-backlit touch screen (1366 x 768) Display, 8 GB DDR4-2666 SDRAM (1 x 8GB), 512 GB PCIe® NVMe™ M.2 SSD, Integrated Intel® UHD Graphics, Optical drive notincluded, Realtek RTL8821CE 802.11b/g/n/ac (1x1) Wi-Fi® and Bluetooth® 4.2 Combo, 1 multiformatSD media card reader, 3-cell battery, Stereo speakers, Windows 10 Home 64, 1 YearWarranty",
      images: [
        "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/364775/1.jpg?4206",
      ],
    },
  ],

  cart: [],
};

const addToCart = (state, action) => {
  let products = [...state.products];
  const updatedCart = [...state.cart];
  const product = products.find((product) => {
    return product.id === action.id;
  });

  console.log(product);

  updatedCart.push(product);

  return {
    ...state,
    cart: updatedCart,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_PRODUCTS:
      return state;
    case actionsTypes.ADD_TO_CART:
      return addToCart(state, action);
    default:
      return state;
  }
};

export default reducer;

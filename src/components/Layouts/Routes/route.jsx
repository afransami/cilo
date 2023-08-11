import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Home/Home/Home";
import Company from "../../Pages/Company/Company";
import ProductDetails from "../../ProductDetails/ProductDetails";
import SwiperSlideModal from "../../Utils/ModalSlide/SwiperSlideModal";
import App from "../../Utils/FeaturedButton/App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "productDetails",
      //   element: <ProductDetails></ProductDetails>
      // },
      {
        path: "/productDetails/:productId",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/cardDetails/:cardId",
        element: <App></App>
      },
    ],
  },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Home/Home/Home";
import Company from "../../Pages/Company/Company";
import ProductDetails from "../../ProductDetails/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "productDetails",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/productDetails/:productId",
        element: <ProductDetails></ProductDetails>
      },
    ],
  },
]);

export default router;
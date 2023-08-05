import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Home/Home/Home";
import Company from "../../Pages/Company/Company";


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
        path: "company",
        element: <Company></Company>
      },
    ],
  },
]);

export default router;
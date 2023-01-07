import { createBrowserRouter } from "react-router-dom";
import Address from "./Address";
import ContactPerson from "./ContactPerson";
import Home from "./Home";
import OtherDetails from "./OtherDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/OtherDetails",
        element: <OtherDetails></OtherDetails>,
      },
      {
        path: "/Address",
        element: <Address></Address>,
      },
      {
        path: "/ContactPerson",
        element: <ContactPerson></ContactPerson>,
      },
    ],
  },
]);

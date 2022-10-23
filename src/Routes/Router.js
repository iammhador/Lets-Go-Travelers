import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Root from "../Layout/Root";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Error from "../Components/Error";
import Profile from "../Components/Profile";
import Booking from "../Components/Booking";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/register", element: <Register /> },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Context from "./Context/Context";
import { router } from "./Routes/Router";

const App = () => {
  return (
    <div>
      <Context>
        <RouterProvider router={router} />
        <Toaster />
      </Context>
    </div>
  );
};

export default App;

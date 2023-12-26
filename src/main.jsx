import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Routes/pages/HomePage.jsx";
import MainLayout from "./Routes/MainLayout.jsx";
import ProductsPage from "./Routes/pages/ProductsPage.jsx";
import ProductDetails from "./Routes/pages/ProductDetails.jsx";

const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
    <App />
  </Provider>
);

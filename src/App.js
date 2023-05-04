import HomePageC from "./Pages/HomePageC";
import SearchPageC from "./Pages/SearchPageC";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPageC from "./Pages/ErrorPageC";

const router = createBrowserRouter([
  { path: "/", element: <HomePageC />, errorElement: <ErrorPageC /> },
  {
    path: "/search",
    element: <SearchPageC />,
    errorElement: <ErrorPageC />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

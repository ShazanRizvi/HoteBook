import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./components/error/ErrorPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement:<ErrorPage />,
    },
    {
      path:"/signup",
      element:<Signup/>,
    },
    {
      path:"/login",
      element:<Login/>,
    }
  ]);
  return (
    <>
      <div className="container mx-auto">
      <RouterProvider router={router} />
        
      </div>
    </>
  );
}

export default App;

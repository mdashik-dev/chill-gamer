import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../components/Error";
import AllReviews from "../pages/Reviews/AllReviews";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import { useAuth } from "../hook/useAuth";
import AddReview from "../pages/Reviews/AddReview";
import MyReviews from "../pages/Reviews/MyReviews";
import ReviewDetails from "../pages/Reviews/ReviewDetails";
import MyWatchlist from "../pages/Watchlist/MyWatchlist";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Home";

function AppRouter({ children }) {
  const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" replace />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/reviews",
          element: <AllReviews />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/add-review",
          element: (
            <ProtectedRoute>
              <AddReview />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-reviews",
          element: (
            <ProtectedRoute>
              <MyReviews />
            </ProtectedRoute>
          ),
        },
        {
          path: "/review/:id",
          element: (
            <ProtectedRoute>
              <ReviewDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-watchlist",
          element: (
            <ProtectedRoute>
              <MyWatchlist />
            </ProtectedRoute>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}>{children} </RouterProvider>;
}

export default AppRouter;

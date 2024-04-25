import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
// eslint-disable-next-line no-unused-vars
import Home from "./pages/home/home";
import About from "./pages/about/About";

import Results, { loader as searchLoader } from "./pages/results/Results";
import { AppContextProvider } from "./context/appContext";
import ErrorPage from "./pages/error/Error";
import { Suspense } from "react";
import Loader from "./ui/Loader";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `/`,
        element: (
          <Suspense fallback={Loader}>
            <Home />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: `/Results/:SearchQuery`,
        element: <Results />,
        loader: searchLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: `About`,
    element: (
      <Suspense fallback={Loader}>
        <About />
      </Suspense>
    ),
  },
]);
export default function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

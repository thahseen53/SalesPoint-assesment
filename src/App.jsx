import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import PricingPage from "./pages/Pricing/PricingPage";
import ResourcesPage from "./pages/Resources/ResourcesPage";
import SupportPage from "./pages/Support/SupportPage";
import SignIn from "./SignIn";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "resources",
        element: <ResourcesPage />,
      },
      {
        path: "support",
        element: <SupportPage />,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

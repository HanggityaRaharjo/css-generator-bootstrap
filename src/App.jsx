import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Template from "./pages/Template";
import CardPage from "./pages/CardPage";
import BreadcrumbsPage from "./pages/BreadcrumbsPage";
import SubHeaderPage from "./pages/SubHeaderPage";
import FormPage from "./pages/FormPage";
import ButtonPage from "./pages/ButtonPage";
import TabsPage from "./pages/TabsPage";
import PopUpPage from "./pages/PopUpPage";
import ToastPage from "./pages/ToastPage";
import Color from "./pages/Color";
import Design from "./pages/Design";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/template",
    element: <Template />,
  },
  {
    path: "/color",
    element: <Color />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/card",
    element: <CardPage />,
  },
  {
    path: "/breadcrumbs",
    element: <BreadcrumbsPage />,
  },
  {
    path: "/sub-header",
    element: <SubHeaderPage />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
  {
    path: "/button",
    element: <ButtonPage />,
  },
  {
    path: "/tabs",
    element: <TabsPage />,
  },
  {
    path: "/pop-up",
    element: <PopUpPage />,
  },
  {
    path: "/toast",
    element: <ToastPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

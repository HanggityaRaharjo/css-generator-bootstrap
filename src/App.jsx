import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Template from "./pages/Template";
import CardPage from "./pages/Card/CardPage";
import BreadcrumbsPage from "./pages/Breadcrumbs/BreadcrumbsPage";
import SubHeaderPage from "./pages/subheader/SubHeaderPage";
import FormPage from "./pages/form/FormPage";
import ButtonPage from "./pages/button/ButtonPage";
import TabsPage from "./pages/tabs/TabsPage";
import PopUpPage from "./pages/pop-up/PopUpPage";
import ToastPage from "./pages/toast/ToastPage";
import Color from "./pages/Color";
import Design from "./pages/design/Design";

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

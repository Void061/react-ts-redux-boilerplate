import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/Root";

import { Home, Orders, SingleOrder } from "./pages/Dasboard";
import { DashboardLayout } from "./layouts";
import { Login } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="order/:slug" element={<SingleOrder />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<h3>REGISTER PAGE</h3>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

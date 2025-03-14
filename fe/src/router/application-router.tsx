import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RouteNames } from "./route-names.ts";
import { RecipeListPage } from "../pages/recipe-list-page.tsx";
import { RecipeInfoPage } from "../pages/recipe-info-page.tsx";

export const ApplicationRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={RouteNames["recipe-list-page"]}
        element={<RecipeListPage />}
      />
      <Route
        path={RouteNames["recipe-info-page"]}
        element={<RecipeInfoPage />}
      />
    </Routes>
  </BrowserRouter>
);

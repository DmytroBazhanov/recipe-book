import type { Express } from "express";
import { fetchRecipeList } from "./utils/fetch-recipe";
import { LOOKUP_URL, URL_BASE } from "./constants/fetch-routes";

export const initRecipeRouter = (app: Express) => {
  // fetch recipes list with/without filter or search value
  app.get(`${URL_BASE}/list`, async (req, res, next) => {
    const { s: searchQuery, f: filterType, fv: filterValue } = req.query;

    try {
      const response = await fetchRecipeList({
        searchQuery: searchQuery as string,
        filterValue: filterValue as string,
        filterType: filterType as string,
      });

      const recipes = await response.json();
      res.json(recipes);
    } catch (err) {
      next(err);
    }
  });

  // fetch particular recipe
  app.get(`${URL_BASE}/:id`, async (req, res, next) => {
    const recipeId = req.params.id;
    const fullUrl = LOOKUP_URL + recipeId;

    try {
      const response = await fetch(fullUrl);
      const fetchedRecipe = await response.json();

      res.json(fetchedRecipe);
    } catch (err) {
      next(err);
    }
  });
};

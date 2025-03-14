import { FetchRecipeArgs, FetchRecipeListArgs } from "../types/fetch-types.ts";
import { formRecipeListRoute, formRecipeRoute } from "./fetch-routes.ts";

export const fetchRecipeList = async ({
  search,
  filter,
  filterValue,
}: FetchRecipeListArgs) => {
  const response = await fetch(
    formRecipeListRoute({ filter, filterValue, search }),
  );
  const data = await response.json();
  return data;
};

export const fetchRecipe = async ({ id }: FetchRecipeArgs) => {
  const response = await fetch(formRecipeRoute({ id }));

  const data = await response.json();
  return data;
};

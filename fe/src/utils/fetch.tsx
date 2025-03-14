import { FetchRecipeListArgs } from "../types/fetch-types.ts";
import { formRecipeListRoute } from "./fetch-routes.ts";

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

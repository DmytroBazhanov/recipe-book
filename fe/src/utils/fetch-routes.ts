import { FetchRecipeListArgs } from "../types/fetch-types.ts";

const BASE_URL = "http://localhost:3000";
export const formRecipeListRoute = ({
  search,
  filter,
  filterValue,
}: FetchRecipeListArgs) => {
  if (search) {
    return `${BASE_URL}/api/recipes/list?s=${search}`;
  } else if (filter && filterValue) {
    return `${BASE_URL}/api/recipes/list?f=${filter}&fv=${filterValue}`;
  }

  return `${BASE_URL}/api/recipes/list`;
};

import { FetchRecipeListArgs } from "../types/fetch-types.ts";
import { RouteNames } from "../router/route-names.ts";

export const formRedirectedRouteToRecipeList = ({
  filterValue,
  filter,
}: FetchRecipeListArgs) => {
  return RouteNames["recipe-list-page"] + `?f=${filter}&fv=${filterValue}`;
};

import { FILTER_URL, SEARCH_URL } from "../constants/fetch-routes";
import {
  FilterRecipeListArgs,
  SearchRecipeListArgs,
} from "../types/filter-types";

const fetchFilteredRecipeList = async ({
  filterType,
  filterValue,
}: FilterRecipeListArgs) => {
  const fullUrl = FILTER_URL + filterType + "=" + filterValue;
  return await fetch(fullUrl);
};

const fetchSearchedRecipeList = async ({
  searchQuery,
}: SearchRecipeListArgs) => {
  const fullUrl = SEARCH_URL + searchQuery;
  return await fetch(fullUrl);
};

export const fetchRecipeList = async ({
  filterType,
  filterValue,
  searchQuery = "",
}: FilterRecipeListArgs & SearchRecipeListArgs) => {
  if (filterType && filterValue)
    return fetchFilteredRecipeList({
      filterType: filterType as string,
      filterValue: filterValue as string,
    });

  return fetchSearchedRecipeList({ searchQuery });
};

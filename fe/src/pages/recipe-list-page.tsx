import { useQuery } from "@tanstack/react-query";
import { fetchRecipeList } from "../utils/fetch.tsx";

export const RecipeListPage = () => {
  const { data } = useQuery({
    queryKey: ["recipeData"],
    queryFn: async () =>
      fetchRecipeList({
        filter: "",
        filterValue: "",
        search: "",
      }),
  });

  console.log(data);

  return "Recipe List Page";
};

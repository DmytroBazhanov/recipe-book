import { useQuery } from "@tanstack/react-query";
import { fetchRecipeList } from "../utils/fetch.tsx";
import { Search } from "../components/search.tsx";
import { useSearchParams } from "react-router-dom";
import { RecipeCard } from "../components/recipe-card.tsx";

export const RecipeListPage = () => {
  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get("s") ?? "";
  const filterParam = searchParams.get("f") ?? "";
  const filterValue = searchParams.get("fv") ?? "";

  const { data, isLoading } = useQuery({
    queryKey: [searchValue, filterValue, filterParam],
    queryFn: async () =>
      fetchRecipeList({
        filter: filterParam,
        filterValue: filterValue,
        search: searchValue,
      }),
  });

  return (
    <div className="flex flex-col max-w-xl mx-auto my-6">
      <Search />
      <div className="flex flex-col gap-5">
        Recipe: {!!searchValue ? searchValue : "All recipes"}
        {data &&
          !isLoading &&
          data["meals"]?.map((recipe: any) => (
            <RecipeCard
              key={recipe["idMeal"]}
              src={recipe["strMealThumb"]}
              name={recipe["strMeal"]}
              area={recipe["strArea"]}
              id={recipe["idMeal"]}
            />
          ))}
      </div>
    </div>
  );
};

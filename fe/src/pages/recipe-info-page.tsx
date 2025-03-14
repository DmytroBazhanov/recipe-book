import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipe, fetchRecipeList } from "../utils/fetch.tsx";
import { formRedirectedRouteToRecipeList } from "../utils/redirect-routes.ts";

export const RecipeInfoPage = () => {
  const { recipeId = "" } = useParams();

  const { data } = useQuery({
    queryKey: [recipeId],
    queryFn: async () =>
      fetchRecipe({
        id: recipeId,
      }),
  });

  const { data: categoryData } = useQuery({
    queryKey: [data?.meals?.[0]?.strCategory],
    queryFn: async () =>
      fetchRecipeList({
        filter: "c",
        filterValue: data?.meals?.[0]?.strCategory,
        search: "",
      }),
    enabled: !!data?.meals?.[0]?.strCategory,
  });

  const recipe = data?.meals?.[0];

  const ingridientKeys = !!recipe
    ? Object.keys(recipe).filter((propertyKey) => {
        return !!recipe?.[propertyKey] && propertyKey.includes("strIngredient");
      })
    : [];

  console.log(categoryData);

  return (
    <div className="flex flex-row gap-10 max-w-4xl mx-auto my-6">
      <div className="flex flex-row gap-10">
        <img
          className="w-60 h-45 rounded-lg"
          alt="recipe image"
          src={recipe?.["strMealThumb"]}
        />

        <div className="flex flex-col gap-5 w-full">
          <p className="text-2xl text-center font-medium">
            {recipe?.["strMeal"]}
          </p>
          <p>
            <span className="font-semibold">Origin</span> -{" "}
            <Link
              className="mt-auto text-blue-500 hover:text-blue-800"
              to={formRedirectedRouteToRecipeList({
                search: "",
                filter: "a",
                filterValue: recipe?.["strArea"],
              })}
            >
              {recipe?.["strArea"]}
            </Link>
          </p>

          <div>
            <p className="font-semibold">Instructions:</p>
            <p className="text-justify">{recipe?.["strInstructions"]}</p>
          </div>

          <div>
            <p className="font-semibold">Ingridients:</p>
            <ul>
              {ingridientKeys?.map((key) => (
                <li key={key}>
                  <Link
                    className="mt-auto text-blue-500 hover:text-blue-800"
                    to={formRedirectedRouteToRecipeList({
                      search: "",
                      filter: "i",
                      filterValue: recipe?.[key],
                    })}
                  >
                    {recipe[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <aside>
        <h2 className="font-semibold">Similar recipes:</h2>
        <div className="flex flex-col gap-2.5 w-max max-w-40">
          {categoryData?.["meals"]?.map((altRecipe: any) => (
            <Link
              className="mt-auto text-blue-500 hover:text-blue-800"
              to={formRedirectedRouteToRecipeList({
                search: "",
                filter: "c",
                filterValue: recipe?.["strCategory"],
              })}
            >
              {altRecipe?.strMeal}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};

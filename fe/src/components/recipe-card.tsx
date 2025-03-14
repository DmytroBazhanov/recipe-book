import { Link } from "react-router-dom";
import { RouteNames } from "../router/route-names.ts";

type Props = {
  src: string;
  name: string;
  area: string;
  id: string;
};

export const RecipeCard = ({ src, name, area, id }: Props) => {
  return (
    <div className="flex flex-row gap-2.5">
      <img className="w-40 h-30" alt="recipe image" src={src} />
      <div className="flex flex-col gap-1">
        <p className="font-medium">{name}</p>
        <p>Origin - {area}</p>
        <Link
          className="mt-auto text-blue-500 hover:text-blue-800"
          to={RouteNames["recipe-info-page"].replace(":recipeId", id)}
        >
          See more...
        </Link>
      </div>
    </div>
  );
};

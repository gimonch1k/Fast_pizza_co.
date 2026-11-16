import { useLoaderData } from "react-router";

import MenuItem from "./MenuItem";

import { getMenu } from "../../services/apiRestaurant";

export default function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

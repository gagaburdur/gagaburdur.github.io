import type { MenuCategory as MenuCategoryType } from "../menu";
import MenuItem from "./MenuItem";

interface MenuCategoryProps {
  category: MenuCategoryType;
}
const MenuCategory = (props: MenuCategoryProps) => {
  return (
    <div className="my-8 w-full">
      <h2 className="text-2xl font-bold mb-4">{props.category.category}</h2>
      <div className="grid grid-cols-1 w-full gap-4">
        {props.category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
 
export default MenuCategory;

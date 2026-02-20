import type { MenuCategory as MenuCategoryType } from "../menu";
import MenuItem from "./MenuItem";

interface MenuCategoryProps {
  category: MenuCategoryType;
}
const MenuCategory = (props: MenuCategoryProps) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{props.category.category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {props.category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
 
export default MenuCategory;

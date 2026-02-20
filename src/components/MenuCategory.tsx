import type { MenuCategory as MenuCategoryType } from "../menu";
import DecorativeIcon from "./DecorativeIcon";
import MenuItem from "./MenuItem";

interface MenuCategoryProps {
  category: MenuCategoryType;
}
const MenuCategory = (props: MenuCategoryProps) => {
  if (props.category.disabled) {
    return null;
  }
  return (
    <div className="my-8 w-full">
      {props.category.icon && (
        <DecorativeIcon
          name={props.category.icon}
          className="w-28 h-28 block mx-auto fill-[#575756] mb-8"
        />
      )}
      <h2 className="text-2xl font-extrabold mb-4 tracking-[2px]">{props.category.category}</h2>
      <div className="grid grid-cols-1 w-full gap-6">
        {props.category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
      {props.category.extras && props.category.extras.length > 0 && (
        <div className="mt-4 pt-4 border-t border-[#575756]/10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-1">
            {props.category.extras.map((extra) => (
              <div key={extra.name} className="flex justify-between items-center text-sm">
                <span>{extra.name}</span>
                <span>+{extra.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
 
export default MenuCategory;

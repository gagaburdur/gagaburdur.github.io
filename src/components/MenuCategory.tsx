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
      {props.category.extras && props.category.extras.length > 0 && (
        <div className="mt-4 pt-4 border-t border-[#575756]/10">
          <h3 className="text-sm font-bold tracking-wider mb-2">EKSTRALAR</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1">
            {props.category.extras.map((extra) => (
              <div key={extra.name} className="flex justify-between items-center text-sm">
                <span>{extra.name}</span>
                <span className="font-bold">+{extra.price} TL</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
 
export default MenuCategory;

import type { MenuCategory as MenuCategoryType } from "../menu";
import DecorativeIcon from "./DecorativeIcon";
import MenuItem from "./MenuItem";

interface MenuCategoryProps {
  category: MenuCategoryType;
  onAllergenClick?: (itemId: string) => void;
}
const MenuCategory = ({ category, onAllergenClick }: MenuCategoryProps) => {
  if (category.disabled) {
    return null;
  }
  return (
    <div className="print-category my-8 w-full">
      {category.icon && (
        <DecorativeIcon
          name={category.icon}
          className="w-28 h-28 block mx-auto fill-[#575756] mb-8 print:hidden"
        />
      )}
      <h2 className="text-2xl font-extrabold mb-4 tracking-[2px]">{category.category}</h2>
      <div className="grid grid-cols-1 w-full gap-6 print:gap-1">
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} onAllergenClick={onAllergenClick} />
        ))}
      </div>
      {category.extras && category.extras.length > 0 && (
        <div className="print-extras-wrap mt-4 pt-4 border-t border-[#575756]/10">
          <div className="print-extras grid grid-cols-2 gap-x-6 gap-y-1">
            {category.extras.map((extra) => (
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

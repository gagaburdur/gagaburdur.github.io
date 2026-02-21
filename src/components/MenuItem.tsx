import type { Allergens, MenuItem as MenuItemType } from "../menu";
import AllergenIcon from "./AllergenIcon";
import { slugify, smoothScrollTo } from "../utils";

interface MenuItemProps {
  item: MenuItemType;
  onAllergenClick?: (itemId: string) => void;
}

const MenuItem = ({ item, onAllergenClick }: MenuItemProps) => {
  if (item.disabled) {
    return null;
  }
  const itemId = `item-${slugify(item.name)}`;

  const handleAllergenClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onAllergenClick?.(itemId);
    smoothScrollTo("allergens");
  };

  return (
    <div className="print-item" id={itemId}>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg tracking-wide uppercase">{item.name}</h3>
        {item.allergens && (
          <a className="print:hidden" href="#allergens" title="Allergens" onClick={handleAllergenClick}>
            <AllergenRenderer allergens={item.allergens} />
          </a>
        )}
      </div>

      {item.description && <p className="text-sm">{item.description}</p>}
      <p className="text-base font-bold mt-1 print:mt-0">{item.price}</p>
    </div>
  );
};

const AllergenRenderer = (props: { allergens: Allergens }) => {
  return (
    <div className="flex gap-2">
      {Object.entries(props.allergens).map(([allergen, hasAllergen]) => {
        if (!hasAllergen) return null;
        return (
          <AllergenIcon key={allergen} name={allergen} className="w-5 h-5 text-[#575756]" />
        );
      })}
    </div>
  );
};
export default MenuItem;

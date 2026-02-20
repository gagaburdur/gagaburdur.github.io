import type { Allergens, MenuItem as MenuItemType } from "../menu";
import AllergenIcon from "./AllergenIcon";

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem = (props: MenuItemProps) => {
  if (props.item.disabled) {
    return null;
  }
  return (
    <div className="print-item">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg tracking-wide uppercase">{props.item.name}</h3>
        {props.item.allergens && (
          <div className="print:hidden">
            <AllergenRenderer allergens={props.item.allergens} />
          </div>
        )}
      </div>

      {props.item.description && <p className="text-sm">{props.item.description}</p>}
      <p className="text-base font-bold mt-1 print:mt-0">{props.item.price}</p>
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

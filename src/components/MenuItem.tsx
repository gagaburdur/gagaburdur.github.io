import type { Allergens, MenuItem as MenuItemType } from "../menu";
import AllergenIcon from "./AllergenIcon";

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg tracking-wide uppercase">{props.item.name}</h3>
        {props.item.allergens && (
          <AllergenRenderer allergens={props.item.allergens} />
        )}
      </div>

      <p className="text-sm">{props.item.description}</p>
      <p className="text-base font-bold mt-1">{props.item.price} TL</p>
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

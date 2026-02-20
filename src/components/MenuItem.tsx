import type { Allergens, MenuItem as MenuItemType } from "../menu";
import celery from "../assets/celery.svg";
import egg from "../assets/egg.svg";
import fish from "../assets/fish.svg";
import gluten from "../assets/gluten.svg";
import milk from "../assets/milk.svg";
import mustard from "../assets/mustard.svg";
import nuts from "../assets/nuts.svg";
import shell from "../assets/shell.svg";
import soy from "../assets/soy.svg";
import sesame from "../assets/sesame.svg";

const allergenIcons: Record<string, string> = {
  gluten,
  susam: sesame,
  yumurta: egg,
  hardal: mustard,
  sut: milk,
  soya: soy,
  kuruyemis: nuts,
  yerfistigi: nuts,
  kabuklu: shell,
  balik: fish,
  yemis: nuts,
  kereviz: celery,
};

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{props.item.name}</h3>
        {props.item.allergens && (
          <AllergenRenderer allergens={props.item.allergens} />
        )}
      </div>

      <p className="text-sm mt-1">{props.item.description}</p>
      <p className="text-base font-bold mt-2">{props.item.price} TL</p>
    </div>
  );
};

const AllergenRenderer = (props: { allergens: Allergens }) => {
  return (
    <div className="flex gap-2">
      {Object.entries(props.allergens).map(([allergen, hasAllergen]) => {
        if (!hasAllergen) return null;
        const icon = allergenIcons[allergen];
        if (!icon) return null;
        return (
          <img key={allergen} src={icon} alt={allergen} className="w-5 h-5 fill-[#575756]" />
        );
      })}
    </div>
  );
};
export default MenuItem;

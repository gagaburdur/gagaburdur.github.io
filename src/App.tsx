import { useState, useCallback } from "react";
import MenuCategory from "./components/MenuCategory";
import AllergenIcon from "./components/AllergenIcon";
import { menu } from "./menu"
import DecorativeIcon from "./components/DecorativeIcon";
import { Undo } from "./components/UtilityIcon";
import { smoothScrollTo } from "./utils";

const allergenLegend = [
  { key: "gluten", label: "Gluten" },
  { key: "susam", label: "Susam" },
  { key: "yumurta", label: "Yumurta" },
  { key: "hardal", label: "Hardal" },
  { key: "sut", label: "Süt" },
  { key: "soya", label: "Soya" },
  { key: "kuruyemis", label: "Sert Kabuklu Yemişler" },
  { key: "kabuklu", label: "Kabuklu Deniz Ürünleri" },
  { key: "balik", label: "Balık" },
  { key: "kereviz", label: "Kereviz" },
];

function App() {
  const [returnToItemId, setReturnToItemId] = useState<string | null>(null);

  const handleAllergenClick = useCallback((itemId: string) => {
    setReturnToItemId(itemId);
  }, []);

  const handleBackClick = () => {
    if (!returnToItemId) return;
    const targetId = returnToItemId;
    setReturnToItemId(null);
    smoothScrollTo(targetId);
  };

  return (
    <div className="print-menu min-h-screen flex flex-col items-start justify-start text-[#575756] py-12 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-black tracking-[4px] mt-4 mb-8 print:mt-0 print:mb-2">GAGA</h1>
      {menu.map((category) => {
        return <MenuCategory key={category.category} category={category} onAllergenClick={handleAllergenClick} />
      })}
      <div className="w-full py-8 border-t border-[#575756]/20 print:hidden">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold tracking-wider">ALERJENLER</h2>
          {returnToItemId && (
            <button
              onClick={handleBackClick}
              className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border border-[#575756]/30 hover:bg-[#575756]/10 transition-colors"
            >
              <Undo className="w-4 h-4 text-[#575756]" />
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3" id="allergens">
          {allergenLegend.map(({ key, label }) => (
            <div key={key} className="flex items-center gap-2">
              <AllergenIcon name={key} className="w-5 h-5 text-[#575756] shrink-0" />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <footer className="flex flex-col items-center justify-center w-full pt-8 border-t border-[#575756]/20 print:hidden">
        <p className="text-sm text-center">Menünün Sonuna Ulaştınız</p>
        <DecorativeIcon name="dino" className="w-28 h-28 block mx-auto fill-[#575756] my-8" />
        <p className="text-sm">Developed by <a href="https://berkbulgan.com" target="_blank" className="underline" rel="noopener noreferrer">Berk Bulgan</a></p>
      </footer>
    </div>
  );
}

export default App;

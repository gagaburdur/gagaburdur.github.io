import MenuCategory from "./components/MenuCategory";
import AllergenIcon from "./components/AllergenIcon";
import { menu } from "./menu"
import DecorativeIcon from "./components/DecorativeIcon";

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
  return (
    <div className="min-h-screen flex flex-col items-start justify-start text-[#575756] py-12 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-black tracking-[4px] mt-4 mb-8">GAGA</h1>
      {menu.map((category) => {
        return <MenuCategory key={category.category} category={category} />
      })}
      <div className="w-full py-8 border-t border-[#575756]/20">
        <h2 className="text-lg font-bold tracking-wider mb-4">ALERJENLER</h2>
        <div className="grid grid-cols-2 gap-3">
          {allergenLegend.map(({ key, label }) => (
            <div key={key} className="flex items-center gap-2">
              <AllergenIcon name={key} className="w-5 h-5 text-[#575756] shrink-0" />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full pt-8 border-t border-[#575756]/20">
        <p className="text-sm text-center">Menünün Sonuna Ulaştınız</p>
        <DecorativeIcon name="dino" className="w-28 h-28 block mx-auto fill-[#575756] my-8" />
        <p className="text-sm">Developed by <a href="https://berkbulgan.com" target="_blank" className="underline" rel="noopener noreferrer">Berk Bulgan</a></p>
      </div>
    </div>
  );
}

export default App;

import MenuCategory from "./components/MenuCategory";
import { menu } from "./menu"
function App() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start text-[#575756] py-12 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-black tracking-widest mt-4 mb-8">GAGA</h1>
      {menu.map((category) => {
        return <MenuCategory key={category.category} category={category} />
      })}
    </div>
  );
}

export default App;

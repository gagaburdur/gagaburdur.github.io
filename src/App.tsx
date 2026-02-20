import MenuCategory from "./components/MenuCategory";
import { menu } from "./menu"
function App() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start bg-olive-300 text-black py-12 px-4">
      <h1 className="text-4xl font-black tracking-widest mt-4 mb-8">GAGA</h1>
      {menu.map((category) => {
        return <MenuCategory key={category.category} category={category} />
      })}
    </div>
  );
}

export default App;

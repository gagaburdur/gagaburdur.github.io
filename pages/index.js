import Header from "../components/Header";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Category from "../components/Category";

import data from "../data/menu.json";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Navigation />
      {
        data.map((category) => {
          return <Category name={category.name} items={category.items} key={category.id} tag={category.id}/>
        })
      }
    </main>
  )
}

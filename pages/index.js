import Header from "../components/Header";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Category from "../components/Category";
import yiyecek from "../data/yiyecek.json";
import icecek from "../data/icecek.json";

export default function Home() {

  return (
    <main >
      <Header />
      <Hero />
      <Navigation data={yiyecek} title="Yemekler" />
      <Navigation data={icecek} title="İçecekler" />
      {
        yiyecek.map((category) => {
          return <Category name={category.name} items={category.items} key={category.id} tag={category.id} />
        })
      }
      {
        icecek.map((category) => {
          return <Category name={category.name} items={category.items} key={category.id} tag={category.id} />
        })
      }
    </main>
  )
}

export interface Allergens {
  gluten: boolean;
  susam: boolean;
  yumurta: boolean;
  hardal: boolean;
  sut: boolean;
  soya: boolean;
  kuruyemis: boolean;
  yerfistigi: boolean;
  kabuklu: boolean;
  balik: boolean;
  yemis: boolean;
  kereviz: boolean;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  allergens: Allergens;
}

export interface Extra {
  name: string;
  price: number;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
  extras?: Extra[];
}

const noAllergens: Allergens = {
  gluten: false,
  susam: false,
  yumurta: false,
  hardal: false,
  sut: false,
  soya: false,
  kuruyemis: false,
  yerfistigi: false,
  kabuklu: false,
  balik: false,
  yemis: false,
  kereviz: false,
};

const a = (overrides: Partial<Allergens>): Allergens => ({
  ...noAllergens,
  ...overrides,
});

export const menu: MenuCategory[] = [
  {
    category: "BURGERLER",
    items: [
      {
        name: "Hamburger",
        description: "Burger Sos, Marul, Alman Turşusu, Soğan Turşusu, Domates, Köfte, Patates Kızartması, Dip Sos",
        price: 340,
        allergens: a({ gluten: true, susam: true, yumurta: true, hardal: true }),
      },
      {
        name: "Cheeseburger",
        description: "Karamelize Soğan, Turşu, Köfte, Cheddar, Burger Sos, Patates Kızartması, Dip Sos",
        price: 360,
        allergens: a({ gluten: true, susam: true, yumurta: true, hardal: true, sut: true, soya: true }),
      },
      {
        name: "New Mexico Burger",
        description: "Acı Sos (Köz Kapyalı), Jalepeno Reliş, Domates, Köfte, Acı Mayonez, Patates Kızartması, Dip Sos",
        price: 370,
        allergens: a({ gluten: true, susam: true, yumurta: true }),
      },
      {
        name: "Fantazi Burger",
        description: "Uzun Pişmiş Dana Eti, Köfte, Peynir Sos, Roka, Patates Kızartması, Dip Sos",
        price: 400,
        allergens: a({ gluten: true, susam: true, yumurta: true, sut: true }),
      },
    ],
    extras: [
      { name: "Ekstra Köfte", price: 150 },
    ],
  },
  {
    category: "TAVUK BURGERLER",
    items: [
      {
        name: "Cheese Chicken",
        description: "Karamelize Soğan, Turşu, Kızarmış Tavuk, Cheddar, Burger Sos, Patates Kızartması, Dip Sos",
        price: 290,
        allergens: a({ gluten: true, susam: true, yumurta: true, sut: true }),
      },
      {
        name: "New Mexico Chicken",
        description: "Acı Sos (Köz Kapya Olabilir), Jalepeno Reliş, Kızarmış Tavuk, Acı Mayonez, Coleslaw, Patates Kızartması, Dip Sos",
        price: 290,
        allergens: a({ gluten: true, susam: true, yumurta: true }),
      },
      {
        name: "Chicken",
        description: "Burger Sos, Marul, Turşu, Domates, Tavuk Fileto, Patates Kızartması, Dip Sos",
        price: 260,
        allergens: a({ gluten: true, susam: true, yumurta: true }),
      },
    ],
    extras: [
      { name: "Ekstra Tavuk", price: 100 },
    ],
  },
  {
    category: "SANDVİÇ",
    items: [
      {
        name: "Ton Balıklı Sandviç",
        description: "Ton Balığı, Mısır, Özel Sos",
        price: 260,
        allergens: a({ gluten: true, susam: true, yumurta: true }),
      },
      {
        name: "Pesto Tavuk Sandviç",
        description: "Pesto Sos, Mozarella, Roka, Tavuk Fileto, Kuru Domates",
        price: 260,
        allergens: a({ gluten: true, susam: true, yumurta: true, kuruyemis: true, yerfistigi: true }),
      },
    ],
  },
  {
    category: "SALATA",
    items: [
      {
        name: "Kinoa Karides Tabule",
        description: "Kinoalı Tabule, Taze Yeşillikler, Karides",
        price: 270,
        allergens: a({ gluten: true, kabuklu: true }),
      },
      {
        name: "Sezar Salata",
        description: "Izgara Tavuk, Göbek Marul, Kruton, Sezar Sos",
        price: 270,
        allergens: a({ balik: true, gluten: true, yumurta: true, sut: true }),
      },
      {
        name: "Pancar Salata",
        description: "Fırınlanmış Pancar, Portokal, Mevsim Yeşilliği, Karamelize Ceviz, Tahin Portakal Vinegret",
        price: 270,
        allergens: a({ yemis: true, susam: true }),
      },
    ],
  },
  {
    category: "MAKARNA",
    items: [
      {
        name: "Penne Bolognese",
        description: "Ev Yapımı Ragu, Tulum Peyniri, Kaşar Peyniri",
        price: 340,
        allergens: a({ gluten: true, kereviz: true, sut: true }),
      },
      {
        name: "Penne Alfredo",
        description: "Mantar (Kestane ve İstiridye), Mor Soğan, Peynir, Tavuk, Krema",
        price: 300,
        allergens: a({ gluten: true, sut: true }),
      },
      {
        name: "Penne Napoliten",
        description: "Napoliten Sos, Tulum Peyniri, Kaşar Peyniri, Çeri Domates",
        price: 270,
        allergens: a({ gluten: true, sut: true }),
      },
      {
        name: "Penne Arabiatta",
        description: "Arabiatta Sos, Dilim Zeytin, Jalapeno Turşusu, Çeri Domates, Kaşar Peyniri",
        price: 270,
        allergens: a({ gluten: true, sut: true }),
      },
    ],
  },
  {
    category: "TACO",
    items: [
      {
        name: "Carne Asada",
        description: "Uzun Pişmiş Dana Eti, Peynir Sos, Guacamole, Acı Mayonez, Soğan Turşusu, Meksika Biberi, Yanında Limon",
        price: 360,
        allergens: a({ gluten: true, sut: true, yumurta: true }),
      },
      {
        name: "Karides Taco",
        description: "Tempura Karides, Sriracha Mayonez, Guacamole, Soğan Turşusu, Meksika Biberi, Yanında Limon",
        price: 300,
        allergens: a({ kabuklu: true, yumurta: true, gluten: true }),
      },
      {
        name: "Tavuk Taco",
        description: "Izgara Tavuk, Köz Biber Sos, Guacamole, Jalepeno Reliş, Köz Mısır, Soğan Turşusu, Meksika Biberi",
        price: 300,
        allergens: a({ gluten: true }),
      },
    ],
  },
  {
    category: "ANA YEMEK",
    items: [
      {
        name: "Supreme Tavuk",
        description: "Fırında Tavuk, Supreme Sos, Garniş Sebze",
        price: 450,
        allergens: a({ sut: true }),
      },
    ],
  },
  {
    category: "TATLILAR",
    items: [
      {
        name: "Churros",
        description: "Churros, Çikolata Sos, Tarçın, Şeker",
        price: 250,
        allergens: a({ gluten: true, sut: true }),
      },
      {
        name: "Dondurma Choux",
        description: "Vanilyalı Dondurma, Tahin, Karamelize Ceviz, Choux",
        price: 250,
        allergens: a({ gluten: true, sut: true }),
      },
    ],
  },
  {
    category: "TOSTLAR",
    items: [
      {
        name: "Peynir Seven Tost",
        description: "Cheddar, Ezine, Kaşar Peyniri, Kızarmış Kabak, Domates Kurusu, Patates Kızartması, Dip Sos",
        price: 350,
        allergens: a({ gluten: true, sut: true }),
      },
      {
        name: "Kavurmalı Tost",
        description: "Kavurma, Biber, Salça, Kaşar, Patates Kızartması, Dip Sos",
        price: 250,
        allergens: a({ gluten: true, sut: true }),
      },
    ],
  },
  {
    category: "SUSHI",
    items: [
      {
        name: "California Roll",
        description: "Pirinç, Nori, Yengeç Surimi, Avokado, Salatalık ve Susam",
        price: 330,
        allergens: a({ balik: true, kabuklu: true, susam: true }),
      },
      {
        name: "Alaska Roll",
        description: "Pirinç, Nori, Avokado, Somon ve Salatalık",
        price: 330,
        allergens: a({ balik: true }),
      },
      {
        name: "Spicy Maguro Roll",
        description: "Pirinç, Nori, Salatalık, Avokado, Krem Peynir, Ton Balığı ve Acı Sos",
        price: 330,
        allergens: a({ balik: true, sut: true }),
      },
      {
        name: "Kappa Roll",
        description: "Pirinç, Nori ve Salatalık",
        price: 280,
        allergens: noAllergens,
      },
      {
        name: "Hosomaki Roll",
        description: "Pirinç, Nori. Yengeç Surimi, Somon, Havuç, Avokado Dolgularından Birini İçerir",
        price: 280,
        allergens: a({ balik: true, kabuklu: true }),
      },
      {
        name: "Negitoromaki Roll",
        description: "Pirinç, Nori, Taze Soğan ve Ton Balığı",
        price: 280,
        allergens: a({ balik: true }),
      },
      {
        name: "Avokado Roll",
        description: "Pirinç, Nori, Avokado",
        price: 300,
        allergens: noAllergens,
      },
      {
        name: "Avokado Sake Roll",
        description: "Pirinç, Nori, Avokado ve Somon",
        price: 300,
        allergens: a({ balik: true }),
      },
      {
        name: "Philadelphia Roll",
        description: "Somon, Salatalık, Krem Peynir, Susam, Pirinç, Nori, Avokado",
        price: 330,
        allergens: a({ balik: true, sut: true, susam: true }),
      },
      {
        name: "Vegan Roll",
        description: "Pirinç, Nori, Avokado, Salatalık, Kapya Biber, Havuç",
        price: 300,
        allergens: noAllergens,
      },
    ],
  },
  {
    category: "SICAK İÇECEKLER",
    items: [
      {
        name: "Caffe Americano",
        description: "",
        price: 100,
        allergens: noAllergens,
      },
      {
        name: "Double Caffe Americano",
        description: "",
        price: 140,
        allergens: noAllergens,
      },
      {
        name: "Espresso",
        description: "",
        price: 60,
        allergens: noAllergens,
      },
      {
        name: "Double Espresso",
        description: "",
        price: 110,
        allergens: noAllergens,
      },
      {
        name: "Cappuccino",
        description: "",
        price: 130,
        allergens: a({ sut: true }),
      },
      {
        name: "Caffe Latte",
        description: "",
        price: 130,
        allergens: a({ sut: true }),
      },
      {
        name: "Caffe Mocha",
        description: "Sütlü Çikolata veya Beyaz Çikolata",
        price: 130,
        allergens: a({ sut: true }),
      },
      {
        name: "Macchiato",
        description: "",
        price: 110,
        allergens: a({ sut: true }),
      },
      {
        name: "Çay",
        description: "",
        price: 30,
        allergens: noAllergens,
      },
      {
        name: "Fincan Çay",
        description: "",
        price: 50,
        allergens: noAllergens,
      },
      {
        name: "Oralet",
        description: "Portakal, Kivi, Kuşburnu, Karadut, Muz, Elma, Çilek, Mentol",
        price: 35,
        allergens: noAllergens,
      },
      {
        name: "Bitki Çayları",
        description: "Ihlamur, Adaçayı, Kış Çayı, Kekik, Nane-Limon, Yeşil Çay",
        price: 60,
        allergens: noAllergens,
      },
      {
        name: "Türk Kahvesi",
        description: "",
        price: 60,
        allergens: noAllergens,
      },
      {
        name: "Aromalı Türk Kahvesi",
        description: "Dibek Kahvesi, Damla Sakızlı Türk Kahvesi, Menengiç Kahvesi",
        price: 70,
        allergens: noAllergens,
      },
      {
        name: "Double Türk Kahvesi",
        description: "",
        price: 100,
        allergens: noAllergens,
      },
      {
        name: "Sıcak Çikolata",
        description: "",
        price: 140,
        allergens: a({ sut: true }),
      },
      {
        name: "Sahlep",
        description: "",
        price: 140,
        allergens: a({ sut: true }),
      },
    ],
  },
  {
    category: "SOĞUK İÇECEKLER",
    items: [
      {
        name: "Şişe/Kutu İçecekler",
        description: "Coca-Cola, Sprite, Fanta, Ice-Tea, Meyve Suyu",
        price: 70,
        allergens: noAllergens,
      },
      {
        name: "Karpuzlu Limonata (Ev Yapımı)",
        description: "",
        price: 120,
        allergens: noAllergens,
      },
      {
        name: "Sade Soda",
        description: "",
        price: 40,
        allergens: noAllergens,
      },
      {
        name: "Meyveli Soda",
        description: "Limon, Elma, Ananas, Kivi, Çilek ve Karpuz-Çilek Seçenekleriyle",
        price: 50,
        allergens: noAllergens,
      },
      {
        name: "Ayran",
        description: "",
        price: 40,
        allergens: a({ sut: true }),
      },
      {
        name: "Su",
        description: "",
        price: 15,
        allergens: noAllergens,
      },
      {
        name: "Churchill",
        description: "Sade Soda, Limon, Tuz",
        price: 100,
        allergens: noAllergens,
      },
      {
        name: "Iced Caffe Americano",
        description: "Double Shot Espresso İçerir",
        price: 120,
        allergens: noAllergens,
      },
      {
        name: "Iced Caffe Latte",
        description: "Double Shot Espresso İçerir",
        price: 140,
        allergens: a({ sut: true }),
      },
      {
        name: "Iced Caffe Mocha",
        description: "Sütlü Çikolata veya Beyaz Çikolata, Double Shot Espresso İçerir",
        price: 160,
        allergens: a({ sut: true }),
      },
      {
        name: "Frappe",
        description: "Granül Kahve, Buz, Süt ve Süt Köpüğü, İsteğe Göre Karamel ya da Vanilya Şurubu",
        price: 140,
        allergens: a({ sut: true }),
      },
      {
        name: "Frozen",
        description: "",
        price: 140,
        allergens: noAllergens,
      },
      {
        name: "Milkshake",
        description: "",
        price: 140,
        allergens: a({ sut: true }),
      },
    ],
  },
];

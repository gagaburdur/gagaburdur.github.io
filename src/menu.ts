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
  disabled?: boolean;
}

export interface Extra {
  name: string;
  price: number;
}

export interface MenuCategory {
  category: string;
  disabled?: boolean;
  icon?: string;
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
        name: "HAMBURGER",
        description:
          "Burger Sos, Marul, Alman Turşusu, Soğan Turşusu, Domates, Köfte, Patates Kızartması, Dip Sos",
        price: 340,
        allergens: a({
          gluten: true,
          susam: true,
          yumurta: true,
          hardal: true,
        }),
      },
      {
        name: "CHEESEBURGER",
        description:
          "Karamelize Soğan, Turşu, Köfte, Cheddar, Burger Sos, Patates Kızartması, Dip Sos",
        price: 360,
        allergens: a({
          gluten: true,
          susam: true,
          yumurta: true,
          hardal: true,
          sut: true,
          soya: true,
        }),
      },
      {
        name: "NEW MEXICO BURGER",
        description:
          "Köz Kapyalı Acı Sos, Jalapeño Relish, Marul, Domates, Köfte, Acı Mayonez, Patates Kızartması, Dip Sos",
        price: 370,
        allergens: a({ gluten: true, susam: true, yumurta: true }),
      },
      {
        name: "FANTAZİ BURGER",
        description:
          "Uzun Pişmiş Dana Eti, Köfte, Peynir Sos, Roka, Patates Kızartması, Dip Sos",
        price: 400,
        allergens: a({ gluten: true, susam: true, yumurta: true, sut: true }),
      },
    ],
    extras: [
      { name: "EKSTRA KÖFTE", price: 150 },
      { name: "PASTIRMA", price: 40 },
      { name: "MANTAR", price: 30 },
      { name: "ANANAS", price: 30 },
      { name: "YUMURTA", price: 30 },
      { name: "CHEDDAR", price: 20 },
    ],
  },
  {
    category: "TAVUK BURGERLER",
    items: [
      {
        name: "CRISPY CHICKEN",
        description:
          "Kızarmış Tavuk, Turşu, Coleslaw, Ballı Hardal, Patates Kızartması, Dip Sos",
        price: 290,
        allergens: a({ gluten: true, susam: true, yumurta: true, sut: true }),
      },
      {
        name: "NEW MEXICO CHICKEN",
        description:
          "Köz Kapyalı Acı Sos, Jalapeño Relish, Kızarmış Tavuk, Acı Mayonez, Coleslaw, Patates Kızartması, Dip Sos",
        price: 290,
        allergens: a({ gluten: true, susam: true, yumurta: true }),
      },
      {
        name: "CHEESE CHICKEN",
        description:
          "Burger Sos, Marul, Turşu, Domates, Tavuk Fileto, Cheddar Peyniri, Patates Kızartması, Dip Sos",
        price: 260,
        allergens: a({ gluten: true, susam: true, yumurta: true, sut: true }),
      },
    ],
    extras: [
      { name: "PASTIRMA", price: 40 },
      { name: "MANTAR", price: 30 },
      { name: "ANANAS", price: 30 },
      { name: "CHEDDAR", price: 20 },
    ],
    icon: "burger"
  },
  {
    category: "SANDVİÇ",
    items: [
      {
        name: "TON BALIKLI SANDVİÇ",
        description: "Ton Balığı, Mısır, Özel Sos",
        price: 260,
        allergens: a({ gluten: true, susam: true, yumurta: true }),
      },
      {
        name: "PESTO TAVUK SANDVİÇ",
        description: "Pesto Sos, Mozarella, Roka, Tavuk Fileto, Kuru Domates",
        price: 260,
        allergens: a({
          gluten: true,
          susam: true,
          yumurta: true,
          kuruyemis: true,
          yerfistigi: true,
        }),
      },
      {
        name: "HİNDİ FÜME SANDVİÇ",
        description: "Hindi Füme, Kaşar, Domates, Turşu, Roka, Mayonez",
        price: 210,
        allergens: a({ gluten: true, susam: true, yumurta: true }),
      }
    ],
    icon: "loaf"
  },
  {
    category: "SALATA",
    items: [
      {
        name: "KİNOA KARİDES TABULE",
        description: "Kinoalı Tabule, Taze Yeşillikler, Karides",
        price: 270,
        allergens: a({ gluten: true, kabuklu: true }),
      },
      {
        name: "SEZAR SALATA",
        description: "Izgara Tavuk, Göbek Marul, Kruton, Sezar Sos",
        price: 270,
        allergens: a({ balik: true, gluten: true, yumurta: true, sut: true }),
      },
      {
        name: "PANCAR SALATA",
        description:
          "Fırınlanmış Pancar, Portakal, Mevsim Yeşilliği, Karamelize Ceviz, Tahin Portakal Vinegret",
        price: 270,
        allergens: a({ yemis: true, susam: true }),
      },
    ],
    icon: "leaf"
  },
  {
    category: "MAKARNA",
    items: [
      {
        name: "PENNE BOLOGNESE",
        description: "Ev Yapımı Ragu, Tulum Peyniri, Kaşar Peyniri",
        price: 340,
        allergens: a({ gluten: true, kereviz: true, sut: true }),
      },
      {
        name: "PENNE ALFREDO",
        description:
          "Mantar (Kestane ve İstiridye), Peynir, Tavuk, Krema",
        price: 300,
        allergens: a({ gluten: true, sut: true }),
      },
      {
        name: "PENNE NAPOLITEN",
        description:
          "Napoliten Sos, Tulum Peyniri, Çeri Domates",
        price: 270,
        allergens: a({ gluten: true, sut: true }),
      },
      {
        name: "PENNE ARABIATTA",
        description:
          "Arabiatta Sos, Dilim Zeytin, Jalapeño Turşusu, Çeri Domates, Tulum Peyniri",
        price: 270,
        allergens: a({ gluten: true, sut: true }),
      },
    ],
    icon: "pan"
  },
  {
    category: "TACO",
    items: [
      {
        name: "CARNE ASADA",
        description:
          "Uzun Pişmiş Dana Eti, Peynir Sos, Guacamole, Acı Mayonez, Soğan Turşusu, Meksika Biberi, Yanında Limon",
        price: 360,
        allergens: a({ gluten: true, sut: true, yumurta: true }),
      },
      {
        name: "KARİDES TACO",
        description:
          "Tempura Karides, Sriracha Mayonez, Guacamole, Soğan Turşusu, Meksika Biberi, Yanında Limon",
        price: 300,
        allergens: a({ kabuklu: true, yumurta: true, gluten: true }),
      },
      {
        name: "TAVUK TACO",
        description:
          "Izgara Tavuk, Köz Biber Sos, Guacamole, Jalapeño Relish, Köz Mısır, Soğan Turşusu, Meksika Biberi",
        price: 300,
        allergens: a({ gluten: true }),
      },
    ],
    icon: "mustache"
  },
  {
    category: "ANA YEMEK",
    items: [
      {
        name: "SUPREME TAVUK",
        description: "Fırında Tavuk, Supreme Sos, Fırınlanmış Sebzeler",
        price: 450,
        allergens: a({ sut: true }),
      },
    ],
    icon: "knife"
  },
  {
    category: "TOSTLAR",
    items: [
      {
        name: "PEYNİR SEVEN TOST",
        description:
          "Cheddar, Ezine, Kaşar Peyniri, Kızarmış Kabak, Domates Kurusu, Patates Kızartması, Dip Sos",
        price: 250,
        allergens: a({ gluten: true, sut: true }),
      },
      {
        name: "KAVURMALI TOST",
        description:
          "Kavurma, Biber, Salça, Kaşar, Patates Kızartması, Dip Sos",
        price: 350,
        allergens: a({ gluten: true, sut: true }),
      },
    ],
    icon: "bread"
  },
  {
    category: "SUSHI",
    items: [
      {
        name: "CALIFORNIA ROLL",
        description: "Pirinç, Nori, Yengeç Surimi, Avokado, Salatalık ve Susam",
        price: 330,
        allergens: a({ balik: true, kabuklu: true, susam: true }),
      },
      {
        name: "ALASKA ROLL",
        description: "Pirinç, Nori, Avokado, Somon ve Salatalık",
        price: 330,
        allergens: a({ balik: true }),
      },
      {
        name: "SPICY MAGURO ROLL",
        description:
          "Pirinç, Nori, Salatalık, Avokado, Krem Peynir, Ton Balığı ve Acı Sos",
        price: 330,
        allergens: a({ balik: true, sut: true }),
      },
      {
        name: "KAPPA ROLL",
        description: "Pirinç, Nori ve Salatalık",
        price: 280,
        allergens: noAllergens,
      },
      {
        name: "HOSOMAKI ROLL",
        description:
          "Pirinç, Nori. Yengeç Surimi, Somon, Havuç, Avokado Dolgularından Birini İçerir",
        price: 280,
        allergens: a({ balik: true, kabuklu: true }),
      },
      {
        name: "NEGITOROMAKI ROLL",
        description: "Pirinç, Nori, Taze Soğan ve Ton Balığı",
        price: 280,
        allergens: a({ balik: true }),
      },
      {
        name: "AVOKADO ROLL",
        description: "Pirinç, Nori, Avokado",
        price: 300,
        allergens: noAllergens,
      },
      {
        name: "AVOKADO SAKE ROLL",
        description: "Pirinç, Nori, Avokado ve Somon",
        price: 300,
        allergens: a({ balik: true }),
      },
      {
        name: "PHILADELPHIA ROLL",
        description:
          "Somon, Salatalık, Krem Peynir, Susam, Pirinç, Nori, Avokado",
        price: 330,
        allergens: a({ balik: true, sut: true, susam: true }),
      },
      {
        name: "VEGAN ROLL",
        description: "Pirinç, Nori, Avokado, Salatalık, Kapya Biber, Havuç",
        price: 300,
        allergens: noAllergens,
      },
    ],
    icon: "seaweed"
  },
  {
    category: "TATLILAR",
    items: [
      {
        name: "CHURROS",
        description: "Churros, Çikolata Sos, Tarçın, Şeker",
        price: 250,
        allergens: a({ gluten: true, sut: true }),
      },
      {
        name: "DONDURMA CHOUX",
        description: "Vanilyalı Dondurma, Tahin, Karamelize Ceviz, Choux",
        price: 250,
        allergens: a({ gluten: true, sut: true }),
      },
    ],
    icon: "cream"
  },
  {
    category: "SICAK İÇECEKLER",
    items: [
      {
        name: "CAFFE AMERICANO",
        description: "",
        price: 120,
        allergens: noAllergens,
      },
      {
        name: "DOUBLE CAFFE AMERICANO",
        description: "",
        price: 160,
        allergens: noAllergens,
      },
      {
        name: "ESPRESSO",
        description: "",
        price: 80,
        allergens: noAllergens,
      },
      {
        name: "DOUBLE ESPRESSO",
        description: "",
        price: 130,
        allergens: noAllergens,
      },
      {
        name: "CAPPUCCINO",
        description: "",
        price: 150,
        allergens: a({ sut: true }),
      },
      {
        name: "CAFFE LATTE",
        description: "",
        price: 150,
        allergens: a({ sut: true }),
      },
      {
        name: "CAFFE MOCHA",
        description: "Sütlü Çikolata veya Beyaz Çikolata",
        price: 150,
        allergens: a({ sut: true }),
      },
      {
        name: "MACCHIATO",
        description: "",
        price: 130,
        allergens: a({ sut: true }),
      },
      {
        name: "ÇAY",
        description: "",
        price: 30,
        allergens: noAllergens,
      },
      {
        name: "FİNCAN ÇAY",
        description: "",
        price: 50,
        allergens: noAllergens,
      },
      {
        name: "ORALET",
        description:
          "Portakal, Kivi, Kuşburnu, Karadut, Muz, Elma, Çilek, Mentol",
        price: 35,
        allergens: noAllergens,
        disabled: true,
      },
      {
        name: "BİTKİ ÇAYLARI",
        description: "Ihlamur, Adaçayı, Kış Çayı, Kekik, Nane-Limon, Yeşil Çay",
        price: 60,
        allergens: noAllergens,
      },
      {
        name: "TÜRK KAHVESİ",
        description: "",
        price: 60,
        allergens: noAllergens,
      },
      {
        name: "AROMALI TÜRK KAHVESİ",
        description:
          "Dibek Kahvesi, Damla Sakızlı Türk Kahvesi, Menengiç Kahvesi",
        price: 70,
        allergens: noAllergens,
        disabled: true,
      },
      {
        name: "DOUBLE TÜRK KAHVESİ",
        description: "",
        price: 100,
        allergens: noAllergens,
      },
      {
        name: "SICAK ÇİKOLATA",
        description: "",
        price: 140,
        allergens: a({ sut: true }),
      },
      {
        name: "SAHLEP",
        description: "",
        price: 140,
        allergens: a({ sut: true }),
      },
    ],
    icon: "cup"
  },
  {
    category: "SOĞUK İÇECEKLER",
    items: [
      {
        name: "ŞİŞE/KUTU İÇECEKLER",
        description: "Coca-Cola, Sprite, Fanta, Ice-Tea, Meyve Suyu",
        price: 70,
        allergens: noAllergens,
      },
      {
        name: "KARPUZLU LİMONATA (EV YAPIMI)",
        description: "",
        price: 120,
        allergens: noAllergens,
      },
      {
        name: "SADE SODA",
        description: "",
        price: 40,
        allergens: noAllergens,
      },
      {
        name: "MEYVELİ SODA",
        description:
          "Limon, Elma, Ananas, Kivi, Çilek ve Karpuz-Çilek Seçenekleriyle",
        price: 50,
        allergens: noAllergens,
      },
      {
        name: "AYRAN",
        description: "",
        price: 40,
        allergens: a({ sut: true }),
      },
      {
        name: "SU",
        description: "",
        price: 15,
        allergens: noAllergens,
      },
      {
        name: "CHURCHILL",
        description: "Sade Soda, Limon, Tuz",
        price: 100,
        allergens: noAllergens,
      },
      {
        name: "ICED CAFFE AMERICANO",
        description: "Double Shot Espresso İçerir",
        price: 120,
        allergens: noAllergens,
      },
      {
        name: "ICED CAFFE LATTE",
        description: "Double Shot Espresso İçerir",
        price: 140,
        allergens: a({ sut: true }),
      },
      {
        name: "ICED CAFFE MOCHA",
        description:
          "Sütlü Çikolata veya Beyaz Çikolata, Double Shot Espresso İçerir",
        price: 160,
        allergens: a({ sut: true }),
      },
      {
        name: "FRAPPE",
        description:
          "Granül Kahve, Buz, Süt ve Süt Köpüğü, İsteğe Göre Karamel ya da Vanilya Şurubu",
        price: 140,
        allergens: a({ sut: true }),
      },
      {
        name: "FROZEN",
        description: "",
        price: 140,
        allergens: noAllergens,
      },
      {
        name: "MILKSHAKE",
        description: "",
        price: 140,
        allergens: a({ sut: true }),
      },
    ],
    icon: "cocktail"
  },
];

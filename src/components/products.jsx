import handmadeProducts1 from "../assets/images/handmadeProducts1.jpg";
import handmadeProducts2 from "../assets/images/handmadeProducts2.webp";
import handmadeProducts3 from "../assets/images/handmadeProducts3.webp";
import handmadeProducts4 from "../assets/images/handmadeProducts4.jpg";
import handmadeProducts5 from "../assets/images/handmadeProducts5.jpg";
import handmadeProducts6 from "../assets/images/handmadeProducts6.jpg";
import handmadeProducts7 from "../assets/images/handmadeProducts7.jpg";
import handmadeProducts8 from "../assets/images/handmadeProducts8.jpg";
import handmadeProducts9 from "../assets/images/handmadeProducts9.jpg";
import handmadeProducts10 from "../assets/images/handmadeProducts10.jpg";
import handmadeProducts11 from "../assets/images/handmadeProducts11.jpg";
import handmadeProducts12 from "../assets/images/handmadeProducts12.avif";
import handmadeProducts13 from "../assets/images/handmadeProducts13.jpg";
import handmadeProducts14 from "../assets/images/handmadeProducts14.jpg";
import handmadeProducts15 from "../assets/images/handmadeProducts15.jpg";
import handmadeProducts16 from "../assets/images/handmadeProducts16.jpg";
import handmadeProducts17 from "../assets/images/handmadeProducts17.jpg";
import handmadeProducts18 from "../assets/images/handmadeProducts18.webp";



const products = [
  {
    "id": 1,
    "name": "Men's Silver Chain",
    "category": "Men",
    "subcategory": "popular",
    "material": "Silver",
    "price_usd": 150.0,
    "price_inr": 14190.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/100.jpeg",
    "details": "A stylish silver chain that adds elegance to any outfit."
  },
  {
    "id": 2,
    "name": "Women's Rose Gold Necklace",
    "category": "Women",
    "subcategory": "popular",
    "material": "Gold",
    "price_usd": 200.0,
    "price_inr": 15524.6,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/200.jpeg",
    "details": "A delicate rose gold necklace perfect for special occasions."
  },
  {
    "id": 3,
    "name": "Men's Gold Bracelet",
    "category": "Men",
    "subcategory": "Bracelet",
    "material": "Gold",
    "price_usd": 250.0,
    "price_inr": 19405.75,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/300.jpeg",
    "details": "A bold gold bracelet that showcases luxury and style."
  },
  {
    "id": 4,
    "name": "Women's Silver Earrings",
    "category": "Women",
    "subcategory": "Earrings",
    "material": "Silver",
    "price_usd": 100.0,
    "price_inr": 9460.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/400.jpeg",
    "details": "Elegant silver earrings that complement any outfit."
  },
  {
    "id": 5,
    "name": "Women's Gold Ring",
    "category": "Women",
    "subcategory": "popular",
    "material": "Gold",
    "price_usd": 180.0,
    "price_inr": 13972.14,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/500.jpeg",
    "details": "A stunning gold ring adorned with intricate designs."
  },
  {
    "id": 6,
    "name": "Men's Rose Gold Watch",
    "category": "Men",
    "subcategory": "popular",
    "material": "Gold",
    "price_usd": 300.0,
    "price_inr": 23286.9,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/600.jpeg",
    "details": "A sophisticated rose gold watch that combines function with style."
  },
  {
    "id": 7,
    "name": "Men's Gold Cufflinks",
    "category": "Men",
    "subcategory": "Cufflinks",
    "material": "Gold",
    "price_usd": 120.0,
    "price_inr": 9307.38,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/700.jpeg",
    "details": "Classic gold cufflinks that add a touch of elegance to formal attire."
  },
  {
    "id": 8,
    "name": "Women's Silver Bracelet",
    "category": "Women",
    "subcategory": "popular",
    "material": "Silver",
    "price_usd": 90.0,
    "price_inr": 8500.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/800.jpeg",
    "details": "A chic silver bracelet for everyday wear."
  },
  {
    "id": 9,
    "name": "Men's Rose Gold Chain",
    "category": "Men",
    "subcategory": "Chain",
    "material": "Gold",
    "price_usd": 160.0,
    "price_inr": 12419.68,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/900.jpeg",
    "details": "A trendy rose gold chain for a modern look."
  },
  {
    "id": 10,
    "name": "Women's Gold Earrings",
    "category": "Women",
    "subcategory": "popular",
    "material": "Gold",
    "price_usd": 140.0,
    "price_inr": 10867.22,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1000.jpeg",
    "details": "Stylish gold earrings that add a sparkle to your outfit."
  },
  {
    "id": 11,
    "name": "Men's Silver Ring",
    "category": "Men",
    "subcategory": "Ring",
    "material": "Silver",
    "price_usd": 130.0,
    "price_inr": 9850.5,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1100.jpeg",
    "details": "A classic silver ring that suits all occasions."
  },
  {
    "id": 12,
    "name": "Women's Rose Gold Bracelet",
    "category": "Women",
    "subcategory": "Bracelet",
    "material": "Gold",
    "price_usd": 110.0,
    "price_inr": 8320.5,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1200.jpeg",
    "details": "An exquisite rose gold bracelet that adds elegance."
  },
  {
    "id": 13,
    "name": "Men's Gold Watch",
    "category": "Men",
    "subcategory": "popular",
    "material": "Gold",
    "price_usd": 350.0,
    "price_inr": 26450.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1300.jpeg",
    "details": "A luxury gold watch that defines sophistication."
  },
  {
    "id": 14,
    "name": "Women's Silver Necklace",
    "category": "Women",
    "subcategory": "popular",
    "material": "Silver",
    "price_usd": 190.0,
    "price_inr": 14350.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1400.jpeg",
    "details": "A beautiful silver necklace perfect for layering."
  },
  {
    "id": 15,
    "name": "Men's Rose Gold Earrings",
    "category": "Men",
    "subcategory": "Earrings",
    "material": "Gold",
    "price_usd": 95.0,
    "price_inr": 7300.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1500.jpeg",
    "details": "Stylish rose gold earrings that enhance your look."
  },
  {
    "id": 16,
    "name": "Women's Gold Anklet",
    "category": "Women",
    "subcategory": "popular",
    "material": "Gold",
    "price_usd": 85.0,
    "price_inr": 6700.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1600.jpeg",
    "details": "A delicate gold anklet that adds a touch of glamour."
  },
  {
    "id": 17,
    "name": "Men's Silver Bracelet",
    "category": "Men",
    "subcategory": "Bracelet",
    "material": "Silver",
    "price_usd": 140.0,
    "price_inr": 10400.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1700.jpeg",
    "details": "A modern silver bracelet that suits any outfit."
  },
  {
    "id": 18,
    "name": "Women's Rose Gold Anklet",
    "category": "Women",
    "subcategory": "Anklet",
    "material": "Gold",
    "price_usd": 75.0,
    "price_inr": 5900.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1800.jpeg",
    "details": "A charming rose gold anklet for casual wear."
  },
  {
    "id": 19,
    "name": "Men's Gold Tie Clip",
    "category": "Men",
    "subcategory": "Tie Clip",
    "material": "Gold",
    "price_usd": 60.0,
    "price_inr": 4800.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/1900.jpeg",
    "details": "A sleek gold tie clip to elevate your formal attire."
  },
  {
    "id": 20,
    "name": "Women's Silver Hairpin",
    "category": "Women",
    "subcategory": "Hairpin",
    "material": "Silver",
    "price_usd": 50.0,
    "price_inr": 4000.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2000.jpeg",
    "details": "A stylish silver hairpin for a polished look."
  },
  {
    "id": 21,
    "name": "Men's Rose Gold Cufflinks",
    "category": "Men",
    "subcategory": "Cufflinks",
    "material": "Gold",
    "price_usd": 130.0,
    "price_inr": 9850.5,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2100.jpeg",
    "details": "Sophisticated rose gold cufflinks for a distinguished look."
  },
  {
    "id": 22,
    "name": "Women's Gold Necklace",
    "category": "Women",
    "subcategory": "Necklace",
    "material": "Gold",
    "price_usd": 220.0,
    "price_inr": 16650.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2200.jpeg",
    "details": "An exquisite gold necklace that captivates attention."
  },
  {
    "id": 23,
    "name": "Men's Silver Watch",
    "category": "Men",
    "subcategory": "Watch",
    "material": "Silver",
    "price_usd": 310.0,
    "price_inr": 23450.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2300.jpeg",
    "details": "A classic silver watch that combines functionality with style."
  },
  {
    "id": 24,
    "name": "Women's Rose Gold Earrings",
    "category": "Women",
    "subcategory": "Earrings",
    "material": "Gold",
    "price_usd": 105.0,
    "price_inr": 7950.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2400.jpeg",
    "details": "Chic rose gold earrings that complete your outfit."
  },
  {
    "id": 25,
    "name": "Men's Gold Chain",
    "category": "Men",
    "subcategory": "popular",
    "material": "Gold",
    "price_usd": 170.0,
    "price_inr": 12850.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2500.jpeg",
    "details": "A timeless gold chain that stands out."
  },
  {
    "id": 26,
    "name": "Women's Silver Bracelet with Diamonds",
    "category": "Women",
    "subcategory": "Bracelet",
    "material": "Silver",
    "price_usd": 220.0,
    "price_inr": 16650.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2600.jpeg",
    "details": "A stunning silver bracelet adorned with diamonds."
  },
  {
    "id": 27,
    "name": "Men's Rose Gold Pendant",
    "category": "Men",
    "subcategory": "Pendant",
    "material": "Gold",
    "price_usd": 120.0,
    "price_inr": 9100.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2700.jpeg",
    "details": "A unique rose gold pendant that adds charm."
  },
  {
    "id": 28,
    "name": "Women's Gold Brooch",
    "category": "Women",
    "subcategory": "Brooch",
    "material": "Gold",
    "price_usd": 90.0,
    "price_inr": 6800.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2800.jpeg",
    "details": "A decorative gold brooch that enhances your attire."
  },
  {
    "id": 29,
    "name": "Men's Silver Pendant",
    "category": "Men",
    "subcategory": "Pendant",
    "material": "Silver",
    "price_usd": 180.0,
    "price_inr": 13500.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/2900.jpeg",
    "details": "A sleek and stylish silver pendant with a modern design."
  },
  {
    "id": 30,
    "name": "Women's Diamond Gold Ring",
    "category": "Women",
    "subcategory": "Ring",
    "material": "Gold",
    "price_usd": 250.0,
    "price_inr": 18950.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3000.jpeg",
    "details": "A dazzling diamond-studded gold ring for special occasions."
  },
  {
    "id": 31,
    "name": "Men's Gold Chain",
    "category": "Men",
    "subcategory": "Chain",
    "material": "Gold",
    "price_usd": 160.0,
    "price_inr": 12100.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3100.jpeg",
    "details": "A sophisticated men's gold chain, perfect for everyday wear or special occasions."
  },
  {
    "id": 32,
    "name": "Women's Silver Hoop Earrings",
    "category": "Women",
    "subcategory": "Earrings",
    "material": "Silver",
    "price_usd": 75.0,
    "price_inr": 5675.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3200.jpeg",
    "details": "Classic silver hoop earrings for a timeless look."
  },
  {
    "id": 33,
    "name": "Men's Rose Gold Tie Clip",
    "category": "Men",
    "subcategory": "Tie Clip",
    "material": "Gold",
    "price_usd": 140.0,
    "price_inr": 10600.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3300.jpeg",
    "details": "A stylish rose gold Tie Clip that makes a statement."
  },
  {
    "id": 34,
    "name": "Women's Gold Pendant",
    "category": "Women",
    "subcategory": "Pendant",
    "material": "Gold",
    "price_usd": 100.0,
    "price_inr": 7575.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3400.jpeg",
    "details": "A trendy gold pendant that enhances your neckline."
  },
  {
    "id": 35,
    "name": "Men's Silver Necklace",
    "category": "Men",
    "subcategory": "popular",
    "material": "Silver",
    "price_usd": 130.0,
    "price_inr": 9850.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3500.jpeg",
    "details": "A sleek silver necklace for a modern look."
  },
  {
    "id": 36,
    "name": "Women's Rose Gold Brooch",
    "category": "Women",
    "subcategory": "Brooch",
    "material": "Gold",
    "price_usd": 150.0,
    "price_inr": 11300.0,
    "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3600.jpeg",
    "details": "An elegant rose gold brooch ",
  },
          {
            "id": 37,
            "name": "Men's Gold Watch",
            "category": "Men",
            "subcategory": "Watch",
            "material": "Gold",
            "price_usd": 220.0,
            "price_inr": 16650.0,
            "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3700.jpeg",
            "details": "A robust gold watch for the bold man."
          },
          {
            "id": 38,
            "name": "Women's Silver Pendant",
            "category": "Women",
            "subcategory": "Pendant",
            "material": "Silver",
            "price_usd": 85.0,
            "price_inr": 6425.0,
            "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3800.jpeg",
            "details": "A stunning silver pendant that enhances your neckline."
          },
          {
            "id": 39,
            "name": "Men's Rose Gold Ring with Stones",
            "category": "Men",
            "subcategory": "Ring",
            "material": "Gold",
            "price_usd": 250.0,
            "price_inr": 18950.0,
            "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/3900.jpeg",
            "details": "A striking rose gold ring embellished with stones."
          },
          {
            "id": 40,
            "name": "Women's Gold Statement Choker",
            "category": "Women",
            "subcategory": "Choker",
            "material": "Gold",
            "price_usd": 160.0,
            "price_inr": 12100.0,
            "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4000.jpeg",
            "details": "A bold gold statement choker that commands attention."
          },
      {
        "id": 41,
        "name": "Men's Silver Cufflinks",
        "category": "Men",
        "subcategory": "Cufflinks",
        "material": "Silver",
        "price_usd": 200.0,
        "price_inr": 15150.0,
        "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4100.jpeg",
        "details": "A stylish silver cufflinks with an elegant design."
      },
      {
        "id": 42,
        "name": "Women's Rose Gold Drop Hairband",
        "category": "Women",
        "subcategory": "Hairband",
        "material": "Gold",
        "price_usd": 110.0,
        "price_inr": 8330.0,
        "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4200.jpeg",
        "details": "Beautiful rose gold drop hairband for any occasion."
      },
      {
        "id": 43,
        "name": "Men's Gold Signet Chain",
        "category": "Men",
        "subcategory": "popular",
        "material": "Gold",
        "price_usd": 240.0,
        "price_inr": 18180.0,
        "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4300.jpeg",
        "details": "A classic gold signet chain that symbolizes sophistication."
      },
      {
        "id": 44,
        "name": "Women's Silver Cuff",
        "category": "Women",
        "subcategory": "Cuff",
        "material": "Silver",
        "price_usd": 125.0,
        "price_inr": 9465.0,
        "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4400.jpeg",
        "details": "An elegant silver cuff that adds a modern touch."
      },
      {
        "id": 45,
        "name": "Men's Rose Gold Watch",
        "category": "Men",
        "subcategory": "Watch",
        "material": "Gold",
        "price_usd": 70.0,
        "price_inr": 5303.0,
        "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4500.jpeg",
        "details": "A classic men's rose gold watch with a timeless design, perfect for both formal and casual wear."
      },
      {
        "id": 46,
        "name": "Women's Gold Hairband",
        "category": "Women",
        "subcategory": "Hairband",
        "material": "Gold",
        "price_usd": 65.0,
        "price_inr": 4920.0,
        "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4600.jpeg",
        "details": "A decorative gold hairband that enhances your hairstyle."
      },
      {
        "id": 47,
        "name": "Men's Silver ID Tie Pin",
        "category": "Men",
        "subcategory": "Tie Pin",
        "material": "Silver",
        "price_usd": 150.0,
        "price_inr": 11300.0,
        "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4700.jpeg",
        "details": "A stylish silver ID tie pin that showcases your personality."
      },
      {
        "id": 48,
        "name": "Women's Rose Gold Bracelet",
        "category": "Women",
        "subcategory": "popular",
        "material": "Gold",
        "price_usd": 200.0,
        "price_inr": 15150.0,
        "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4800.jpeg",
        "details": "A fashionable rose gold bracelet for special occasions."
      },
      {
        "id": 49,
        "name": "Men's Gold Ring with Yellow Diamond",
        "category": "Men",
        "subcategory": "Ring",
        "material": "Gold",
        "price_usd": 220.0,
        "price_inr": 16650.0,
        "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/4900.jpeg",
        "details": "A luxurious men's gold ring featuring a stunning yellow diamond at the center, perfect for making a bold statement."
      },
      {
        "id": 50,
        "name": "Women's Silver Chain",
        "category": "Women",
        "subcategory": "Chain",
        "material": "Silver",
        "price_usd": 75.0,
        "price_inr": 5675.0,
        "image": "https://github.com/Success1308/jewellery-shop-api/raw/main/public/images/5000.jpeg",
        "details": "A stunning silver chain that enhances your style."
      },

          {
      id: 51,
      name: "Handmade Resin Earrings",
      category: "Handmade",
      subcategory: "Earrings",
      material: "Resin & Dried Flowers",
      price_usd: 18.0,
      price_inr: 1395.90,
      image: handmadeProducts1,
      details: "Beautiful handmade resin earrings with dried flowers for a unique touch."
    },
    {
      id: 52,
      name: "Personalized Name Bracelet",
      category: "Handmade",
      subcategory: "Bracelet",
      material: "Stainless Steel",
      price_usd: 22.0,
      price_inr: 1706.10,
      image: handmadeProducts2,
      details: "Custom name bracelet crafted from durable stainless steel."
    },
    {
      id: 53,
      name: "Hand-Knitted Wool Scarf",
      category: "Handmade",
      subcategory: "Scarves",
      material: "Wool",
      price_usd: 30.0,
      price_inr: 2326.50,
      image: handmadeProducts3,
      details: "A warm and cozy hand-knitted woolen scarf for winter fashion."
    },
    {
      id: 54,
      name: "Handmade Leather Wallet",
      category: "Handmade",
      subcategory: "popular",
      material: "Genuine Leather",
      price_usd: 35.0,
      price_inr: 2714.25,
      image: handmadeProducts4,
      details: "Premium quality handmade leather wallet with multiple compartments."
    },
    {
      id: 55,
      name: "Handwoven Jute Tote Bag",
      category: "Handmade",
      subcategory: "Bags",
      material: "Jute",
      price_usd: 25.0,
      price_inr: 1938.75,
      image: handmadeProducts5,
      details: "Eco-friendly and stylish handwoven jute tote bag."
    },
    {
      id: 56,
      name: "Hand-Painted Ceramic Mug",
      category: "Handmade",
      subcategory: "Mugs",
      material: "Ceramic",
      price_usd: 15.0,
      price_inr: 1163.25,
      image: handmadeProducts6,
      details: "Aesthetic hand-painted ceramic mug for coffee lovers."
    },
    {
      id: 57,
      name: "Handmade Wooden Keychain",
      category: "Handmade",
      subcategory: "Keychains",
      material: "Wood",
      price_usd: 10.0,
      price_inr: 775.50,
      image: handmadeProducts7,
      details: "Personalized handmade wooden keychain with engraving options."
    },
    {
      id: 58,
      name: "Handcrafted Dreamcatcher",
      category: "Handmade",
      subcategory: "popular",
      material: "Feathers & Cotton Thread",
      price_usd: 28.0,
      price_inr: 2171.40,
      image: handmadeProducts8,
      details: "A handmade dreamcatcher for positive energy and decoration."
    },
    {
      id: 59,
      name: "Handmade Macrame Wall Hanging",
      category: "Handmade",
      subcategory: "Wall Art",
      material: "Cotton Rope",
      price_usd: 40.0,
      price_inr: 3102.00,
      image:handmadeProducts9,
      details: "Handwoven macrame wall hanging to add a boho touch to your space."
    },
    {
      id: 60,
      name: "Handmade Scented Candles",
      category: "Handmade",
      subcategory: "Candles",
      material: "Soy Wax",
      price_usd: 18.0,
      price_inr: 1395.90,
      image:handmadeProducts10,
      details: "Aromatic handmade candles with calming scents."
    },
    {
      id: 61,
      name: "Handmade Resin Coasters",
      category: "Handmade",
      subcategory: "Coasters",
      material: "Resin",
      price_usd: 20.0,
      price_inr: 1551.00,
      image: handmadeProducts11,
      details: "Stylish resin coasters with unique designs."
    },
    {
      id: 62,
      name: "Handcrafted Wooden Jewelry Box",
      category: "Handmade",
      subcategory: "Storage",
      material: "Wood",
      price_usd: 35.0,
      price_inr: 2714.25,
      image: handmadeProducts12,
      details: "A handcrafted wooden jewelry box with intricate carvings."
    },
    {
      id: 63,
      name: "Handmade Fabric Headbands",
      category: "Handmade",
      subcategory: "Hair Accessories",
      material: "Cotton Fabric",
      price_usd: 12.0,
      price_inr: 930.60,
      image: handmadeProducts13,
      details: "Soft and stylish handmade fabric headbands."
    },
    {
      id: 64,
      name: "Handcrafted Beaded Anklet",
      category: "Handmade",
      subcategory: "Anklets",
      material: "Beads & String",
      price_usd: 14.0,
      price_inr: 1085.70,
      image:handmadeProducts14,
      details: "A delicate handmade beaded anklet with vibrant colors."
    },
    {
      id: 65,
      name: "Handmade Crochet Teddy Bear",
      category: "Handmade",
      subcategory: "Stuffed Toys",
      material: "Cotton Yarn",
      price_usd: 30.0,
      price_inr: 2326.50,
      image: handmadeProducts15,
      details: "Adorable handmade crochet teddy bear."
    },
    {
      id: 66,
      name: "Handmade Soap Set",
      category: "Handmade",
      subcategory: "Bath & Spa",
      material: "Essential Oils & Glycerin",
      price_usd: 18.0,
      price_inr: 1395.90,
      image: handmadeProducts16,
      details: "A set of handmade organic soaps with refreshing scents."
    },
    {
      id: 67,
      name: "Hand-Painted Canvas Art",
      category: "Handmade",
      subcategory: "Art",
      material: "Canvas & Acrylic Paint",
      price_usd: 45.0,
      price_inr: 3489.75,
      image: handmadeProducts17,
      details: "Unique hand-painted canvas art to elevate your space."
    },
    {
      id: 68,
      name: "Handmade Beaded Clutch",
      category: "Handmade",
      subcategory: "Bags",
      material: "Beads & Fabric",
      price_usd: 50.0,
      price_inr: 3877.50,
      image:handmadeProducts18,
      details: "A stunning handmade beaded clutch for special occasions."
    }
      
    ]
  
  export default products;
  
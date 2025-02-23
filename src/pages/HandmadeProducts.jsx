// import React from 'react';
// import ProductCard from '../components/ProductCard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import products from '../components/products
// import handmadeProducts from '../data/handmadeProducts'; // Ensure correct path

// const HandmadeProducts = () => {
//   const handmadeProducts = [
//     {
//       id: 1,
//       name: "Handmade Resin Earrings",
//       category: "Handmade",
//       subcategory: "Earrings",
//       material: "Resin & Dried Flowers",
//       price_usd: 18.0,
//       price_inr: 1395.90,
//       image: "https://example.com/images/earrings.jpeg",
//       details: "Beautiful handmade resin earrings with dried flowers for a unique touch."
//     },
//     {
//       id: 2,
//       name: "Personalized Name Bracelet",
//       category: "Handmade",
//       subcategory: "Bracelet",
//       material: "Stainless Steel",
//       price_usd: 22.0,
//       price_inr: 1706.10,
//       image: "https://example.com/images/bracelet.jpeg",
//       details: "Custom name bracelet crafted from durable stainless steel."
//     },
//     {
//       id: 3,
//       name: "Hand-Knitted Wool Scarf",
//       category: "Handmade",
//       subcategory: "Scarves",
//       material: "Wool",
//       price_usd: 30.0,
//       price_inr: 2326.50,
//       image: "https://example.com/images/scarf.jpeg",
//       details: "A warm and cozy hand-knitted woolen scarf for winter fashion."
//     },
//     {
//       id: 4,
//       name: "Handmade Leather Wallet",
//       category: "Handmade",
//       subcategory: "Wallets",
//       material: "Genuine Leather",
//       price_usd: 35.0,
//       price_inr: 2714.25,
//       image: "https://example.com/images/wallet.jpeg",
//       details: "Premium quality handmade leather wallet with multiple compartments."
//     },
//     {
//       id: 5,
//       name: "Handwoven Jute Tote Bag",
//       category: "Handmade",
//       subcategory: "Bags",
//       material: "Jute",
//       price_usd: 25.0,
//       price_inr: 1938.75,
//       image: "https://example.com/images/bag.jpeg",
//       details: "Eco-friendly and stylish handwoven jute tote bag."
//     },
//     {
//       id: 6,
//       name: "Hand-Painted Ceramic Mug",
//       category: "Handmade",
//       subcategory: "Mugs",
//       material: "Ceramic",
//       price_usd: 15.0,
//       price_inr: 1163.25,
//       image: "https://example.com/images/mug.jpeg",
//       details: "Aesthetic hand-painted ceramic mug for coffee lovers."
//     },
//     {
//       id: 7,
//       name: "Handmade Wooden Keychain",
//       category: "Handmade",
//       subcategory: "Keychains",
//       material: "Wood",
//       price_usd: 10.0,
//       price_inr: 775.50,
//       image: "https://example.com/images/keychain.jpeg",
//       details: "Personalized handmade wooden keychain with engraving options."
//     },
//     {
//       id: 8,
//       name: "Handcrafted Dreamcatcher",
//       category: "Handmade",
//       subcategory: "Wall Hangings",
//       material: "Feathers & Cotton Thread",
//       price_usd: 28.0,
//       price_inr: 2171.40,
//       image: "https://example.com/images/dreamcatcher.jpeg",
//       details: "A handmade dreamcatcher for positive energy and decoration."
//     },
//     {
//       id: 9,
//       name: "Handmade Macrame Wall Hanging",
//       category: "Handmade",
//       subcategory: "Wall Art",
//       material: "Cotton Rope",
//       price_usd: 40.0,
//       price_inr: 3102.00,
//       image: "https://example.com/images/macrame.jpeg",
//       details: "Handwoven macrame wall hanging to add a boho touch to your space."
//     },
//     {
//       id: 10,
//       name: "Handmade Scented Candles",
//       category: "Handmade",
//       subcategory: "Candles",
//       material: "Soy Wax",
//       price_usd: 18.0,
//       price_inr: 1395.90,
//       image: "https://example.com/images/candle.jpeg",
//       details: "Aromatic handmade candles with calming scents."
//     },
//     {
//       id: 11,
//       name: "Handmade Resin Coasters",
//       category: "Handmade",
//       subcategory: "Coasters",
//       material: "Resin",
//       price_usd: 20.0,
//       price_inr: 1551.00,
//       image: "https://example.com/images/coasters.jpeg",
//       details: "Stylish resin coasters with unique designs."
//     },
//     {
//       id: 12,
//       name: "Handcrafted Wooden Jewelry Box",
//       category: "Handmade",
//       subcategory: "Storage",
//       material: "Wood",
//       price_usd: 35.0,
//       price_inr: 2714.25,
//       image: "https://example.com/images/jewelrybox.jpeg",
//       details: "A handcrafted wooden jewelry box with intricate carvings."
//     },
//     {
//       id: 13,
//       name: "Handmade Fabric Headbands",
//       category: "Handmade",
//       subcategory: "Hair Accessories",
//       material: "Cotton Fabric",
//       price_usd: 12.0,
//       price_inr: 930.60,
//       image: "https://example.com/images/headbands.jpeg",
//       details: "Soft and stylish handmade fabric headbands."
//     },
//     {
//       id: 14,
//       name: "Handcrafted Beaded Anklet",
//       category: "Handmade",
//       subcategory: "Anklets",
//       material: "Beads & String",
//       price_usd: 14.0,
//       price_inr: 1085.70,
//       image: "https://example.com/images/anklet.jpeg",
//       details: "A delicate handmade beaded anklet with vibrant colors."
//     },
//     {
//       id: 15,
//       name: "Handmade Crochet Teddy Bear",
//       category: "Handmade",
//       subcategory: "Stuffed Toys",
//       material: "Cotton Yarn",
//       price_usd: 30.0,
//       price_inr: 2326.50,
//       image: "https://example.com/images/teddybear.jpeg",
//       details: "Adorable handmade crochet teddy bear."
//     },
//     {
//       id: 16,
//       name: "Handmade Soap Set",
//       category: "Handmade",
//       subcategory: "Bath & Spa",
//       material: "Essential Oils & Glycerin",
//       price_usd: 18.0,
//       price_inr: 1395.90,
//       image: "https://example.com/images/soap.jpeg",
//       details: "A set of handmade organic soaps with refreshing scents."
//     },
//     {
//       id: 17,
//       name: "Hand-Painted Canvas Art",
//       category: "Handmade",
//       subcategory: "Art",
//       material: "Canvas & Acrylic Paint",
//       price_usd: 45.0,
//       price_inr: 3489.75,
//       image: "https://example.com/images/canvasart.jpeg",
//       details: "Unique hand-painted canvas art to elevate your space."
//     },
//     {
//       id: 18,
//       name: "Handmade Beaded Clutch",
//       category: "Handmade",
//       subcategory: "Bags",
//       material: "Beads & Fabric",
//       price_usd: 50.0,
//       price_inr: 3877.50,
//       image: "https://example.com/images/clutch.jpeg",
//       details: "A stunning handmade beaded clutch for special occasions."
//     }
//   ];
//   const filteredProducts = handmadeProducts.filter(product => 
//     ["Jewelry", "Accessories", "Home Decor", "Bags", "Wall Art", "Candles"].includes(product.subcategory)
//   );

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold text-center mb-6">Handmade Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition">
//             <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
//             <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
//             <p className="text-gray-600">{product.details}</p>
//             <p className="text-green-600 font-bold mt-2">${product.price_usd} / ₹{product.price_inr}</p>
//             <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//               Buy Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HandmadeProducts;
import React from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../components/products';

const HandmadeProducts = () => {
    // Filter Handmade Products and Apply Discount
    const handmadeProducts = products.filter(product => product.category === "Handmade").map(product => ({
        ...product,
        discountedPrice: product.price * 0.9,
    }));

    return (
        <div className="min-h-screen flex flex-col text-white">
            <Navbar />
            <div className="text-center py-16 bg-gradient-to-r">
                <h1 className="text-5xl font-bold mt-10">Handmade Collection</h1>
                <p className="text-lg mt-2">Unique and artisan-crafted jewelry pieces.</p>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {handmadeProducts.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HandmadeProducts;

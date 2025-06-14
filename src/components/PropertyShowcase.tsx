import PropertyCard from "./PropertyCard";
import Icon from "./Icon";

const PropertyShowcase = () => {
  const properties = [
    {
      id: 1,
      title: "3-комн. квартира премиум-класса",
      location: "Москва, Арбат",
      startingBid: "8,500,000 ₽",
      marketValue: "15,200,000 ₽",
      auctionDate: "28 июня 2025",
      propertyType: "Элитная квартира",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
      discount: "44%",
    },
    {
      id: 2,
      title: "Торговое помещение 150 м²",
      location: "СПб, Невский пр.",
      startingBid: "12,000,000 ₽",
      marketValue: "22,000,000 ₽",
      auctionDate: "2 июля 2025",
      propertyType: "Коммерция",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      discount: "45%",
    },
    {
      id: 3,
      title: "Коттедж с участком 20 соток",
      location: "Подмосковье, Рублевка",
      startingBid: "25,000,000 ₽",
      marketValue: "42,000,000 ₽",
      auctionDate: "5 июля 2025",
      propertyType: "Элитная недвижимость",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
      discount: "40%",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Премиальные объекты с торгов
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Тщательно отобранная недвижимость с максимальным инвестиционным
            потенциалом и гарантированной доходностью
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
            <Icon name="Search" className="mr-2" size={20} />
            Посмотреть все 3,800+ объектов
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;

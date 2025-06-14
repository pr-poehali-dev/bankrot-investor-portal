import PropertyCard from "./PropertyCard";

const PropertyShowcase = () => {
  const properties = [
    {
      id: 1,
      title: "Двухкомнатная квартира в центре",
      location: "Москва, ЦАО",
      startingBid: "4,200,000 ₽",
      marketValue: "7,000,000 ₽",
      auctionDate: "25 июня 2025",
      propertyType: "Квартира",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
      discount: "40%",
    },
    {
      id: 2,
      title: "Коммерческое помещение под офис",
      location: "СПб, Центральный р-н",
      startingBid: "8,500,000 ₽",
      marketValue: "15,000,000 ₽",
      auctionDate: "28 июня 2025",
      propertyType: "Коммерция",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      discount: "43%",
    },
    {
      id: 3,
      title: "Загородный дом с участком",
      location: "Московская обл.",
      startingBid: "12,000,000 ₽",
      marketValue: "18,500,000 ₽",
      auctionDate: "2 июля 2025",
      propertyType: "Дом",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
      discount: "35%",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Актуальные объекты на торгах
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Отобранные экспертами объекты недвижимости с максимальным
            потенциалом доходности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Смотреть все объекты
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;

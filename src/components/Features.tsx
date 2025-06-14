import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "TrendingDown",
      title: "Цены ниже рынка",
      description:
        "Объекты на торгах продаются по ценам на 30-70% ниже рыночной стоимости",
    },
    {
      icon: "Shield",
      title: "Юридическая чистота",
      description:
        "Все объекты проходят тщательную проверку наших юристов перед публикацией",
    },
    {
      icon: "Users",
      title: "Экспертная поддержка",
      description:
        "Персональное сопровождение от экспертов на всех этапах сделки",
    },
    {
      icon: "Clock",
      title: "Эксклюзивные предложения",
      description:
        "Первыми узнавайте о новых объектах и получайте преимущество на торгах",
    },
    {
      icon: "BarChart3",
      title: "Аналитика доходности",
      description:
        "Подробные отчеты по потенциальной доходности каждого объекта",
    },
    {
      icon: "Handshake",
      title: "Полное сопровождение",
      description: "От поиска объекта до регистрации права собственности",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Почему инвесторы выбирают нас
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Мы предоставляем все необходимые инструменты для успешного
            инвестирования в недвижимость с торгов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={feature.icon as any}
                  className="text-amber-600"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

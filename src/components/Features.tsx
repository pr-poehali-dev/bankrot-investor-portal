import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "TrendingDown",
      title: "Скидки до 70%",
      description:
        "Приобретайте недвижимость на 30-70% дешевле рыночной стоимости благодаря механизму торгов банкротства",
    },
    {
      icon: "Shield",
      title: "100% юридическая чистота",
      description:
        "Команда экспертов-юристов проверяет каждый объект и обеспечивает полную безопасность сделки",
    },
    {
      icon: "Target",
      title: "Доходность до 200%",
      description:
        "Инвестируйте в объекты с высоким потенциалом роста стоимости и получайте максимальную прибыль",
    },
    {
      icon: "Zap",
      title: "Эксклюзивный доступ",
      description:
        "Получайте информацию о новых торгах на 48 часов раньше публичных объявлений",
    },
    {
      icon: "BarChart3",
      title: "Профессиональная аналитика",
      description:
        "Детальные отчеты по каждому объекту: оценка стоимости, потенциал роста, инвестиционная привлекательность",
    },
    {
      icon: "Users",
      title: "Полное сопровождение",
      description:
        "Персональный менеджер ведет вашу сделку от выбора объекта до получения документов собственности",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Почему профессиональные инвесторы выбирают нас
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Единственная в России платформа с полным циклом инвестиционных услуг
            для торгов банкротства
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

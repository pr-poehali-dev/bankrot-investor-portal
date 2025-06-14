import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Александр Петров",
      role: "Управляющий активами",
      text: "За 18 месяцев работы с ТоргиПро собрал портфель из 7 объектов. Средняя доходность составила 185%. Команда — настоящие профессионалы рынка банкротства.",
      rating: 5,
      investment: "Портфель 47 млн ₽, доходность 185%",
    },
    {
      name: "Елена Смирнова",
      role: "Частный инвестор",
      text: "Купила офисное здание в центре за 15 млн вместо 28 млн по рынку. Уже через полгода арендная доходность превысила все ожидания. Рекомендую!",
      rating: 5,
      investment: "Экономия 13 млн ₽ на покупке",
    },
    {
      name: "Михаил Волков",
      role: "Девелоперская компания",
      text: "Через платформу приобрели 3 участка под застройку со скидкой 55%. Полное юридическое сопровождение и прозрачность процесса на высшем уровне.",
      rating: 5,
      investment: "3 участка, экономия 42 млн ₽",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Истории успешных инвестиций
          </h2>
          <p className="text-lg text-slate-600">
            Реальные результаты наших клиентов с конкретными цифрами прибыли
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                  ))}
                </div>

                <blockquote className="text-slate-600 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500 mb-2">
                    {testimonial.role}
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    {testimonial.investment}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

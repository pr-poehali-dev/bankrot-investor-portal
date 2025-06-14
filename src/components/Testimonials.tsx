import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Александр Петров",
      role: "Частный инвестор",
      text: "За год работы с ТоргиПро приобрел 3 квартиры со средней экономией 45%. Команда профессионально ведет от поиска до регистрации.",
      rating: 5,
      investment: "Купил 3 квартиры, сэкономил 4.2 млн ₽",
    },
    {
      name: "Елена Смирнова",
      role: "Управляющая компания",
      text: "Отличная площадка для поиска коммерческой недвижимости. Аналитика по каждому объекту помогает принимать взвешенные решения.",
      rating: 5,
      investment: "Портфель 12 объектов",
    },
    {
      name: "Михаил Волков",
      role: "Девелопер",
      text: "Нашел участок под застройку на 40% дешевле рынка. Все документы проверили юристы, сделка прошла без проблем.",
      rating: 5,
      investment: "Экономия 15 млн ₽ на участке",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Отзывы инвесторов
          </h2>
          <p className="text-lg text-slate-600">
            Истории успеха наших клиентов
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

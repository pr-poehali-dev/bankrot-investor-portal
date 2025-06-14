import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
            Недвижимость с торгов банкротства — доходность до 200%
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Получите доступ к эксклюзивным объектам недвижимости со скидками
            30-70% от рыночной стоимости. Полное юридическое сопровождение и
            гарантия чистоты сделок.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg"
            >
              <Icon name="Search" className="mr-2" size={20} />
              Найти объекты
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Как это работает
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                3,800+
              </div>
              <div className="text-slate-300">Объектов в базе</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">65%</div>
              <div className="text-slate-300">Средняя скидка от рынка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                2,100+
              </div>
              <div className="text-slate-300">Успешных инвесторов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

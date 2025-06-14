import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PropertyShowcase from "@/components/PropertyShowcase";
import InvestorForm from "@/components/InvestorForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <PropertyShowcase />

      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Станьте частью элитного клуба инвесторов
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Получите персональную подборку премиальных объектов и начните
              зарабатывать на недвижимости уже через 30 дней
            </p>
          </div>
          <InvestorForm />
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;

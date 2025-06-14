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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Начните инвестировать уже сегодня
            </h2>
            <p className="text-lg text-slate-600">
              Заполните форму и получите персональную подборку объектов
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

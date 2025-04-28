
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-brand-dark via-blue-700 to-brand-light min-h-screen flex items-center text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-white animate-float"></div>
        <div className="absolute top-[30%] left-[65%] w-96 h-96 rounded-full bg-white animate-float" style={{animationDelay: "2s"}}></div>
        <div className="absolute top-[60%] left-[20%] w-72 h-72 rounded-full bg-white animate-float" style={{animationDelay: "4s"}}></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Soluções Tecnológicas para o Presente e Futuro
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Transforme residências, comércios e indústrias com tecnologia de ponta em energia, 
            automação e sistemas elétricos inteligentes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-brand-dark hover:bg-gray-100">
              <a href="#services">Nossos Serviços</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              <a href="#contact">Solicitar Orçamento</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

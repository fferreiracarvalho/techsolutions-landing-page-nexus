
import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title">Sobre a TechSolutions</h2>
            <p className="text-gray-600 mb-6">
              Somos uma empresa especializada em soluções tecnológicas para 
              residências, comércios e indústrias, atuando em diversos segmentos 
              com foco na integração de sistemas elétricos, energia renovável e 
              automação.
            </p>
            <p className="text-gray-600 mb-6">
              Nossa missão é proporcionar eficiência energética, conforto e segurança 
              através de projetos personalizados que atendem às necessidades específicas 
              de cada cliente, sempre comprometidos com a inovação e qualidade.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-brand-dark mb-2">Nossa Visão</h3>
                <p className="text-sm text-gray-600">
                  Ser referência em tecnologia aplicada, criando ambientes inteligentes e sustentáveis.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-brand-dark mb-2">Nossos Valores</h3>
                <p className="text-sm text-gray-600">
                  Inovação, sustentabilidade, excelência técnica e compromisso com o cliente.
                </p>
              </div>
            </div>
            <Button 
              className="bg-brand-dark hover:bg-blue-900 text-white font-medium"
            >
              <a href="#contact">Fale Conosco</a>
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <div className="bg-gradient-to-tr from-brand-dark to-brand-light w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">+10 Anos</h3>
                  <p className="text-blue-100 mb-4">de experiência no mercado</p>
                  <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                    <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
                      <p className="text-xl font-bold text-white">200+</p>
                      <p className="text-xs text-blue-50">Projetos Realizados</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-3 rounded-lg">
                      <p className="text-xl font-bold text-white">97%</p>
                      <p className="text-xs text-blue-50">Clientes Satisfeitos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-light rounded-full z-10 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">Confiança</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

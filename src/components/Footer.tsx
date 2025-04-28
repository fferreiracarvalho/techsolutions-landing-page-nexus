
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand-light">Tech</span>Solutions
            </h3>
            <p className="text-blue-200 mb-4">
              Transformando residências, comércios e indústrias com tecnologia de ponta.
            </p>
            <p className="text-blue-200">
              © {new Date().getFullYear()} TechSolutions. <br />
              Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="#" className="hover:text-brand-light transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-light transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-light transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-brand-light transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-brand-light transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-light transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Serviços</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="#services" className="hover:text-brand-light transition-colors">
                  Projetos Elétricos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-light transition-colors">
                  Energia Solar
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-light transition-colors">
                  Automação Residencial
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-light transition-colors">
                  Automação Comercial
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-light transition-colors">
                  Manutenção Naval
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-2 text-blue-200">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-brand-light flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Av. Tecnologia, 1000
                  <br />
                  Centro, Sua Cidade - Estado
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-brand-light flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+55 (XX) XXXXX-XXXX</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-brand-light flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contato@techsolutions.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm mb-4 md:mb-0">
              Desenvolvido por TechSolutions © {new Date().getFullYear()}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-300 hover:text-brand-light transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-brand-light transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

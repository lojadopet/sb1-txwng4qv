import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">PetNutrição</h3>
            <p className="text-gray-600">
              Ajudando você a manter seu pet saudável com uma dieta balanceada.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Calculadora
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato</h3>
            <p className="text-gray-600">
              Tem alguma dúvida? Entre em contato conosco através do e-mail: <a href="mailto:contato@petnutricao.com" className="text-blue-600 hover:underline">contato@petnutricao.com</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} PetNutrição. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
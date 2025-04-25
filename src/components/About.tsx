import React from "react";
import { Info, Heart, Dog } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Info className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre a Calculadora</h2>
          <p className="text-lg text-gray-600">
            Entenda como nossa calculadora ajuda a manter a saúde do seu pet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Dog className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cálculo Personalizado</h3>
            <p className="text-gray-600">
              Nossa calculadora leva em consideração o peso do seu cão e o objetivo nutricional para fornecer uma recomendação personalizada de calorias diárias e distribuição de nutrientes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Heart className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefícios para o Pet</h3>
            <p className="text-gray-600">
              Uma dieta balanceada, com a quantidade correta de proteínas, carboidratos, fibras e gorduras, contribui para a saúde, longevidade e bem-estar do seu cão.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Como Utilizamos os Cálculos</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Perder Peso</h4>
              <p className="text-gray-600">
                20 kcal por kg de peso corporal, com maior ênfase em proteínas e fibras para promover saciedade e preservar massa muscular.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Manter Peso</h4>
              <p className="text-gray-600">
                30 kcal por kg de peso corporal, com distribuição equilibrada de nutrientes para manter o peso e a saúde geral.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Ganhar Peso</h4>
              <p className="text-gray-600">
                40 kcal por kg de peso corporal, com maior proporção de proteínas e carboidratos para promover o ganho de peso saudável.
              </p>
            </div>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            Nota: Estas são diretrizes gerais. Consulte sempre um veterinário ou nutricionista animal para recomendações específicas para o seu pet.
          </p>
        </div>
      </div>
    </section>
  );
}
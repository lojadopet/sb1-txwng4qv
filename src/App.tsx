import React from 'react';
import Header from './components/Header';
import PetCalorieCalculator from './components/PetCalorieCalculator';
import About from './components/About';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Nutrição ideal para o seu pet</h1>
            <p className="text-xl mb-8">
              Calcule as necessidades calóricas do seu cão e descubra a distribuição ideal de macronutrientes 
              para mantê-lo saudável e feliz.
            </p>
            <a 
              href="#calculator" 
              className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Calcular Agora
            </a>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section id="calculator" className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculadora de Calorias</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Insira o peso do seu cão e selecione o objetivo nutricional para calcular as calorias diárias 
                recomendadas e a distribuição ideal de macronutrientes.
              </p>
            </div>
            
            <PetCalorieCalculator />
          </div>
        </section>
        
        <About />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
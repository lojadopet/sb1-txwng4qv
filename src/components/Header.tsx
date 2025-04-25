import React from "react";
import { Dog as DogBowl } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DogBowl className="w-7 h-7 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900">PetNutrição</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#calculator" className="text-gray-700 hover:text-blue-600 transition-colors">
                Calculadora
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
import React, { useState } from "react";
import { Calculator, ChevronDown } from "lucide-react";

export default function PetCalorieCalculator() {
  const [weight, setWeight] = useState<number>(0);
  const [goal, setGoal] = useState<"lose" | "maintain" | "gain">("maintain");
  const [calories, setCalories] = useState<number | null>(null);
  const [distribution, setDistribution] = useState<{
    protein: number;
    carbs: number;
    fiber: number;
    fat: number;
  } | null>(null);

  const calculateCalories = () => {
    if (weight <= 0) return;

    let totalCalories = 0;
    let distributionValues = {
      protein: 0,
      carbs: 0,
      fiber: 0,
      fat: 0
    };

    if (goal === "lose") {
      totalCalories = weight * 20;
      distributionValues = { protein: 50, carbs: 25, fiber: 20, fat: 5 };
    } else if (goal === "maintain") {
      totalCalories = weight * 30;
      distributionValues = { protein: 45, carbs: 30, fiber: 20, fat: 5 };
    } else if (goal === "gain") {
      totalCalories = weight * 40;
      distributionValues = { protein: 50, carbs: 35, fiber: 10, fat: 5 };
    }

    setCalories(totalCalories);
    setDistribution(distributionValues);
  };

  const getNutrientColor = (nutrient: string) => {
    const colors = {
      protein: "bg-blue-100 text-blue-800",
      carbs: "bg-green-100 text-green-800",
      fiber: "bg-purple-100 text-purple-800",
      fat: "bg-orange-100 text-orange-800"
    };
    return colors[nutrient as keyof typeof colors];
  };

  const nutrientLabels: { [key: string]: string } = {
    protein: "Proteína",
    carbs: "Carboidratos",
    fiber: "Fibras",
    fat: "Gorduras"
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 w-full max-w-md mx-auto transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Macronutrientes diários</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Peso do Cão (kg)
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={weight || ""}
            onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Insira o peso em Kg."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meta
          </label>
          <div className="relative">
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value as "lose" | "maintain" | "gain")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
              <option value="lose">Perder Peso</option>
              <option value="maintain">Manter o Peso</option>
              <option value="gain">Ganhar o Peso</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
          </div>
        </div>

        <button
          onClick={calculateCalories}
          disabled={weight <= 0}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Calcular
        </button>

        {calories !== null && distribution !== null && (
          <div className="mt-8 space-y-4 animate-fadeIn">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Calorias Diárias
              </h3>
              <p className="text-2xl font-bold text-blue-600">
                {calories.toFixed(0)} kcal
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Distribuição das Calorias
              </h3>
              
              {Object.entries(distribution).map(([nutrient, percentage]) => (
                <div key={nutrient} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-md text-sm font-medium ${getNutrientColor(nutrient)}`}>
                      {percentage}%
                    </span>
                    <span className="text-gray-700">{nutrientLabels[nutrient]}</span>
                  </div>
                  <span className="font-medium text-gray-900">
                    {((percentage / 100) * calories).toFixed(0)} kcal
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
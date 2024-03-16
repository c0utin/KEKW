import { useState, useEffect } from "react";

interface FormData {
  workshop: string;
  local: string;
  status: boolean;
  category: number | string;
  ong_id: number | string;
}

const categories: { [key: string]: number } = {
  Artes: 0,
  Esporte: 1,
  Dança: 2,
  Música: 3,
  Cultura: 4,
};

const ClassFormStepper: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    workshop: "",
    local: "",
    status: true,
    category: "",
    ong_id: "",
  });

  const [ongs, setOngs] = useState<any[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 4;

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/ongs");
        if (response.ok) {
          const data = await response.json();
          setOngs(data);
        } else {
          console.error("Erro ao buscar as ONGs");
        }
      } catch (error) {
        console.error("Erro ao buscar as ONGs:", error);
      }
    };
    fetchOngs();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "status" ? value === "true" : value,
    }));
  };

  const handleOngChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const ongId = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      ong_id: ongId,
    }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      category: categoryId,
    }));
  };

  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);
  const isLastStep = currentStep === totalSteps;

  const handleButtonClick = async () => {
    if (isLastStep) {
      try {
        const response = await fetch("http://localhost:3000/api/classes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Formulário enviado com sucesso!");
        } else {
          console.error("Erro ao enviar o formulário");
        }
      } catch (error) {
        console.error("Erro ao enviar a requisição:", error);
      }
    } else {
      nextStep();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-2xl w-full">
        <div className="bg-white p-4 rounded shadow-md mb-4">
          <div className="relative h-4">
            <div
              className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="items-center bg-white p-4 rounded shadow-md">
          <form>
            {currentStep === 1 && (
              <div className="form-step">
                <label
                  htmlFor="workshop"
                  className="text-3xl font-bold block text-center"
                >
                  Nome da oficina
                </label>
                <input
                  type="text"
                  id="workshop"
                  name="workshop"
                  value={formData.workshop}
                  onChange={handleChange}
                  className="mt-4 mb-4 p-2 border w-full"
                  placeholder="Digite o nome da oficina"
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="form-step">
                <label className="text-3xl font-bold block text-center">
                  Qual será o local?
                </label>
                <input
                  type="text"
                  id="local"
                  name="local"
                  value={formData.local}
                  onChange={handleChange}
                  className="mt-4 mb-4 p-2 border w-full"
                  placeholder="Digite o local"
                />
              </div>
            )}

            {currentStep === 3 && (
              <div className="form-step">
                <label className="text-3xl font-bold block text-center">
                  Escolha a ONG
                </label>
                <select
                  id="ong_id"
                  name="ong_id"
                  value={formData.ong_id}
                  onChange={handleOngChange}
                  className="px-4 py-2 text-gray-4 rounded border rounded-full bg-transparent mt-4 mb-4 p-2 border w-full"
                  placeholder="Escolha a ONG"
                >
                  <option value="">Escolha a ONG</option>
                  {ongs.map((ong) => (
                    <option key={ong.id} value={ong.id}>
                      {ong.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {currentStep === 4 && (
              <div className="form-step">
                <label className="text-3xl font-bold block text-center">
                  Escolha a categoria
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleCategoryChange}
                  className="px-4 py-2 text-gray-4 rounded border rounded-full bg-transparent mt-4 mb-4 p-2 border w-full"
                  placeholder="Escolha a categoria"
                >
                  <option value="">Escolha a categoria</option>
                  {Object.keys(categories).map((category) => (
                    <option
                      key={categories[category]}
                      value={categories[category]}
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-4 py-2 text-gray-4 rounded-full bg-transparent border"
              >
                {"Voltar"}
              </button>
              <button
                type="button"
                onClick={handleButtonClick}
                className="px-4 py-2 text-gray-4 rounded border rounded-full bg-transparent"
              >
                {isLastStep ? "Enviar" : "Próximo"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClassFormStepper;

import {useState} from "react";
import type {Service} from "../types";
import {data} from "../data/data.ts";
import ServiceList from "./services-list/ServicesList.tsx";
import Summary from "./order-summary/OrderSummary.tsx";

function App() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const handleAddService = (service: Service) => {
    setSelectedServices(prevSelectedServices => [...prevSelectedServices, service]);
  };

  const handleRemoveService = (service: Service) => {
    setSelectedServices(prevSelectedServices => prevSelectedServices.filter(item => item !== service));
  };

  return (
    <div className="container">
      <h1>Выбор услуг</h1>

      <ServiceList services={data} selectedServices={selectedServices} onAddService={handleAddService} />
      <Summary selectedServices={selectedServices} onRemoveService={handleRemoveService} />
    </div>
  )
}

export default App

import type {Service} from "../../types";

type ServiceListProps = {
    services: Service[];
    selectedServices: Service[];
    onAddService: (service: Service) => void;
}

function ServiceList({ services, selectedServices, onAddService }: ServiceListProps) {
    return (
        <ul className="services-list">
            {services.map(service => (
                <li key={service.id}>
                    <span>{service.name}</span>
                    {selectedServices.includes(service) ? <span>добавлено</span> : <button onClick={() => onAddService(service)}>добавить</button>}
                </li>
            ))}
        </ul>
    );
}

export default ServiceList;
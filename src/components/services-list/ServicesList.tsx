import type {Service} from "../../types";

import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./services-list.scss";

type ServiceListProps = {
    services: Service[];
    selectedServices: Service[];
    onAddService: (service: Service) => void;
}

function ServiceList({ services, selectedServices, onAddService }: ServiceListProps) {
    const isServiceSelected = (service: Service) => selectedServices.includes(service);
    return (
        <ul className="services-list">
            {services.map(service => (
                <li key={service.id} className="services-list__item">
                    <span className="services-list__item-text">{service.name}</span>
                    <span className="services-list__item-text">{service.price}&nbsp;₽</span>
                    <IconButton
                        color="primary"
                        aria-label="Добавить услугу"
                        disabled={isServiceSelected(service)}
                        onClick={() => onAddService(service)}
                    >
                        {isServiceSelected(service) ? <ShoppingCartIcon /> : <AddShoppingCartIcon /> }
                    </IconButton>
                </li>
            ))}
        </ul>
    );
}

export default ServiceList;
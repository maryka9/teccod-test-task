import type {Service} from "../../types";

import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import "./services-list.scss";

type ServiceListProps = {
    services: Service[];
    selectedServices: Service[];
    onAddService: (service: Service) => void;
}

function ServiceList({ services, selectedServices, onAddService }: ServiceListProps) {
    return (
        <ul className="services-list">
            {services.map(service => (
                <li key={service.id} className="services-list__item">
                    <span className="services-list__item-text">{service.name}</span>
                    <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                        disabled={selectedServices.includes(service)} onClick={() => onAddService(service)}
                    >
                        <AddShoppingCartIcon />
                    </IconButton>
                </li>
            ))}
        </ul>
    );
}

export default ServiceList;
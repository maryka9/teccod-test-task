import type {Service} from "../../types";

import {useState} from "react";

import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./order-summary.scss";

type OrderSummaryProps = {
    selectedServices: Service[];
    onRemoveService: (service: Service) => void;
}

function OrderSummary({ selectedServices, onRemoveService }: OrderSummaryProps) {
    const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);
    const [expended, setExpended] = useState(false);

    return (
        <div className="order-summary">
            <h3>Итого: {totalPrice}&nbsp;₽</h3>
            <div className="order-summary__container">
                <Button
                    className="order-summary__button"
                    endIcon = { expended ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    variant="outlined"
                    onClick={() =>setExpended(!expended)}
                >
                    Выбранные услуги
                </Button>
                {expended &&
                    <ul className="order-summary__list">
                        {selectedServices.map(service => (
                            <li key={service.id}>
                                <span>{service.name} - {service.price} ₽</span>
                                <button onClick={() => onRemoveService(service)}>Удалить</button>
                            </li>
                        ))}
                    </ul>}
                <Button className="order-summary__button" variant="contained">Оформить заказ</Button>
            </div>

        </div>
    );
}

export default OrderSummary;

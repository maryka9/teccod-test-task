import type {Service} from "../../types";

import {useState} from "react";

import cn from "classnames";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./order-summary.scss";

type OrderSummaryProps = {
    selectedServices: Service[];
    onRemoveService: (service: Service) => void;
}

function OrderSummary({ selectedServices, onRemoveService }: OrderSummaryProps) {
    const [expanded, setExpanded] = useState(false);
    const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);
    const isCartEmpty = !selectedServices.length

    const containerClass = cn("order-summary__container", {
        "order-summary__container--opened": expanded,
    });

    return (
        <div className="order-summary">
            <h3 className="order-summary__heading">Итого: {totalPrice}&nbsp;₽</h3>
            <div className={containerClass}>
                <Button
                    className="order-summary__button order-summary__button--expand"
                    endIcon = { selectedServices.length && (expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                    variant="outlined"
                    onClick={() =>setExpanded(!expanded)}
                >
                    Выбранные услуги ({selectedServices.length})
                </Button>
                <ul className="order-summary__list">
                        {selectedServices.map(service => (
                            <li key={service.id} className="order-summary__list-item">
                                <span>{service.name}</span>
                                <span>{service.price}&nbsp;₽</span>
                                <IconButton aria-label="Удалить." color="error" onClick={() => onRemoveService(service)}>
                                    <DeleteOutlineIcon />
                                </IconButton>
                            </li>
                        ))}
                </ul>
                <Button className="order-summary__button order-summary__button--order" variant="contained" disabled={isCartEmpty}>Оформить заказ</Button>
            </div>

        </div>
    );
}

export default OrderSummary;

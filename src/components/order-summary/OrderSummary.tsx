import type {Service} from "../../types";

type OrderSummaryProps = {
    selectedServices: Service[];
    onRemoveService: (service: Service) => void;
}

function OrderSummary({ selectedServices, onRemoveService }: OrderSummaryProps) {

    const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);

    return (
        <div className="order-summary">
            <h3>Итого:{totalPrice} ₽</h3>
            <ul>
                {selectedServices.map(service => (
                    <li key={service.id}>
                        <span>{service.name} - {service.price} ₽</span>
                        <button onClick={() => onRemoveService(service)}>Удалить</button>
                    </li>
                ))}
            </ul>
            <button className="order-summary__checkout">
                Оформить заказ
            </button>
        </div>
    );
}

export default OrderSummary;

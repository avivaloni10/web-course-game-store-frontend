import instance from "./axios-instance";

export const createOrder = async (authToken, order) => {
    try {
        const newOrderResponse = await instance.post(
            "orders",
            order,
            { headers: { Authorization: authToken } }
        );
        const result = await instance.get(`orders/${newOrderResponse.data.id}`, {
            headers: { Authorization: authToken },
        });
        return {
            result: result.data, error: null
        };
    } catch (err) {
        return { result: {}, error: "Got unexpected error while getting cart" };
    }
}

export const getOrders = async (authToken) => {
    const orders = await instance.get("orders", { headers: { Authorization: authToken } });
    return orders.data;
}
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
        return { result: {}, error: err.response.data || "Got unexpected error while creating order" };
    }
}

export const getOrders = async (authToken) => {
    const orders = await instance.get("orders", { headers: { Authorization: authToken } });
    return orders.data;
}

export const deleteOrder = async (authToken, orderId) => {
    try {
        await instance.delete(`orders/${orderId}`, { headers: { Authorization: authToken } });
    } catch (err) {
        return err.response.data.message || "Could not cancel order. Please try again later";
    }
    return null;
}
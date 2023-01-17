import instance from "./axios-instance";

export const getOrCreateCart = async (authToken) => {
  try {
    const cart = await instance.get("carts", {
      headers: { Authorization: authToken },
    });
    return cart.data;
  } catch (err) {
    if (err.response.status === 404) {
      try {
        await instance.post(
          "carts",
          { games: [] },
          { headers: { Authorization: authToken } }
        );
      }
      catch (err) {
        if (err.response.data !== "User already have a cart") {
          throw new Error("Got unexpected error while creating cart");
        }
      }
    }
    else throw new Error("Got unexpected error while getting cart");
  }
  return (await instance.get("carts", {
    headers: { Authorization: authToken },
  })).data;
};

export const updateCart = async (authToken, cart) => {
  await instance.put(`carts/${cart.id}`, cart, {
    headers: { Authorization: authToken },
  });
};

export const deleteCart = async (authToken, cartId) => {
  await instance.delete(`carts/${cartId}`, { headers: { Authorization: authToken } })
}

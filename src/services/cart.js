import instance from "./axios-instance";

export const getOrCreateCart = async (authToken) => {
  try {
    const cart = await instance.get("carts", {
      headers: { Authorization: authToken },
    });
    return cart.data;
  } catch (err) {
    if (err.response.status === 404) {
      const newCartResponse = await instance.post(
        "carts",
        { games: [] },
        { headers: { Authorization: authToken } }
      );
      return (
        await instance.get(`carts/${newCartResponse.data.id}`, {
          headers: { Authorization: authToken },
        })
      ).data;
    }
    throw new Error("Got unexpected error while getting cart");
  }
};

export const updateCart = async (authToken, cart) => {
  await instance.put(`carts/${cart.id}`, cart, {
    headers: { Authorization: authToken },
  });
};

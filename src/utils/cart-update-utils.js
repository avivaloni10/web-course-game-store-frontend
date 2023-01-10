import { getOrCreateCart, updateCart } from "../services";
export const updateCartProductAmount = async (authToken, product, amount, addAmount) => {
  try {
      var cart = await getOrCreateCart(authToken);
      var existingProduct = cart.games.find(game => game.id === product.id);
      if (existingProduct !== undefined){
        existingProduct.amount = addAmount ? existingProduct.amount + amount : amount
      } else {
          cart.games = [...cart.games, {id: product.id, amount}];
      }
      await updateCart(authToken, cart);

    } catch (err) {
      console.error("Cannot get cart to update", err);
      return;
    }
}

export const getCartProduct = async (authToken, product) => {
  try {
      var cart = await getOrCreateCart(authToken);
      return cart.games.find(game => game.id === product.id);
    } catch (err) {
      console.error("Cannot get cart", err);
      return;
    }
}

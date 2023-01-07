import { getOrCreateCart, updateCart } from "../services";
export const updateCartProductAddAmount = async (authToken, product, amount) => {
    try {
        var cart = await getOrCreateCart(authToken);
        var existingProduct = cart.games.find(game => game.id === product.id);
        if (existingProduct !== undefined){
            existingProduct.amount += amount;
        } else {
            cart.games = [...cart.games, {id: product.id, amount}];
        }
        await updateCart(authToken, cart);

      } catch (err) {
        console.error("Cannot get cart to update", err);
        return;
      }
}
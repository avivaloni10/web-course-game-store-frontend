export function calculateTotal(games, cart) {
    const gameIdToPrice = new Map(games.map(g => [g.id, g.price]));
    const t = cart.games.map(g => g.amount * gameIdToPrice.get(g.id)).reduce((prev, curr) => prev + curr, 0);
    return t;
}
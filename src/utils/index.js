import * as cartUpdateUtils from "./cart-update-utils";

export const defineBound = (min, max) => (v) => v <= min ? min : v >= max ? max : v;


export const smoothScrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}

export const updateCartProductAddAmount = cartUpdateUtils.updateCartProductAddAmount;
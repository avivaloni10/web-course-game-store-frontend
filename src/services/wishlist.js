import instance from "./axios-instance";

export const getOrCreateWishlist = async (authToken) => {
    try {
        const wishlist = await instance.get("wishlists", {
            headers: {Authorization: authToken},
        });
        return wishlist.data;
    } catch (err) {
        if (err.response.status === 404) {
            try {
                const newWishlistResponse = await instance.post(
                    "wishlists",
                    {games: []},
                    {headers: {Authorization: authToken}}
                );
                return (
                    await instance.get(`wishlists/${newWishlistResponse.data.id}`, {
                        headers: {Authorization: authToken},
                    })
                ).data;
            } catch (err) {
                console.error("err: ", err);
            }
        }
        throw new Error("Got unexpected error while getting wishlist");
    }
};

export const updateWishlist = async (authToken, wishlist) => {
    await instance.put(`wishlists/${wishlist.id}`, wishlist, {
        headers: {Authorization: authToken},
    });
};

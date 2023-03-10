import instance from "./axios-instance";

export const searchGames = async (ids, name, description) => {
    let url = "games?name=" + (name ? name : "") + "&summary=" + (description ? description : "");
    if (ids !== "") {
        url += "&id=" + ids;
    }
    try {
        return (await instance.get(url)).data
    } catch (err) {
        console.error(err)
        return []
    }
}

export const getGame = async (id) => {
    try {
        return (await instance.get("games/" + id)).data
    } catch (err) {
        console.error(err)
        return []
    }
}

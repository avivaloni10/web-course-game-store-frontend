import instance from "./axios-instance";

export const searchGames = async (ids, name, description) => {
    let url = "games?name=" + name + "&summary=" + description;
    if (ids !== "") {
        url += "&id=" + ids;
    }
    try {
        const games = (await instance.get(url)).data
        console.log("games: ", games);
        return games
    } catch (err) {
        console.error(err)
        return []
    }
}

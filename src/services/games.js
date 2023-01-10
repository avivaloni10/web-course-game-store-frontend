import instance from "./axios-instance";

export const searchGames = async (ids, name, description) => {
    let url = "games?name=" + name + "&summary=" + description;
    if (ids !== "") {
        url += "&id=" + ids;
    }
    try {
        return (await instance.get(url)).data;
    } catch (err) {
        console.error(err)
        return []
    }
}

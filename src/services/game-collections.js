import instance from "./axios-instance";

export const getGameCollections = async () => {
    try {
        return (await instance.get("gameCollections/")).data
    } catch (err) {
        console.error(err)
        return []
    }
}

import Card from "./cardInterface";
import Movement from "./movementInterface";

export default interface UserData {
    token: string;
    username: string;
    role: string;
    movements: Movement[]
    cards: Card[]
}
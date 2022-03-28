import facepaint from "facepaint";

export const isLarge = "screen and (min-width: 600px)";
export default facepaint(["@media " + isLarge]);

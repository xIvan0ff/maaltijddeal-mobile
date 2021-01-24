import React from "react";
import { Image } from "react-native";
import { match } from "@utils/match.ts";

const emptyStar = require("@assets/images/emptyStar.png");
const fullStar = require("@assets/images/fullStar.png");
const halfStar = require("@assets/images/halfStar.png");

type StarType = "full" | "half" | "empty";

interface IStarProps {
    type: StarType;
}

export const Star: React.FC<IStarProps> = (props) => {
    const starSource = match(props.type, {
        full: fullStar,
        half: halfStar,
        empty: emptyStar,
    });
    return <Image source={starSource} />;
};

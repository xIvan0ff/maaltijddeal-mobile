import React from "react";
import { Image, StyleProp } from "react-native";
import { match } from "@utils/match.ts";
import { View } from "./Themed";

const emptyStar = require("@assets/images/emptyStar.png");
const fullStar = require("@assets/images/fullStar.png");
const halfStar = require("@assets/images/halfStar.png");

type StarType = "full" | "half" | "empty";

interface IStarProps {
    rating: number;
    imageStyle?: any;
    containerStyle?: any;
}

interface IStarObjectProps {
    starType: StarType;
    imageStyle: any;
}
const stars: any = [];

const StarObject: React.FC<IStarObjectProps> = ({ starType, imageStyle }) => {
    let source = match(starType, {
        full: fullStar,
        empty: emptyStar,
        half: halfStar,
    });
    return <Image style={imageStyle} source={source} />;
};

export const Star: React.FC<IStarProps> = ({
    rating,
    containerStyle,
    imageStyle,
}) => {
    /*for (var i = 0; i < Math.floor(rating / 2); i++) {
        stars.push(<StarObject starType="full" key={i} />);
    }
    if (rating % 2 !== 0) {
        stars.push(<StarObject starType="half" key={++i} />);
    }
    for (let i = 0; i < 5; i++) {
        stars.push(<StarObject starType="empty" key={i} />);
    }*/

    const realRating = Math.floor(rating / 2);

    const full = realRating;
    const half = rating % 2 ? true : false;
    const empty = 5 - realRating - +half;

    return (
        <View style={containerStyle}>
            {range(full).map((i) => (
                <StarObject imageStyle={imageStyle} starType="full" key={i} />
            ))}
            {half && <StarObject imageStyle={imageStyle} starType="half" />}
            {range(empty).map((i) => (
                <StarObject imageStyle={imageStyle} starType="empty" key={i} />
            ))}
        </View>
    );
};

const range = (n: number) => {
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(i);
    }

    return array;
};

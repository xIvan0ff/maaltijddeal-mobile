import React from "react"
import CheckBox from "@react-native-community/checkbox"
import { Filter } from "typesOld"
import { View, Text } from "./Themed"
import { createStyles } from "@styles/createStyles"
import { spacerStyles } from "@styles/spacer"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useColors } from "@hooks/useColors"

interface IFilterLineProps {
    filter: Filter
    onToggle: () => void
}

export const FilterLine: React.FC<IFilterLineProps> = (props) => {
    const colors = useColors()
    return (
        <TouchableOpacity style={styles.container} onPress={props.onToggle}>
            <Text>{props.filter.name}</Text>
            <CheckBox
                value={props.filter.isToggled}
                onValueChange={props.onToggle}
                tintColors={{ true: colors.primary }}
                onCheckColor={colors.primary}
            />
        </TouchableOpacity>
    )
}

const styles = createStyles({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        ...spacerStyles.pxmd,
        paddingVertical: 10,
    },
})

import colors from "@constants/Colors"
import { createStyles, style } from "./createStyles"
import { elevation } from "./elevation"
import { spacer } from "./spacer"
import { utilsStyles } from "./utils"

const cardStyle = style({
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: colors.light.background,
    ...elevation(3),
})

export const containerStyles = createStyles({
    container: {
        flex: 1,
        paddingHorizontal: spacer.medium,
        paddingTop: spacer.small,
        alignItems: "center",
    },
    notCenteredContainer: {
        flex: 1,
        paddingHorizontal: spacer.medium,
        paddingTop: spacer.small,
    },
    row: {
        flexDirection: "row",
    },
    centeredRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    flex1: {
        flex: 1,
    },
    card: {
        ...cardStyle,
    },
    fullWidthCard: {
        ...cardStyle,
        ...utilsStyles.fullWidth,
    },
})

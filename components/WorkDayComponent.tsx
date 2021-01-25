import React from "react"
import { WorkingHour } from "../types"
import { View, Text } from "./Themed"
import { StyleSheet } from "react-native"

interface IWorkDay {
    workingHour: WorkingHour
}

export const WorkDay: React.FC<IWorkDay> = ({ workingHour }) => {
    let workDayName
    switch (workingHour.workDay) {
        case 0:
            workDayName = "Zondag"
            break
        case 1:
            workDayName = "Maandag"
            break
        case 2:
            workDayName = "Dinsdag"
            break
        case 3:
            workDayName = "Woensdag"
            break
        case 4:
            workDayName = "Donderdag"
            break
        case 5:
            workDayName = "Vrijdag"
            break
        case 6:
            workDayName = "Zaterdag"
            break
    }
    return (
        <View style={WorkDayStyle.container}>
            <Text style={WorkDayStyle.workDayText}>{workDayName}</Text>
            <Text style={WorkDayStyle.hourText}>
                {workingHour.closedAllDay
                    ? "Closed all day"
                    : workingHour.openTime + " - " + workingHour.closeTime}
            </Text>
        </View>
    )
}

const WorkDayStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    workDayText: {
        fontSize: 16,
    },
    hourText: {
        fontSize: 20,
    },
})

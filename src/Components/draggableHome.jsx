import "tailwindcss"
import React from "react"
import Draggable from "react-draggable"
import Window from "./mainwindow"

export default function DragHome() {
    return (
        <Draggable>
            <Window></Window>
        </Draggable>
    )
}
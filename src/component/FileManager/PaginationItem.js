import React, { useEffect, useRef } from "react";
import { useDrop } from "react-dnd";
import { PaginationItem } from "@material-ui/lab";

export default function CustomPaginationItem(props) {
    const inputRef = useRef(null);

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: "object",
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    const isActive = canDrop && isOver;

    useEffect(() => {
        if (
            isActive &&
            props.onClick &&
            props.type !== "start-ellipsis" &&
            props.type !== "end-ellipsis"
        ) {
            console.log("ss");
            props.onClick();
        }
    }, [isActive, inputRef]);
    return (
        <div ref={inputRef}>
            <PaginationItem ref={drop} {...props} />
        </div>
    );
}
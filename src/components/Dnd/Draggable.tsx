
import React from 'react';
import { useDraggable, DragOverlay } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export function Draggable(props: any) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: props.id,
    });
    const style = {
        transform: CSS.Translate.toString(transform),
        backgroundColor: "#3e69ad",
        opacity: isDragging ? 0 : 1
    };

    return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </button>
    );
}

import React, { useContext } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { AppContext } from "../../context/AppContext";

export function Draggable(props: any) {
  const { searchText } = useContext(AppContext);
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: props.id,
    });

  const shouldDisplay =
    searchText === "" ||
    props.item.title.toLowerCase().includes(searchText.toLowerCase())
      ? true
      : false;

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0 : 1,
    display: shouldDisplay ? "flex" : "none",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
}

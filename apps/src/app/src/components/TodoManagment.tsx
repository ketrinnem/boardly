import {
  DndContext,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import styled from "@emotion/styled";
import { useContext } from "react";
import TodoColumn from "./TodoColumn";
import { Droppable } from "./dnd/Droppable";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { AppContext } from "../context/AppContext";

const TodoManagment = () => {
  const sensors = useSensors(useSensor(PointerSensor));

  const { items, setItems } = useContext(AppContext);

  const { setNodeRef: setTodoNodeRef } = useDroppable({
    id: "todo",
  });
  const { setNodeRef: setProgressNodeRef } = useDroppable({
    id: "in-progress",
  });
  const { setNodeRef: setReviewNodeRef } = useDroppable({
    id: "in-review",
  });
  const { setNodeRef: setDoneNodeRef } = useDroppable({
    id: "done",
  });

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeItem = items.find((item) => item.id === activeId);
    if (!activeItem) return;

    const isOverColumn = typeof overId === "string" && overId.includes("-");

    // ===> If dropped over a column
    if (isOverColumn) {
      const newColumn = overId;

      const updatedItems = items.map((item) =>
        item.id === activeId ? { ...item, column: newColumn } : item
      );
      setItems(updatedItems);
      return;
    }

    // ===> Dropped over another item (reorder)
    const overItem = items.find((item) => item.id === overId);
    if (!overItem) return;

    const activeColumn = activeItem.column;
    const overColumn = overItem.column;

    if (activeColumn !== overColumn) {
      const updatedItems = items.map((item) =>
        item.id === activeId ? { ...item, column: overColumn } : item
      );
      setItems(updatedItems);
      return;
    }

    // ===> Reordering within same column
    const columnItems = items.filter((item) => item.column === activeColumn);
    const oldIndex = columnItems.findIndex((item) => item.id === activeId);
    const newIndex = columnItems.findIndex((item) => item.id === overId);

    const reordered = arrayMove(columnItems, oldIndex, newIndex);
    const rest = items.filter((item) => item.column !== activeColumn);
    setItems([...rest, ...reordered]);
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Wrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <Droppable id="todo">
            <SortableContext
              items={items
                .filter((item) => item.column === "todo")
                .map((item) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              <TodoColumn
                reference={setTodoNodeRef}
                title={"Todo"}
                items={items.filter((item) => item.column === "todo")}
                setItems={setItems}
              />
            </SortableContext>
          </Droppable>

          <Droppable id="in-progress">
            <SortableContext
              items={items
                .filter((item) => item.column === "in-progress")
                .map((item) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              <TodoColumn
                reference={setProgressNodeRef}
                title={"In progress"}
                items={items.filter((item) => item.column === "in-progress")}
                setItems={setItems}
              />
            </SortableContext>
          </Droppable>

          <Droppable id="in-review">
            <SortableContext
              items={items
                .filter((item) => item.column === "in-review")
                .map((item) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              <TodoColumn
                reference={setReviewNodeRef}
                title={"In review"}
                items={items.filter((item) => item.column === "in-review")}
                setItems={setItems}
              />
            </SortableContext>
          </Droppable>

          <Droppable id="done">
            <SortableContext
              items={items
                .filter((item) => item.column === "done")
                .map((item) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              <TodoColumn
                reference={setDoneNodeRef}
                title={"Done"}
                items={items.filter((item) => item.column === "done")}
                setItems={setItems}
              />
            </SortableContext>
          </Droppable>
        </div>
      </Wrapper>
    </DndContext>
  );
};

const Wrapper = styled.div`
  height: 700px;
  background-color: rgba(144, 178, 232, 0.2);

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export default TodoManagment;

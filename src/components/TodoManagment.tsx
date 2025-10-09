import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import styled from "@emotion/styled";
import { useContext, useState } from "react";
import TodoColumn, { ItemsContainer } from "./TodoColumn";
import { Droppable } from "./Dnd/Droppable";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { AppContext } from "../context/AppContext";
import ListItem from "./ListItem";

const TodoManagment = () => {
  const sensors = useSensors(useSensor(PointerSensor));

  const { items, setItems } = useContext(AppContext);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeItemRect, setActiveItemRect] = useState<{ width: number; height: number } | null>(null);

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


  function handleDragStart(event: any) {
    const active = event.active;
    setActiveId(active.id);

    const activeElement = document.querySelector(`[data-id='${active.id}']`) as HTMLElement;
    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      setActiveItemRect({ width: rect.width, height: rect.height });
    }
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;

    setActiveId(null);

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeItem = items.find((item) => item.id === activeId);
    if (!activeItem) return;

    const isOverColumn = typeof overId === "string" && overId.includes("-");

    // If dropped over a column
    if (isOverColumn) {
      const newColumn = overId;

      const updatedItems = items.map((item) =>
        item.id === activeId ? { ...item, column: newColumn } : item
      );
      setItems(updatedItems);
      return;
    }

    // Dropped over another item (reorder)
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

    // Reorder within the same column
    const columnItems = items.filter((item) => item.column === activeColumn);
    const oldIndex = columnItems.findIndex((item) => item.id === activeId);
    const newIndex = columnItems.findIndex((item) => item.id === overId);

    const reordered = arrayMove(columnItems, oldIndex, newIndex);
    const rest = items.filter((item) => item.column !== activeColumn);
    setItems([...rest, ...reordered]);

    setActiveItemRect(null);
  }

  const activeItem = items.find((i) => i.id === activeId);

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} sensors={sensors}>
      <Wrapper>
        <Container>
          <Droppable id="todo">
            <TodoColumn
              reference={setTodoNodeRef}
              title={"Todo"}
              items={items.filter((item) => item.column === "todo")}
              setItems={setItems}
            />
          </Droppable>

          <Droppable id="in-progress">
            <TodoColumn
              reference={setProgressNodeRef}
              title={"In progress"}
              items={items.filter((item) => item.column === "in-progress")}
              setItems={setItems}
            />
          </Droppable>

          <Droppable id="in-review">
            <TodoColumn
              reference={setReviewNodeRef}
              title={"In review"}
              items={items.filter((item) => item.column === "in-review")}
              setItems={setItems}
            />
          </Droppable>

          <Droppable id="done">
            <TodoColumn
              reference={setDoneNodeRef}
              title={"Done"}
              items={items.filter((item) => item.column === "done")}
              setItems={setItems}
            />
          </Droppable>
        </Container>
      </Wrapper>

      <DragOverlay>
        <ItemsContainer style={{ overflowY: "hidden", opacity: 0.8, width: activeItemRect ? `${activeItemRect.width}px` : 'auto', height: activeItemRect ? `${activeItemRect.height}px` : 'auto' }}>
          {activeItem ? (
            <ListItem
              item={activeItem}
              index={0}
              items={items}
              setItems={setItems}
            />
          ) : null}
        </ItemsContainer>
      </DragOverlay>


    </DndContext>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-x: hidden; 
  position: fixed;
  top: 60px;
  left: 0;
  height: 90%;
`;

const Container = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;    
  width: 100%;
  background-color: white;
  height: 100%;
  flex-wrap: nowrap;        
  gap: 16px;
  padding: 16px;
  box-sizing: border-box;
  overflow-x: hidden; 
  height: 100%;    `

export default TodoManagment;

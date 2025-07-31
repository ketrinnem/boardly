import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useState } from "react";
import DeleteModal from "./DeleteModal";

import { defaultAnimateLayoutChanges, useSortable } from "@dnd-kit/sortable";
import { AppContext, Item } from "../context/AppContext";

interface ListItemProps {
  title: string;
  index: number;
  items: Item[];
  setItems: (items: Item[]) => void;
  id: number;
}

const ListItem = (props: ListItemProps) => {
  const { title, index, items, setItems, id } = props;
  const { searchText } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
      animateLayoutChanges: defaultAnimateLayoutChanges,
    });

  const deleteItem = (index: number) => {
    const tempItems = items.filter((item) => item.id !== index);
    setItems(tempItems);
    setIsOpen(false);
  };

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition: transition ?? "transform 200ms ease",
  };

  return (
    <Wrapper
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      shouldDisplay={
        searchText === "" ||
        title.toLowerCase().includes(searchText.toLowerCase())
          ? true
          : false
      }
    >
      <DeleteModal
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onDelete={() => deleteItem(index)}
      />

      {items.length === 0 && (
        <div
          style={{
            padding: "16px",
            border: "2px dashed #ccc",
            borderRadius: "8px",
            minHeight: "100px",
          }}
        />
      )}
      <ItemContent>
        <div>{index}</div>
        <div>{title}</div>
      </ItemContent>
      <DeleteIcon
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(true)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ shouldDisplay?: boolean }>`
  max-width: 100%;
  background: #3e69ad;
  color: white;

  display: ${(props) => (props.shouldDisplay ? "flex" : "none")};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid gray;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  height: 60px;
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flexd-irection: row;
  gap: 20px;
  text-align: left;
`;

export default ListItem;

import styled from "@emotion/styled";
import ListItem from "./ListItem";
import { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddItemModal from "./Modal/AddItemModal";
import { AppContext, Item } from "../context/AppContext";
import { DragOverlay } from "@dnd-kit/core";

interface TodoColumnProps {
  title: string;
  items: Item[];
  setItems: (items: Item[]) => void;
  reference: (element: HTMLElement | null) => void;
}

const TodoColumn = (props: TodoColumnProps) => {
  const { searchText } = useContext(AppContext);
  const { title, items, setItems, reference } = props;
  const [isOpen, setIsOpen] = useState(false);

  const cardsText = items.length > 1 ? "cards" : "card";

  return (
    <Wrapper ref={reference}>
      <AddItemModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onCancel={() => setIsOpen(false)}
        column={items.length > 0 ? items[0].column : "todo"}
      />

      <Title>
        <div>{title}</div>
        <div
          style={{ color: "lightgray", fontSize: "12px" }}
        >{`${items.length} ${cardsText}`}</div>
      </Title>

      <ItemsContainer>
        {items.map((item, idx) => (
          <ListItem
            key={`${item.title}-${item.id}`}
            item={item}
            index={idx + 1}
            items={items}
            setItems={setItems}
          />
        ))}
      </ItemsContainer>
      <AddItem onClick={() => setIsOpen(true)}>
        <AddIcon />
        ADD NEW TASK
      </AddItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #02132e;
  padding: 8px;
  border-radius: 16px;
  flex: 1;
  min-width: 0;
  height: 95%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #02132e;
  height: 60px;
  border-top-radius: 16px;
  width: 100%;
  border-bottom: 1px solid gray;
  position: sticky;
  top: 0;
`;

export const ItemsContainer = styled.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
  height: 80%;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    background-color: black;
    width: 2px;
    margin-left: 10px;
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background-color: #02132e;
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #02132e;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
    width: 2px;
    margin-left: 10px;
  }
`;

const AddItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #02132e;
  height: 60px;
  border-bottom-radius: 16px;
  gap: 10px;
  cursor: pointer;
  width: 100%;
  border-top: 1px solid gray;
  position: sticky;
  bottom: 0;
`;

export default TodoColumn;

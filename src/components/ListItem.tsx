import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useEffect, useState } from "react";
import DeleteModal from "./DeleteModal";
import { Draggable } from "./Dnd/Draggable";
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


  const deleteItem = () => {
    const tempItems = items.filter((item) => item.id !== id);
    setItems(tempItems);
    setIsOpen(false);
  };



  useEffect(() => {
    console.log(isOpen, '===> is open')
  }, [isOpen])

  return (
    <Draggable id={id}>
      <Wrapper
        shouldDisplay={
          searchText === "" ||
            title.toLowerCase().includes(searchText.toLowerCase())
            ? true
            : false
        }
      >
        {isOpen &&
          <DeleteModal
            isOpen={isOpen}
            onCancel={() => setIsOpen(false)}
            onDelete={deleteItem}
          />}

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
        {/* <div
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          style={{ cursor: "pointer", zIndex: 3 }}
        >
          <DeleteIcon />
        </div> */}
      </Wrapper>
    </Draggable>
  );
};

const Wrapper = styled.div<{ shouldDisplay?: boolean }>`
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
  height: 100%px;
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  text-align: left;
`;

export default ListItem;

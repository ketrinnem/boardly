import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import DeleteModal from "./Modal/DeleteModal";
import { Draggable } from "./Dnd/Draggable";
import { AppContext, Item } from "../context/AppContext";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";

interface ListItemProps {
  item: Item
  index: number;
  items: Item[];
  setItems: (items: Item[]) => void;

}

const ListItem = (props: ListItemProps) => {
  const { item, index, items, setItems, } = props;
  const { searchText } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);


  const deleteItem = () => {
    const tempItems = items.filter((it) => { console.log(it.id, item.id); return item.id !== it.id });
    console.log(tempItems, '===> temp items after delete');
    setItems(tempItems);
    setIsOpen(false);
  };

  const shouldDisplay = searchText === "" ||
    item.title.toLowerCase().includes(searchText.toLowerCase())
    ? true
    : false


  return (
    <Draggable id={item.id} item={item}>
      <Wrapper
        shouldDisplay={shouldDisplay}
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
              border: "1px dashed #ccc",
              borderRadius: "8px",
              minHeight: "100px",
            }}
          />
        )}
        <ItemContent>
          <div>
            <Title>{item.title}</Title>
            <DescriptionText>{item.priority} priority, {item.type}, {item.origin}</DescriptionText>
          </div>
        </ItemContent>

        {/* <IconButton onMouseDown={(e) => {
          e.stopPropagation();
          console.log('clicked');
          setIsOpen(true);
        }}>
          <DeleteIcon />
        </IconButton> */}


      </Wrapper>
    </Draggable >
  );
};

const Wrapper = styled.div<{ shouldDisplay?: boolean }>`
  background: #3e69ad;
  color: white;
  display: ${(props) => (props.shouldDisplay ? "flex" : "none")};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid gray;
  cursor: pointer;
  border-radius: 8px;
  height: 95%;
  width: 100%;
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  text-align: left;
  height: 50px;
  margin-left: 5px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 12px;
`;

const DescriptionText = styled.div`
  color: lightgray;
  font-size: 8px;
  margin-top: 4px;
  display: flex;
  gap: 8px;
`;

export default ListItem;

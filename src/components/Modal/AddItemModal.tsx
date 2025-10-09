import styled from "@emotion/styled";
import { Button, Modal, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { AppContext, Item } from "../../context/AppContext";
import { useContext, useState } from "react";

interface AddItemModal {
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
  onCancel: () => void;
  column: string;
}

const AddItemModal = (props: AddItemModal) => {
  const { items, setItems } = useContext(AppContext);
  const { isOpen, onCancel, column, setIsOpen } = props;
  const [data, setData] = useState<{
    id: number;
    title: string;
    description: string;
    priority: string;
    column: string;
  }>({
    id: items.length + 1,
    title: "",
    description: "",
    priority: "low",
    column,
  });

  const onAdd = () => {
    setItems(items.concat(data));
    setIsOpen(false);
  };

  return (
    <Modal open={isOpen}>
      <Wrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
            cursor: "pointer",
          }}
        >
          <CloseIcon onClick={onCancel} style={{ color: "white" }} />
        </div>
        <Header>ADD NEW TASK</Header>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <TextField
            id="outlined-required"
            label="Task Title"
            defaultValue="Title"
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
            sx={{ color: "white" }}
            value={data.title}
            onChange={(e) => {
              setData((prevState) => ({ ...prevState, title: e.target.value }));
            }}
          />
          <TextField
            id="outlined-required"
            label="Description"
            defaultValue="Description"
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
            value={data.description}
            onChange={(e) => {
              setData((prevState) => ({
                ...prevState,
                description: e.target.value,
              }));
            }}
          />
          <TextField
            id="outlined-required"
            defaultValue="Priority"
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
            value={data.priority}
            onChange={(e) => {
              setData((prevState) => ({
                ...prevState,
                priority: e.target.value,
              }));
            }}
          />
        </div>

        <ButtonWrapper>
          <Button
            variant="contained"
            sx={{ width: "20%", height: "50px" }}
            startIcon={<CancelIcon />}
            onClick={onCancel}
          >
            CANCEL
          </Button>

          <Button
            variant="contained"
            sx={{ width: "20%", height: "50px" }}
            startIcon={<AddIcon />}
            onClick={onAdd}
          >
            ADD
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 35%;
  transform: translate(-50%; -50%);

  width: 30%;
  height: 50%;
  color: black;
  background-color: #02132e;
  box-shadow: 24;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  color: #02132e;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
`;

export default AddItemModal;

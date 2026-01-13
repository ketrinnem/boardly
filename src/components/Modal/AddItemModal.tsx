import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { AppContext, Item } from "../../context/AppContext";
import { useContext, useState } from "react";
import { SelectInputType } from "../../types/types";

interface AddItemModal {
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
  onCancel: () => void;
  column: string;
}

const PriorityOptions: SelectInputType[] = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

const TypeOptions: SelectInputType[] = [
  { label: "Bug", value: "bug" },
  { label: "Feature", value: "feature" },
  { label: "Improvement", value: "improvement" },
];

const AddItemModal = (props: AddItemModal) => {
  const { items, setItems } = useContext(AppContext);
  const { isOpen, onCancel, column, setIsOpen } = props;
  const [data, setData] = useState<Item>({
    id: items.length + 1,
    title: "",
    description: "",
    priority: "low",
    column,
    type: "feature",
  });

  const onAdd = () => {
    setItems(items.concat(data));
    setIsOpen(false);
  };

  return (
    <Modal open={isOpen}>
      <Wrapper>
        <HeaderWrapper>
          <Header>ADD NEW TASK</Header>
          <CloseIcon onClick={onCancel} style={{ color: "white" }} />
        </HeaderWrapper>

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
            label="Title"
            defaultValue=""
            placeholder="Enter title"
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
            defaultValue=""
            placeholder="Enter description"
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
            multiline
            value={data.description}
            onChange={(e) => {
              setData((prevState) => ({
                ...prevState,
                description: e.target.value,
              }));
            }}
          />

          <FormControl sx={{ m: 0, minWidth: 120 }}>
            <Select
              value={data.priority ?? ""}
              onChange={(e) => {
                setData((prevState) => ({
                  ...prevState,
                  priority: e.target.value,
                }));
              }}
              sx={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
              displayEmpty
              labelId="Priority"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {PriorityOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 0, minWidth: 120 }}>
            <Select
              value={data.type ?? ""}
              onChange={(e) => {
                setData((prevState) => ({
                  ...prevState,
                  type: e.target.value,
                }));
              }}
              sx={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
              label="Type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {TypeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 50%;
  height: 70%;
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

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

export default AddItemModal;

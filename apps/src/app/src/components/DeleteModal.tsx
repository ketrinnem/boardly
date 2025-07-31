import styled from "@emotion/styled";
import { Button, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";

interface DeleteModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
}

const DeleteModal = (props: DeleteModalProps) => {
  const { isOpen, onCancel, onDelete } = props;

  return (
    <Modal open={isOpen}>
      <Wrapper>
        <div>Are you sure you want to delete this item?</div>
        <ButtonWrapper>
          <Button
            variant="contained"
            color="info"
            sx={{ width: "20%", height: "50px" }}
            startIcon={<CancelIcon />}
            onClick={onCancel}
          >
            CANCEL
          </Button>

          <Button
            variant="contained"
            color="error"
            sx={{ width: "20%", height: "50px" }}
            startIcon={<DeleteIcon />}
            onClick={onDelete}
          >
            DELETE
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 35%;
  transform: translate(-50%; -50%);
  width: 30%;
  height: 30%;
  color: black;
  background-color: white;
  boxshadow: 24;
  borderradius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

export default DeleteModal;

import styled from "styled-components";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactComponent as cancel } from "../../assets/icons/cancel.svg";

export const Modals = styled(Modal)`
  .css-uar9nx {
    border: none !important;
    box-shadow: 0px 10px 16px rgba(32, 81, 137, 0.06);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    position: relative;
    outline: none;
  }
`;

export const Boxs = styled(Box)`
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 90%;
  }
  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    left: 8px;
    top: 10px;
  }
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    left: none;
    top: 5px;
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    margin: 10px 0px;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    height: 56px;
    padding: 0px 15px;
    background: #f8fafc;
    border: 1px solid #eff2f7;
  }

  .css-zddlty-MuiButtonBase-root-MuiButton-root {
    width: 90%;
    height: 56px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  }
`;

Modals.Cancel = styled(cancel)`
  position: absolute;
  top: 15px;
  right: 16px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

Modals.Header = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  color: #24313f;
  margin-bottom: 30px;
`;

Modals.FooterItem = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  margin-top: 10px;
  color: #8894a0;
`;

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 459,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export const Flexing = styled.div`
  width: ${({ main }) => main && "90%"};
  margin: ${({ main }) => main && "5px 0px 20px 0px"};
  justify-content: ${({ main }) => main && "space-between"};
  display: flex;
  align-items: center;
`;

Flexing.CheckboxItem = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #8894a0;
`;

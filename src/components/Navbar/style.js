import styled from "styled-components";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as user } from "../../assets/icons/user.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as what } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as cart } from "../../assets/icons/cart.svg";
import { ReactComponent as arrow } from "../../assets/icons/arrow-top.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactComponent as cancel } from "../../assets/icons/cancel.svg";

import logo from "../../assets/imgs/logo.png";
export const Wrap = styled.div`
  box-sizing: border-box;
  .active {
    top: 87% !important;
  }
`;
Wrap.Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 260px;
`;

Wrap.Location = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #1e1e1e;
  margin-right: -75px;
  /* flex: 0.4; */
`;
Wrap.LocationIcon = styled(location)`
  margin-right: 5px;
`;
Wrap.Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 75%;
  list-style-type: none;
`;
Wrap.Li = styled.li`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  .link {
    font-weight: 600;
    color: ${({ active }) => (active ? "#437FC8" : "#1e1e1e")};
    text-decoration: none;
  }
`;

Wrap.Kabinet = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #1e1e1e;
  /* justify-content: space-evenly; */
  /* flex: 1; */
`;

Wrap.User = styled(user)`
  margin-right: 9px;
`;

export const Sort = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2.5fr 3.5fr 2.5fr 1fr;
  padding: 15px 260px;
`;

Sort.Logo = styled.div`
  width: 150px;
  height: 65px; /* 
  flex: 1; */
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

Sort.Wrap = styled.div`
  display: flex;
  /* flex: 1.7; */
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

Sort.InputWrap = styled.div`
  margin-left: 40px;
  position: relative;
`;
Sort.ContactWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 40px;
`;
Sort.KorzinkaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* flex: 0.8; */
  .kor {
    font-style: normal;
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #1e1e1e;
    }
    p {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #1e1e1e;
    }
  }
`;
Sort.Tip = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;
  color: #333;
`;

Sort.Input = styled.input`
  width: 100%;
  height: 38px;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: #6e6e6e;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
`;

Sort.Search = styled(search)`
  position: absolute;
  top: 8px;
  right: 10px;
`;

Sort.What = styled(what)`
  margin-bottom: auto;
`;
Sort.Telegram = styled(telegram)`
  margin-bottom: auto;
`;
Sort.Cart = styled(cart)``;

Sort.Tel = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #000;
  }
  span {
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #1e1e1e;
  }
`;

// modal

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
  cursor: pointer;
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

// Arrow bottom
Wrap.Circle = styled.a`
  position: fixed;
  top: -100px;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5e5e5;
  transition: all 0.5s 0s linear;
  z-index: 1000;
  cursor: pointer;
`;

Wrap.Arrow = styled(arrow)``;

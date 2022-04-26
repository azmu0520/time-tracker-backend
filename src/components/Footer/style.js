import styled from "styled-components";
import logo from "../../assets/imgs/logo.png";
import { ReactComponent as telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as whatsapp } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as w } from "../../assets/icons/w.svg";
import { ReactComponent as odnoclassnik } from "../../assets/icons/odnoklassniki.svg";

export const Container = styled.div``;

export const Wrap = styled.div`
  display: flex;
  padding: 20px 260px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  @media (max-width: 1400px) {
    padding: 0px 60px;
  }
  @media (max-width: 1100px) {
    padding: 0px 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    padding: 0px 40px;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  flex: 1;
  flex-shrink: ${({ first }) => first && "1"};
  @media (max-width: 1100px) {
    margin: 20px 0px;
  }
`;

Box.Logo = styled.div`
  background-image: url(${logo});
  background-size: 100% 100%;
  width: 219.94px;
  height: 85.74px;
`;

Box.Header = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 25px;
  color: #404040;
`;

Box.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #404040;
  margin-top: 30px;
  width: 80%;
  @media (max-width: 1250px) {
    font-size: 12px;
  }
`;
//Icons
export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

Flexing.Telegram = styled(telegram)`
  path {
    fill: #6e6e6e;
  }
  margin: 0px 5px;
`;

Flexing.Whatsapp = styled(whatsapp)`
  path {
    fill: #6e6e6e;
  }
  margin: 0px 5px;
`;

Flexing.W = styled(w)`
  path {
    fill: #6e6e6e;
  }
  margin: 0px 5px;
`;

Flexing.OdnoClassnik = styled(odnoclassnik)`
  path {
    fill: #6e6e6e;
  }
  margin: 0px 5px;
`;

Box.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  color: #404040;
  width: fit-content;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;

// Wrap2

Container.Header = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #404040;
  margin: 30px 0px 20px 0px;
`;

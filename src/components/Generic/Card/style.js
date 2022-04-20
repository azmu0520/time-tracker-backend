import styled from "styled-components";
import { ReactComponent as star } from "../../../assets/icons/star.svg";
import { ReactComponent as message } from "../../../assets/icons/message.svg";

export const Container = styled.div`
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-left: ${({ ml }) => ml && `${ml}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
  width: 305.4px;
  padding: 10px 0px;
  position: relative;
  padding: 20px;
  transition: all 0.2s;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }
`;

export const Imgs = styled.div`
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin-bottom: 10px;
`;

Imgs.NewBtn = styled.div`
  background: ${({ bgcolor }) => bgcolor && bgcolor};
  display: ${({ none }) => (none === "true" ? "flex" : "none")};
  top: ${({ top }) => top && top};
  bottom: ${({ bottom }) => bottom};
  position: absolute;
  border-radius: 5px;
  width: 85.08px;
  height: 29.72px;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: white;
  position: absolute;
  left: 0;
`;

Container.Title = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #404040;
`;

Container.Deleted = styled.del`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  color: #6e6e6e;
  margin-left: 10px;
`;

Container.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #1e1e1e;
`;

// Wrapp
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px 30px 0px;
`;

Wrap.Star = styled(star)`
  path {
    fill: ${({ star }) => (star === "full" ? "#FFA800" : "none")};
    stroke: ${({ star }) => (star === "full" ? "none" : "#FFA800")};
  }
  margin: 0px 2px;
`;

Wrap.Message = styled(message)`
  margin: 0px 6px;
`;

Wrap.Item = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  color: #6e6e6e;
`;

Container.Btn = styled.div`
  background: ${({ bgbtn }) => (bgbtn === "true" ? "#437FC8" : "#999999")};
  width: ${({ width }) => width && `${width}px`};
  border-radius: 5px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;

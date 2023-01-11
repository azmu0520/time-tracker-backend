import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/icons/arrow-down.svg';
import { ReactComponent as Tick } from '../../assets/icons/tick.svg';
import { ReactComponent as IconMenu } from '../../assets/icons/menu.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Case } from '../../assets/icons/case.svg';
import { Drawer } from 'antd';
export const Wrap = styled.header`
  display: flex;
  /* align-items: center; */
  width: 100%;
  height: 68px;
  padding: 0 24px;
  border-bottom: 1px solid #3c3c3c;
  justify-content: space-between;
  background: var(--main-color);
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

Content.Logo = styled.h1``;
Content.Text = styled.span`
  margin-left: 16px;
`;
Content.SwitchMode = styled.div``;
export const Links = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 10px;

  .selectAnt > .ant-select-selector {
    background-color: transparent !important;
  }
`;

Links.Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

Links.Link = styled.span`
  color: var(--color-text-white);
`;

Links.Register = styled.div`
  display: flex;
`;

Links.ArrowIcon = styled(Arrow)`
  width: 1.5rem;
  height: 1.5rem;
  path {
    fill: #fff;
  }
`;
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  opacity: 1;
  width: ${({ width }) => (width ? width : '313px')};
  padding: ${({ width }) => (width ? '' : '8px 16px')};
  height: fit-content;
  background: #2c2c2c;
  transform: ${({ modal }) => (modal == true ? 'none' : 'scale(0)')};
  transition: opacity 2ms cubic-bezier(0.4, 0, 0.2, 1) 2ms,
    transform 213ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  top: ${({ width }) => (width ? '100%' : '120%')};
  right: ${({ width }) => (width ? '0' : '8.5em')};
  transform-origin: 110px 0px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  border-radius: 4px;
`;
export const Currency = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  border-left: 1px solid #3c3c3c;
  border-right: 1px solid #3c3c3c;
  cursor: pointer;
  :hover {
    background-color: #202020;
  }
`;

Currency.Selected = styled.span`
  /* position: absolute; */
  display: flex;
  color: #9e9e9e;
`;

Currency.Mtitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #9e9e9e;
  margin-bottom: 10px;
  padding: 12px 16px 8px;
`;
Currency.Options = styled.span`
  margin: 4px 16px;
  display: flex;
  padding: 8px 12px;
  background: ${({ active }) => (active ? 'rgb(57, 57, 57)' : '')};
  border-radius: 12px;
  justify-content: space-between;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  :hover {
    background-color: rgba(255, 255, 255, 0.04);
  }
`;
Currency.Tick = styled(Tick)`
  width: 20px;
  path {
    fill: var(--color-text-secondry);
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

Menu.IconMenu = styled(IconMenu)`
  width: 40px;
  height: 40px;
  margin-right: -5px;
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  path {
    fill: #9e9e9e;
  }
  :hover {
    background-color: #202020;
  }
`;

Menu.Drawer = styled(Drawer)``;

Modal.SignIn = styled.div``;

Modal.SignDev = styled.div`
  width: 100%;
  margin: 8px 0px;
  display: flex;
  align-items: center;
  padding: 12px 22px;
  text-align: left;
  font-weight: 600;
  white-space: nowrap;
  border-radius: 5px;
  letter-spacing: 0;
  justify-content: start;
  background: #393939;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  :hover {
    background-color: rgba(255, 255, 255, 0.04);
    cursor: pointer;
  }
`;

Menu.User = styled(User)`
  width: 48px;
  height: 48px;
  padding: 12px;
  margin-right: 16px;
  border-radius: 50%;
  path {
    fill: rgb(240, 98, 146);
  }
  background-color: rgb(57, 57, 57);
`;
Menu.Case = styled(Case)`
  width: 48px;
  height: 48px;
  padding: 12px;
  margin-right: 16px;
  border-radius: 50%;
  path {
    fill: rgb(171, 71, 188);
  }
  background-color: white;
`;

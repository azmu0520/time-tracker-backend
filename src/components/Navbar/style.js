import styled from 'styled-components';
import { ReactComponent as location } from '../../assets/icons/location.svg';
import { ReactComponent as user } from '../../assets/icons/user.svg';
import { ReactComponent as search } from '../../assets/icons/search.svg';
import { ReactComponent as what } from '../../assets/icons/whatsapp.svg';
import { ReactComponent as telegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as cart } from '../../assets/icons/cart.svg';
import logo from '../../assets/imgs/logo.png';
export const Wrap = styled.div`
  box-sizing: border-box;
`;
Wrap.Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 120px;
  border-bottom: 1px solid #e5e5e5;
`;

Wrap.Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #1e1e1e;
  flex: 0.4;
`;
Wrap.LocationIcon = styled(location)``;
Wrap.Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;
  flex: 7;
`;
Wrap.Li = styled.li`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  .link {
    font-weight: 600;
    color: ${({ active }) => (active ? '#437FC8' : '#1e1e1e')};
    text-decoration: none;
  }
`;

Wrap.Kabinet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`;

Wrap.User = styled(user)``;

export const Sort = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 120px;
`;

Sort.Logo = styled.div`
  width: 150px;
  height: 65px;
  flex: 1;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

Sort.Wrap = styled.div`
  display: flex;
  flex: 1.7;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

Sort.InputWrap = styled.div`
  flex: 2.2;
  position: relative;
`;
Sort.ContactWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1.7;
`;
Sort.KorzinkaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 0.8;
`;
Sort.Tip = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: #000000;
`;

Sort.Input = styled.input`
  width: 100%;
  height: 38px;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: #6e6e6e;
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
`;

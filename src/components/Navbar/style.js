import styled from 'styled-components';
import { ReactComponent as location } from '../../assets/icons/location.svg';
import { ReactComponent as user } from '../../assets/icons/user.svg';
import logo from '../../assets/imgs/logo.png';
export const Wrap = styled.div``;
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
  align-content: center;
`;

Sort.Logo = styled.div`
  width: 150px;
  height: 65px;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

Sort.Wrap = styled.div`
  display: flex;
  align-items: center;
`;
Sort.Tip = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: #000000;
`;

Sort.Input = styled.input``;

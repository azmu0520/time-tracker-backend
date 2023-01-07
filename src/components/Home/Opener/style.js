import styled from 'styled-components';
import bg from '../../../assets/imgs/team_work.jpg';
export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ::before {
    background-color: rgba(85, 112, 82, 0.3);
    content: '';
    height: 100%;
    /* opacity: 0.7; */
    position: absolute;
    top: 0;
    width: 100%;
    /* z-index: -1; */
  }
`;

import styled from 'styled-components';
export const Wrap = styled.header`
  display: flex;
  width: 100%;
  height: 90px;
  background-color: rgb(133 181 164 / 20%);
  position: fixed;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1;
  top: 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  .register__btn__icon {
    font-weight: 700;
    margin-right: 5px;
  }
`;

Wrap.Logo = styled.img`
  max-width: 65px;
`;

Wrap.LogoWrap = styled.div`
  position: relative;
  align-items: center;
  display: flex;

  span {
    font-size: 28px;
    background: -webkit-linear-gradient(#fff, #03a84e, #fff) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    font-family: var(--font-bold);
  }
`;

Wrap.Links = styled.ul`
  display: flex;
  width: 60%;
  justify-content: space-between;
  /* align-items: center; */
  list-style: none;
  a {
    color: inherit;
    font-size: 16px !important;
  }
`;

Wrap.Regsiter = styled.div``;

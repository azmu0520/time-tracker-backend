import React from 'react';
import { Container, Wrap } from './style';
import { data } from '../../utilits/navbar';
import GenericButton from '../Generic/Button';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png';
export default function Navbar() {
  return (
    <>
      <Wrap>
        <Container>
          <Wrap.LogoWrap>
            <Wrap.Logo alt='logo' src={logo} />
            <span>Ish Bor</span>
          </Wrap.LogoWrap>
          <Wrap.Links>
            {data.map((item) => (
              <NavLink key={item.id} to={item.path}>
                <li className='span'>{item.title}</li>
              </NavLink>
            ))}
          </Wrap.Links>
          <GenericButton width={'160px'} fontSize='15px' color={'#fff'}>
            <span className='register__btn__icon'>+</span> Registration
          </GenericButton>
        </Container>
      </Wrap>
      <Outlet />
    </>
  );
}

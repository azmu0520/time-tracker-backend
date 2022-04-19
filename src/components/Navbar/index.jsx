import React from 'react';
import { Wrap, Sort } from './style';
import { data } from '../../utilits/navbar';
import { Link, Outlet, useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  const tip = ['Техника', 'Мебель', 'Инструменты'];
  return (
    <Wrap>
      <Wrap.Nav>
        <Wrap.Location>
          <Wrap.LocationIcon /> Москва
        </Wrap.Location>
        <Wrap.Ul>
          {data.map(({ id, path, title }) => (
            <Wrap.Li key={id} active={path === location?.pathname}>
              <Link className='link' to={path}>
                {title}
              </Link>
            </Wrap.Li>
          ))}
        </Wrap.Ul>
        <Wrap.Kabinet>
          <Wrap.User /> Личный кабинет
        </Wrap.Kabinet>
      </Wrap.Nav>
      <Sort>
        <Sort.Logo />
        <Sort.Wrap>
          {tip.map((item) => (
            <Sort.Tip>{item}</Sort.Tip>
          ))}
        </Sort.Wrap>
      </Sort>
      <Outlet />
    </Wrap>
  );
};

export default Navbar;

import React from 'react';
import { Wrap, Content, Links } from './style';
import { data } from '../../utilits/navbar';
import GenericButton from '../Generic/Button';
import { NavLink, Outlet } from 'react-router-dom';
export default function Navbar() {
  return (
    <Wrap>
      <Content>
        <Content.Logo>Ish Bor</Content.Logo>
        <Content.Text>#1 Job Board for tech industry in Asia</Content.Text>
      </Content>
      <Links>
        {data.map(
          (item) =>
            !item.hidden && (
              <NavLink key={item.id} to={item.path}>
                <Links.Link>{item.title}</Links.Link>
              </NavLink>
            )
        )}
      </Links>
    </Wrap>
  );
}

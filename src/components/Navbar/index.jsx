import React from "react";
import { Wrap, Sort } from "./style";
import { data } from "../../utilits/navbar";
import { Link, Outlet, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const tip = ["Техника", "Мебель", "Инструменты"];
  return (
    <Wrap id="top">
      <Wrap.Nav>
        <Wrap.Location>
          <Wrap.LocationIcon /> Москва
        </Wrap.Location>
        <Wrap.Ul>
          {data.map(({ id, path, title }) => (
            <Wrap.Li key={id} active={path === location?.pathname}>
              <Link className="link" to={path}>
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
            <Sort.Tip key={item}>{item}</Sort.Tip>
          ))}
        </Sort.Wrap>
        <Sort.InputWrap>
          <Sort.Input />
          <Sort.Search />
        </Sort.InputWrap>
        <Sort.ContactWrap>
          <Sort.What />
          <Sort.Telegram />
          <Sort.Tel>
            <span>+7(495)150-95-55</span>
            <p>9:00 - 22:00 без выходных</p>
          </Sort.Tel>
        </Sort.ContactWrap>
        <Sort.KorzinkaWrap>
          <Sort.Cart />
          <div className="kor">
            <span>Корзина</span>
            <p>7500 ₽</p>
          </div>
        </Sort.KorzinkaWrap>
      </Sort>
      <Outlet />
    </Wrap>
  );
};

export default Navbar;

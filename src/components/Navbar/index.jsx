import React, { useEffect, useState } from "react";
import { Wrap, Sort, Boxs, Flexing, Modals, style } from "./style";
import { data } from "../../utilits/navbar";
import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Footer from "../Footer";
import { useCartContext } from "../../context/Cart/cart";

const Navbar = () => {
  const location = useLocation();
  const tip = ["Техника", "Мебель", "Инструменты"];
  const [modal, setModal] = useState(false);
  const [modalName, setModalName] = useState("");
  const [arrow, setArrow] = useState(0);
  const [{ count }, dispatch] = useCartContext();

  const localStorages = localStorage.getItem("token");
  const [token, setToken] = useState(localStorages || "");
  const handleClose = () => {
    setModal(false);
  };
  const handleOpen = (name) => {
    setModalName(name);
    setModal(true);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const onClearCart = () => {
    dispatch({ type: "viewCart" });
  };
  window.addEventListener("scroll", () => {
    setArrow(window.scrollY);
  });

  const getAuth = () => {
    localStorage.setItem("token", "12345");
    handleClose();
    document.location.reload(true);
  };

  return (
    <Wrap id="top">
      <Modals
        keepMounted
        open={modal}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Boxs sx={style}>
          {modalName === "register" && (
            <>
              <Modals.Header>Ro‘yxatdan o‘tish</Modals.Header>
              <Modals.Cancel onClick={handleClose} />
              <TextField id="demo-helper-text-aligned" label="Ismingiz" />
              <TextField id="demo-helper-text-aligned" label="Familyangiz" />
              <TextField id="demo-helper-text-aligned" label="Telefongiz" />
              <TextField id="demo-helper-text-aligned" label="Parolingiz" />
              <TextField
                id="demo-helper-text-aligned"
                label="Parolingiz takrorlang"
              />
              <Flexing main>
                <Flexing>
                  <Checkbox {...label} />
                  <Flexing.CheckboxItem left>
                    Meni eslab qoling
                  </Flexing.CheckboxItem>
                </Flexing>
                <Flexing.CheckboxItem>
                  Parolni unitdingizmi?
                </Flexing.CheckboxItem>
              </Flexing>
              <Button onClick={getAuth} variant="contained" disableElevation>
                Ro'yhatdan o`tish
              </Button>
              <Modals.FooterItem>
                Allaqachon ro‘yxatdan o’tganmisiz?
                <br />{" "}
                <span
                  onClick={() => handleOpen("login")}
                  style={{ color: "#1D72D2" }}
                >
                  Kirish
                </span>
              </Modals.FooterItem>
            </>
          )}
          {modalName === "login" && (
            <>
              <Modals.Header>Tizimga Kirish</Modals.Header>
              <Modals.Cancel onClick={handleClose} />
              <TextField id="demo-helper-text-aligned" label="Ismingiz" />
              <TextField id="demo-helper-text-aligned" label="Parolingiz" />
              <Flexing main>
                <Flexing>
                  <Checkbox {...label} />
                  <Flexing.CheckboxItem left>
                    Meni eslab qoling
                  </Flexing.CheckboxItem>
                </Flexing>
                <Flexing.CheckboxItem>
                  Parolni unitdingizmi?
                </Flexing.CheckboxItem>
              </Flexing>
              <Button variant="contained" disableElevation>
                Kirish
              </Button>
              <Modals.FooterItem>
                Allaqachon ro‘yxatdan o’tganmisiz?
                <br />
                <span
                  onClick={() => handleOpen("register")}
                  style={{ color: "#1D72D2" }}
                >
                  Ro‘yxatdan o‘tish
                </span>
              </Modals.FooterItem>
            </>
          )}
        </Boxs>
      </Modals>
      <Wrap.Nav>
        <Wrap.Location>
          <Wrap.LocationIcon /> Москва
        </Wrap.Location>
        <Wrap.Ul>
          {data.map(
            ({ id, path, title, hidden }) =>
              !hidden && (
                <Wrap.Li key={id} active={path === location?.pathname}>
                  <Link className="link" to={path}>
                    {title}
                  </Link>
                </Wrap.Li>
              )
          )}
        </Wrap.Ul>
        {token == "" ? (
          <p onClick={() => handleOpen("register")}>login</p>
        ) : (
          <Wrap.Kabinet>
            <Wrap.User /> Личный кабинет
          </Wrap.Kabinet>
        )}
      </Wrap.Nav>
      <Sort>
        <Link to={"/home"}>
          <Sort.Logo />
        </Link>
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
          <Sort.Sub visible={count == 0 && "none"}>{count}</Sort.Sub>
          <Sort.Cart onClick={onClearCart} />
          <div className="kor">
            <span>Корзина</span>
            <p>7500 ₽</p>
          </div>
        </Sort.KorzinkaWrap>
      </Sort>
      <div style={{ padding: "0 260px" }}>
        <Outlet />
      </div>
      <Footer />
      <Wrap.Circle className={arrow > 70 && "active"} href="#top">
        <Wrap.Arrow />
      </Wrap.Circle>
    </Wrap>
  );
};

export default Navbar;

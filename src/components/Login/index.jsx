import React from "react";
import { Boxs, Flexing, Modals, style } from "./style";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useAuthContext } from "../../context/auth";

export const Login = () => {
  const { setRegister, setLogin, login } = useAuthContext();
  const handleOpen = () => setLogin(true);
  const handleClose = () => setLogin(false);

  const onHandleLink = () => {
    setLogin(false);
    setRegister(true);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Button onClick={handleOpen}>Login</Button>
      <Modals
        keepMounted
        open={login}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Boxs sx={style}>
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
            <Flexing.CheckboxItem>Parolni unitdingizmi?</Flexing.CheckboxItem>
          </Flexing>
          <Button variant="contained" disableElevation>
            Kirish
          </Button>
          <Modals.FooterItem>
            Allaqachon ro‘yxatdan o’tganmisiz?
            <br />{" "}
            <span onClick={onHandleLink} style={{ color: "#1D72D2" }}>
              Ro‘yxatdan o‘tish
            </span>
          </Modals.FooterItem>
        </Boxs>
      </Modals>
    </>
  );
};

export default Login;

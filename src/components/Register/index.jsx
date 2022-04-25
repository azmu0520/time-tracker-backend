import React from "react";
import { Boxs, Flexing, Modals, style } from "./style";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useAuthContext } from "../../context/auth";

export const Register = () => {
  const { register, setRegister, setLogin } = useAuthContext();
  const handleOpen = () => setRegister(true);
  const handleClose = () => setRegister(false);

  const onHandleLink = () => {
    setRegister(false);
    setLogin(true);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Button onClick={handleOpen}>Register</Button>
      <Modals
        keepMounted
        open={register}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Boxs sx={style}>
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
            <Flexing.CheckboxItem>Parolni unitdingizmi?</Flexing.CheckboxItem>
          </Flexing>
          <Button variant="contained" disableElevation>
            Ro'yhatdan o`tish
          </Button>
          <Modals.FooterItem>
            Allaqachon ro‘yxatdan o’tganmisiz?
            <br />{" "}
            <span onClick={onHandleLink} style={{ color: "#1D72D2" }}>
              Kirish
            </span>
          </Modals.FooterItem>
        </Boxs>
      </Modals>
    </>
  );
};

export default Register;

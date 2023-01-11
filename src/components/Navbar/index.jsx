import React, { useState, useRef, useEffect } from 'react';
import { Wrap, Content, Links, Currency, Modal, Menu } from './style';
import { data } from '../../utilits/navbar';
import { NavLink, Outlet } from 'react-router-dom';
import Button from '../Generic/Button';
export default function Navbar() {
  let [curr, setCurr] = useState('USD');
  const [modal, setModal] = useState(false);
  const [sign, setSign] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const ref = useRef(null);
  const ref2 = useRef(null);
  let options = [
    {
      value: 'uz',
      label: 'SOM',
    },
    {
      value: 'usd',
      label: 'USD',
    },
    {
      value: 'pln',
      label: 'PLN',
    },
    {
      value: 'rub',
      label: 'RUB',
    },
  ];
  useEffect(() => {
    function handleClickOutside(event) {
      if (!ref.current.contains(event.target)) {
        setModal(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
  }, [ref]);
  const onClose = () => {
    setDrawer(false);
  };
  return (
    <>
      <Wrap>
        <Content>
          <Content.Logo>Ish Bor</Content.Logo>
          <Content.Text>#1 Job Board for tech industry in Asia</Content.Text>
        </Content>
        <Links>
          <Links.Wrap>
            {data.map(
              (item) =>
                !item.hidden && (
                  <NavLink key={item.id} to={item.path}>
                    <Links.Link>{item.title}</Links.Link>
                  </NavLink>
                )
            )}
          </Links.Wrap>
          <Button
            background={'#f06292'}
            radius='32px'
            height={'40px'}
            fontSize='14px'
            color={'rgba(255, 255, 255, 0.8)'}
            margin='auto'
            onClick={() => setSign(!sign)}
          >
            Sign in
            <Links.ArrowIcon />
          </Button>
          <Modal modal={sign}>
            <Modal.SignDev>
              <Menu.User /> <span>Sign in as a developer</span>
            </Modal.SignDev>
            <Modal.SignDev>
              <Menu.Case /> <span>Sign in to Employer Panel</span>
            </Modal.SignDev>
            {/* <Currency.Options>
              
            </Currency.Options> */}
          </Modal>
          <Currency ref={ref} onClick={() => setModal(!modal)}>
            <Currency.Selected>{curr}</Currency.Selected>
            <Modal modal={modal} width='230px'>
              <Currency.Mtitle>Select your currency</Currency.Mtitle>
              {options.map((i) => (
                <Currency.Options
                  key={i.value}
                  onClick={() => {
                    setCurr(i.label);
                  }}
                  active={curr === i.label}
                >
                  {i.label} {curr === i.label && <Currency.Tick />}
                </Currency.Options>
              ))}
            </Modal>
          </Currency>
          <Menu>
            <Menu.IconMenu onClick={() => setDrawer(true)} />
            <Menu.Drawer
              onClose={onClose}
              open={drawer}
              style={{ background: '#2c2c2c' }}
            >
              hello
            </Menu.Drawer>
          </Menu>
        </Links>
      </Wrap>
      <Outlet />
    </>
  );
}

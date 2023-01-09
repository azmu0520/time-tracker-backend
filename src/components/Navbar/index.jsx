import React, { useState, useRef, useEffect } from 'react';
import { Wrap, Content, Links, Currency, Modal, Menu } from './style';
import { data } from '../../utilits/navbar';
import GenericButton from '../Generic/Button';
import { NavLink, Outlet } from 'react-router-dom';
import Button from '../Generic/Button';
import GenericSelect from '../Generic/Select';
import tick from '../../assets/icons/tick.svg';
export default function Navbar() {
  let [curr, setCurr] = useState('USD');
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const ref = useRef(null);
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
  // console.log(modal);
  useEffect(() => {
    function handleClickOutside(event) {
      // console.log(ref.current, 'p');
      // console.log(event.target, 'o');
      if (!ref.current.contains(event.target)) {
        setModal(false);
        console.log('a');
      }
      // if (ref.current && !ref.current.contains(event.target)) {
      //   setModal(true);
      // } else {
      //   // setModal(false);
      // }
    }
    document.addEventListener('mousedown', handleClickOutside);
  }, [ref]);
  const onClose = () => {
    setDrawer(false);
  };
  return (
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
        >
          Sign in
          <Links.ArrowIcon />
        </Button>
        <Currency ref={ref} onClick={() => setModal(true)}>
          <Currency.Selected>{curr}</Currency.Selected>
          <Modal modal={modal}>
            <Currency.Mtitle>Select your currency</Currency.Mtitle>
            {options.map((i) => (
              <Currency.Options
                key={i.value}
                onClick={() => setCurr(i.label)}
                active={curr == i.label}
              >
                {i.label} {curr == i.label && <Currency.Tick />}
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
  );
}

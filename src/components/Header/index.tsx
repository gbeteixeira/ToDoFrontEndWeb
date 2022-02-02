import React from 'react';
import { Link } from 'react-router-dom'
import { Container, LeftSide, RightSide } from './style';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

interface IHeader {
  lateCount: Number,
  clickNotification(): void,
}

export default function Header({ lateCount, clickNotification }: IHeader) {
  return (
    <Container>
      <LeftSide>
        <img src={logo} alt="Logo" />
      </LeftSide>
      <RightSide>
        <Link to="/">INÍCIO</Link>
        <span className="dividir"></span>
        <Link to="/task">NOVA TAREFA</Link>
        <span className="dividir"></span>
        <a href="/">SINCRONIZAR CELULAR</a>
        <span className="dividir"></span>
        <button type="button" id="notification" onClick={clickNotification}>
          <img src={bell} alt="Notificação" />
          <span>{lateCount}</span>
        </button>
      </RightSide>
    </Container>
  );
}
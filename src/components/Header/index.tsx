import React from 'react';
import { Container, LeftSide, RightSide } from './style';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

export default function Header() {
  return (
    <Container>
      <LeftSide>
        <img src={logo} alt="Logo" />
      </LeftSide>
      <RightSide>
        <a href="/">INÍCIO</a>
        <span className="dividir"></span>
        <a href="/">NOVA TAREFA</a>
        <span className="dividir"></span>
        <a href="/">SINCRONIZAR CELULAR</a>
        <span className="dividir"></span>
        <a href="/" id="notification">
          <img src={bell} alt="Notificação" />
          <span>5</span>
        </a>
      </RightSide>
    </Container>
  );
}
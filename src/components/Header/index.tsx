import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, LeftSide, RightSide } from './style';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';
interface IHeader {
  clickNotification(): void,
}

export default function Header({ clickNotification }: IHeader) {

  const [lateCount, setLateCount] = useState(0 as number);

  async function lateVerify() {
    await api.get(`task/filter/late/${isConnected}`)
      .then(response => {
        setLateCount(response.data.length);
      })
  }

  useEffect(() => {
    lateVerify();
  }, []);

  async function logout() {
    localStorage.removeItem('@todo/macaddress');
    window.location.reload();
  }

  return (
    <Container>
      <LeftSide>
        <img src={logo} alt="Logo" />
      </LeftSide>
      <RightSide>
        <Link to={isConnected ? "/" : "/qrcode"}>INÍCIO</Link>
        <span className="dividir"></span>
        <Link to={isConnected ? "/task" : "/qrcode"}>NOVA TAREFA</Link>
        <span className="dividir"></span>
        {!isConnected ?
          <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
          :
          <button type="button" onClick={logout}>SAIR</button>
        }
        {
          lateCount !== 0 && lateCount &&
          <>
            <span className="dividir"></span>
            <button type="button" id="notification" onClick={clickNotification}>
              <img src={bell} alt="Notificação" />
              <span>{lateCount}</span>
            </button>
          </>
        }
      </RightSide>
    </Container>
  );
}
import React, { useState } from 'react';
import Qr from 'qrcode.react'
import { Navigate } from 'react-router-dom'
import { Container, Content, QrCodeArea, ValidationCode } from './style';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

export default function QrCode() {

  const [mac, setMac] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function saveMac() {
    if (!mac)
      return alert("Você precisa informar o número que apareceu no celular!");
    else {
      localStorage.setItem('@todo/macaddress', mac);
      setRedirect(true);
      window.location.reload();
    }
  }

  return (
    <Container>
      {redirect && <Navigate to="/" />}
      <Header clickNotification={() => { }} />

      <Content>
        <h1>CAPTURE O QR CODE PELO APP</h1>
        <p>suas atividades serão sincronizadas com a do seu celular.</p>
        <QrCodeArea>
          <Qr value='getmacaddress' size={350} />
        </QrCodeArea>

        <ValidationCode>
          <span>Digite o código que apareceu na tela do seu celular</span>
          <input
            type="text"
            onChange={e => setMac(e.target.value)}
            value={mac}
          />
          <button type='button' onClick={saveMac}>SINCRONIZAR</button>
        </ValidationCode>
      </Content>
      <Footer />
    </Container>
  );
}
import React, { useState, useEffect } from 'react';
import { Container, Form, IconsType, Input, TextArea, Options, Save } from './style';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function Task() {
  const [lateCount, setLateCount] = useState(0);
  const [type, setType] = useState(0);
  const [id, setId] = useState()
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');

  async function lateVerify() {
    await api.get(`task/filter/late/11:11:11:11:11:11`)
      .then(response => {
        setLateCount(response.data.length);
      })
  }

  async function save() {
    await api.post(`/task/`, {
      macaddress,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000Z`,
    }).then(() =>
      alert('Tarefa cadastrada com sucesso')
    ).catch(error => {
      alert(error)
    })
  }

  useEffect(() => {
    lateVerify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header lateCount={lateCount} clickNotification={() => { }} />

      <Form>
        <IconsType>
          {
            TypeIcons.map((icon, index) => (
              index > 0 &&
              <button key={index} type="button" onClick={() => setType(index)}>
                <img src={icon} alt="Tipo da Tarefa"
                  className={type !== index ? 'inative' : ''}
                />
              </button>
            ))
          }
        </IconsType>

        <Input>
          <span>Título</span>
          <input
            type="text"
            placeholder="Título da Tarefa"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </Input>

        <TextArea>
          <span>Descrição</span>
          <textarea
            rows={5}
            placeholder="Detalhes da Tarefa"
            onChange={e => setDescription(e.target.value)}
          >
            {description}
          </textarea>
        </TextArea>

        <Input>
          <span>Data</span>
          <input
            type="date"
            placeholder="Data"
            onChange={e => setDate(e.target.value)}
            value={date}
          />
          <img src={iconCalendar} alt="Calendário" />
        </Input>

        <Input>
          <span>Hora</span>
          <input
            type="time"
            placeholder="Hora"
            onChange={e => setHour(e.target.value)}
            value={hour}
          />
          <img src={iconClock} alt="Relógio" />
        </Input>

        <Options>
          <div>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
            <span>CONCLUÍDO</span>
          </div>
          <button type="button">EXCLUIR</button>
        </Options>

        <Save>
          <button type="button" onClick={save}>SALVAR</button>
        </Save>

      </Form>

      <Footer />
    </Container>
  );
}
//type && type !== index && "inative"
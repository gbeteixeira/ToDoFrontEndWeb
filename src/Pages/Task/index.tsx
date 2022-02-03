import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Container, Form, IconsType, Input, TextArea, Options, Save } from './style';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import TypeIcons from '../../utils/typeIcons';
import isConnected from '../../utils/isConnected';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function Task() {
  const [redirect, setRedirect] = useState(false)
  const { id } = useParams();
  const [type, setType] = useState(0);
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const [macaddress, setMacaddress] = useState('');

  async function LoadTaskDatails() {
    await api.get(`/task/${id}`)
      .then(response => {
        setType(response.data.type);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDone(response.data.done);
        setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
        setHour(format(new Date(response.data.when), 'HH:mm'));
      })
  }

  async function save() {
    //validacao
    if (!title)
      return alert('Você precisa informar o título da tarefa');
    else if (!description)
      return alert('Você precisa informar a descrição da tarefa');
    else if (!type)
      return alert('Você precisa informar o tipo da tarefa');
    else if (!date)
      return alert('Você precisa informar a data da tarefa');
    else if (!hour)
      return alert('Você precisa informar a hora da tarefa');

    if (id) {
      await api.put(`/task/${id}`, {
        macaddress,
        type,
        title,
        description,
        done,
        when: `${date}T${hour}:00.000Z`,
      }).then(() =>
        setRedirect(true)
      )
    } else {
      await api.post(`/task/`, {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000Z`,
      }).then(() =>
        setRedirect(true)
      )
    }
  }

  async function Remove() {
    const res = window.confirm("Deseja realmete remover a tarefa?");
    if (res === true) {
      await api.delete(`/task/${id}`).then(() => setRedirect(true))
    }
  }

  useEffect(() => {
    LoadTaskDatails();

    if (!isConnected)
      setRedirect(true)
    else
      setMacaddress(isConnected)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {redirect && <Navigate to="/" />}
      <Header clickNotification={() => { }} />

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
            value={description}
          />
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
          {id && <button type="button" onClick={Remove}>EXCLUIR</button>}
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
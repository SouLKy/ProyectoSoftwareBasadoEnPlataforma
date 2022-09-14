import React, { useState, useEffect } from 'react'
import AccountBank from '../../services/AccountBank'
import balance from '../../services/balance'
import transaction from '../../services/transaction'
const Test = () => {
  //ObtenerCookie entrega el token del usuario activo
  const ObtenerCookie = () => {
    const cookies = document.cookie
      .split(';')
      .map((cookie) => cookie.split('='))
      .reduce(
        (accumulator, [key, value]) => ({
          ...accumulator,
          [key.trim()]: decodeURIComponent(value),
        }),
        {}
      )
    return cookies.token
  }

  const cookie = useState(() => ObtenerCookie())
  const [banco, setBanco] = useState()
  const [id, setId] = useState()
  const [abonos, setAbonos] = useState()
  const [cargos, setCargos] = useState()
  const [total, setTotal] = useState()
  const [descripciones, setDescripciones] = useState()
  const [fechas, setFechas] = useState()
  const [monto, setMonto] = useState()
  useEffect(() => {
    //el parametro cookie es el rut del usuario activa
    //entrega los bancos vinculados al usuario y el id correspondiente
    AccountBank(cookie)
      .then((res) => {
        const { bancos, id } = res
        setBanco(bancos)
        setId(id)
      })
      .catch((err) => {
        console.log(err)
      })
    //el parametro corresponde al numero de cuenta
    //entrega abonos, cargos y total de una cuenta bancaria
    balance(1)
      .then((res) => {
        const { abonos, cargos } = res
        setAbonos(abonos)
        setCargos(cargos)
        setTotal(abonos + cargos)
      })
      .catch((err) => {
        console.log(err)
      })
    //el primer parametro corresponde al numero de cuenta y el segundo a la cantidad de transacciones a mostrar, 0=todas las transacciones de la cuenta
    //entrega las descripciones, fechas y monto de los movimientos bancarios correspondiente a una cuenta
    transaction(1, 2)
      .then((res) => {
        const { descripciones, fechas, monto } = res
        setDescripciones(descripciones)
        setFechas(fechas)
        setMonto(monto)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [cookie])

  return (
    <>
      <h2>{banco}</h2>
      <h2>{id}</h2>
      <h2>{abonos}</h2>
      <h2>{cargos}</h2>
      <h2>{total}</h2>
      <h2>{descripciones}</h2>
      <h2>{fechas}</h2>
      <h2>{monto}</h2>
    </>
  )
}

export default Test

'use client'

import { Header } from '@/components/header'
import { Box } from '@/components/box'
import { useState } from 'react'

export default function Jogar() {

  const [valores, setValores] = useState([
    {
      red: 0,
      green: 0,
      blue: 0
    },
    {
      red: 255,
      green: 255,
      blue: 255
    },
    {
      red: 255,
      green: 255,
      blue: 255
    },
    {
      red: 255,
      green: 255,
      blue: 255
    },
    {
      red: 255,
      green: 255,
      blue: 255
    },
    {
      red: 255,
      green: 255,
      blue: 255
    }
  ])

  console.log(valores)

  let n = 8
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6])
  for (let i = 1; i <= 6; i++) {
    n--
    let aleatorio = parseInt(Math.random() * n)

    console.log('isto é aleatório', aleatorio)
  }
  const [caixas, setCaixas] = useState([])

  
  function gerarNumero() {
    let numeroAleatorio = parseInt(Math.random() * 256)
    return numeroAleatorio
  }

  function atualizarValores() {
    const novosValores = valores.map(i => ({
      red: gerarNumero(),
      green: gerarNumero(),
      blue: gerarNumero(),
    }))
    setValores(novosValores)
  }

    return (
    <div>
      <Header
        red={valores[0].red}
        green={valores[0].green}
        blue={valores[0].blue}
        atualizar={() => atualizarValores()}
      />
      <div className="bg-blue-900 w-full flex justify-center mt-10">
        <Box></Box>
      </div>
    </div>
  )
}

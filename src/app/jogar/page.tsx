'use client'

import { Header } from '@/components/header'
import { Box } from '@/components/box'
import { useState } from 'react'

export default function Jogar() {

  function gerarNumero() {
    let numeroAleatorio = parseInt(Math.random() * 256)
    return numeroAleatorio
  }

  const [valores, setValores] = useState([
    {
      red: gerarNumero(),
      green: gerarNumero(),
      blue: gerarNumero(),
    },
    {
      red: gerarNumero(),
      green: gerarNumero(),
      blue: gerarNumero(),
    },
    {
      red: gerarNumero(),
      green: gerarNumero(),
      blue: gerarNumero(),
    },
    {
      red: gerarNumero(),
      green: gerarNumero(),
      blue: gerarNumero(),
    },
    {
      red: gerarNumero(),
      green: gerarNumero(),
      blue: gerarNumero(),
    },
    {
      red: gerarNumero(),
      green: gerarNumero(),
      blue: gerarNumero(),
    }
  ])

  const [valorCorreto, setValorCorreto] = useState({
    red: valores[0].red,
    green: valores[0].green,
    blue: valores[0].blue,
  })

  const [resposta, setResposta] = useState('')


  let n = 7
  const valoresFor = [...valores]

  let valoresMisturados = []
  

  for (let i = 1; i <= 6; i++) {

    n--
    let aleatorio = parseInt(Math.random() * n)

    const valorAleatorio = valoresFor.splice(aleatorio, 1)
    valoresMisturados = [...valoresMisturados, ...valorAleatorio]
  }
  

function atualizarValores() {
    const novosValores = valores.map(i => ({
      red: gerarNumero(),
      green: gerarNumero(),
      blue: gerarNumero(),
    }))
    setValores(novosValores)
    setValorCorreto({
      red: novosValores[0].red,
      green: novosValores[0].green,
      blue: novosValores[0].blue,
    })
  }

    return (
    <div>
      <Header
        red={valorCorreto.red}
        green={valorCorreto.green}
        blue={valorCorreto.blue}
        atualizar={atualizarValores}
        resposta={resposta}
      />
      
      <div className="w-full grid grid-cols-colunaResponsiva px-96 gap-x-1 justify-center mt-10">
        {valoresMisturados.length == 6 ? valoresMisturados.map(i => <Box red={i.red} green={i.green} blue={i.blue}></Box>) : 'oi'}
      </div>
    </div>
  )
}

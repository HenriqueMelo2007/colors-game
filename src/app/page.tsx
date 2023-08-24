'use client'

import { Header } from '@/components/header'
import { Box } from '@/components/box'
import { useEffect, useState } from 'react'

export default function Home() {

  const [atualizar, setAtualizar] = useState(true)

  const [valores, setValores] = useState( [{}, [{}, {}, {}, {}, {}]] )

  useEffect(() => {
    function gerarNumero () {
      let numeroAleatorio = parseInt(Math.random() * 256)
      return numeroAleatorio
    }

    setValores( [{
      red: gerarNumero(),
      green: gerarNumero(),
      blue: gerarNumero(),
    }, [{}, {}, {}, {}, {}]] )
  },[atualizar])

  

  


  return (
    <div>
      <Header red={valores[0].red} green={valores[0].green} blue={valores[0].blue} atualizar={() => setAtualizar(prevAtualizar => !prevAtualizar)}/>
      <div className='bg-blue-900 w-full flex justify-center mt-10'>
        <Box></Box>
      </div>
    </div>
  )
}

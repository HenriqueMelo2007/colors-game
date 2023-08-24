'use client'

import { Header } from '@/components/header'
import { Box } from '@/components/box'
import { useEffect, useState } from 'react'

export default function Home() {

  const [atualizar, setAtualizar] = useState(true)

  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  useEffect(() => {
    function gerarNumero () {
      let numeroAleatorio = parseInt(Math.random() * 256)
      return numeroAleatorio
    }
  
    setRed(() => gerarNumero())
    setGreen(() => gerarNumero())
    setBlue(() => gerarNumero())
  },[atualizar])

  

  


  return (
    <div>
      <Header red={red} green={green} blue={blue} atualizar={() => setAtualizar(prevAtualizar => !prevAtualizar)}/>
      <div className='bg-blue-900 w-full flex justify-center mt-10'>
        <Box></Box>
      </div>
    </div>
  )
}

'use client'

import { Header } from '@/components/header'
import { Box } from '@/components/box'
import { useEffect, useState } from 'react'

export default function Home() {

  const [atualizar, setAtualizar] = useState(true)

  const [valores, setValores] = useState( [{
    red: 0,
    green: 0,
    blue: 0,
  }, {
    red: 255,
    green: 255,
    blue: 255,
  }, {
    red: 255,
    green: 255,
    blue: 255,
  }, {
    red: 255,
    green: 255,
    blue: 255,
  }, {
    red: 255,
    green: 255,
    blue: 255,
  }, {
    red: 255,
    green: 255,
    blue: 255,
  }] )



  const [caixas, setCaixas] = useState([])

  for ( const item of valores) {
    console.log(item)
  }




useEffect(() => {

  function gerarNumero () {
    let numeroAleatorio = parseInt(Math.random() * 256)
    return numeroAleatorio
  }

  setValores( [{
    red: gerarNumero(),
    green: gerarNumero(),
    blue: gerarNumero(),
  }, 
    {
    red: gerarNumero(),
    green: gerarNumero(),
    blue: gerarNumero(),
  }, {
    red: gerarNumero(),
    green: gerarNumero(),
    blue: gerarNumero(),
  }, {
    red: gerarNumero(),
    green: gerarNumero(),
    blue: gerarNumero(),
  }, {
    red: gerarNumero(),
    green: gerarNumero(),
    blue: gerarNumero(),
  }, {
    red: gerarNumero(),
    green: gerarNumero(),
    blue: gerarNumero(),
  }
] )
    

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

'use client'

import { useEffect, useState } from "react"

interface BoxProps {
  red: number,
  green: number,
  blue: number,
  valorCorreto: any,
  setResposta: any,
}

export function Box ({red, green, blue, valorCorreto, setResposta}:BoxProps) {

  const [display, setDisplay] = useState(1)

  useEffect(() => {
    setDisplay(1)
  }, [red, green, blue])

  

  function clickBox () {

    if (red == valorCorreto.red && green == valorCorreto.green && blue == valorCorreto.blue) {
      setResposta('Correto! Parabéns')
    } else {
      setDisplay(2)
      setResposta('Errado! Tente novamente')  
    }
  }

  
  return (
    <div className={display == 1 ? 'h-48 w-48 rounded-3xl hover:cursor-pointer mt-5' : 'h-48 w-48 rounded-3xl mt-5 invisible'} onClick={clickBox} style={{background: `rgb(${red}, ${green}, ${blue})`}}></div>
  )
}
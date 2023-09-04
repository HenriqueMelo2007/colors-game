'use client'

import { useEffect, useState } from "react"

interface BoxProps {
  red: number,
  green: number,
  blue: number,
  valorCorreto: any,
  setResposta: any,
  id: number,
  displayIndividual: any,
  displayArray: any,
  setDisplay: any
}

export function Box ({red, green, blue, valorCorreto, setResposta, id, displayIndividual, displayArray, setDisplay}:BoxProps) {
  

  useEffect(() => {
    setDisplay([true, true, true, true, true, true])
  }, [red, green, blue, setDisplay])

  

  function clickBox () {

    if (red == valorCorreto.red && green == valorCorreto.green && blue == valorCorreto.blue) {
      setResposta('Correto! Parabéns')
    } else {
      setResposta('Errado! Tente novamente')  
      toggleDisplay(id)
    }
  }

  function toggleDisplay (id) {
    const newDisplay = [...displayArray]; 
    newDisplay[id] = !newDisplay[id]; 
    setDisplay(newDisplay); 
  };

  
  return (
    <div className={displayIndividual == true ? 'h-48 w-48 rounded-3xl hover:cursor-pointer mt-5' : 'h-48 w-48 rounded-3xl mt-5 invisible'} onClick={() => clickBox()} style={{background: `rgb(${red}, ${green}, ${blue})`}}></div>
  )
}
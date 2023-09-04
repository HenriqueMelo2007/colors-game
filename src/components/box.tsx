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
  setDisplay: any,
  setValoresMisturadosState: any,
  valoresMisturadosState: any,
}

export function Box ({red, green, blue, valorCorreto, setResposta, id, displayIndividual, displayArray, setDisplay, setValoresMisturadosState, valoresMisturadosState}:BoxProps) {
  

  useEffect(() => {
    setDisplay([true, true, true, true, true, true])
  }, [red, green, blue, setDisplay])

  function opcaoCorreta () {
    const novosValores = valoresMisturadosState.map(i => ({
      red: red,
      green: green,
      blue: blue,
    }))
    setValoresMisturadosState(novosValores)
  }

  

  function clickBox () {

    if (red == valorCorreto.red && green == valorCorreto.green && blue == valorCorreto.blue) {
      setResposta('Correto! Parabéns')
      opcaoCorreta()
    } else {
      setResposta('Errado! Tente novamente')  
      toggleDisplay(id)
    }
  }

  function toggleDisplay (id) {
    const newDisplay = [...displayArray]; 
    newDisplay[id] = false; 
    setDisplay(newDisplay); 
  };

  
  return (
    <div className={displayIndividual == true ? 'h-48 w-48 rounded-3xl hover:cursor-pointer mt-5 transition duration-700' : 'h-48 w-48 rounded-3xl mt-5 opacity-0 transition duration-1000'} onClick={() => clickBox()} style={{background: `rgb(${red}, ${green}, ${blue})`}}></div>
  )
}
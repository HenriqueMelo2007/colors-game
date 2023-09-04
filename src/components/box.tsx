'use client'

import { useEffect, useState } from "react"

interface BoxProps {
  red: number,
  green: number,
  blue: number,
}

export function Box ({red, green, blue}:BoxProps) {

  const [redState, setRedState] = useState(red)
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    setDisplay(true)
  }, [red])

  

  function displayNone () {
    setDisplay(false)
  }

  
  return (
    <div className={display ? 'h-48 w-48 rounded-3xl hover:cursor-pointer mt-5' : 'invisible'} onClick={displayNone} style={{background: `rgb(${redState}, ${green}, ${blue})`}}></div>
  )
}
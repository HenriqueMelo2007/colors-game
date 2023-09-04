'use client'

import { Button } from "@/components/button"

interface propsHeader {
  red: number,
  green: number,
  blue: number,
  atualizar: any
  resposta: string,
}

export function Header ({red, green, blue, atualizar, resposta}: propsHeader) {
  return (
    <header className="w-full bg-green-400 flex flex-col items-center gap-5 pt-5">
      <h2 className='text-3xl'>Escolha a cor correspondente ao código RGB:</h2>
      <h1 className="text-6xl">rgb ({red}, {green}, {blue} )</h1>
      <div className="shadow-lg bg-white w-full h-1/3 flex justify-center items-center gap-60">
        <Button atualizar={atualizar}></Button>
        <p className="text-black text-lg">{resposta}</p>
      </div>
    </header>
  )
}
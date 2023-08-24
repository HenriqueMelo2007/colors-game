import { Button } from "@/components/button"

interface propsHeader {
  red: number,
  green: number,
  blue: number,
  atualizar: any
}

export function Header ({red, green, blue, atualizar}: propsHeader) {
  return (
    <header className="w-full bg-red-500 flex flex-col items-center gap-5 pt-5">
      <h2 className='text-3xl'>Escolha a cor correspondente ao código RGB:</h2>
      <h1 className="text-6xl">rgb ({red}, {green}, {blue} )</h1>
      <div className="shadow-lg bg-white w-full h-1/3 flex justify-center items-center gap-60">
        <Button atualizar={atualizar}></Button>
        <p className="text-black text-lg">Acertou!</p>
      </div>
    </header>
  )
}
import { Button } from "@/components/button"

export function Header () {
  return (
    <header className="w-full bg-red-500 flex flex-col items-center gap-5 pt-5">
      <h2 className='text-3xl'>Escolha a cor correspondente ao código RGB:</h2>
      <h1 className="text-6xl">rgb (80, 80, 80 )</h1>
      <div className="shadow-lg bg-white w-full h-1/3 flex justify-center items-center gap-60">
        <Button></Button>
        <p className="text-black text-lg">Acertou!</p>
      </div>
    </header>
  )
}
'use client'

export function Button ({atualizar}) {

  return (
      <button onClick={atualizar} className="text-green-400 hover:bg-green-400 hover:text-white transition-colors duration-500 text-2xl">Jogar novamente</button>
)
}
'use client'

export function Button ({atualizar}) {

  return (
      <button onClick={atualizar} className="text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-500 text-2xl">Jogar novamente</button>
)
}
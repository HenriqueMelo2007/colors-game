export function Button ({atualizar}) {

  return (
      <button onClick={atualizar} className="text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-500 text-2xl">Jogar novamente</button>
)
}
import Link from "next/link"

export default function Home () {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col px-80">
        <p className="text-green-400 text-2xl m-6">Bem-vindo ao Jogo das Cores RGB!
           O desafio é simples: um código RGB será gerado, e você terá que adivinhar qual cor corresponde a esse código. As cores são representadas por combinações de vermelho (R), verde (G) e azul (B). Você verá seis opções de cores na tela, e sua missão é escolher a cor correta que corresponde ao código RGB mostrado.
           Teste sua habilidade em identificar cores e divirta-se neste emocionante jogo de desafio visual!</p>
        <Link href='/jogar' className="bg-green-400 rounded-3xl py-2 px-16 text-xl">Jogar</Link>
    </div>
  )
}
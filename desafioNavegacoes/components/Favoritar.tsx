import React, {createContext, useContext, useState} from 'react'

interface FavoritosContextType {
    favoritos: number[]
    adicionarFavorito: (id: number) => void
    removerFavorito: (id: number) => void
    ehFavorito: (id: number) => boolean
}

const FavoritosContext = createContext<FavoritosContextType | undefined>(
    undefined
)

export const FavoritosProvider = ({ children }: any) => {

    const [favoritos, setFavoritos] = useState<number[]>([])

    const adicionarFavorito = (id: number) => {

        setFavoritos((atual) => {

            if (atual.includes(id)) {
                return atual  // aq retorna o filme com o id quando é verificado se o id do filme atual está presente
            }

            const novosFavoritos = [...atual, id]  // aq pega por id e fazn uma cópia dos dados do filme

            console.log('Favorito adicionado:', novosFavoritos)

            return novosFavoritos
        })
    }

    const removerFavorito = (id: number) => {

        setFavoritos((atual) => {

            const novosFavoritos = atual.filter(
                (item) => item !== id // Aq remove o Filme pelo id quando ele verifrica e o id atual armazenado é marcado como diferente do id presente nos favoritos, o removendo
            )

            console.log('Favorito removido:', novosFavoritos)

            return novosFavoritos
        })
    }

    const ehFavorito = (id: number) => {
        return favoritos.includes(id) // aq inclui o ID do filme dentro da lista dos favoritos, relacionando o id do filme e pegando as suas informações para colocar lá
    }

    return (
        <FavoritosContext.Provider  // aq retorna basicamente as funções criadas anteriormente. Assim, posso usar lá no App.tsx para cobrir todo o projeto e permitir com que a página consiga fazer essas funções
            value={{
                favoritos,
                adicionarFavorito,
                removerFavorito,
                ehFavorito
            }}
        >
            {children}
        </FavoritosContext.Provider>
    )
}

export const useFavoritos = () => {

    const contexto = useContext(FavoritosContext)

    if (!contexto) {
        throw new Error(
            'useFavoritos precisa estar dentro de FavoritosProvider'
        )
    }

    return contexto
}
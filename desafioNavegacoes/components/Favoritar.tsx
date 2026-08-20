import React, {
    createContext,
    useContext,
    useState
} from 'react'

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
                return atual
            }

            const novosFavoritos = [...atual, id]

            console.log('Favorito adicionado:', novosFavoritos)

            return novosFavoritos
        })
    }

    const removerFavorito = (id: number) => {

        setFavoritos((atual) => {

            const novosFavoritos = atual.filter(
                (item) => item !== id
            )

            console.log('Favorito removido:', novosFavoritos)

            return novosFavoritos
        })
    }

    const ehFavorito = (id: number) => {
        return favoritos.includes(id)
    }

    return (
        <FavoritosContext.Provider
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
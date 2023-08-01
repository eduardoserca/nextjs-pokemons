import { Layout } from "../../../components/layouts"
import { NoFavorites } from "../../../components/ui"
import { useEffect, useState } from "react";

import { localFavorites } from "../../../utils";
import { FavoritePokemons } from "../../../components/pokemon";


const FavoritesPage = () => {

  const [favoritePokemos, setFavoritePokemos] = useState<number[]>([]);

  useEffect(()=>{
    setFavoritePokemos(localFavorites.pokemons());

  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      {
        favoritePokemos.length === 0 
          ? (<NoFavorites/>)
          : (<FavoritePokemons pokemons={favoritePokemos} />)
      }
        
        
        

    </Layout>
  )
}

export default FavoritesPage

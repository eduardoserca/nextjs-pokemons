import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import {Navbar} from "../ui/Navbar";

interface Props extends PropsWithChildren {
    title?:string;
}

const origin = (typeof window === 'undefined') ? '': window.location.origin;


//PropsWithChildren
export const Layout:FC<Props> = ({children, title}) => {    
  return (    
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="autor" content="Carlos Serrano" />
            <meta name="description" content={`Información sobre el pokémon ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />

            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`}/>

             
            <meta property="og:type" content="website" />          
            <meta property="og:image:width" content="526" />
            <meta property="og:image:height" content="275" />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@secretsahil" /> 
            <meta property="og:site_name" content="Site Name" />
          
        
        </Head>

        <Navbar />

        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>    
    </>
  )
}



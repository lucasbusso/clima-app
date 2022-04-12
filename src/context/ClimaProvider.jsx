import { createContext, useState } from "react"

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    import.meta.env.VITE.API.KEY.

    const [ busqueda, setBusqueda ] = useState({
        ciudad:'',
        pais:''
    })

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const consultarClima = datos => {

    }
    return(
        <ClimaContext.Provider
            value={{ busqueda, datosBusqueda, consultarClima }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export{
    ClimaProvider
}

export default ClimaContext
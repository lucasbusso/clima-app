import Formulario from './Formulario'
import Resultado from './Resultado'
import useClima from '../hooks/UseClima'

const AppClima = () => {

  const { resultado } = useClima()
  return (
    <>
        <main className='dos-columnas'>
            <Formulario />

            {resultado?.name && <Resultado />  }
            
        </main>
    </>
  )
}

export default AppClima
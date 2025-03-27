import { useParams } from 'react-router-dom'
import designs from '../designs'

export default function DesignDay() {
  const { id } = useParams()
  const DayComponent = designs[id as string]

  console.log('DayComponent', DayComponent)
  console.log('day', id)

  return (
    <div>
      <h1>Jour {id}</h1>
      {DayComponent ? <DayComponent /> : <h2>Aucun design pour ce jour 😢</h2>}
    </div>
  )
}

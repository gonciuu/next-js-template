import Esas from './esas'
import '../styles/globals.css'

export default function HomePage() {
  return (
    <div>
      <Esas a={2} b={1} />
      <h1 className="text-6xl font-bold underline">Hello world!</h1>
    </div>
  )
}

import 'bootstrap/dist/css/bootstrap.min.css'
import { Cards } from './components/Cards'

function App() {

  return (
    <>
     <Cards title="Card title" text="Some quick example text to build on th crad title and make up the bulk of the card's content.">
        <img src="src/img/image.png" className="card-img-top" alt="No image"/>
     </Cards>
     <Cards title="Special title treatment" text="With supporting text below as a natural lead-in to additional content.">
     </Cards>
    </>
  )
}

export default App

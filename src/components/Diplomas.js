
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/Diplomas.css'


const Diplomas = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p>Featured</p>
        </div>
        <div className="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>          
  )
}

export default  Diplomas;
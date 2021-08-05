
import swal from 'sweetalert';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/DescargarArchivos.css'


const state = {
    users: ''
}

const index = {
    name: '',
    mail: '',
    diploma: ''
}

// Example data
const res = [{
    "id": "1",
    "name": "Nombre1",
    "mail": "nombre1@mail.com",
    "diploma": ["Diploma 1" , "-Diploma 11"]
  },
  {
    "id": "2",
    "name": "Nombre2",
    "mail": "nombre2@mail.com",
    "diploma": ["Diploma 2" , "-Diploma 22"]
  },
]

const  descargarArchivos = () =>{
    swal({
        text: "Descargando archivos",
        icon: "success"
    })
}

const Archivos = (props) => {
  const {} = props;
  return (
    <div>
      <table className="table table-bordered table-hover">
      <TableHeader></TableHeader>
      
      <TableBody></TableBody>
      
      </table>
    </div>
  );
}
  
  
const TableHeader = () => {
  
  return(
    <thead className="thead-dark" key="header-1">
        <tr key="header-0">
          <th>Nombre</th>
          <th>Mail</th>
          <th>Diplomas</th>
          <th>Archivos</th>
        </tr>
    </thead>
  );
}
  
  
const TableBody = () => {
    return(
        res.map((value,index) =>{
            return(
                <tr >
                    <td>
                        {value.name}
                    </td>
                    <td>
                        {value.mail}
                    </td>
                    <td>
                        {value.diploma}
                    </td>
                    <td>
                      <button type="button" class="btn btn-success" onClick = {()=>descargarArchivos()}>Descargar</button>
                    </td>
                </tr>
            )
        })

    );
}
  
export default Archivos;
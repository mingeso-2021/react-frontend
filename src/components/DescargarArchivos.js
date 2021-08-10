
import swal from 'sweetalert';
import {Redirect} from 'react-router';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/DescargarArchivos.css'

// Example data
const res = [{
    "id": "1",
    "name": "Nombre1",
    "mail": "nombre1@mail.com",
    "diploma": "Diploma 1"
  },
  {
    "id": "2",
    "name": "Nombre2",
    "mail": "nombre2@mail.com",
    "diploma": "Diploma 2"
  },
]
const baseUrl = process.env.REACT_APP_BASE_URL

const  descargarArchivos = () =>{
    
    swal({
        text: "Descargando archivos",
        icon: "success"
    })
}

const Archivos = () => {
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
                      <a type="button" class="btn btn-success" href={baseUrl + "/uploadfiles/upload/" + value.name + "/" + value.diploma + ".pdf"} onClick = {()=>descargarArchivos()} download>Descargar</a>
                    </td>
                </tr>
            )
        })

    );
}
  
export default Archivos;
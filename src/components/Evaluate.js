import React from 'react';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/Evaluate.css'






    const state = {
        users: ''
    }

    const index = {
        name: '',
        mail: '',
        diploma: ''
    }


    
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
          {
            "id": "3",
            "name": "Nombre3",
            "mail": "nombre3@mail.com",
            "diploma": "Diploma 3"
          }]
        

   const  aprobarSolicitud = () =>{
        swal({
            title: "Aprobar",
            text: "¿Estás seguro que deseas APROBAR la solicitud del postulante?",
            icon: "warning",
            buttons: ["Cancelar","Aceptar"]
        }).then(respuesta => {
            if (respuesta) {
                swal({
                    text: "La solicitud ha sido aprobada",
                    icon: "success"
                })
            }
        })
    }
    const rechazarSolicitud = () =>{
        swal({
            title: "Rechazar",
            text: "¿Estás seguro que deseas RECHAZAR la solicitud del postulante?",
            icon: "warning",
            buttons: ["Cancelar","Aceptar"]
        }).then(respuesta => {
            if (respuesta) {
                swal({
                    text: 'La solicitud ha sido rechazada',
                    icon: "success"
                })
            }
        })
    }
     
   

    
   const Table = (props) => {
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
                <th>Diploma</th>
                <th>Aceptar</th>
                <th>Rechazar</th>
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
                            <button type="button" class="btn btn-success" onClick = {()=>aprobarSolicitud()}>Success</button>
                           
                          </td>
                          <td>
                            <button class="btn btn-danger" onClick = {()=>rechazarSolicitud()}>Rechazar</button>
                          </td>
                      </tr>
                  )
              })

          );
      }
      
      export default Table;
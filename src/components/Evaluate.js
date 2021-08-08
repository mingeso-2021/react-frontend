
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/Evaluate.css'


const baseUrl = process.env.REACT_APP_BASE_URL

const Evaluate = () =>{

    

    const  aprobarSolicitud = () =>{
        if(postulations.status=== 0){
        swal({
            title: "Aceptar",
            text: "¿Estás seguro que deseas modificar la solicitud y APROBARLA?",
            icon: "warning",
            buttons: ["Cancelar","Aceptar"]
        }).then(respuesta => {
            if (respuesta) {
                swal({
                    text: 'La solicitud ha sido aprobada',
                    icon: "success"
                })
                postulations.status = 1
                
            }
        })
        }
        else{
            swal({
                title: "Aceptar",
                text: "¿Estás seguro que deseas APROBAR la solicitud?",
                icon: "warning",
                buttons: ["Cancelar","Aceptar"]
            }).then(respuesta => {
                if (respuesta) {
                    swal({
                        text: 'La solicitud ha sido aprobada',
                        icon: "success"
                    })
                    postulations.status = 1
                    
                }
            })
            }
    }
    const  rechazarSolicitud = () =>{
        if(postulations.status=== 1){
        swal({
            title: "Rechazar",
            text: "¿Estás seguro que deseas modificar la solicitud y RECHAZARLA?",
            icon: "warning",
            buttons: ["Cancelar","Aceptar"]
        }).then(respuesta => {
            if (respuesta) {
                swal({
                    text: 'La solicitud ha sido rechazada',
                    icon: "success"
                })
                postulations.status = 0
                
            }
        })
        }
        else{
            swal({
                title: "Aceptar",
                text: "¿Estás seguro que deseas RECHAZAR la solicitud?",
                icon: "warning",
                buttons: ["Cancelar","Aceptar"]
            }).then(respuesta => {
                if (respuesta) {
                    swal({
                        text: 'La solicitud ha sido rechazada',
                        icon: "success"
                    })
                    postulations.status = 0
                   
                }
            })
            }
    }

    const [postulations,setPostulations] = useState()
    const [postulants,setPostulants] = useState()
    const [diplomas,setDiplomas] = useState()

    const fetchEvaluate = async () =>{
        const response = await fetch(baseUrl + "/postulations/getall");
        const responseJson = await response.json()
        const responsePostulant = await fetch(baseUrl + "/postulants/getall");
        const responseJsonPostulant = await responsePostulant.json()
        const responseDiplomas = await fetch(baseUrl + "/diplomas/getall" );
        const responseJsonDiplomas = await responseDiplomas.json()
        setPostulations(responseJson)
        setPostulants(responseJsonPostulant)
        setDiplomas(responseJsonDiplomas)
    }

   

      
    useEffect(()=>{
        fetchEvaluate()
    },[])

    const getData=(data,id)=>{
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                return data[i]
            }
            
        }
    }
    
    return (
        <div>
            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Mail</th>
                        <th>Diploma</th>
                        <th>Aceptar</th>
                        <th>Rechazar</th>
                        <th>Estado</th>
                    </tr>
                    {!postulations?'':
                        postulations.map((value,index) =>{
                            return(
                                <tr>
                                    <td key ="name">
                                        {!postulants? '': getData(postulants,value.id_postulant).name}
                                    </td>
                                    <td key = "mail">
                                        {!postulants? '': getData(postulants,value.id_postulant).email}
                                    </td>
                                    <td key = "diploma">
                                        {!diplomas? '': getData(diplomas,value.id_diploma).name}
                                    </td>
                                    <td key = "Accept">
                                        <button type="button" className="btn btn-success" onClick = {()=>aprobarSolicitud()}>Success</button>
                                    </td>
                                    <td key = "Reject">
                                    <button className="btn btn-danger" onClick = {()=>rechazarSolicitud()}>Rechazar</button>
                                    </td>
                                    <td key = "status">   
                                    </td>
                                </tr>
                            )
                        })
                    }
                </thead>
            </table>
        </div>
    )
}
export default Evaluate;
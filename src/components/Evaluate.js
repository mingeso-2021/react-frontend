
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/Evaluate.css'



const baseUrl = process.env.REACT_APP_BASE_URL
const aprobar = 'aprobado'
const reprobar = 'rechazado'
const Evaluate = () =>{

    const resAprobar = async (id) =>{
        await axios.put(baseUrl + "postulations/update/" + id,
            {
                status : aprobar
            }
        )
        document.getElementById(id).innerHTML = "APROBADO"
    }

    const resReprobar = async (id) =>{
        await axios.put(baseUrl + "postulations/update/" + id,
            {
                status : reprobar
            }
        )
        document.getElementById(id).innerHTML = "RECHAZADO"
    }
    


    const  aprobarSolicitud = (status,id) =>{
        if(status=== 'RECHAZADO'){
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
                resAprobar(id)
                
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
                    resAprobar(id)
                    
                }
            })
            }
    }
    const  rechazarSolicitud = (status,id) =>{
        if(status=== 'APROBADO'){
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
                resReprobar(id)
                
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
                    resReprobar(id)
                   
                }
            })
            }
    }

    

    const [postulations,setPostulations] = useState()
    const [postulants,setPostulants] = useState()
    const [diplomas,setDiplomas] = useState()

    const fetchEvaluate = async () =>{
        const response = await axios.get(baseUrl + "/postulations/getall");
        const responsePostulant = await axios.get(baseUrl + "/postulants/getall");
        const responseDiplomas = await axios.get(baseUrl + "/diplomas/getall" );
        setPostulations(response.data)
        setPostulants(responsePostulant.data)
        setDiplomas(responseDiplomas.data)
    }

    
   

      
    useEffect(()=>{
        fetchEvaluate()
    },[])

    const getData=(data,id)=>{
        for (let value of data) {
            if(value.id === id){
                return value
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
                        <th>Aprobar</th>
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
                                        <button type="button" className="btn btn-success" onClick = {()=>aprobarSolicitud(value.status,value.id)}>Aprobar</button>
                                    </td>
                                    <td key = "Reject">
                                        <button className="btn btn-danger" onClick = {()=>rechazarSolicitud(value.status,value.id)}>Rechazar</button>
                                    </td>
                                    <td id = {value.id} key = "status" > 
                                        {value.status.toUpperCase()}
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
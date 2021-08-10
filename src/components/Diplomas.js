import axios from 'axios';
import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/Diplomas.css'

const baseUrl = process.env.REACT_APP_BASE_URL
const Diplomas = () => {
    const [postulations,setPostulations] = useState()
    const [evaluators,setEvaluators] = useState()
    const [diplomas,setDiplomas] = useState()

    const fetchDiploma = async () =>{
        const response = await axios.get(baseUrl + "/postulations/getall");
        const responseEvaluators = await axios.get(baseUrl + "/evaluators/getall");
        const responseDiplomas = await axios.get(baseUrl + "/diplomas/getall" );
        setPostulations(response.data)
        setEvaluators(responseEvaluators.data)
        setDiplomas(responseDiplomas.data)
    }
    useEffect(()=>{
        fetchDiploma()
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
                        <th>Diplomado</th>
                        <th>Profesor</th>
                        <th>Contacto profesor</th>
                    </tr>
                    {!postulations?'':
                        postulations.map((value,index) =>{
                            return(
                                <tr>
                                    <td key ="name">
                                        {!diplomas? '': getData(diplomas,value.id_diploma).name}
                                    </td>
                                    <td key = "mail">
                                        {!evaluators? '': getData(evaluators,value.id_evaluator).name}
                                    </td>
                                    <td key = "diploma">
                                        {!evaluators? '': getData(evaluators,value.id_evaluator).email}
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

export default  Diplomas;
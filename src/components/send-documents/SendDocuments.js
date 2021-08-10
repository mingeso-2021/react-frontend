// native imports
import { React } from 'react';
// npm modules
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
// style
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/SendDocuments.css';
// other imports
import logo_usach from '../../assets/images/logo_usach.png';


// define backend destination url 
// const baseUrl = process.env.REACT_APP_BASE_URL
const baseUrl = "http://143.110.148.226:8000"

const SendDocuments = () => {

  // URL Destination
  const getUploadParams = ({ meta }) => { 
    let now = new Date();
    return { url: baseUrl + "/uploadfiles/upload/" + now } 
  }

  // 
  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  // 
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  } 

  return (
    <div className="container position-form form-size shadow p-3 mb-5 bg-white rounded"> 
      <div className="row justify-content-center">
        <img
          alt=""
          src={logo_usach}
          className="img-box-logo"
        />
      </div>
      <div className="row justify-content-center">
        <label className="text-size">Seleccione sus documentos</label>
      </div>
      <div className="row justify-content-center">
        <Dropzone
        accept="application/pdf"
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        styles={{ dropzone: { minHeight: 200, maxHeight: 250, width: 900} }}
      />
      </div>
    </div>
  )
}

  
export default SendDocuments;
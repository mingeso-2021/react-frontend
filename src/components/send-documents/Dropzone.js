import {useDropzone} from 'react-dropzone'
import { useMemo } from 'react';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};
  
const activeStyle = {
    borderColor: '#2196f3'
};
  
const acceptStyle = {
    borderColor: '#0df509'
};
  
  
const StyledDropzone = (props) => {
  
    const {
      acceptedFiles,
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
    } = useDropzone({accept: '.pdf'});
  
    const style = useMemo(() => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
    }), [
      isDragActive,
      isDragAccept
    ]);
  
    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
  
    return (
      <div className="container">
        <div {...getRootProps({style})}>
          <input {...getInputProps()} />
          <p>Puede arrastrar y soltar archivos aquí para añadirlos</p>
          <em>(Sólo se aceptarán archivos PDF)</em>
        </div>
        <aside>
          <h4>Files</h4>
          <ul className = "list-unstyled">{files}</ul>
        </aside>
      </div>
    );
  }

export default StyledDropzone;
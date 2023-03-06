import React,{useRef} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Example = () =>{
  const componentRef = useRef();
  return(
    <div>
      <App ref={componentRef}/>
    </div>
  );
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>
);




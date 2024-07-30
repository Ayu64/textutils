
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable is enablr or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
   setTimeout(() => {
    setAlert(null);
   },3000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
      showAlert("Dark mode is enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode is enable","success")
    }
  }


  return (
   <>
   <Navbar title="My-App" mode= {mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>

   <div className="container my-3">
   <TextForm showAlert={showAlert} heading="Enter the text analyze" mode={mode}/>
   </div>
   </>
  );
}

export default App;

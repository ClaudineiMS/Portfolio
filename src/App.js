import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Toolbar from './Toolbar/component/Toolbar';


function App() {
  return (
    <PrimeReactProvider>
      <div style={{marginTop:'0.5%'}}>
        <Toolbar /> 
      </div>
    </PrimeReactProvider>
);
}

export default App;

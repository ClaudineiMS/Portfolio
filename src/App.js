import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Toolbar from './Toolbar/component/Toolbar';


function App() {
  return (
    <PrimeReactProvider>
      <Toolbar /> 
    </PrimeReactProvider>
);
}

export default App;

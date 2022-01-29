import './App.css';
import ComponentDidMount from './components/componentDidMount';
import Request from './components/RequestApi'
import Render from './components/RenderEmOrdem'
import Request2 from './components/RequestApi2'

function App() {
  return (
    <div>
    <ComponentDidMount />
    <Request />
    <Render />
    <Request2 />
    </div>
  );
}

export default App;

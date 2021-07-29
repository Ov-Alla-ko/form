import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormOfComments } from './components/form';
import Comments from './components/MoreButton/Comments';
import Pagination from './components/Pagination/pagination'
function App() {
  return (

    <div className="App">


      <FormOfComments />
      <Comments />
      <Pagination />
    </div>
  );
}

export default App;

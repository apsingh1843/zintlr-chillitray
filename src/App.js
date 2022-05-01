import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

function App() {
  return (
      <div className="wrapper">
          <Navbar />
          <div className="flex flex-row w-100 my-8">
              <Sidebar />
              <Main />
          </div>  
      </div>

  );
}

export default App;

import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

function App() {
  return (
      <div>
          <Navbar />
          <div className="flex flex-row w-full my-8">
              <Sidebar />
              <Main />
          </div>  
      </div>

  );
}

export default App;

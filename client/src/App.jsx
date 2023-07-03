import { Navbar, Footer, Loader , Services, Transcactions, Welcome, Exchange} from './components';


const App = () => {
 
  return (
    <div className="min-h-screen">
       <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/>
      </div>
      <Services/>
      <Transcactions/>
      <Exchange/>
      <Footer/>
    </div>
  );
}

export default App

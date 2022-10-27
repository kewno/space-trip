import './App.css';
import {Routes, useParams} from "react-router";
import {Route, BrowserRouter} from "react-router-dom";
import UiKit from "./components/UiKit/UiKit";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Cabinet from "./components/Cabinet/Cabinet";


function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/ui-kit' element={<UiKit />}/>
            <Route path='/sign-in' element={<SignIn />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='*' element={<Cabinet />}/>
          </Routes>
      </BrowserRouter>
      // <BrowserRouter>
      //   <Routes>
      //     <Route path='*' element={<PageError />}/>
      //     <Route path='/' element={<Main />}/>
      //     <Route path='/auth' element={<Identification><Auth/></Identification>}/>
      //     <Route path='/registr' element={<Identification><Registr/></Identification>}/>
      //     <Route path='/launch' element={<Launch/>}/>
      //     <Route path='/start' element={<Start/>}/>
      //     <Route path='/pets-detail' element={<PetsDetail />}>
      //       <Route path='*' element={<PetsDetail />}/>
      //     </Route>
      //     <Route path='/loader' element={<Loader/>}/>
      //     <Route path='/ui-kit' element={<UiKit/>}>
      //       <Route path=':sellectPage' element={<UiKit />}/>
      //     </Route>
      //
      //     <Route path='/pets' element={<Pets items={itemsPets}/>}>
      //       <Route path='*' element={<Pets />}/>
      //     </Route>
      //
      //   </Routes>
      // </BrowserRouter>
  );
}

export default App;

import ModalButton from './Componets/ModalButton';
import SidebarBtn from './Componets/SidebarBtn';
import logo from './util/logo.svg';
import { links } from "./util/consts"
import { Switch } from 'react-router';
import { Route } from 'react-router';
import Home from './Pages/Home';
import Sidebar from './Componets/Sidebar';

const filterList = ['home','calendar']

function App() {
  return (
    <main>
      <SidebarBtn />
      <ModalButton />
      <Sidebar />
      <Switch>
        <Route excat path='/'>
          <Home />
        </Route>
        {links
          .filter((link) => !filterList.includes(link.text))
          .map((link)=>{
            const {page , id, url, } = link;
            return <Route key={id} path={url}>{page}</Route>
          })
        }
      </Switch>
    </main>
  );
}

export default App;

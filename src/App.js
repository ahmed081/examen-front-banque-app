import 'antd/dist/antd.css';
import { Layout,Menu } from 'antd';
import {
  BrowserRouter as Router, Link, Switch,Route

} from "react-router-dom";
import Clients from './client/client';
import Comptes from './compte/compte';
import ShowClient from './client/showClient';
import ShowCompte from './compte/showCompte';
import Operation from './operations/operations';
import EffectuerOperation from './operations/effectuerOperation';

const {Header, Content, Footer} = Layout
function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><Link to='/clients'>Client</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/comptes'>Comptes</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/operations'>Operations</Link></Menu.Item>
        </Menu>
        </Header>
        <Content  style={{ padding: '0 50px' }}>
            <Switch>
              <Route exact path='/operations'>
                    <Operation/>
                </Route>
                <Route exact path='/operations/:operation'>
                    <EffectuerOperation/>
                </Route>
                <Route exact path='/clients'>
                    <Clients/>
                </Route>
                <Route exact path='/comptes'>
                    <Comptes/>
                </Route>
                <Route exact path='/clients/:id'>
                  <ShowClient/>
                </Route>
                <Route exact path='/comptes'>
                    <Comptes/>
                </Route>
                
                <Route exact path='/comptes/:id'>
                    <EffectuerOperation/>
                </Route>
            </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;

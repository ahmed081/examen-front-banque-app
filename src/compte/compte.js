import { Content } from "antd/lib/layout/layout"
import { Route, Switch } from "react-router-dom"
import ListCompte from "./listcompte"
import ShowCompte from "./showCompte"


const Comptes =()=>{

    return (
        <div>
            <Switch>
                <Route exact path='/comptes'>
                    <ListCompte/>
                </Route>
                <Route exact path='/comptes/:id'>
                    <ShowCompte/>
                </Route>
                
            </Switch>
        </div>
    )
}


export default Comptes
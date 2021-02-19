import { Route, Switch } from "react-router-dom"
import ListClient from "./listclient"
import ShowClient from "./showClient"



const Clients =()=>{

    return (
        <div>
            <Switch>
                <Route exact path='/clients'>
                    <ListClient/>
                </Route>
                <Route exact path='/clients/:id'>
                    <div>ahmed</div>
                </Route>
            </Switch>

        </div>
    )
}

export default Clients
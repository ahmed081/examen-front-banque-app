

import { Route, Switch } from "react-router-dom"
import EffectuerOperation from "./effectuerOperation"
import Listoperations from "./Listoperations"

const Comptes =()=>{

    return (
        <div>
            <Switch>
                <Route exact path='/operations'>
                    <Listoperations/>
                </Route>
                <Route exact path='/operations/:operation'>
                    <EffectuerOperation/>
                </Route>
            </Switch>
        </div>
    )
}


export default Comptes
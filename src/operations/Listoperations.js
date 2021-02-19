
import { useState } from "react"
import { Link, Route, Switch } from "react-router-dom"


const ListOperations =()=>{
    const [operations,setOPerations] = useState(["retrait","virement","versement"]);
    return (
        <div>
            <ul>
                {
                    operations.map(op =>{
                        return (
                            <li><Link to={`/operations/${op}`}>{op}</Link></li>
                        )
                    })
                }
               
            </ul>
        </div>
    )
}


export default ListOperations
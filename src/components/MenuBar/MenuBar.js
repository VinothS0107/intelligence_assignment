
import{NavLink} from "react-router-dom";

import "./MenuBar.css"

function MenuBar(props){
    const{menu}=props
return(
        // <li className="listed-menu" onClick={()=>navigate(`/${menu}`)}>{menu}</li>
        <li className="list-menu-container"> <NavLink to={`/${menu}`} className="listed-menu">{menu}</NavLink></li>
    )
}

export default MenuBar
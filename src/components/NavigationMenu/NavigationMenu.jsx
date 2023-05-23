import React from "react";

import { Link } from "react-router-dom";

function NavigationMenu(){
    return (
        <nav>
            <ul>
                <li className="button"><Link to="/">Currículo</Link></li>
                <li className="button"><Link to="/portfolio">Portfólio</Link></li>
                <li className="button"><Link to="/contact">Contato</Link></li>
            </ul>
      </nav>
    )
}

export default NavigationMenu;
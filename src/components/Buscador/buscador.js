import React, {component} from "react"

class Buscador extends component{
    constructor(props){
        super(props)
            this.state={
                ValorInput:``,
                mas:false
            }
    }

    PreventRefresh(event){
        event.PreventRefresh();
        window.location.replace ("/Sresult/" + this.state.ValorInput )
    }
}
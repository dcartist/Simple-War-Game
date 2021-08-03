import React from 'react'
import {Link} from 'react-router-dom';

export default function NavButton(props) {
    if(props.noNext == true){
        return (
            <div>
               <Link to={props.back}><button>Back</button></Link> 
            </div>
        )

    } else {
        return (
            <div>
               <Link to={props.back}><button>Back</button></Link> | <Link to={props.next}><button>Continue</button></Link>
            </div>
        )
    }
   
}

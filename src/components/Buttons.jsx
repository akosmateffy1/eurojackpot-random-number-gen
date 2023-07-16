import React from "react"
import { AiFillDelete } from 'react-icons/ai';
import {FaHistory} from 'react-icons/fa'

export default function Buttons({clearHistory , toggleShowHistory}){


    return(
        <div>
            <button 
              className="btn btn-primary m-2" onClick={toggleShowHistory}>
              Előzmények  <FaHistory size={20} style={{color: '#333',  margin:'3px'}}/>
            </button>
            <button className="btn btn-primary m-2" onClick={clearHistory}>
              Előzmények törlése  <AiFillDelete size={20} style={{color: '#333', margin:'3px'}}/>
            </button>
        </div>
    )
}
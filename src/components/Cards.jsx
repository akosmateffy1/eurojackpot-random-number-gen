import React from "react";
import './CardsStyles.css'
export default function Cards({ history, showHistory}){
    return(
        <div className="cards">
            {showHistory && (
                <div className="row">
                    <h3 className="history-heading">Előzmények:</h3>
                    <div className="card-group">
                      {history.map((item, index) => (
                        <div className='col' key={index}>
                            <div className="card" style={{width:'100%', backgroundColor:'#1c1d24', border:'1px solid red', padding:'15px'}}>
                                <span className="history-label">Főszámok:</span>
                                <ul className="numbers-list">
                                    {item.mainNumbers.map((number) => (
                                        <li className="number" key={number}>{number}</li>
                                    ))}
                                </ul>
                                <span className="history-label">Euro számok:</span>
                                <ul className="numbers-list">
                                    {item.euroNumbers.map((number) => (
                                        <li className="number" key={number}>{number}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                      ))}
                    </div>
              </div>
            )}
        </div>
    )
}
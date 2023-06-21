import React, {useState, useEffect} from 'react'
import {DeleteOneCovoit} from '../../api/covoit'
import './Popup.css'

const Popup = (props) => {

    const onClickDelete = (id) => {
        DeleteOneCovoit(id)
    }

    return(
        <div>
            {props.isPopUp && 
                <div className="modal">
                <div className="modal-content">
                    <p className="close"
                        onClick={(e)=>{
                            props.onClickClose()
                        }}
                    > 
                        X
                    </p>
                    <h1> Attention !</h1>
                    <h2>{props.msg}</h2>
                    <h2>&nbsp;</h2>
                    <div className="flex-50">
                        <button
                            className="annuler"
                            onClick={(e)=>{
                                props.onClickClose()
                            }}
                        >Annuler
                        </button>
                        <button
                            className="supprimer"
                            onClick={(e)=>{
                                onClickDelete(props.id)
                                props.onClickMessage()
                                props.onClickClose()
                            }}
                        >Supprimer
                        </button>
                    </div>
                </div>
                </div>
            }
        </div>
        )
}

export default Popup
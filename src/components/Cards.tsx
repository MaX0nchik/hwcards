import React from "react"


type CardsType = {
    title?: string,
    text: string,
    children?: React.ReactNode, 
}

export const Cards = ({title, text, children}: CardsType) => {
    return (
        <div className="card" style={{width:"18rem"}}>
            {children}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
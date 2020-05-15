 
import React from 'react'
import './App.css'
import Cards from './Cards'
import ListActionButton from './ListActionButton'

export default function List(props) {
    const {title,cards} = props
    return (
        <div className="listItem ">
            <h1>{title}</h1>
            {cards.map((card)=>(
                <Cards key={card.id} cards={card}/>
            ))}
            <ListActionButton />
          </div>
    )
}

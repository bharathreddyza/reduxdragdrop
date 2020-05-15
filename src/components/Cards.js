import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent';
import './App.css'
import { StylesProvider } from '@material-ui/core';
const styles ={
  cardContainer: {
    margin:8,
    
    
  }
}

export default function Cards(props) {
  const {cards}=props
    return (
        <div>
            <Card style={styles.cardContainer}>
           <CardContent>
           <Typography >{cards.text}</Typography>

           </CardContent>
        </Card>
         </div>
    )
}

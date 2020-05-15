import React from 'react';
import {connect} from 'react-redux'

 import './App.css';
import List from './List'


function App(props) {

  const {lists} = props
  console.log(lists)
  return (
    <div className="listContainer">
      {lists.map((list)=>(
        <List key={list.id} title={list.title} cards={list.Cards} />

      ))}
    </div>
  );
}

const mapStateToProps=state=>({
  lists:state.lists
})

export default connect(mapStateToProps)(App)

import React,{useState,useEffect} from 'react'
import Icon from '@material-ui/core/Icon';
import { Card } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import {connect } from 'react-redux'
import { addList,addCard } from '../actions';
  function ListActionButton(props) {

      const [formOpen,setFormOpen]= useState(false)
      const [text,setText]=useState('')
    const {list} = props;
    const styles={
        openForBuottonGroup:{
            display:"flex",
            alignItems:"center",
            cursor:"pointer",
            borderRadius:2,
            height:36,
            width:272,
            paddingLeft:5
        }
    }

    const handleAddList=()=>{
        const {dispatch,listId}= props
        const Text = text;
        if(text){
            dispatch(addList(Text))
        }
        return;
    }
    const handleAddCard=()=>{
        const {dispatch,listId}= props
        const Text = text;
        if(text){
            dispatch(addCard(listId,text))
        }
        return;
    }



     const openForm=()=>{
         setFormOpen(true)
     }
     const closeForm=()=>{
         setFormOpen(false)
     }
  const renderAddButton =()=>{
           
      const buttonText = list?"add another list":"add another card"
      
      return(
          <div onClick={()=>openForm()} style={styles.openForBuottonGroup}>
              <Icon>add</Icon>
              <p>{buttonText}</p>
          </div>
      )
  }

  const renderForm =()=>{

      const placeholder = list ?
      "enter list title":
      "enter a title for the card"

      const buttonTitle = list ?
      "add list":
      "add card"
       return(
           <div>
               <Card style={{
                   overflow:"visible",
                   minHeight:80,
                   minWidth:272,
                   padding:"6px 8px 2px"   }}>
             <TextareaAutosize 
             style={{
                 resize:"none",
                 width:"100%",
                 overflow:"hidden",
                 outline:"none",
                 border:"none"
             }}
             placeholder={placeholder}
             autoFocus 
             onBlur={closeForm}
                onChange={(e)=>setText(e.target.value)}
             />
               </Card>
               <div>
                   <Button 
                   onMouseDown={list? handleAddList: handleAddCard}
                    variant="contained" style={{color:"blue"}}>{buttonTitle}</Button>
                   <Icon style={{marginLeft:8,cursor:"pointer",alignItems:"center"}} >close</Icon>
               </div>
           </div>
       )
  }

    return formOpen ? renderForm():  renderAddButton()
}

const mapStateToProps=(state)=>{
           
}
export default connect(mapStateToProps,{ addList,addCard})(ListActionButton)
import {CONSTANTS} from '../actions'
let ListId=2
let cardId=4

const initialState =[
    {
        title:"listnumber 1",
        id:0,
        Cards:[
            {
                id:0,
                text:'blabal bjbcjbc bcrjbrc'
            },
            {
                id:1,
                text:'blabal bjbcjbc bcrjbrc'
            }

        ]
    },
    {
        title:"listnumber 2",
        id:1,
        Cards:[
            {
                id:0,
                text:'blabal bjbcjbc bcrjbrc'
            },
            {
                id:1,
                text:'blabal bjbcjbc bcrjbrc'
            },
            {
                id:2,
                text:'blabal  bcrjbrc'
            },{
                id:3,
                text:'v bjbcjbc dececrvrvr'
            },{
                id:4,
                text:'mi vr bcrjbrc'
            },

        ]
    }
]

const listsReducer = (state=initialState,action)=>{
    switch(action.type) {
        case 'ADDCARD':
            const newCard={
                text:action.payload.text,
                id:cardId+=1
            }
         const newState=   state.map(list=>{
               if( list.id ===action.payload.listId){
                  return {
                   ...list,
                   cards:[...list.cards,newCard]
                  }
               }
            })
            return newState
        case 'ADDLIST':
            const newList ={
                title:action.payload,
                id:ListId,
                cards:[],
            }
            ListId+=1
            return [...state,newList]
        default:
            return state
    }
}
export default listsReducer
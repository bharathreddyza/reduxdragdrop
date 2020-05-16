 export const CONSTANTS = {
    ADDCARD:"ADDCARD",
    ADDLIST:"ADDLIST"
}

export const addList =(title)=>{
    return{
       type:  "ADDLIST",
       payload:title
    }
}

export const addCard =(listId, text) =>{
    return{
        type:"ADDCARD",
        payload:{text,listId}
    }
}
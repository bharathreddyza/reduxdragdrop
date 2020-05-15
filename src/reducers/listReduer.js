
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
    }
]

const listsReducer = (state=initialState,action)=>{
    switch(action.type) {
        default:
            return state
    }
}
export default listsReducer
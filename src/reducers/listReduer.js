
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
        default:
            return state
    }
}
export default listsReducer
const initialState = {
    taskList: [{ id: 1, text: "Task 1", isCompleted: false },
    { id: 2, text: "Task 2", isCompleted: false },
    { id: 3, text: "Task 3", isCompleted: false }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                taskList: [...state.taskList, action.payload]
            };
        case 'REMOVE_ITEM':
            return {
                taskList: state.taskList.filter((element) => element.id !== action.payload)
            };
        case 'COMPLETE_ITEM':
            return {

                taskList: state.taskList.map((element)=> (element.id===action.payload) ? 
                                                        ({...element, isCompleted : !element.isCompleted})
                                                         : (element)
                                                         
                                                         )
            };
        default: return state;
    }
}
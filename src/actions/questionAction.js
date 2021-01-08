export const addNewQuestion = (question) =>{
    return {
        type:'ADD_QUESTION',
        payload:question
    }
}
export const importQuestion = (question) =>{
    return {
        type:'IMPORT_QUESTION',
        payload:question
    }
}
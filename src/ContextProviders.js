
import React, { createContext,useState } from "react";
import { useEffect } from "react";
import firebase from './firebase/Firebase'
const db = firebase.firestore()
export const RootContext = createContext();
export const MainProviders = ({children}) =>{
    const [dataQuestions,setDataQuestions] = useState([])
    const uploadDB = async (questions) =>{
        for (let question of questions) {
            db.collection('questions').add(question)
        }
    }
    useEffect( async () => {
        await db.collection('questions').orderBy('topic', 'asc').onSnapshot((data)=> { 
            setDataQuestions(data.docs.map(doc => ({
              ...doc.data(),
            })))
          })
    }, [dataQuestions])
    const importQuestion = async (questions) => {
        setDataQuestions(dataQuestions.concat(questions))
       uploadDB(questions)  
    }
    return (
        <RootContext.Provider 
            value={{
                dataQuestions,
                setDataQuestions,
                importQuestion
            }}
        >
            {children}
        </RootContext.Provider>
    )
}
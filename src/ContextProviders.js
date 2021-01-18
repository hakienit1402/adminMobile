import React, { createContext, useEffect, useState } from "react";
import firebase from "./firebase/Firebase";
const db = firebase.firestore();
export const RootContext = createContext();
export const MainProviders = ({ children }) => {
  const [dataQuestions, setDataQuestions] = useState([]);
  const [dataUsers,setDataUsers]= useState([])
  const [countUser,setCountUser] = useState(0)
  const [countLogin,setCountLogin] = useState(0)
  const [countExam,setCountExam] = useState(0)
  const [countQuestions,setCountQuestions] = useState(0)
  const uploadDB = async (questions) => {
    for (let question of questions) {
      db.collection("questions").add(question);
    }
  };
  useEffect(() => {
    db.collection("questions").orderBy('language').onSnapshot((data) => {
      setDataQuestions(
        data.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
      setCountQuestions(data.docs.length)
    });
  }, [dataQuestions]);
  useEffect(() => {
    db.collection("users").onSnapshot((data) => {
      setDataUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
      setCountUser(data.docs.length)
    });
  }, [])
  useEffect(() => {
    db.collection("users").where('stateLogin','==',true).onSnapshot((data) => {
      setCountLogin(data.docs.length)
    });
  }, [])
  useEffect(() => {
    db.collection("users").where('stateExam','==',true).onSnapshot((data) => {
      setCountExam(data.docs.length)
    });
  }, [])
  const importQuestion = (questions) => {
    setDataQuestions(dataQuestions.concat(questions));
    uploadDB(questions);
  };
  return (
    <RootContext.Provider
      value={{
        dataQuestions,
        setDataQuestions,
        importQuestion,
        countUser,
        countLogin,
        countExam,
        countQuestions
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

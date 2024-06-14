import { Box, Typography } from "@mui/material";
import BAFooter from "../Layout/BAFooter";
import BAHeader from "../Layout/BAHeader";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useParams } from "react-router-dom";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "../config/firebaseconfig";
import { useEffect, useState } from "react";
import "./Home.css";

export default function Question() {
  const params = useParams();
  const [question, setQuestion] = useState<any>();

  const db = getDatabase(app);

  const getData = (nodeName: string, id?: any) => {
    const reference = ref(db, `${nodeName}/${id ? id : ""}`);
    onValue(reference, (dt) => {
      const questionsData = dt.val();
      if (questionsData) {
        const questionsArray = Object.keys(questionsData).map(key => ({
          id: key,
          questionText: questionsData[key].question
        }));
        
        const question = questionsArray!=null && questionsArray.find((x)=>x.id === params.id)
        // console.log(question);
        setQuestion(question);
      }
    });
  }

  useEffect(() => {
    getData("questions");
    
  }, []);
 

  return (
    <>
      <BAHeader />

      <Box className="card">
          <QuestionMarkIcon fontSize="large" />
     
        <Typography className="fs-1">{question!=null ? question.questionText: "No data"}</Typography>
      </Box>
      <BAFooter />
    </>
  );
}

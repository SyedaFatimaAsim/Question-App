import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import BAFooter from "../Layout/BAFooter";
import BAHeader from "../Layout/BAHeader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../config/firebaseMethods";
import BAButton from "../components/BAButton";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import app from "../config/firebaseconfig";
import { styled } from '@mui/material/styles';


export default function AllQuestion() {
  const [allQuestions, setAllQuestions] = useState<any>([]);

  const navigate = useNavigate();

  const getQuestions = () => {
    getData("questions");
    console.log();
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

  useEffect(() => {
    getQuestions();
    
  }, []);

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
        setAllQuestions(questionsArray);
      }
    });
  }

  return (
    <>
      { <BAHeader /> }
      <Stack spacing={2}>
        {allQuestions &&
          Array.isArray(allQuestions) &&
          allQuestions.length > 0 &&
          allQuestions.map((x, i) => (
           <Item>
            {x.questionText}
            <Button
              onClick={() => {
                {console.log(allQuestions)}
                navigate(`/question/${x.id}`);
              }}
              
              key={i}
            >
              {/* <Typography >{x.questionText}</Typography> */}
            </Button>
            </Item>
           
          ))}
      </Stack>
      <BAFooter />
    </>
  );
            }
       
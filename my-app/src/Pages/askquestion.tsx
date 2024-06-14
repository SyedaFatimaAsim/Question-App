import { Box } from "@mui/material";
import BAFooter from "../Layout/BAFooter";
import BAHeader from "../Layout/BAHeader";
import BATextarea from "../components/BATextArea";
import BAButton from "../components/BAButton";
import { useState } from "react";
import { sendData } from "../config/firebaseMethods";

export default function AskQuestion() {
  const [question, setQuestion] = useState("");

  const addData = () => {
    let obj = {
      question: question,
      createdAt: JSON.stringify(new Date()),
    };

    sendData("questions", obj);
  };

  return (
    <>
      <BAHeader />
      <Box className="container p-3">
        <Box>
          <BATextarea
            value={question}
            onChange={(e: any) => {
              setQuestion(e.target.value);
            }}
            label="Ask Question"
          />
          <Box className="py-3">
            <BAButton onClick={addData} label="Submit" />
          </Box>
        </Box>
      </Box>
      <BAFooter />
    </>
  );
}

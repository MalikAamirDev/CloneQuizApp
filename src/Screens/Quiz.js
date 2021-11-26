import React, { useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import NavMenu from "../components/NavMenu";

export default function QuizBox() {
  const state = useSelector((state) => state);
  const [questionInd, setQuestionInd] = useState(0);
  const [marks, setMarks] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const nextQuestion = () => {
    if (state.question.length - 1 === questionInd) {
      setShowResult(true);
    } else {
      setQuestionInd(questionInd + 1);
    }
  };

  const checkAnswer = (cAns, user) => {
    if (cAns === user) {
      setMarks(marks + 1);
      nextQuestion();
    } else {
      nextQuestion();
    }
  };

  console.log(marks);

  return (
    <>
    <NavMenu />
      {showResult ? (
        <Typography variant="h4" sx={{ fontWeight: 700}} color="initial">
          Marks: {(marks / 10) * 100}%
        </Typography>
      ) : (
        <Grid>
          <Grid container spacing={0}>
            <Grid xs={12} sm={12} md={12} lg={12}>
              <Typography variant="h5" sx={{py: 5, fontWeight: 700}} color="initial">
                {state.question[questionInd].question}
              </Typography>
            </Grid>

            {state.question[questionInd].option.map((e, i) => {
              return (
                <>
                  <Grid sx={{p: 3}} key={i} xs={6} sm={6} md={6} lg={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        checkAnswer(state.question[questionInd].answer, e)
                      }
                    >
                      {e}
                    </Button>
                  </Grid>
                </>
              );
            })}
            

            <Grid
             xs={12}
             sm={12}
             md={12}
             lg={12}
            >
            <Button
                variant="outlined"
                color="primary"
                onClick={()=>nextQuestion()}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}

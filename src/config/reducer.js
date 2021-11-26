const INITIAL_sTATE = {
  userName: "Malik Aamir",
  question: [
    {
      id: 1,
      question: "React is mainly used for building ___.",
      option: ["Database", "Conectivity", "User Interface", "Design Platform"],
      answer: "User Interface",
    },
    {
      id: 2,
      question: "React.js is a free and open-source front-end ...",
      option: [
        "JavaScript library",
        " Bootstrap library",
        "CSS library",
        " None of the Above",
      ],
      answer: "JavaScript library",
    },
    {
      id: 3,
      question: "React.js was Initially released in ...",
      option: [
        "May 29, 2013",
        "April 29, 2013",
        " June 29, 2013",
        " May 29, 2014",
      ],
      answer: "May 29, 2013",
    },
    {
      id: 4,
      question: " React.js had Written in ........",
      option: ["JavaScript", " Python", " Java", " Php"],
      answer: "JavaScript",
    },
    {
      id: 5,
      question: "............ is used in React.js to increase performance?",
      option: [
        "Virtual DOM",
        "Original DOM",
        " Both above",
        "Nove of the Above",
      ],
      answer: "Virtual DOM",
    },
    {
      id: 6,
      question: "What is Babel?",
      option: [
        "JavaScript transpiler",
        "JavaScript Compiler",
        "JavaScript interpreter",
        " None of the above",
      ],
      answer: "JavaScript Compiler",
    },
    {
      id: 7,
      question: "Which of the following command is used to create a react app?",
      option: [
        "install -g create-react-app",
        "npm install create-react-app",
        "npm install -g create-react-app",
        " None of the Above",
      ],
      answer: "npm install create-react-app",
    },
    {
      id: 8,
      question:
        "........... port is the default where the webpack-dev-server will run.",
      option: [" 3030", " 8080", "3306", " 3000"],
      answer: " 8080",
    },
    {
      id: 9,
      question: "A valid react component can return only ......... element.",
      option: [2, 3, 1, 4],
      answer: 1,
    },
    {
      id: 10,
      question: "A state in React.js is also known is ........",
      option: [
        "permanent storage.",
        "Internal storage of the component.",
        "External storage of the component.",
        " All of the above",
      ],
      answer: "Internal storage of the component.",
    },
  ],
};

const reducer = (state = INITIAL_sTATE) => state;

export default reducer;

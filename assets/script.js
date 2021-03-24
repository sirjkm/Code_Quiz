var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
    {
        question: "What does HTML stand for?",
        a: "Hot Tacos Make Life",
        b: "Hypertext Markup Language",
        c: "Have the money, Lance!",
        answer: "B"
    },
    {
        question: "How much maths do you know?",
        a: "A lot!",
        b: "I can hold my own with my iPhone close by",
        c: "Who is maths?",
        answer: "C"
    },
    {
        question: "Mac or PC?",
        a: "Mac",
        b: "PC",
        c: "The Stone Tablets of Moses",
        answer: "A"
    },
    {
        question: "Fixing mistakes in a program is called?",
        a: "Sequencing",
        b: "Looping",
        c: "Debugging",
        answer: "C"
    }
    ];

function get(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    pos = 0;
    correct = 0;
    return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    test.innerHTML = "<h3>"+question+"</h3>";

    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
        choice = choices[i].value;
    }
    }

    if(choice == questions[pos].answer){
    correct++;
    }

    pos++;

    renderQuestion();
}

window.addEventListener("load", renderQuestion);
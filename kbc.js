var question_list = ["1).How many continents are there?", "2).What is the capital of India?", "3).NG mei kaun se course padhaya jaata hai?"]
var options_list = [
    ["A.Four", "B.Nine", "C.Seven", "D.Eight"],
    ["A.Chandigarh", "B.Bhopal", "C.Chennai", "D.Delhi"],
    ["A.Software Engineering", "B.Counseling", "C.Tourism", "D.Agriculture"]
]
var solution_list = [3, 4, 1]
var answer = [
    ["3.seven ", "4.Eight"],
    ["3.chennai", "4.delhi"],
    ["1.software engineering", "2.counseling"]
]
var readlinesync = require("readline-sync")
var i = 0
var c = 0
var count = 0
while (i < question_list.length) {
    console.log(question_list[i])
    var j = 0
    while (j < options_list.length) {
        console.log(options_list[i][j])
        j++
    }
    var life_line = readlinesync.question("do you want life line?")
    if (life_line == "yes") {
        if (c < 1) {
            console.log(answer[i])
            ans = readlinesync.questionInt("enter the answer")
            if (ans == solution_list[i]) {
                count += 5000
                console.log("your answer is correct")
                console.log("you win rupise", count)
            } else {
                console.log("your answer is wrong")
                console.log("you win rupise", count)
                break
            }
            c++
        } else {
            console.log("you already use life-line")
            ans = readlinesync.questionInt("enter your answer")
            if (ans == solution_list[i]) {
                console.log("correct answer")
                count += 5000
                console.log("you win repise", count)
            } else {
                console.log("answer is wrong")
                console.log("you win repise", count)
                break
            }
        }
    } else {
        ans = readlinesync.questionInt("enter your answer")
        if (ans == solution_list[i]) {
            count += 5000
            console.log("your answer is correct")
            console.log("you win rupise", count)
        } else {
            console.log("your answer is wrong")
            console.log("you win rupise", count)
            break
        }
    }
    i++
}
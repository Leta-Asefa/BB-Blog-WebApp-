import { useState } from "react"



export default function Questions({questions}) {


    questions.map((question) => {
        <center>
            <div>{question.title}</div>
            <div>{question.option1}</div>
            <div>{question.option2}</div>
            <div>{question.option3}</div>
            <div>{question.option4}</div>
        </center>
    }
    )
}

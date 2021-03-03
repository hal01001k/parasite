import React from 'react';
import {containLg,lb,lb1} from "./StyleAtt";
import { ListGroup, ListGroupItem } from 'reactstrap';
import students from './data'
function LeaderBoard(){
    return(
        <div style={containLg}>
            <div style={lb}>
                <h2>LeaderBoard - Student Data Ranked as per Marks</h2>
            </div>
            <div style={lb1}>
                <ListGroup flush>
                {students.map((students, index) => (
                    <ListGroupItem key={index} >
                        <p>
                        Rank: {index + 1}
                        <h3>{students.name}</h3>
                        Total Marks: {students.total} | Percentage : {students.percentage}
                        </p>
                    </ListGroupItem>
                ))}
                </ListGroup>
            </div>


        </div>
    )
}
export default LeaderBoard;

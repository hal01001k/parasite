import React from 'react'
import {containLg, hm} from "./StyleAtt";
import {Button, ButtonGroup} from "reactstrap";

function Home (){
    return (
        <div style={containLg}>
            <div style={hm}>
            <Button href='/enter'>Enter Marks</Button> &nbsp;&nbsp;&nbsp;
                <Button href='/leaderboard'>Leaderboard</Button>
            </div>
        </div>
    )
}
export default Home

import React,{Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import LeaderBoard from "./LeaderBoardComponent";
import EnterMarks from "./EnterMarksComponent";
import Home from "./HomeComponent";
class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={ Home}/>
                    <Route path ="/enter" component={ EnterMarks } />
                    <Route path ='/leaderboard' component={ LeaderBoard }/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}
export default Main;

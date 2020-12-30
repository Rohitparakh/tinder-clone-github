import React from 'react'
import './App.css';
import Header from './Header';
import Cards from './Cards';
import Liked from'./Liked';
import {Switch, Route } from 'react-router-dom';
import AdvancedCard from "./AdvancedCard";


function App() {
  
  var likedList=[];
const updateLikes=(newLikes)=>{
 likedList=newLikes;
}
var peopleWithoutLike=[];
const peopleWithoutLikeUpdater=(peopleWithoutLikes)=>{
peopleWithoutLike=peopleWithoutLikes
}

var unlikedList=[];
const updateUnlikes=(newUnlikes)=>{
 unlikedList=newUnlikes;
//  let unique=[];
   
  //  if(unlikedList){ unlikedList.forEach((val)=>{
  //       if(!unique.includes(val.name)){
  //           unique.push(val)
  //       }
  //   })
  //   unlikedList=unique
  //   console.log(unique)
  // }
}
  return (
    <div>
      
 
    <Header/>
    <Switch><Route exact path="/tinder-clone" render={()=><AdvancedCard likedList={likedList} updateLikes={updateLikes} unlikedList={unlikedList} updateUnlikes={updateUnlikes} peopleWithoutLike={peopleWithoutLike} peopleWithoutLikeUpdater={peopleWithoutLikeUpdater}/>}/>
  {/* <Route exact path="/basic" render={()=><Cards likedList={likedList} updateLikes={updateLikes}/>}/> */}

  <Route exact path="/liked" render={()=><Liked likedList={likedList}/>}/>
  </Switch>
    
 
    </div>
  );
}

export default App;

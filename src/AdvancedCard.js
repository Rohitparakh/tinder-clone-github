//not registering like in peoplewithoutlike when swiping in unliked list

import React, { useState, useMemo, useEffect } from 'react'
import './Cards.css';
import TinderCard from 'react-tinder-card'
import Swipe from './Swipe';
import './Swipe.css'
const db = [
  {id:1,name:"Ariana Grande",
  imgUrl:"https://vignette.wikia.nocookie.net/wherearetheavocados/images/2/20/ArianaGrande.jpg/revision/latest?cb=20200612210229"},
    
    {id:2,
        name:"Hilda Ross",
    imgUrl:"https://woman-ukraine.com/wp-content/uploads/2019/06/Ukrainian-women-for-marriage.jpg"},

    {id:3,name:"Taya Bauch",
    imgUrl:"https://tse3.mm.bing.net/th?id=OIP.j9mqS3cEWYrTQkpt8K8XZwHaLH&pid=Api&P=0&w=300&h=300"},

    {id:4,name:"Karen Ortiz",
    imgUrl:"https://tse3.mm.bing.net/th?id=OIP.zEnMNkSd1GoODrCwt5IdJgHaKS&pid=Api&P=0&w=300&h=300"},

    {id:5,name:"Sarina Walter",
    imgUrl:"https://www.theskinnybeep.com/wp-content/uploads/2011/09/Albino-Spring-Summer-2012-Women-Fashion-Show-Catwalk-Milan-Fashion-Albino-ss-2012-Women.jpg"},

    {id:6,name:"Marcella Kohler",
    imgUrl:"http://lifearoundasia.com/wp-content/uploads/2017/03/kazakhstan-women.jpg"},

    {id:7,name:"Marian Schumm",
    imgUrl:"https://www.theskinnybeep.com/wp-content/uploads/2014/09/Fendi-Women-s-Collection-2015.jpg"},

    {id:8,name:"Hettie Walsh",
    imgUrl:"https://tse1.mm.bing.net/th?id=OIP.QJRuDig0YDPYZcOdQtUsbQHaHa&pid=Api&P=0&w=300&h=300"},

    {id:9,name:"Kaylah McKenzie",
    imgUrl:"https://www.womenofgrace.com/blog/wp-content/uploads/2016/04/woman-praying-bw.jpg"},

    {id:10,name:"Aisha Considine",
    imgUrl:"https://tse1.mm.bing.net/th?id=OIP.WLb5fG8X0K7aw4YG0FBJqQHaLH&pid=Api&P=0&w=300&h=300"},
  

]

const alreadyRemoved = []
let peopleState = db // This fixes issues with updating people state forcing it to use the current state and not the state that was active when the card was created.

function AdvancedCard (props) {
    
    useEffect(() => {
      
        setLiked(props.likedList);
        setUnliked(props.unlikedList);
       
      
       if(props.peopleWithoutLike.length!==0){ 
console.log(props.peopleWithoutLike);
props.peopleWithoutLikeUpdater(peopleWithoutLike)
}
if(unlikedList.length===0){
  if(likedList.length!==0){
    setRender(props.peopleWithoutLike)

  }
  else{
  setRender(people)
  }
}
else{
  setRender(unlikedList)
}
      },[])

var peopleWithoutLike=db;

      
    var [liked, setLiked] = useState([]);
    var [unliked, setUnliked] = useState([]);
    var [unlikedNames, setUnlikedNames] = useState([]);
    unliked.forEach((val)=>{
      if(!unlikedNames.includes(val.name)){
        unlikedNames.push(val.name)
      }
      // console.log(unlikedNames)
    })
    unliked = unliked.filter((unliked, index, self) =>
    index === self.findIndex((t) => (
        t.name === unliked.name
    ))
)

var [render,setRender]=useState([]);
    

  var [people, setPeople] = useState(db);
if(people.length===0){
  if(unliked.length!==0){
    setPeople(unliked)
  }else{
    setPeople(db)
  }
}

var likedList=props.likedList;
if (props.likedList.length===0){
      likedList=liked;
      }



  var likedPeople=[]
likedList.forEach((val)=>{
  likedPeople.push(val.name)
})

likedPeople.forEach((val)=>{
  peopleWithoutLike=peopleWithoutLike.filter((v)=>{
    return v.name!==val
  })
  console.log(likedPeople)
})
 if(peopleWithoutLike){
 peopleWithoutLike.filter((person, index, self) =>
    index === self.findIndex((t) => (
        t.name !== person.name
    ))
    )}
props.peopleWithoutLikeUpdater(peopleWithoutLike)
console.log(peopleWithoutLike);


var unlikedList=props.unlikedList;
if (props.unlikedList.length===0){
  unlikedList=unliked;
  }


var unlikedPeople=[]
unlikedList.forEach((val)=>{
  unlikedPeople.push(val.name)
})

  
  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])
  var unlikedNew
  const swiped = (direction, nameToDelete,index,imgUrl) => {
         alreadyRemoved.push(nameToDelete);
         if(direction==="right"){
            setLiked((prev)=>{
         return [...prev,{id:prev.length,imgUrl:imgUrl,name:nameToDelete}];
        });
       
      
      //  props.unlikedList.forEach((val=>{
         unlikedNew=unliked.filter((v)=>{
           return v.name!==nameToDelete
         })
// console.log(unlikedNew);
         callUnlikeUpdater(unlikedNew)
      //  }))
      
          // console.log(people);
      }
      if(direction==="left"){
        setUnliked((prev)=>{
     return [...prev,{id:prev.length,
      imgUrl:imgUrl,
      // imgUrl: db[index].imgUrl,
      name:nameToDelete}];
    })
  // console.log(index)
   
 
  
}
  }

  const outOfFrame = (name) => {
    peopleState = peopleState.filter(person => person.name !== name)
    // setPeople(peopleState)
  }

  const swipe = (dir) => {
    var cardsLeft = people.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      var toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      var index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
    //  console.log(childRefs[index]);
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  

  const callLikeUpdater=(like)=>{
    props.updateLikes(like);
  }

callLikeUpdater(liked);

const callUnlikeUpdater=(unlike)=>{
  props.updateUnlikes(unlike);
}

callUnlikeUpdater(unliked);

  return (
    <>
      <div className='cards'>
      <div className="card swiped">
       <div className="swipedInner">
         <h1>You have swiped through everyone we have!</h1>
         <p>Refresh to swipe more people!</p>
            </div>
            </div>
        {render.map((person, index) =>
          <TinderCard ref={childRefs[index]} className='card' key={person.id} onSwipe={(dir) => swiped(dir, person.name,person.id,person.imgUrl)} onCardLeftScreen={() => outOfFrame(person.name)}>
            <img src={person.imgUrl}/>
              <h3>{person.name}</h3>
            
          </TinderCard>
        )
        }

      
        
      </div>
      <Swipe left={() => swipe('left')} right={() => swipe('right')}/>

    
      {/* {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>} */}
    </>
  )
}
export default AdvancedCard;
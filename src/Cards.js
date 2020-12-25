import React, { useState,useMemo,useEffect} from 'react';
import './Cards.css';
import TinderCard from 'react-tinder-card';
import Swipe from './Swipe';


// const LikedList = createContext();
function Cards(props) {

  useEffect(() => {
    setLiked(props.likedList);
    likedPeople.forEach((val)=>{
      people=people.filter((v)=>{
        return v.name!==val
      })
    })
  },[])
  
  
  var likedList=props.likedList;
 
 
 
  const swipeLeft=()=>{
    swipe('left');
  }
  const swipeRight=()=>{ 
    swipe('right');
    // console.log('right');

  }
const callLikeUpdater=(like)=>{
  props.updateLikes(like);
}
  const alredyRemoved = []



    const [liked, setLiked] = useState([]);
    if (props.likedList.length===0){
      likedList=liked;
      }
    var [people,setPeople]=useState([
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
        {id:1,
            name:"Ariana Grande",
        imgUrl:"https://vignette.wikia.nocookie.net/wherearetheavocados/images/2/20/ArianaGrande.jpg/revision/latest?cb=20200612210229"}
]);

var likedPeople=[]
likedList.forEach((val)=>{
  likedPeople.push(val.value)
})
// console.log(likedPeople);

// likedPeople.forEach((val)=>{
//   people=people.filter((v)=>{
//     return v.name!==val
//   })
// })
// console.log(typeOf());
// console.log(people);
  // var unlikedPeople=[];
  //      if (likedList!=undefined){ 
  //        for (var i = 0; i < likedList.length; i++){  
  //        unlikedPeople=people.filter(function(e){
  //          return e.name!=likedList[i]
  //        })

  //      }}
  //      console.log(unlikedPeople);

const childRefs = useMemo(() => Array(people.length).fill(0).map(i => React.createRef()), [])

const swiped=(dir,name)=>{
  if(dir==="right"){
      setLiked((prev)=>{
   return [...prev,{id:prev.length,value:name}];
  });
}}
   
var cardsLeft=[];
const swipe = (dir) => {
  // console.log(dir);
  // console.log(people);
   cardsLeft = people.filter(person => !alredyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = people.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alredyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      console.log(childRefs[index].current);
      childRefs[index].current.swipe(dir) // Swipe the card!
      swiped(dir,toBeRemoved)
      // console.log(toBeRemoved);
    }
  }
callLikeUpdater(liked);
 
       

      //  const onSwipe = (direction,person) => {
        // direction => swiped(direction, person.name)
      // }


      const onCardLeftScreen = (myIdentifier) => {
        // console.log(myIdentifier + ' left the screen')
      }

    return (
       <>
      
       <div className="cards">
       <div className="card swiped">
       <div className="swipedInner">
         <h1>You have swiped through everyone we have!</h1>
         <p>Refresh to swipe more people!</p>
            </div>
            </div>
           
            
       {
       (people.length=== 0 )? "" : people.map((person,index)=>
         { 
                return <TinderCard 
                ref={childRefs[index]}
                key={person.id}
                className="card"
                onSwipe={(direction)=>swiped(direction,person.name)}
                onCardLeftScreen={() => onCardLeftScreen(person.name)}
                preventSwipe={['up', 'down']}>
            
                    <h3>{person.name}</h3>
                    <img src={person.imgUrl} alt=""/>
                   
           </TinderCard>
         })
            }
           
        </div>
        <Swipe left={()=>{swipe('left');}} right={()=>{swipe('right');}}/>
        </>
    )

}

export default Cards;
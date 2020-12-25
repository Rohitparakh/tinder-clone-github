import React from 'react';
import './Liked.css';
// import ChatIcon from '@material-ui/icons/Chat';



const Liked=(props)=>{
    var likedList=props.likedList;
    likedList=likedList.filter((thing, index, self) =>
    index === self.findIndex((t) => (
        t.name === thing.name
    )))
    console.log(likedList);
    var likedPeople=[]
    // likedList.forEach((val)=>{
    // likedPeople.push(val)
    // })
   
    // let unique=[];
   
    // likedPeople.forEach((val)=>{
    //     if(!unique.includes(val)){
    //         unique.push(val)
    //     }
    // })

    // likedList.forEach((val)=>{
    //     if(!unique.name.includes(val.name)){
    //         unique.push(val)
    //     }
    // })

    return (
//     <ul className={unique.length===0?'':'likedList'}>
// {unique.map((val,i)=>{
//     return <li key={ i }> { val }</li>
// })}
//     </ul>
<>
<h4 className="likedHeader">People You Liked</h4>
<div className="likedCards">
{likedList.map((val,i)=>{
    return (
<div key={i} className="likedCard">
<img src={val.imgUrl}
 alt="image"/>
 <h4>{val.name}</h4>
 </div>
 )
})}
</div>
  </>
    );
}

export default Liked;
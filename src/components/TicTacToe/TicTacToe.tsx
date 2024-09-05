'use client'
import React, { MutableRefObject, useRef, useState } from 'react'
import './Game.css'
import circle_icon from '@/components/Assets/circle.png'
import cross_icon from '@/components/Assets/cros1s.png'
let data=["","","","","","","","",""]

const TicTacToe=()=>{
let [count,setCount]=useState(0);
let [lock,setLock]=useState(false)
let titleRef=useRef<HTMLHeadingElement>(null);
let box1=useRef<HTMLDivElement>(null)
let box2=useRef<HTMLDivElement>(null)
let box3=useRef<HTMLDivElement>(null)
let box4=useRef<HTMLDivElement>(null)
let box5=useRef<HTMLDivElement>(null)
let box6=useRef<HTMLDivElement>(null)
let box7=useRef<HTMLDivElement>(null)
let box8=useRef<HTMLDivElement>(null)
let box9=useRef<HTMLDivElement>(null)
let box_array: React.RefObject<HTMLDivElement>[]=[box1,box2,box3,box4,box5,box6,box7,box8,box9]
const toggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,num:number)=>{
  if(lock){
    return 0;
  }
  if(count%2===0){
    e.currentTarget.innerHTML =`<img src='${cross_icon.src}'>`;
    data[num]="x";
    setCount(++count)
  }
else{
  e.currentTarget.innerHTML =`<img src='${circle_icon.src}'>`;
  data[num]="o";
  setCount(++count)
}     checkWin()

  }
  const checkWin=()=>{
    if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
      win(data[2])
  }
  else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){
    win(data[5])
  }
  else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){
    win(data[8])
} else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){
  win(data[6])
} else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){
  win(data[7])
} else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){
  win(data[8]) 
} else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){
  win(data[8])
} else if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
  win(data[2])
} else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!==""){
  win(data[6])
}
  }
    const win=(winner: string)=>{
      setLock(true);
      if (titleRef.current?.innerHTML!=undefined) {
        if(winner==="x"){
          titleRef.current.innerHTML=`Congratulations: <img src=${cross_icon.src} > Wins`
        }else 
        {
          titleRef.current.innerHTML=`Congratulations: <img src=${circle_icon.src}> Wins`
       }
      }
    }
    const reset =()=>{
      setLock(false)
      data =["","","","","","","","",""];
      if (titleRef.current?.innerHTML!=undefined) {
        titleRef.current.innerHTML='Tic Tac Toe Game In <span>React</span>'
      }      
      box_array.map((e)=>{
        if (e.current?.innerHTML!=undefined){
          e.current.innerHTML = ""
        }
      })
    }
  return (
    <>
    <div className='container'>
            <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span className='text-emerald-600'>React</span>
           </h1>
        <div className='board'>
          <div className='row1'>
            <div className='boxes' ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
            <div className='boxes' ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
            <div className='boxes' ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className='row2'>
            <div className='boxes' ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
            <div className='boxes' ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
            <div className='boxes' ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className='row3'>
            <div className='boxes' ref={box7} onClick={(e)=>{toggle(e,6)}}></div> 
            <div className='boxes' ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
            <div className='boxes' ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
        </div>
       </div>
           <button className='reset' onClick={()=>{reset()}}>Reset</button>
  </div></>
  )
}

export default TicTacToe

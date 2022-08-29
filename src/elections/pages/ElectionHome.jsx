import { Typography } from "@mui/material"

import { ElectionsLayout } from "../layout/electionsLayout"
import './estilos.css'

const items = {...localStorage}
//console.log({items})
export const ElectionHome = () => {
//   const  randomNum = (max) => {
//   return Math.floor(Math.random() * Math.floor(max));
// }

//   const  createBall = () =>{
//   let ball = document.createElement("div");
//   ball.className = "ball";
//   ball.style.backgroundColor = "rgb(" + randomNum(255) + "," + randomNum(255) + "," + randomNum(255) + ")";
//   ball.style.top = randomNum(570) + "px";
//   ball.style.left = randomNum(1080) + "px";
//   ball.addEventListener("animationend", function(event){
//     document.body.removeChild(event.target);
//   });
//   document.body.appendChild(ball);
// }

// setInterval(createBall, 300);

  return (
    <ElectionsLayout>
      <Typography align='center' variant='h6'>Home</Typography>
    </ElectionsLayout>
  )
}

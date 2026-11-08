
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaPlay, FaPause } from "react-icons/fa";

import song from "../assets/music/song.mp3";


function Gallery() {


  const memories = [

    {
      image:"/src/assets/images/image1.jpg",
      date:"05 December 2026",
      title:"Where It All Began ❤️",
      text:"Two hearts met and a beautiful journey started."
    },

    {
      image:"/src/assets/images/image2.jpg",
      date:"05 December 2026",
      title:"Beautiful Conversations ☕",
      text:"Every conversation created another memory."
    },

    {
      image:"/src/assets/images/image3.jpg",
      date:"06 December 2026",
      title:"A Promise Forever 💍",
      text:"A new chapter filled with love and happiness."
    },

    {
      image:"/src/assets/images/image4.jpg",
      date:"06 December 2026",
      title:"The Wedding Day ✨",
      text:"Our forever begins surrounded by blessings."
    },
     {
      image:"/src/assets/images/image5.jpg",
      date:"06 December 2026",
      title:"The Wedding Day ✨",
      text:"Our forever begins surrounded by blessings."
    },
     {
      image:"/src/assets/images/image6.jpg",
      date:"06 December 2026",
      title:"The Wedding Day ✨",
      text:"Our forever begins surrounded by blessings."
    },
     {
      image:"/src/assets/images/image7.jpg",
      date:"06 December 2026",
      title:"The Wedding Day ✨",
      text:"Our forever begins surrounded by blessings."
    },
     {
      image:"/src/assets/images/image8.jpg",
      date:"05 December 2026",
      title:"The Wedding Day ✨",
      text:"Our forever begins surrounded by blessings."
    },
     {
      image:"/src/assets/images/image9.jpg",
      date:"06 December 2026",
      title:"The Wedding Day ✨",
      text:"Our forever begins surrounded by blessings."
    },
     {
      image:"/src/assets/images/image10.jpg",
      date:"06 December 2026",
      title:"The Wedding Day ✨",
      text:"Our forever begins surrounded by blessings."
    }

  ];



const [current,setCurrent]=useState(0);

const [playing,setPlaying]=useState(false);

const audioRef = useRef(null);



useEffect(()=>{

audioRef.current = new Audio(song);

audioRef.current.loop=true;


return ()=>{

audioRef.current.pause();

}

},[]);



useEffect(()=>{


const timer=setInterval(()=>{


setCurrent(
(prev)=>
(prev+1)%memories.length
);


},6000);



return ()=>clearInterval(timer);


},[]);





const toggleMusic=()=>{


if(playing){

audioRef.current.pause();

}

else{

audioRef.current.play();

}


setPlaying(!playing);


};




return (

<section id="gallery" className="cinematic-gallery">


<SectionTitle

subtitle="Memories"

title="Our Love Story"

 />



<div className="movie-frame">


{/* GOLD PARTICLES */}

<div className="gold-particles">

<span></span>
<span></span>
<span></span>
<span></span>
<span></span>

</div>



<AnimatePresence mode="wait">


<motion.img

key={current}

src={memories[current].image}

className="movie-image"


initial={{
opacity:0,
scale:1.25
}}

animate={{
opacity:1,
scale:1.05
}}

exit={{
opacity:0,
scale:1
}}


transition={{
duration:2
}}

/>


</AnimatePresence>




<div className="movie-overlay">


<motion.div

key={current}

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

>


<p className="memory-date">

{memories[current].date}

</p>


<h2>

{memories[current].title}

</h2>


<p>

{memories[current].text}

</p>


</motion.div>



<button
  className="music-btn"
  onClick={toggleMusic}
>
  {
    playing
    ?
    <FaPause/>
    :
    <FaPlay/>
  }

  {
    playing
    ?
    " Playing Our Story"
    :
    " Start Our Story"
  }

</button>


</div>


</div>


</section>


);


}


export default Gallery;
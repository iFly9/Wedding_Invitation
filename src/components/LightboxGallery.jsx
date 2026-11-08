
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";


function LightboxGallery() {


  const memories = [

    {
      image:"/src/assets/images/image1.jpg",
      title:"Beautiful Memories ❤️",
      text:"Every picture tells our story."
    },

    {
      image:"/src/assets/images/image2.jpg",
      title:"Together Forever 💍",
      text:"Moments we will cherish forever."
    },

    {
      image:"/src/assets/images/image3.jpg",
      title:"Our New Beginning ✨",
      text:"A beautiful journey starts here."
    },
     {
      image:"/src/assets/images/image4.jpg",
      title:"Our New Beginning ✨",
      text:"A beautiful journey starts here."
    },
     {
      image:"/src/assets/images/image5.jpg",
      title:"Our New Beginning ✨",
      text:"A beautiful journey starts here."
    },
     {
      image:"/src/assets/images/image6.jpg",
      title:"Our New Beginning ✨",
      text:"A beautiful journey starts here."
    },
     {
      image:"/src/assets/images/image7.jpg",
      title:"Our New Beginning ✨",
      text:"A beautiful journey starts here."
    },
     {
      image:"/src/assets/images/image8.jpg",
      title:"Our New Beginning ✨",
      text:"A beautiful journey starts here."
    }
    ,
     {
      image:"/src/assets/images/image9.jpg",
      title:"Our New Beginning ✨",
      text:"A beautiful journey starts here."
    },
     {
      image:"/src/assets/images/image10.jpg",
      title:"Our New Beginning ✨",
      text:"A beautiful journey starts here."
    }

  ];


  const [selected,setSelected]=useState(null);



  const closeLightbox=()=>{

    setSelected(null);

  };



  const nextImage=()=>{

    setSelected(
      (selected+1)%memories.length
    );

  };



  const previousImage=()=>{

    setSelected(
      (selected-1+memories.length)%memories.length
    );

  };



  useEffect(()=>{


    const handleKey=(e)=>{


      if(!selected)
        return;


      if(e.key==="Escape")
        closeLightbox();


      if(e.key==="ArrowRight")
        nextImage();


      if(e.key==="ArrowLeft")
        previousImage();


    };


    window.addEventListener(
      "keydown",
      handleKey
    );


    return()=>{

      window.removeEventListener(
        "keydown",
        handleKey
      );

    };


  },[selected]);




return (

<section className="container my-5">


<h2 className="section-title text-center">
Gallery
</h2>



<div className="row g-3 mt-3">


{
memories.map((item,index)=>(

<div
className="col-md-4"
key={index}
>


<motion.img

src={item.image}

className="gallery-img"

whileHover={{
scale:1.05
}}

transition={{
duration:.4
}}

onClick={()=>
setSelected(index)
}

alt="memory"

/>


</div>


))

}


</div>





<AnimatePresence>


{
selected !== null && (


<motion.div

className="luxury-lightbox"

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

onClick={closeLightbox}

>


<button
className="close-lightbox"
onClick={closeLightbox}
>
<FaTimes/>
</button>




<button

className="lightbox-prev"

onClick={(e)=>{

e.stopPropagation();

previousImage();

}}

>

<FaChevronLeft/>

</button>





<motion.div

className="lightbox-content"

initial={{
scale:.7,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

transition={{
duration:.6
}}

onClick={(e)=>e.stopPropagation()}

>



<img

src={memories[selected].image}

alt=""

/>


<div className="lightbox-caption">


<h3>

{memories[selected].title}

</h3>


<p>

{memories[selected].text}

</p>


<span>

{selected+1} / {memories.length}

</span>


</div>


</motion.div>





<button

className="lightbox-next"

onClick={(e)=>{

e.stopPropagation();

nextImage();

}}

>

<FaChevronRight/>

</button>



</motion.div>


)

}


</AnimatePresence>


</section>

);

}


export default LightboxGallery;
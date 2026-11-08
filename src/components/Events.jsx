import SectionTitle from "./SectionTitle";
import { FaRing, FaGlassCheers, FaHeart, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Events() {

  const events = [
    {
      icon: <FaHeart />,
      title: "Mehendi Ceremony",
      date: "04 December 2026",
      time: "6:00 PM",
      location: "Sri Sai Lilaranga Mandhira",
    },
    {
      icon: <FaRing />,
      title: "Wedding Ceremony",
      date: "06 December 2026",
      time: "07:00 AM",
      location: "Sri Sai Lilaranga Mandhira",
    },
    {
      icon: <FaGlassCheers />,
      title: "Reception",
      date: "05 December 2026",
      time: "7:00 PM",
      location: "Sri Sai Lilaranga Mandhira",
    },
  ];


  return (

<section id="events" className="container my-5">


<SectionTitle
 subtitle="Celebrate With Us"
 title="Wedding Events"
/>


<div className="row g-4 mt-4">


{
events.map((event,index)=>(


<div 
className="col-12 col-md-4"
key={index}
>


<motion.div

className="luxury-event-card"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7,
delay:index*.2
}}

viewport={{
once:true
}}

>


<div className="event-top-icon">

{event.icon}

</div>



<div className="event-date">

{event.date}

</div>



<h3>
{event.title}
</h3>


<div className="event-detail">

<FaClock/>

<span>
{event.time}
</span>

</div>



<div className="event-detail">

<FaMapMarkerAlt/>

<span>
{event.location}
</span>

</div>


<div className="event-ring">

💍

</div>


</motion.div>


</div>


))

}


</div>


</section>

  );
}


export default Events;
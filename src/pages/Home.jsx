
import React from "react";

import Navbar from "../components/Navbar";
import Countdown from "../components/Countdown";
import BrideGroom from "../components/BrideGroom";
import Story from "../components/Story";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Venue from "../components/Venue";
import ThemeToggle from "../components/ThemeToggle";
import MusicPlayer from "../components/MusicPlayer";
import ScrollProgress from "../components/ScrollProgress";
import FloatingHearts from "../components/FloatingHearts";
import RSVP from "../components/RSVP";
import WhatsAppShare from "../components/WhatsAppShare";
import LightboxGallery from "../components/LightboxGallery";
import ScrollTop from "../components/ScrollTop";

import { motion } from "framer-motion";


function Home() {


return (

<>

<ScrollProgress />

<FloatingHearts />


<Navbar />



{/* ================= HERO ================= */}

<div 
  id="home"
  className="hero"
>
  <div className="hero-overlay">

    <motion.div
      className="container text-center text-white hero-content"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition:{
            staggerChildren:0.25
          }
        }
      }}
    >

      <motion.h5
        className="sub-text"
        variants={{
          hidden:{opacity:0,y:30},
          visible:{opacity:1,y:0}
        }}
      >
        Together With Our Families
      </motion.h5>


      <motion.h1
        className="couple-name"
        variants={{
          hidden:{
            opacity:0,
            scale:.8
          },
          visible:{
            opacity:1,
            scale:1
          }
        }}
      >
        Kausalya ❤️ Raghav
      </motion.h1>


      <motion.p
        className="hero-description"
        variants={{
          hidden:{
            opacity:0,
            y:20
          },
          visible:{
            opacity:1,
            y:0
          }
        }}
      >
        We invite you to celebrate our wedding ceremony
      </motion.p>


      <motion.h4
        className="date-text"
        variants={{
          hidden:{
            opacity:0
          },
          visible:{
            opacity:1
          }
        }}
      >
        06 December 2026
      </motion.h4>



      <motion.div
        className="hero-buttons"
        variants={{
          hidden:{
            opacity:0,
            y:20
          },
          visible:{
            opacity:1,
            y:0
          }
        }}
      >

        <button className="btn btn-gold">
          View Invitation
        </button>


        <a 
          href="#rsvp"
          className="btn btn-outline-light"
        >
          RSVP
        </a>


      </motion.div>



      <motion.div
        className="scroll-indicator"
        animate={{
          y:[0,10,0]
        }}
        transition={{
          duration:2,
          repeat:Infinity
        }}
      >

        <a href="#story">

          <span className="mouse">
            <span className="wheel"></span>
          </span>

          <p>
            Scroll Down
          </p>

        </a>

      </motion.div>


    </motion.div>

  </div>

</div>




{/* ================= SECTIONS ================= */}



<Countdown />

<BrideGroom />

<Story />

<Events />

<Gallery />

<LightboxGallery />

<Venue />

<RSVP />



<WhatsAppShare />

<ScrollTop />


<MusicPlayer />

<ThemeToggle />



<a

className="whatsapp-btn"

href="https://wa.me/?text=You're invited to our wedding 💍"

target="_blank"

rel="noreferrer"

>

Share

</a>

<footer className="developer-credit">
  <p>Made with <span>♥</span> and care</p>

  <div>
    Designed & Developed by{" "}
    <a
      href="https://wedebug.in"
      target="_blank"
      rel="noopener noreferrer"
    >
      WeDebug.in
    </a>
  </div>

  <small>Creative Digital Experiences</small>
</footer>
</>



);

}


export default Home;

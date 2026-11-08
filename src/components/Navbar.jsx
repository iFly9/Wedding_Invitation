import { useEffect, useState } from "react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");


  useEffect(() => {


    const handleScroll = () => {


      setScrolled(window.scrollY > 80);


      const sections = [
        "home",
        "story",
        "events",
        "gallery",
        "rsvp"
      ];


      let current = "home";


      sections.forEach((id)=>{


        const section =
        document.getElementById(id);


        if(section){


          const top =
          section.offsetTop - 150;


          const bottom =
          top + section.offsetHeight;



          if(
            window.scrollY >= top &&
            window.scrollY < bottom
          ){

            current=id;

          }

        }


      });


      setActive(current);

    };



    window.addEventListener(
      "scroll",
      handleScroll
    );


    handleScroll();



    return ()=>{

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[]);




  const closeMenu=()=>{


    const menu =
    document.getElementById("menu");


    if(menu.classList.contains("show")){

      menu.classList.remove("show");

    }


  };





return (


<nav

className={`navbar navbar-expand-lg fixed-top royal-nav ${
scrolled ? "navbar-scrolled" : ""
}`}

>



<div className="container">



<a

className="navbar-brand"

href="#home"

>

<span>
💍
</span>

Wedding Invitation

</a>






<button

className="navbar-toggler"

type="button"

data-bs-toggle="collapse"

data-bs-target="#menu"

>

<span className="navbar-toggler-icon"></span>


</button>






<div

className="collapse navbar-collapse"

id="menu"

>


<ul className="navbar-nav ms-auto">


{
[
"home",
"story",
"events",
"gallery",
"rsvp"

].map((item)=>(


<li

className="nav-item"

key={item}

>


<a

href={`#${item}`}

onClick={closeMenu}

className={`nav-link ${
active===item ? "active": ""
}`}

>

{
item.charAt(0).toUpperCase()
+
item.slice(1)
}


</a>


</li>


))

}



</ul>


</div>



</div>


</nav>


);


}


export default Navbar;
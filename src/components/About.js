import React from "react";

function About({image,about}){
    const defaultImage="https://via.placeholder.com/215";
    const altAtrribute="blog logo";

    return(
        <aside>
            <img src={image || defaultImage} alt={altAtrribute}/>
            <p>{about}</p>
        </aside>
    )

}

export default About;
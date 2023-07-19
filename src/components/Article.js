import React from "react";

function Article({ title, date, preview, minutes }) {
    const defaultDate = "January 1, 1970";
    const displayReadTime = (minutes) => {
      const coffeeCup = "☕️";
      const bentoBox = "🍱";
      let readTimeIndicator = "";
  
      if (minutes < 30) {
        const coffeeCups = Math.ceil(minutes / 5);
        readTimeIndicator = coffeeCup.repeat(coffeeCups) + " ";
      } else {
        const bentoBoxes = Math.ceil(minutes / 10);
        readTimeIndicator = bentoBox.repeat(bentoBoxes) + " ";
      }
  
      return readTimeIndicator + minutes + " min read";
    };
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date || defaultDate}</small>
        <p>{preview}</p>
        <small>{displayReadTime(minutes)}</small>
        
      </article>
    );
  }
  
  export default Article;
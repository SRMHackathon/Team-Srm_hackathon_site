import {useState} from "react";
import "../index.css";


function OurDomains() {
  const [cards]=useState([
    {
      title:'Technical',
      text:'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus a ligula vitae tortor lobortis fringilla. Mauris neque ex, egestas ac elit eu, sodales sodales arcu. Donec ac laoreet diam, et gravida neque.Sed ex metus, venenatis vitae interdum sit amet,'
    },
    {
      title:'Non-Technical',
      text:'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus a ligula vitae tortor lobortis fringilla. Mauris neque ex, egestas ac elit eu, sodales sodales arcu. Donec ac laoreet diam, et gravida neque.Sed ex metus, venenatis vitae interdum sit amet,'
    },
    {
      title:'Sponsorship',
      text:'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus a ligula vitae tortor lobortis fringilla. Mauris neque ex, egestas ac elit eu, sodales sodales arcu. Donec ac laoreet diam, et gravida neque.Sed ex metus, venenatis vitae interdum sit amet,'
    },
    {
      title:'Publicity',
      text:'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus a ligula vitae tortor lobortis fringilla. Mauris neque ex, egestas ac elit eu, sodales sodales arcu. Donec ac laoreet diam, et gravida neque.Sed ex metus, venenatis vitae interdum sit amet,'
    },
    {
      title:'Public Relations',
      text:'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus a ligula vitae tortor lobortis fringilla. Mauris neque ex, egestas ac elit eu, sodales sodales arcu. Donec ac laoreet diam, et gravida neque.Sed ex metus, venenatis vitae interdum sit amet,'
    },
    {
      title:'Literary',
      text:'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus a ligula vitae tortor lobortis fringilla. Mauris neque ex, egestas ac elit eu, sodales sodales arcu. Donec ac laoreet diam, et gravida neque.Sed ex metus, venenatis vitae interdum sit amet,'
    },
    {
      title:'Creatives',
      text:'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus a ligula vitae tortor lobortis fringilla. Mauris neque ex, egestas ac elit eu, sodales sodales arcu. Donec ac laoreet diam, et gravida neque.Sed ex metus, venenatis vitae interdum sit amet,'
    },
    {
      title:'Logistic Operations',
      text:'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus a ligula vitae tortor lobortis fringilla. Mauris neque ex, egestas ac elit eu, sodales sodales arcu. Donec ac laoreet diam, et gravida neque.Sed ex metus, venenatis vitae interdum sit amet,'
    }
    
  ])
  return (
    <div>
      <section>
        <div className='container'>
          <h1 className="our-domain-title">Our Domains</h1>
          <div className='cards'>
            <div className='card-grid'>
              {cards.map((card, i) => (
                <div key={i} className='card'>
                  <h2>{card.title}</h2><br></br>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurDomains;

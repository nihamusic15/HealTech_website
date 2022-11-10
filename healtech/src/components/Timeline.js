import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
const TimeLineFunction = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const someCallback = () => {
    setMessage1("Step one");
    callback();
  };

  const someCallback2 = () => {
    setMessage2("Step two");
  };

  const someCallback3 = () => {
    setMessage3("Finish");
    // fireConfetti();
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          <span className="invisible">1</span>
        </div>
        <div className="message">{message1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
        <span className="invisible">1</span>
        </div>
        <div className="message">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
           <span className="invisible">1</span>
        </div>
        <div className="message">{message3}</div>
      </div>
    </div>
  );
};

export default function Timeline() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="App">
      <h1>react-scroll-animation component</h1>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#3C68FF"
        handleObserve={(setObserver) => (
          <TimeLineFunction
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2">{message}</div>
    </div>
  );
}


// export default Timeline;
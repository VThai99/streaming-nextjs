'use client'
import { useRef } from 'react';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package

gsap.registerPlugin(useGSAP);

export default function Home() {
    const boxRef = useRef(null);

    useGSAP(
        () => {
            gsap.to(boxRef.current, {
              scrollTrigger: {
                trigger: boxRef.current,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
              },
              y: -100,
              rotation: 360,
              duration: 1.5,
            })
        },
        { scope: boxRef }
    );

    return (
      <div style={{ height: "200vh", paddingTop: "50vh" }}>
      <div ref={boxRef} style={{ width: 100, height: 100, backgroundColor: "lightblue" }}>
        Scroll to Animate me
      </div>
    </div>
    );
}
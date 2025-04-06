import React from 'react'
import { useSpring, animated } from '@react-spring/web'

export default function Component1() {

  // Define animation style object
  const animStyle = useSpring({
    from: {
            opacity: 0,                     // Start from completely transparent
            transform: 'translateY(-500px)' // Start 500px above its normal position
          }, 
    to: { 
            opacity: 1,                    // Animate to fully visible
            transform: 'translateY(0px)'   // Slide down into place

        },   
  })

  /* Define 0 - 10 Count-Up Animation  */
  const animStyle2 = useSpring({
    from: { number: 0 }, 
    to: { number: 10 },
    config: { duration: 2000 }              // take 2 seconds to complete the animation
  })

  /* Styling for <animated.h1> */
  const counter = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
  }

  return (
    <animated.div     // Special div component from React Spring that accepts animated styles
      style={{
        ...animStyle, // Accept the animation style object in as a prop
        /* Merge in regular CSS props */
        background: 'steelblue',
        color: 'white',
        padding: '1.5rem',
      }}
    >
      <h1>Component1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus
        dolorum at eum commodi totam ratione reprehenderit? Eaque rerum fuga
        magni itaque laudantium necessitatibus reprehenderit? Officiis quaerat
        consequuntur maxime placeat!
      </p>

  
      <div>
          <animated.h1 /* This tag makes sure the number value updates as part of the animation */
              style={ counter } // Style for for the tag
          >
            { // Access count-up animation
              animStyle2.number.to( 
                        // Convert to an integer for display
                        n => n.toFixed(0) 
                      ) 
            }
          </animated.h1>
      </div>

    </animated.div>
  )
}

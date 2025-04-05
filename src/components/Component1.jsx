import React from 'react'
import { useSpring, animated } from '@react-spring/web'

export default function Component1() {

  // Define animation style object
  const c1Style = useSpring({
    from: {
            opacity: 0,                     // Start from completely transparent
            transform: 'translateY(-500px)' // Start 500px above its normal position
          }, 
    to: { 
            opacity: 1,                    // Animate to fully visible
            transform: 'translateY(0px)'   // Slide down into place

        },   
  })

  return (
    <animated.div   // Special div component from React Spring that accepts animated styles
      style={{
        ...c1Style, // Accept the animation style object in as a prop
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
    </animated.div>
  )
}

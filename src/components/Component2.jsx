import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'


const Component2 = ({ toggle }) => {

    const c2Style = useSpring({
        from: {
                opacity: 0,         // start invisible                     
              }, 
        to: {   
                opacity: 1,         // animate to fully visible                  
    
            },   
        config: {
                    delay: 3000,    // wait 3 seconds before starting the animation
                    duration: 3000  // take 3 seconds to complete the fade-in animation
            }
      })

      const btn = {
        background: '#333',        // black
        color: '#fff',             // white
        padding: '1rem 2rem',
        border: 'none',
        textTransform: 'uppercase', // Convert text to uppsercase
        margin: '15px 0'
      }

  return (
      <animated.div 
          style={{
            ...c2Style,
            background: 'slateblue',
            color: 'white',
            padding: '1.5rem',
          }}
        >
          <h1>Component2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus
            dolorum at eum commodi totam ratione reprehenderit? Eaque rerum fuga
            magni itaque laudantium necessitatibus reprehenderit? Officiis quaerat
            consequuntur maxime placeat!
          </p>
          <button 
            style={btn}
            onClick={toggle} // Toggle Component3 visibility
          > 
              Component3
          </button>
    </animated.div>
  )
}

export default Component2
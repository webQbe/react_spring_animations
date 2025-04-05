import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'


const Component2 = () => {

    const c2Style = useSpring({
        from: {
                opacity: 0,                     
                transform: 'translateY(-500px)' 
              }, 
        to: { 
                opacity: 1,                    
                transform: 'translateY(0px)'   
    
            },   
      })

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
    </animated.div>
  )
}

export default Component2
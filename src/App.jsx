/* Main Component*/
import { useState } from 'react'
import { useSpring, animated, Transition } from '@react-spring/web'
import './App.css'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'

function App() {

  // Store showComponent3 state
  const [ showComponent3, setShowComponent3 ] = useState(false)

  // Toggle Component3 visibility
  const toggle = () => setShowComponent3(prev => !prev)

  // Render Components
  return (
      <div className="App">
        <Component1 />
        <Component2 
            toggle={ toggle } // Pass toggle function down to the button in Component2
        />

        <Transition
          /* <Transition /> component tells React Spring how to animate items as they enter or leave the DOM. */
          native                   // Use native requestAnimationFrame for smoother transitions
          items={ showComponent3 } // The dynamic value being observed (true or false)
          from={{ opacity: 0 }}    // Initial animation style when component enters
          enter={{ opacity: 1 }}   // Final animation style when entering
          leave={{ opacity: 0 }}   // Animation style when leaving / unmounting
          config={{ duration: 500 }} 
        >
          { ( style,      // animated values for this transition step	
              item        // data (in this case, a Boolean) being transitioned
            ) => item &&  // only render when item is true
              (
                // Apply the animation to the wrapper of Component3
                <animated.div style={style}>
                  <Component3 />
                </animated.div>
              )
          }
        </Transition>
      </div>
  )
}

export default App

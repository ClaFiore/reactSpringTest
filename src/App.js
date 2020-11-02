import React, {useState} from 'react'
import {Transition, animated} from 'react-spring/renderprops'
import Component1 from './components/component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'

const App = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)

  return (
    <div className="App">
      <Component1/>
      <Component2 toggle={toggle} setToggle={setToggle}/>
      <Transition
      native
      items={toggle}
      from={{opacity: 0}}
      config={{duration: 500}}
      enter={{opacity: 1}}
      leave={{opacity: 0}}
      >
        {show => show && (props => (
          <animated.div style={props}>
            <Component3 />
          </animated.div>
        ))}
      </Transition>
    </div>
  );
}


export default App;

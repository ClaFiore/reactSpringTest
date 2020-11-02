import React from 'react'
import './component.css'
import {Spring} from 'react-spring/renderprops'

export default function Component1() {
    return (
        <Spring
        from={{opacity: 0, marginTop: -500}}
        to={{opacity:1, marginTop: 0}}
        >
            { props => (
                <div style={props} className='component1Div'>
                    <h1 className='component1h1'>
                        COMPONENT 1
                    </h1>
                    <p className='component1p'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <Spring
                        from={{number:0}}
                        to={{number:10}}
                        config={{duration: 10000}}>
                            {props => (
                                <div>
                                    {props.number.toFixed()}
                                </div>
                            )}
                    </Spring>
                </div>
            )}
        </Spring>
        
    )
}

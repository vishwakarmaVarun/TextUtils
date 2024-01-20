import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark'? 'white' : '#042743',
        backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white',
    }

  return (
    <div className="container">
        <h1 className="my-3" style={{color: props.mode === 'dark'? 'white' : '#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Textutils gices you a way to analyze your text quickly and efficently. Be it word count, character count or
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Textutils is a free character tool that provides instant character count & word count statistics for a given text. Textutils repots the number of words and acharacters. Thus it is sutable for writing text with word/ character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

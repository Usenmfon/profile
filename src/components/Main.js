import React from "react"
import image from "./images/display_picture.jpg"

function Main(){
    return (
        <main>
            <img src={image} alt="face shot"  />
            <div className="content">
                <p>Hi there, <br />
                my name is Usenmfon Uko. I'm a Software<br/>
                Engineer with 1+ years experience and proficient <br/>
                in various programming languages and tools.</p>
            </div>
            <div className="contact-form">
                <form action="/contact-details" method="post">
                    <ul>
                        <li>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="user_name" placeholder="Enter name"/>
                        </li>
                        <li>
                            <label htmlFor="mail">E-mail</label>
                            <input type="mail" id="mail" name="user_email"/>
                        </li>
                        <li>
                            <label htmlFor="msg">Message:</label>
                            <textarea name="user_message" id="msg"></textarea>
                        </li>
                        <li className="button"><button type="submit">Submit
                            </button>
                        </li>
                    </ul>
                </form>
            </div>

            <div className="projects">
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
            </div>
        </main>
    )
}

export default Main
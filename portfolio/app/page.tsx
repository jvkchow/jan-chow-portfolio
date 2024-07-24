import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* Home Section */}
      <div>
        <div>Hello, my name is</div>
        <div>Jan Chow</div>
        <div>And I'm a <span>computer science student</span></div>
      </div>

      {/* About Section */}
      <div>
        <h2>About Me</h2>
        <div>
          {/* Column Left */}
          <div>
            <img src="static/profile.jpg" alt=""></img>
          </div>
          {/* Column Right */}
          <div>
            <div>I'm Jan and I'm a <span>computer science student</span></div>
            <p>
              I am a graduate of the University of Alberta with a Bachelor's degree in Specialization in Computing Science.<br></br>
              Outside of academics, I work at Code Ninjas where I teach kids how to code and help foster their STEM knowledge and skills. I also enjoy going out to eat good food and to explore new tastes. 
              <br></br><br></br>I am currently searching for work related to computing science. Please feel free to contact me if you are interested in having me join
              your team!
            </p>
            <a href="https://drive.google.com/file/d/1NfGUr5Wo5WawRw7UZgJjjnC3oSdcHbH6/view?usp=sharing" target = "_blank">Open Resume</a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h2>My Projects</h2>
        <h3>Click each card to access the source code on GitHub.</h3>
        <div>
          <div> {/*Card One*/}
            <a href="https://github.com/jvkchow/JanChowWebsite" target = "_blank">
            <div>
              <i></i>
                <div>This Website</div>
                  <p>Website to display my frontend skills and to show more about myself in an easy to read format.<br></br><br></br>
                                  [Uses: HTML, CSS, JavaScript]
                  </p>
            </div>
            </a>
          </div>
          <div> {/*Card Two*/}
            <a href="https://github.com/CMPUT301W22T17/CMPUT301_GroupProject" target = "_blank">
            <div>
              <i></i>
                <div>SuperQR</div>
                  <p>Pokemon GO but if you caught QR codes instead of Pokemon.</p>
                  <br></br>Link to demo video:<br></br>
                  <div>
                      <a href="https://www.youtube.com/watch?v=_7kmTEr8-Hs" target = "_blank">Click Here</a>
                  </div>
                  <p><br></br>[Uses: Java, XML]</p>
            </div>
            </a>
          </div>
          <div> {/*Card Three*/}
            <a href="https://github.com/jvkchow/MemoryGame" target = "_blank">
            <div>
              <i></i>
                <div>Memory Game</div>
                  <p>Classic memory game. Flip tiles, challenge your brain. Win.<br></br><br></br>
                    [Uses: Python]
                  </p>
            </div>
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2>My Skills</h2>
        <div>
          <div> {/*Card one*/}
            <div>
              <i></i>
              <div>Backend</div>
              <p><br></br>Python &nbsp;&nbsp;· &nbsp;&nbsp;Java &nbsp;&nbsp;· &nbsp;&nbsp;C &nbsp;&nbsp;· &nbsp;&nbsp;SQL</p>
            </div>
          </div>
          <div>
            <i></i>
          </div>
          <div> {/* Card Two*/}
            <div>
              <i></i>
              <div>Frontend</div>
              <p><br></br>HTML &nbsp;&nbsp;· &nbsp;&nbsp;CSS &nbsp;&nbsp;· &nbsp;&nbsp;JavaScript</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div>
        <h2>Contact Me</h2>
        <div>
          <div> {/* Column Left */}
            <div>Get in Touch</div>
            <p>If you have any further questions or would like to offer me a position in your team, please do not hestitate to contact me at my phone number or email below.</p>
            <div>
              <div>
                <i></i>
                <div>
                  <div>Name</div>
                  <div>Jan Chow</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <i></i>
                <div>
                  <div>Phone Number</div>
                  <div>(780) 935-2309</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <i></i>
                <div>
                  <div>Email</div>
                  <div>jechwk@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

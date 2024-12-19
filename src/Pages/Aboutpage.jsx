import React from 'react'
import "./AboutPage.css"
import imgBg1 from "../assets/img1.jpg"
import imgBg2 from "../assets/School.jpeg"

const Aboutpage = () => {
  return (
    <div className='aboutPage'>
      <h1 className='pageTitle'>ABOUT</h1>
      <div className="aboutImg">
        <img src={imgBg1} alt="" />
      </div>
      <div>
        <p className="aboutPara">
        Hello, I’m Kanakadri, a passionate and aspiring Front-End Developer with a growing expertise in creating dynamic and responsive web interfaces. With a strong foundation in HTML, CSS, and JavaScript, I have expanded my skill set by delving deeper into React and other modern web technologies. Currently, I’m pursuing a Bachelor’s degree in Communication at Sri Harshini Degree College, which has allowed me to merge my technical knowledge with an understanding of media, communication, and user experience. My journey in web development has been driven by a genuine curiosity for learning and a desire to build intuitive and innovative solutions that provide real value to users.

I have always been fascinated by the blend of creativity and logic that front-end development offers. From designing visually appealing interfaces to optimizing website performance, I enjoy every step of the development process. Over the past few months, I’ve worked on projects that involve building responsive layouts, managing state in React applications, and improving user experiences through careful design and implementation. I take pride in writing clean, efficient code and am always on the lookout for new tools and frameworks that can enhance the development process.

In addition to my technical capabilities, my background in communication has equipped me with strong interpersonal skills and the ability to present ideas clearly. Whether working independently or as part of a team, I believe that effective communication and collaboration are key to delivering successful projects. I am a firm believer in continuous improvement, constantly seeking out opportunities to expand my knowledge and refine my skills. My ultimate goal is to contribute to innovative projects, grow as a developer, and make a meaningful impact through the websites and applications I build.

As I continue to evolve in the field of web development, I am excited about the challenges and opportunities that lie ahead. I’m particularly drawn to projects that push my boundaries, allowing me to explore new ideas and approaches. I am eager to bring my creativity, technical skills, and collaborative mindset to a professional environment where I can contribute to a team and further hone my craft. Whether it’s developing user-friendly web interfaces, optimizing performance, or solving complex technical challenges, I am ready to take on new opportunities and make a difference in the world of web development.

        </p>
      </div>
      <div>
        <h1>COLLEGE</h1>
         <img src={imgBg2} alt="" />
         <p className="aboutPara">
      I am currently pursuing my Bachelor's degree in Communication at Sri Harshini Degree College, where I have had the opportunity to explore a wide range of subjects that bridge creativity, technology, and media. My academic journey has provided me with valuable insights into effective communication strategies, media studies, and digital design. Alongside my core communication subjects, I have also delved into web development, Maya 3D, and Tally, which have helped me develop a balanced skill set that blends both technical proficiency and creative thinking. The diverse curriculum at my college has allowed me to enhance my problem-solving skills, work collaboratively on projects, and sharpen my understanding of how technology and communication intersect in today’s digital world. My time here has not only helped me grow academically but has also fueled my passion for front-end development and prepared me for future challenges in the tech industry.
      </p> 
      </div>
     
      <div className="story">
        <h1>MY STORY</h1>
        <p >
        My journey began in Kadukur, where I completed my SSC in English medium. Growing up, I was always intrigued by how technology shapes our world, which led me to study at AP Model College, where I focused on Commerce. This experience ignited my interest in communication and media, prompting me to pursue a Bachelor’s degree in Communication at Sri Harshini Degree College.

At university, I discovered the fascinating intersection of technology and creativity, particularly in web development. I dedicated myself to learning HTML, CSS, and JavaScript, realizing that these skills would allow me to bring my ideas to life on the web. My enthusiasm for front-end development grew as I explored frameworks like React, which opened up new possibilities for building interactive user interfaces. The collaborative projects and hands-on experiences in college have enriched my learning, teaching me the importance of teamwork and effective communication in achieving common goals.

In addition to my technical skills, I have developed strong public speaking and interpersonal communication abilities, which I believe are essential for a successful career in any field. I am particularly drawn to projects that challenge my creativity and problem-solving skills, as they push me to think outside the box and innovate.

As I continue my journey, I am eager to apply my knowledge and skills in a professional setting, seeking internships or opportunities that allow me to contribute to impactful projects. I am committed to lifelong learning and growth, excited about the challenges and experiences that lie ahead in the ever-evolving world of technology and communication. My goal is to make a meaningful impact through my work, shaping user experiences and building solutions that resonate with people.
        </p>
      </div>
    </div>
  )
}

export default Aboutpage
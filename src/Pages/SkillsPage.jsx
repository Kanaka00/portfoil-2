import React from 'react'
import jsImg from "../assets/JS.jpeg"
import htmlImg from "../assets/HTML.jpeg"
import cssImg  from "../assets/CSS.jpeg"
import reactImg from "../assets/React.jpeg"
import boostapImg from "../assets/Bootstrap.jpeg"
import git from '../assets/GitLogo.jpeg'
import trevell from '../assets/Trevel.jpeg'
import youtube from '../assets/Youtube.jpeg'
import ecommer from '../assets/Ecommerce.jpeg'
import uiux from '../assets/uiux.jpeg'
import "./Skills.css"

const SkillsPage = () => {
  return (
<>
<h1 className='pageTitle'> SKILLS   </h1>
        <div className="skilsPage">
        <div className="pageBox">
          <div className="imgBox">
                <img src={jsImg} alt="" />
          </div>
            <p>JavaScript is a versatile, high-level programming language primarily used for web development. It enables dynamic interactions on websites and can run in browsers or on servers (Node.js). JS follows the ECMAScript specification, supporting various programming paradigms, including functional and object-oriented. It interacts with HTML/CSS, allowing DOM manipulation and event handling. JS has built-in types (like numbers, strings) and supports asynchronous programming (promises, async/await). It’s widely used for front-end frameworks (React, Vue) and back-end development (Node.js).</p>
        </div>
      </div>
      <div className="skilsPage">
        <div className="pageBox">
          <div className="imgBox">
                <img src={htmlImg} alt="" />
          </div>
            <p>HTML (HyperText Markup Language) is the foundation of web pages, defining the structure and layout of content. It uses elements like headings, paragraphs, links, and images, each wrapped in tags (e.g.). HTML is not a programming language but a markup language, designed to display information in browsers. It works alongside CSS and JavaScript to create interactive and styled pages. HTML5, the latest version, introduces new elements for multimedia (like ), semantics, and APIs, enhancing web functionality. It’s essential for creating web documents and ensuring proper web structure.</p>
        </div>
      </div>
      <div className="skilsPage">
        <div className="pageBox">
          <div className="imgBox">
                <img src={cssImg} alt="" />
          </div>
            <p>CSS (Cascading Style Sheets) is a styling language used to control the appearance of HTML elements on a web page. It allows developers to define colors, fonts, layouts, and spacing, providing a visually appealing and responsive design. CSS follows a rule-based syntax with selectors targeting HTML elements and applying styles like margins, padding, borders, and positioning. It supports responsive design through media queries, enabling websites to adapt to different screen sizes. CSS3, the latest version, introduced features like transitions, animations, and grid/flexbox layouts, enhancing the visual and interactive capabilities of web pages.</p>
        </div>
      </div>
      <div className="skilsPage">
        <div className="pageBox">
          <div className="imgBox">
                <img src={git} alt="" />
          </div>
            <p>Git is a distributed version control system used to track changes in source code during software development. It allows multiple developers to work on a project simultaneously by managing code versions and collaboration efficiently. Git enables branching, where developers can create independent copies of code for testing or new features, and later merge them back into the main project. Key commands include `git clone` (to copy a repository), `git commit` (to save changes), and `git push` (to upload changes to a remote repository). Git helps maintain a project’s history, ensuring easy rollback, collaboration, and code integrity.</p>
        </div>
      </div>
      <div className="skilsPage">
        <div className="pageBox">
          <div className="imgBox">
                <img src={boostapImg} alt="" />
          </div>
            <p>Bootstrap is a popular open-source front-end framework used for building responsive, mobile-first websites. It provides a collection of pre-designed HTML, CSS, and JavaScript components like buttons, forms, navigation bars, and grids, making web development faster and more efficient. Bootstrap follows a grid system, allowing developers to create layouts that adapt to various screen sizes. It also includes utility classes for styling elements without writing custom CSS. With built-in components for responsive design, Bootstrap ensures consistency across different devices and browsers, reducing the need for manual adjustments. It's widely used for quick prototyping and production-ready websites.</p>
        </div>
      </div>
      <div className="skilsPage">
        <div className="pageBox">
          <div className="imgBox">
                <img src={reactImg} alt="" />
          </div>
            <p>React is a popular JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It allows developers to create reusable UI components that manage their own state, leading to efficient and scalable applications. React uses a virtual DOM, which updates only the necessary parts of the page, improving performance. Components can be functional or class-based, and state management can be handled locally or with libraries like Redux or Context API. React also supports hooks, which simplify handling states and lifecycle methods in functional components. It's widely used for creating dynamic, interactive web apps.</p>
        </div>
      </div>
      <div className="skilsPage">
        <div className="pageBox">
          <div className="imgBox">
                <img src={uiux} alt="" />
          </div>
            <p>Creating a UI/UX design project involves crafting user interfaces that are not only visually appealing but also user-friendly and intuitive. This process begins with research to understand user needs and preferences, followed by wireframing to layout the basic structure of the interface. 

Prototyping tools like Figma or Adobe XD can be used to create interactive mockups that simulate user interactions. Usability testing is crucial to gather feedback and identify pain points in the design. Principles of color theory, typography, and spacing are applied to enhance visual hierarchy and readability. 

The final design should focus on accessibility, ensuring that all users, including those with disabilities, can navigate the interface effectively. Iterative design is key, allowing for continuous improvements based on user feedback, ultimately leading to a seamless and engaging user experience.</p>
        </div>
      </div>
      <h1 className='pageTitle'>PROJECTS</h1>
      <div className="skilsPage">
        <div className="pageBox">
          <div className="imgBox">
                <img src={youtube} alt="" />
          </div>
            <p>A YouTube clone using React, HTML, CSS, and JavaScript replicates the core functionality of YouTube’s video platform. React is used to create reusable components like a video player, search bar, sidebar, and video thumbnails. The app fetches video data (such as titles, thumbnails, and descriptions) through APIs and displays them dynamically. CSS is applied to ensure responsive design, making the layout adapt to different screen sizes, while JavaScript handles interactivity like search functionality and video playback controls. React's routing allows users to navigate between different video pages without reloading. This project mimics YouTube’s design and functionality for learning purposes.</p>
        </div>
      </div>
      <div className="skilsPage">
        <div className="pageBox">
          <div className="imgBox">
                <img src={trevell} alt="" />
          </div>
            <p>A travel website built using React, HTML, CSS, and JavaScript allows users to explore destinations, book trips, and view travel packages. React components are used to build key features like a destination gallery, booking forms, user reviews, and navigation. With JavaScript, interactive elements such as carousels, filters, and dynamic pricing can be added. CSS ensures a responsive, visually appealing design that adapts to various devices, while modern UI patterns like cards and grids enhance user experience. API integration allows real-time data like flight or hotel availability, and React routing provides smooth navigation across the site without page reloads.</p>
        </div>
      </div>
      <div className="pageBox">
          <div className="imgBox">
                <img src={ecommer} alt="" />
          </div>
            <p>An e-commerce website built using React, HTML, CSS, and JavaScript provides a platform for users to browse and purchase products online. React components are utilized to create dynamic features like product listings, shopping carts, user authentication, and checkout processes. JavaScript handles interactivity, enabling users to filter products, add items to their cart, and manage quantities. CSS is applied for a responsive design, ensuring an optimal shopping experience across devices. Integration with payment gateways allows secure transactions, while APIs can be used to fetch product data and manage inventory in real time. React Router facilitates seamless navigation between product pages, cart, and user profiles, enhancing usability.</p>
        </div>
        <div className="pageBox">
          <div className="imgBox">
                <img src={jsImg} alt="" />
          </div>
            <p>Creating simple JavaScript games like Tic-Tac-Toe and Rock-Paper-Scissors involves using HTML for structure, CSS for styling, and JavaScript for game logic. 

**Tic-Tac-Toe:** The game board is represented as a 3x3 grid of buttons, with each button's click triggering a function that updates the game state. JavaScript checks for winning combinations after each move and switches turns between two players. CSS styles the board, making it visually appealing and responsive.

**Rock-Paper-Scissors:** In this game, users select their choice through buttons, and JavaScript randomly generates the computer's choice. The logic compares both choices to determine the winner and updates the score accordingly. CSS enhances the user interface, displaying results and animations for a more engaging experience. Both games provide a fun way to practice JavaScript and build interactive web applications.</p>
        </div>

      

</>
  )
}

export default SkillsPage
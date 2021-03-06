import React, { Component } from 'react';
import './App.css';
import Developer from './Developer'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      developers: []
      /*
        {
            gtUsername: "arao81",
            name: "Alexander Rao",
            title: "Software Development Manager",
            bio: "Alex has been a TA for three years, and currently leads the Software Development Team at Georgia Tech. Alex is a third year at The Georgia Institute of Technology, where he studies Electrical Engineering and Computer Science. Alex enjoys coding, hacking, and playing Call of Duty."
        },
        {
            gtUsername: "hwhite35",
            name: "Hannah White",
            title: "Senior Developer",
            bio: "Hannah White is a second year Biomedical Engineering Major with a Minor in CS at Georgia Tech. She has been a TA for two semesters. In her free time, she enjoys hanging out with friends, relaxing on the beach, and eating good food. In recognition for her work in writing the Plot class and notifications, Hannah was promoted to Senior Developer in May of 2018."
        },
        {
            gtUsername: "busluel3",
            name: "Baran Usluel",
            title: "Senior Developer",
            bio: "Baran is a first semester TA. He is a first year Electrical Engineering major at Georgia Tech. He enjoys coding and making things. He is a bass singer in Georgia Tech's Chamber Choir, and he likes to play Ultimate in his free time. In recognition of his work with engine, generateFeedback, and the Student Selector, Baran was promoted to Senior Developer in May of 2018."
        },
        {
            gtUsername: "aho41",
            name: "Angela Ho",
            title: "Developer",
            bio: "Angela is a fourth semester TA and a fourth year Chemical Engineering major. She enjoys reading, traveling and hiking with her two dogs."
        },
        {
            gtUsername: "mnugent8",
            name: "Maggie Nugent",
            title: "Developer",
            bio: "Maggie is a second semester TA, and a second year Biomedical Engineering student at The Georgia Institute of Technology. When she's not busy studying, Maggie enjoys watching Netflix, exploring Atlanta with her friends, and sleeping."
        },
        {
            gtUsername: "tpatel85",
            name: "Tej Patel",
            title: "Developer",
            bio: "Tej is a first semester TA and first year Computer Engineering major at Georgia Tech. He enjoys working on cars, driving cars, and flying quadcopters."
        },
        {
            gtUsername: "dprofili3",
            name: "Daniel Profili",
            title: "Developer",
            bio: "Daniel is a second semester TA and a second year Chemical Engineering major. He enjoys Kit-Kats, sleeping, and Death Grips."
        },
        {
            gtUsername: "pruiz7",
            name: "Paula Ruiz",
            title: "Developer",
            bio: "Paula Ruiz is a second year Computer Science major with a minor in German at Georgia Tech. She has been a TA for 2 semesters. In her free time, she loves to run, drink coffee, eat apples, and explore the world."
        },
        {
            gtUsername: "jhtay3",
            name: "Justin Htay",
            title: "Developer",
            bio: "Justin is a fourth semester TA and a third year double major in Electrical Engineering and Mathematics. He enjoys chess, piano, video games, and cooking."
        },
        {
            gtUsername: "tabraham7",
            name: "Tobin Abraham",
            title: "Developer",
            bio: "A third year at Georgia Tech, Tobin is pursuing a degree in Chemical and Biomolecular Engineering. He has been a TA for 2 years. Tobin is passionate about coding, sings in the Georgia Tech Glee Club, and loves Star Wars."
        },
        {
            gtUsername: "aschmitt8",
            name: "Amanda Schmitt",
            title: "Developer",
            bio: "Amanda is a 4th semester TA and the homework team STA. She is a 3rd year computer science major and social justice minor at the Georgia Tech Institute of University. In addition to MATLAB, she also loves cats and puzzles."
        },
        {
            gtUsername: "prathaur3",
            name: "Prithvi Rathaur",
            title: "Developer",
            bio: ""
    
        }
    ]
    */
    };
  }

  componentDidMount() {
    fetch('developers.json', {
      credentials: "include"
    })
    .then(response => response.json())
    .then(data => this.setState({developers: data}));
  }

  render() {
      const developers = [];
      for (let i = 0; i < this.state.developers.length; i++) {
        const dev = this.state.developers[i];
        developers.push(
          <Developer key={dev.gtUsername} id={dev.gtUsername} name={dev.name} title={dev.title} bio={dev.bio}  />
        );
      }
      const devs = <div className="developers">{developers}</div>;
      const title = <h1>CS 1371 Software Development</h1>;
      const logo = <img src="branding/CourseBrand.png" alt="logo" id="logo" />;
      return <div className="container">{logo}{title}{devs}</div>;
    
  }
}

export default App;

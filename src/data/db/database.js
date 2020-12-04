import Mock from "../mock";

const database = {
  information: {
    name: 'Daniel Hagos',
    aboutContent: "I am Motivated Fullstack Javascript Developer with 3+ years of hands on experience analysis, design, development, of software applications and systems. I Maximized quality and responsiveness of applications by implementing latest technologies. Skilled in using, Core Java, ReactJs, NodeJs, ExpressJs. nextJs, mysql and mongoDB.",
    age: 24,
    phone: '',
    nationality: 'GreenCard',
    language: 'English, Arabic,Tigrgna, Amharic',
    email: 'javatechisland@gmail.com',
    address: 'seattle, Washington, USA',
    freelanceStatus: 'Yes',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: '',
      dribbble: '',
      github: 'https://github.com/javaIsland'
    },
    brandImage: '/images/dan.jpg',
    aboutImage: '/images/dan2.jpg',
    aboutImageLg: '/images/dan2.jpg',
    cvfile: '/files/danielhagos.pdf'
  },
  services: [
    {
      title: "Front end Development",
      icon: 'color-pallet',
      details: "Familarity with ReactJs,HTML,CSS,Sass,nextJs...."
    },
    {
      title: "Backend Development",
      icon: 'code',
      details: "Strong understanding of Nodejs and expressJs"
    },
    {
      title: "CoreJava",
      icon: 'mobile',
      details: "Strong understing in corejava and oops concepts"
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Phone: +1 571 253 1294 Email: beky.bk.2000@gmail.com",
      author: {
        name: 'Bereket Gebremeskel',
        designation: 'former CEO of BHD IT SOLUTIONS PLC'
      }
    },
    {
      id: 2,
      content: "Phone: +1 617 792 7873 Email: frehiwott24@gmail.com",
      author: {
        name: 'Frehiwot Micheal',
        designation: 'Former coworker'
      }
    },
    {
      id: 3,
      content: "Phone: +1 515 707 7693 Email: eyuel.taddede4@gmail.com",
      author: {
        name: 'Eyuel Taddesse',
        designation: 'Manager at BHD IT SOLUTIONS PLC'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Sass",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "CoreJava",
      value: 90
    },
    {
      title: "ReactJS",
      value: 95
    },
    {
      title: "NodeJS",
      value: 75
    },
    {
      title: "GIT",
      value: 95
    },
    {
      title: "Postman",
      value: 95
    },
    {
      title: "Redux",
      value: 95
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "HULU Clone",
      subtitle: "Front end using ReactJs.",
      imageUrl: "/images/hulu.PNG",
      largeImageUrl: ["/images/hulu.PNG"],
      url: 'https://hulu-clone-cfdbe.firebaseapp.com/'
    },
    {
      id: 2,
      title: "Netflix Clone",
      subtitle: "Front end using ReactJS",
      imageUrl: "/images/netflix.PNG",
      largeImageUrl: [
        "/images/netflix.PNG",
        "/images/netflix.PNG"
      ],
      url: 'https://netflix-25d49.web.app'
    },
    {
      id: 3,
      title: "Portfolio",
      subtitle: "personal project",
      imageUrl: "/images/manage.PNG",
      url: 'https://github.com/javaIsland/daniel-portfolio'
    },
    {
      id: 4,
      title: "Header with Navigation",
      subtitle: "Sass Practice.",
      imageUrl: "/images/css.PNG",
      largeImageUrl: ["/images/css.PNG"],
      url: "https://github.com/javaIsland/css-practice"
    }
    
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2017 - September 2020",
        position: "Fullstack Web Developer",
        company: "",
        details: "BHD IT SOLUTIONS PLC, Addis Ababa, Ethiopia • October 2017-Sep 23, 2020 Clients: AGAZI DIMENSIONAL STONE PLC"
      },
      {
        id: 2,
        year: "2015 - 2016",
        position: "Lead Intern",
        company: "CLAIR ICT SOLUTIONS",
        details: "Embedded system programmer"
      }
  
    ],
    educationExperience: [
      {
        id: 1,
        year: "2011 - 2016",
        graduation: " Science",
        university: "Ethiopia Institute of Techonology (Mekelle University)",
        details: "Key Courses: Software Engineering, Database management system, Modern Programming Practices, Computer Architecture, Operating Systems, Embedded system programming and design, Java programming, C++ programming."
      }

    ]
  },
  contactInfo: {
    phoneNumbers: [ '+1 720 675 7974'],
    emailAddress: ['javatechisland@gmail.com'],
    address: "seattle, Washington, 98125, USA"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});
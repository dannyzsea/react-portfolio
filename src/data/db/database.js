import Mock from "../mock";

const database = {
  information: {
    name: 'Daniel Hagos',
    aboutContent: "Motivated, creative, resourceful, and versatile Software Engineer experienced in Agile software development and systems. With knowledge of various programming languages, I am looking for an opportunity to further utilize my skills in a growth-oriented position within the tech industry.",
    phone: '',
    nationality: 'GreenCard',
    language: 'English, Arabic,Tigrgna, Amharic',
    email: 'javatechisland@gmail.com',
    address: 'seattle, Washington, USA',
    freelanceStatus: 'Yes',
    socialLinks: {
      facebook: '',
      twitter: '',
      youtube:'https://www.youtube.com/channel/UCRfNZk60icSpIsgG8Pwtqlg?view_as=subscriber',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/dannyhagos/',
      dribbble: '',
      github: 'https://github.com/dannyzsea'
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
      content: "",
      author: {
        name: '',
        designation: ''
      }
    },
    {
      id: 2,
      content: "",
      author: {
        name: '',
        designation: ''
      }
    },
    {
      id: 3,
      content: "",
      author: {
        name: '',
        designation: ''
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
        year: "February 2021 -  July 2021",
        position: "Software Engineer",
        company: "",
        details: "Infosys, USA"
      },
      {
        id: 2,
        year: "2017 - September 2020",
        position: "Fullstack Web Developer",
        company: "",
        details: "BHD IT SOLUTIONS PLC, Addis Ababa, Ethiopia • October 2017-Sep 23, 2020 Clients: AGAZI DIMENSIONAL STONE PLC"
      },
      {
        id: 3,
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
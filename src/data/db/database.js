import Mock from "../mock";

const database = {
  information: {
    name: 'Daniel Hagos',
    aboutContent: "Motivated, creative, resourceful, and versatile Software Engineer experienced in Agile software development and systems. With knowledge of various programming languages, I am looking for an opportunity to further utilize my skills in a growth-oriented position within the tech industry.Created web applications from the ground up, including requirements. gathering, user interface, back-end, web services, database communication and maintenance. Performed troubleshooting and delivered final product to specifications. I also Participated in the project Amigo wallet banking Application, my responsibility was to develop the front-end and help on the backend, I used the technologies Angular, React, C#, Java, Entity Framework Core, Web Service API, Spring boot, Hibernate and SQL server.",
    phone: '+1 206-769-1821',
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
      details: "Strong understanding of Nodejs| expressJs | Spring boot | .NET | "
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
    {
      title: "C#",
      value: 95
    },
    {
      title: "Spring boot",
      value: 95
    },
    {
      title: "Hibernate",
      value: 95
    },
    {
      title: ".NET",
      value: 95
    },
    {
      title: "ASP.NET",
      value: 95
    },
    {
      title: "SQL",
      value: 95
    },
    {
      title: "Agile/SCRUM Methodology",
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
      url: 'https://github.com/dannyzsea/hulu-clone'
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
      url: 'https://github.com/dannyzsea/daniel-portfolio'
    },
    {
      id: 4,
      title: "Header with Navigation",
      subtitle: "Sass Practice.",
      imageUrl: "/images/css.PNG",
      largeImageUrl: ["/images/css.PNG"],
      url: "https://github.com/dannyzsea/css-practice"
    }
    
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "February 2021 -  July 2021",
        position: "Software Engineer | C#~ .NET | Java~ Spring boot |",
        company: "Infosys, USA",
        details: "Developed and maintained multiple front-end projects using, React, Angular.Implemented Database using SQL Server.Writing clean, scalable code using C# Programming language Developed Data Access Layer using Entity Framework CoreDeveloped Services using ASP.Net core web API.Styled using CSS and bootstrap.Used HTML to structure a web.Used Azure DevOps for version Control.Used Azure for deployment."
      },
      {
        id: 2,
        year: "2017 - September 2020",
        position: "Front-end Developer|React | Angular | C#~ .NET | Java~ Spring boot |",
        company: "BHD IT SOLUTIONS PLC, Addis Ababa, Ethiopia",
        details: " • October 2017-Sep 23, 2020 Clients: AGAZI DIMENSIONAL STONE PLC Frontend Developer Engineer /and slight help with Java, C#, .NET Designed and Developed UI using react with Redux and tested with jasmine.Discussed with fellow developers to understand existing code and come up with efficient solution for given requirement.Extensively used GitHub for Version control.Used Flex box for designing responsive web App. Used Postman to build modify and test API.Developed and maintained multiple front-end projects using, React, Angular.Implemented Database using SQL Server.Writing clean, scalable code using C# Programming language Developed Data Access Layer using Entity Framework Core Developed Services using ASP.Net core web API."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2011 - 2016 evaluated to USA equivalence in 2018 ",
        graduation: " Bachelor's degree",
        university: "Ethiopia Institute of Techonology (Mekelle University)",
        details: "Key Courses: Software Engineering, Database management system, Modern Programming Practices, Computer Architecture, Operating Systems, Embedded system programming and design, Java programming..."
      }

    ]
  },
  contactInfo: {
    phoneNumbers: [ '+1 206-769-1821'],
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
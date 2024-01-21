const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://dharun1819.github.io/Portfolio/',
  title: 'DP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Dharun P',
  role: 'Full Stack Developer',
  description:
    'Welcome to my portfolio! I am Dharun, a passionate and experienced Full Stack Developer dedicated to crafting interactive, user-friendly, and visually appealing websites. With a strong foundation in coding and a keen eye for design, I bring creativity and technical expertise to every project.',
  resume: 'https://dharun-resume.tiiny.site/',
  social: {
    linkedin: 'https://www.linkedin.com/in/dharun-periyasamy/',
    github: 'https://github.com/DHARUN1819/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Hostel Management System',
    description:
      'Hostel management system is a web application designed to streamline the management and administration of hostels .The application can be accessed by both the hostel staff and the students through a web-based interface.',
    stack: ['Django', 'Python', 'SQLite'],
    sourceCode: 'https://github.com/DHARUN1819/Hostel-Management-System-Django',
    livePreview: 'https://github.com',
  },
  {
    name: 'Airline Reservation System',
    description:
      'Airline reservation system is a web application that is used to manage and automate the booking process for flights. It allows customers to create an account ,search for flights and make reservations',
    stack: ['PHP', 'MySql',],
    sourceCode: 'https://github.com/DHARUN1819/Airline-Reservation-System',
    livePreview: 'https://github.com',
  },
  {
    name: 'MERN Stack Signup/Login Page',
    description:
      'Sample Signup/Login website built using MERN stack',
    stack: ['MERN', 'Javascript',],
    sourceCode: 'https://github.com/DHARUN1819/MERN_Stack_Signup_Application',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'MongoDB',
  'Node',
  'Git',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'dharundeepak1819@gmail.com',
}

export { header, about, projects, skills, contact }

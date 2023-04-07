import uniqid from 'uniqid';

export const autofill = {
   personal: {
      firstname: 'John',
      lastname: 'Doe',
      address: '123 Main St',
      website: 'www.johndoe.com',
      email: 'johndoe@gmail.com',
      number: '555-1234',
      about: 'As an experienced software engineer, I am adept at developing complex software systems and applications that meet the highest industry standards. I possess the technical knowledge and problem-solving skills required to design, build, and maintain robust and scalable software solutions.'
   },
   education: {
      college: 'University of XYZ',
      degree: 'Bachelor of Science',
      collegeTimeframe: '2010-2014',
      school: 'ABC High School',
      diploma: 'High School Diploma',
      schoolTimeframe: '2006-2010'
   },
   skills: [
      { id: uniqid(), skill: 'React' },
      { id: uniqid(), skill: 'Redux' },
      { id: uniqid(), skill: 'PostgrSQL' },
      { id: uniqid(), skill: 'JavaScript' },
      { id: uniqid(), skill: 'Node.js' },
      { id: uniqid(), skill: 'Tailwind' },
      { id: uniqid(), skill: 'Java' },
      { id: uniqid(), skill: 'Python' },
      { id: uniqid(), skill: 'Git' }
   ],
   experiences: [
      {
         id: uniqid(),
         company: 'ABC Company',
         position: 'Software Engineer',
         tasks: 'Developed a new feature for the company\'s e-commerce website using React and Node.js, resulting in a 25% increase in revenue.',
         start: '2015-01-01',
         end: '2018-12-31'
      },
      {
         id: uniqid(),
         company: 'ABC Company',
         position: 'Software Engineer',
         tasks: 'Worked on optimizing the performance of the company\'s web applications, resulting in a 20% reduction in page load times.',
         start: '2015-01-01',
         end: '2018-12-31'
      },
      {
         id: uniqid(),
         company: 'ABC Company',
         position: 'Software Engineer',
         tasks: 'Collaborated with the design team to implement a new responsive design for the company\'s mobile app, resulting in a 40% increase in user engagement.',
         start: '2015-01-01',
         end: '2018-12-31'
      },
   ]
};
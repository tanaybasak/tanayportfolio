import { type ReactNode } from 'react';

const ciandt: Company = {
  color: '#fff',
  logo: 'ciandt',
};

const deloitte: Company = {
  color: '#fff',
  logo: 'deloitte',
};

const intive: Company = {
  color: '#007ac9',
  logo: 'intive',
};

const beckman: Company = {
  color: '#000',
  logo: 'shippo',
  padding: 4,
};

export const experiences: Experience[] = [
  {
    company: beckman,
    description: null,
    id: 'beckman',
    jobTitle: 'Front end developer',
    period: {
      from: new Date('2023-05-01T00:00:00Z'),
    },
    title: 'Beckman Coulter',
  },
  {
    company: intive,
    consultant: true,
    description: (
      <>
        <p>
          I create design systems and UI style guides to promote
          consistency and efficiency. By conducting usability tests
          with
          <code>Microsoft Clarity</code> and gathering user feedback,
          I,ve improved user satisfaction and engagement.{' '}
        </p>
        <p>
          I actively participate in code reviews, adhere to coding
          standards, and develop WebView pages with CSS3 animations.
        </p>
        <p>
          In Agile sprints, I provide input on UI tasks, estimate
          effort, and deliver high-quality code on time. I optimize
          performance with techniques like lazy loading, code
          minification, image optimization, cross-browser
          compatibility testing, and SEO. I collaborate with
          cross-functional teams to deliver high-quality solutions
          quickly.
        </p>
        <code>
          Web Development, SEO, Google Analytics, User Interface
          Design, REST APIs, Animation, TypeScript, JavaScript,
          React.js, git, Next.js, Tailwind CSS, Figma
        </code>
      </>
    ),
    id: 'intive-1',
    jobTitle: 'Front end developer',
    period: {
      from: new Date('2021-08-01T00:00:00Z'),
      to: new Date('2023-07-01T00:00:00Z'),
    },
    title: 'KPMG',
  },
  {
    company: ciandt,
    consultant: true,
    description: (
      <p>
        Contributed on creating a Design Systems library for use of
        other product teams. Creating various responsive UI components
        in React and ES6 Creating Dynamic Chart visualisation
        components using D3 with React and typeScript Collaborating in
        tech meetups for internal training on various technologies in
        the organization. Collaborating in setting up community
        guidelines for the product team and implementing tokens on
        colors and outline components Responsible to advocate on
        accessibility in design library
      </p>
    ),
    id: 'ci&t-3',
    jobTitle: 'Front end developer',
    period: {
      from: new Date('2020-04-01T00:00:00Z'),
      to: new Date('2021-08-01T00:00:00Z'),
    },
    title: 'HCL',
  },
  {
    company: deloitte,
    consultant: true,
    description: (
      <p>
        Contribution in customer module of ITSM application on
        authentication, rest-api integration, internalization using
        React. Worked on responsive Dashboards for different screens
        using scss. Contribution on creating rest apis using Nodejs
        Framework and mongodb Contributing with cross functional teams
        on various service portal web apps with servicenow team.
        Worked with designers to implement responsive UI components
        across multiple viewports. Communicating with clients to know
        their requirements and implement changes on their websites and
        get required work done from web designers and developers.
        Produce high quality code with cross browser support Work with
        the User Interface architects and adapt and contribute to best
        practices.
      </p>
    ),
    id: 'ci&t-2',
    jobTitle: 'Front end developer',
    period: {
      from: new Date('2018-04-01T00:00:00Z'),
      to: new Date('2020-03-01T00:00:00Z'),
    },
    title: 'Deloitte',
  },
];

export type Period = {
  from: Date;
  to?: Date;
};

export type Company = {
  color: string;
  logo: string;
  padding?: number;
};

export type Experience = {
  company: Company;
  consultant?: boolean;
  description: ReactNode;
  id: string;
  jobTitle: string;
  period: Period;
  title: string;
};

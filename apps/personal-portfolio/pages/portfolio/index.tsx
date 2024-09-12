import { Layout } from '@msanvarov/core-components';
import Image from 'next/image';

const companies = [
  {
    name: 'Loop Financial Services',
    logo: '/assets/dummy-logo1.png',
    position: 'Frontend Developer (Fullstack)',
    duration: 'Sep 2023 - Present',
    description: `
      - Led the migration from Create React App (CRA) to Vite, significantly improving build times and development speed.
      - Transitioned the frontend codebase from JavaScript to TypeScript, reducing type errors and enhancing code scalability.
      - Worked on core fintech modules, including:
        • Payments: Developed a secure payment gateway and integrated third-party APIs for transaction processing.
        • User Management: Created a comprehensive dashboard for user profile management, roles, and permissions.
        • Cash in Transit: Built a real-time tracking system for cash-in-transit operations.
        • Lending: Worked on a loan application portal, implementing dynamic forms, calculations, and validation rules.
        • AI-Based Email Module: Integrated AI-driven email analytics for customer interaction tracking.
        • Invoicing: Developed a dynamic invoicing system, with PDF generation and automatic emailing.
      - Migrated CI/CD pipelines from GitLab to GitHub Actions, improving deployment automation and reducing manual intervention.
      - Upgraded Ant Design (Antd) from v4 to v5, addressing UI issues and enhancing component usage.
      - Developed static product websites using Next.js, deployed on AWS S3, with scalable, serverless architecture.
      - Created backend APIs and scheduled cron jobs for regular data processing and cleanup tasks.
      - Worked closely with QA to perform comprehensive testing for both frontend and backend components.
      - Technologies used: Next.js, React.js, Node.js, TypeScript, Redux Toolkit, AWS S3, GitHub Actions, GitLab.
    `,
  },
  {
    name: 'Eike Consulting Pakistan',
    logo: '/assets/dummy-logo2.png',
    position: 'React Developer',
    duration: 'Aug 2022 - Aug 2023',
    description: `
      - Developed web applications by integrating complex APIs via Redux Toolkit for real-time data synchronization.
      - Implemented efficient form handling using React Hook Form, ensuring optimized form validation and submission.
      - Converted wireframes and Figma designs into pixel-perfect, responsive UI components using HTML/CSS and UI libraries.
      - Built client-side pagination for large data sets, improving performance and usability.
      - Created custom hooks, such as a reusable debounce hook for search optimization, improving UX.
      - Utilized React Hooks like useState, useEffect, and useMemo to enhance application performance.
      - Implemented centralized state management using Context APIs, reducing redundancy and increasing maintainability.
      - Developed interactive animations using Phaser.js for a 2D Avatar project, providing a rich user experience.
      - Integrated an Image Selection Gallery for presentation purposes in a Moodle-based LMS using Vite.
      - Worked in an Agile environment, participated in daily standups, sprint planning, and backlog grooming with a distributed team.
      - Technologies used: React, Redux Toolkit, TypeScript, React Hook Form, Vite, Phaser.js, Moodle, Jira.
    `,
  },
  {
    name: 'Smash Cloud Media',
    logo: '/assets/dummy-logo3.png',
    position: 'MERN Stack Developer (Remote)',
    duration: 'Apr 2022 - Jul 2022',
    description: `
      - Developed reusable components for a custom component library, improving consistency and maintainability across multiple projects.
      - Integrated complex UI designs and ensured responsiveness across all devices using media queries and CSS frameworks.
      - Worked on API integration using Redux with TypeScript, ensuring secure data handling and state management.
      - Implemented routing and lazy loading using React Suspense, optimizing page load times.
      - Created mock environments for API testing using Postman, facilitating seamless integration.
      - Contributed to a responsive web design (RWD) strategy for various e-commerce products, ensuring a mobile-first experience.
      - Collaborated in Agile sprints, participating in daily standups and code reviews, ensuring alignment with project goals.
      - Technologies used: React, Redux, TypeScript, Postman, Bitbucket, Agile, Responsive Web Design.
    `,
  },
  {
    name: 'Logic-Unit',
    logo: '/assets/dummy-logo4.png',
    position: 'Software Developer',
    duration: 'May 2021 - Apr 2022',
    description: `
      - Developed eCommerce platform web applications and Progressive Web Apps (PWA), focusing on user experience and scalability.
      - Integrated Keycloak authentication into multiple web applications, ensuring secure user access and session management.
      - Worked on POS and Inventory Management systems, performing CRUD operations and state management with Redux.
      - Integrated offline support using LocalForage and IndexedDB, enabling users to access the app even without an internet connection.
      - Implemented comprehensive form validation using validation libraries, ensuring data integrity across multiple modules.
      - Collaborated closely with UX designers and clients to turn requirements into functional applications.
      - Used developer tools like React DevTools and Redux DevTools for debugging, optimizing the performance of web applications.
      - Technologies used: React, Redux, Keycloak, LocalForage, IndexedDB, Material UI, Android Studio, Postman, Git.
    `,
  },
];

const PortfolioPage = () => {
  return (
    <Layout wrapperClass="main-workspage">
      <section className="projects-area">
        <div className="container">
          <h1 className="section-heading">Work Experience</h1>
          <div className="row">
            {companies.map((company, i) => (
              <div key={i} className="col-md-12 mb-4">
                <div data-aos="zoom-in" className="project-item shadow-box">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      {/* <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={50}
                        height={50}
                        className="company-logo"
                      /> */}
                      <div className="ml-3">
                        <h3 className="mb-1">{company.name}</h3>
                        <p className="">{company.position}</p>
                        <small style={{ color: '#777' }}>
                          {company.duration}
                        </small>
                      </div>
                    </div>
                    <div className="project-btn">
                      <img src="/assets/icons/cta-icon.svg" alt="Button" />
                    </div>
                  </div>
                  <div className="project-info mt-3">
                    <p>{company.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;

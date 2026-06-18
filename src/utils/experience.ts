export type ExperienceRole = {
  title: string;
  meta: string;
  description: string;
};

export type ExperienceGroup = {
  imagePath: string;
  altText: string;
  imageClass?: string;
  company: string;
  totalTenure: string;
  roles: ExperienceRole[];
};

export const experience: ExperienceGroup[] = [
  {
    imagePath: '/src/assets/neverhack_logo.jpg',
    altText:
      'Neverhack - Empresa donde trabaja Rubén Romera como desarrollador e instructor técnico',
    imageClass: 'h-12 w-auto md:-left-16',
    company: 'Neverhack',
    totalTenure: '2 años y 1 mes',
    roles: [
      {
        title: 'Full-Stack Developer & Technical Instructor',
        meta: 'Neverhack | Jul. 2025 - Present · (2 years)',
        description:
          'Development of the <strong>(NEVERHACK)</strong> internal ERP, creation of new projects and maintenance of existing ones with React, Node, Angular and Spring. Training the team in new AI technologies through classes and webinars.',
      },
      {
        title: 'Data Analyst & Machine Learning Engineer',
        meta: 'Neverhack | Jul. 2024 - Jul. 2025 · (1 year)',
        description:
          'Administration of Splunk dashboards for <strong>(INDITEX)</strong>. Development of ML models for energy consumption prediction <strong>(Orange)</strong> and AI-driven competitive analysis in the banking sector <strong>(Caixabank)</strong>.',
      },
    ],
  },
  {
    imagePath: '/src/assets/nttdata_logo.jpg',
    altText:
      'NTT DATA - Empresa donde trabajó Rubén Romera como desarrollador front-end (1 year 10 months)',
    imageClass: 'h-12 w-auto md:-left-16',
    company: 'NTT DATA',
    totalTenure: '1 año y 10 meses',
    roles: [
      {
        title: 'Front-End Web Developer',
        meta: 'NTT DATA | Feb. 2023 - Jun. 2024 · (1 year 4 mths)',
        description:
          'I developed mortgage offer simulators for <strong>(CaixaBank)</strong> using React, focused on performance and usability.',
      },
      {
        title: 'Front-End Mobile Developer',
        meta: 'NTT DATA | Sep. 2022 - Feb. 2023 · (6 mths)',
        description:
          'I participated in the development of the <strong>(Pepephone)</strong> mobile application with React Native.',
      },
    ],
  },
];

// gitprofile.config.js

const config = {
  github: {
    username: 'NCutler211', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'natecutler',
    mastodon: 'NCutler211@mastodon.social',
    medium: 'NCutler211',
    dev: 'NCutler211',
    email: 'ncutler211@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/NCutler211/portfolio_be/blob/1394a14b5272d2038be193e94d028ba5a021685d/Nathaniel%20Cutler%20Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'R',
    'MATLAB',
    'Tableau',
    'Power BI',
    'Data Analysis',
    'Data Visualization',
    'Statistical Analysis',
    'Data Mining'
  ],
  experiences: [
    {
      company: 'United States Marine Corps',
      position: 'Platoon Sergeant NCOIC',
      from: 'July 2011',
      to: 'Dec 2018',
      companyLink: 'https://www.cbirf.marines.mil/',
    }
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Arizona',
      degree: 'B.S. Information Science: Data Science Emphasis',
      from: '2019',
      to: '2023',
    }
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Radiance',
      description:
        'Publicly available aggregation of global ambient radiation measurements hosted through AWS Cloud and produced utilizing Python, R, Tableau, & PowerBI',
      imageUrl: 'https://github.com/NCutler211/portfolio_be/blob/main/images/Poster_Second_Draft_Version_2.png?raw=true',
      link: 'https://github.com/dessak/ISTA498-Capstone',
    }
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'NCutler211', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',


    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  /*
  footer: `Made with <a 
      class="text-primary" href="https://github.com/NCutler211/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  */
};

export default config;

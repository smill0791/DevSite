import HEADSHOT from '@salesforce/resourceUrl/Headshot';
import SOCIAL_ICONS from '@salesforce/resourceUrl/SOCIAL';

export const PROFILE_IMAGE = HEADSHOT;

export const SOCIAL_LINKS = [
    {
        type: 'linkedin',
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/sampson-miller-72087a17a/",
        icon: SOCIAL_ICONS + '/SocialIcons/linkedin_icon.png'
    },
    {
        type: 'github',
        label: "Github",
        link: "https://github.com/smill0791",
        icon: SOCIAL_ICONS + '/SocialIcons/github-logo.png'
    },
    {
        type: 'trailhead',
        label: "Trailhead",
        link: "https://www.salesforce.com/trailblazer/smiller82",
        icon: SOCIAL_ICONS + '/SocialIcons/trailhead-svgrepo-com.png'
    }
];

export const USER_DETAILS = {
    NAME: 'Sampson Miller',
    ROLE: 'Salesforce Developer',
    EMAIL: 'smill0791@gmail.com',
    PHONE: '505-410-7937'
};

export const CAREER_SUMMARY={
    HEADING:"CAREER SUMMARY",
    DESCRIPTION:"Paragraph of career summary goes here yada yada yada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yadayada yada........",
}

export const EXPERIENCE_DATA={
    HEADING:'Work Experience',
    EXPERIENCES:[
        {
            ROLE:"Salesforce Developer",
            COMPANY_NAME:"Guild",
            DURATION:"September 2022 - May 2024",
            DESCRIPTION:"Worked on Development team to enhance coach user experience and Salesfroce student intake workflow.",
            DESCRIPTION_POINTS:[
                "Worked with Event Bus pipeline managing data between AWS and Salesforce",
                "Used and updated github packaging model for daily deployments to Salesforce",
                "Wrote tests in jest framework for frontend LWC testing",
                "Created omni channel configurations to route work evenly to coaching team"
            ],
            TECHNOLOGIES_USED:{
                HEADING:'Technologies used',
                LIST:[
                    "Apex",
                    "Javascript",
                    "LWC",
                ]
            }
        },
        {
            ROLE:"Salesforce Developer",
            COMPANY_NAME:"Virta Health",
            DURATION:"March 2021 - April 2022",
            DESCRIPTION:"Job description goes here",
            DESCRIPTION_POINTS:[
                "Updated Google Cloud Pubsub to Salesforce subscription model to increase data efficiency",
                "Optimized lightning components in Salesforce for our patient admin team",
                "Wrote frontend code in our internal patient app built on React and TypeScript",
                "Used modern development tools including Docker, Kubernetes, Tilt and Storybook for work"
            ],
            TECHNOLOGIES_USED:{
                HEADING:'Technologies used',
                LIST:[
                    "Apex",
                    "Javascript",
                    "LWC",
                ]
            }
        },
        {
            ROLE:"Salesforce Consultant",
            COMPANY_NAME:"Slalom Consulting",
            DURATION:"March 2021 - April 2022",
            DESCRIPTION:"Job description goes here",
            DESCRIPTION_POINTS:[
                "Managed client facing experience in administrative and development roles",
                "Directed Salesforce projects though execution of consulting approach and onsite visits",
                "Developed lightning web components to add custom functionality to production environment",
                "Actively used DevOps pipelines and various continuous integration solutions",
                "Developed POC work during project discovery phases to support client buy in",
                "Created business processes with Salesforce tools including custom Flows, sales path, quick actions, process builder and implementing the Salesforce for outlook plugin in an org"

            ],
            TECHNOLOGIES_USED:{
                HEADING:'Technologies used',
                LIST:[
                    "Apex",
                    "Javascript",
                    "LWC",
                ]
            }
        },
        {
            ROLE:"Salesforce Application Developer",
            COMPANY_NAME:"Zayo Group",
            DURATION:"March 2021 - April 2022",
            DESCRIPTION:"Job description goes here",
            DESCRIPTION_POINTS:[
                "Managed user roles and permissions for different custom objects and record types",
                "Developed and maintained internal and external Salesforce scalable applications",
                "Created custom components written in Apex and Visualforce",
                "Wrote unit tests in Apex to be compliant with Salesforce testing guidelines",
                "Collaborated with front end team to develop our customer facing front end web application ",
            ],
            TECHNOLOGIES_USED:{
                HEADING:'Technologies used',
                LIST:[
                    "Apex",
                    "Javascript",
                    "LWC",
                ]
            }
        }
    ]
}

export const EDUCATION_DATA={
    ICON: SOCIAL_ICONS + '/SocialIcons/education_hat.png',
    HEADING: "EDUCATION",
    LIST:[
        {
            NAME: "Bachelor of Science in Math and Computer Science",
            UNIVERSITY_NAME: "Colorado School of Mines",
            GRADUATION_DATE: "Graduated December 2014"
        }
    ]
}

export const CERTIFICATION_DATA={
    // ICON: SOCIAL_ICONS + 'SocialIcons/linktocerticon' // Update link once static resource is added
    HEADING: "CERTIFICATIONS",
    LIST: [
        {
            NAME: "Salesforce Platform Developer I"
        }
    ]
}

export const SKILLS_DATA={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "FRONTEND",
            SKILLS_LIST: [
                { NAME :"Javascript(ES5/ES6/ES7/ES8)", LEVEL: "85" },
                { NAME :"HTML5/CSS3/SASS/LESS", LEVEL: "90" },
                { NAME :"Angular", LEVEL: "75" },

            ]
        },
        {
            HEADING: "BACKEND",
            SKILLS_LIST: [
                { NAME :"Python", LEVEL: "80" },
                { NAME :"SOQL", LEVEL: "90" },
                { NAME :"SQL", LEVEL: "80" },
            ]
        },
        {
            HEADING: "SALESFORCE",
            SKILLS_LIST: [
                { NAME :"LWC", LEVEL: "90" },
                { NAME :"CUSTOM FLOWS", LEVEL: "85" },
            ]
        }
    ],
    OTHER_SKILLS:{
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            "Git",
            "Jira",
            "Miro",
            'Unit Testing',
            "Jest",
            "Confluence"
        ]
    }
}

export const INTERESTS_DATA={
    HEADING: "Interests",
    LIST: ["Reading", "Music Production", "Guitar", "Brazilian Jiu Jitsu"]
}
import HEADSHOT from '@salesforce/resourceUrl/Headshot';
import SOCIAL from '@salesforce/resourceUrl/Social';

export const PROFILE_IMAGE = HEADSHOT;

export const SOCIAL_LINKS = [
    {
        type: 'linkedin',
        label: "linkedin/SampsonMiller",
        link: "https://www.linkedin.com/in/sampson-miller-72087a17a/",
        icon: SOCIAL + '/SocialIcons/linkedin_icon.png'
    },
    {
        type: 'github',
        label: "github/smill0791",
        link: "https://github.com/smill0791",
        icon: SOCIAL + '/SocialIcons/github-logo.png'
    },
    {
        type: 'trailhead',
        label: "trailhead/SampsonMiller",
        link: "https://www.salesforce.com/trailblazer/smiller82",
        icon: SOCIAL + '/SocialIcons/trailhead-svgrepo-com.png'
    }
];

export const USER_DETAILS = {
    NAME: 'Sampson Miller',
    ROLE: 'Salesforce Developer',
    EMAIL: 'smill0791@gmail.com',
    PHONE: '505-410-7937'
};
import { LightningElement } from 'lwc';
import { USER_DETAILS, SOCIAL_LINKS, PROFILE_IMAGE, CAREER_SUMMARY } from './myResumeContainerData';

export default class MyResumeContainer extends LightningElement {
    // Assign the imported value to a property
    USER_DETAILS = USER_DETAILS;
    SOCIAL_LINKS = SOCIAL_LINKS;
    PROFILE_IMAGE = PROFILE_IMAGE;
    CAREER_SUMMARY = CAREER_SUMMARY;
}
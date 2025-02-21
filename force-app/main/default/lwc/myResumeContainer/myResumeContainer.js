import { LightningElement } from 'lwc';
import { USER_DETAILS, SOCIAL_LINKS, PROFILE_IMAGE } from './myResumeContainerData';

export default class MyResumeContainer extends LightningElement {
    USER_DETAILS = USER_DETAILS; // Assign the imported USER_DETAILS to a property
    SOCIAL_LINKS = SOCIAL_LINKS; // Assign the imported SOCIAL_LINKS to a property
    PROFILE_IMAGE = PROFILE_IMAGE; // Assign the imported PROFILE_IMAGE to a property
}
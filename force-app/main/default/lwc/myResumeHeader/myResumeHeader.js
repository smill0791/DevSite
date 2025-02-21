import { LightningElement, api } from 'lwc';

export default class MyResumeHeader extends LightningElement {
    @api socialDetails;
    @api userDetails;
    @api profileImage;

    get phoneLink() {
        return `tel:${this.userDetails.PHONE}`;
    }
    get emailLink() {
        return `mailto:${this.userDetails.EMAIL}`;
    }

    handleLinkClick(event) {
        console.log('Link clicked'); // Debugging: Confirm the function is called
        event.preventDefault(); // Prevent the default anchor behavior
        console.log('Default behavior prevented'); // Debugging: Confirm this line runs
        const url = event.currentTarget.href; // Get the href from the anchor tag
        window.open(url, '_blank'); // Open the link in a new tab
    }
}
import { LightningElement } from 'lwc';

export default class CompGrandp extends LightningElement {
    grandText;

    grandPHandler(event){
        this.grandText = event.detail;
    }
}
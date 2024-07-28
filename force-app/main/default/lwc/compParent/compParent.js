import { LightningElement } from 'lwc';

export default class CompParent extends LightningElement {
    text;
    dataHandler(eve){
        this.text = eve.detail;
    }
}
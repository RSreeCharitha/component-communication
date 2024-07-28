import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe,MessageContext } from 'lightning/messageService';
import demoLMS from '@salesforce/messageChannel/demoLMS__c';
export default class CompUnrelated extends LightningElement {
    demoText;

    @wire(MessageContext)
    msgContext;

    connectedCallback(){
        this.subscription = subscribe(this.msgContext, demoLMS, (payload) => this.textHandler(payload));
    }

    textHandler(payload){
        this.demoText = payload.text;
    }

}
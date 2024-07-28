import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import demoLMS from '@salesforce/messageChannel/demoLMS__c';
export default class CompChild extends LightningElement {
    text;

    @wire(MessageContext)
    msgContext;
    submitHandler(){
        this.text = this.refs.inp.value;
        const evt = new CustomEvent('passdata',{
            detail:this.text,
            bubbles:true,
            composed:true
        });

        this.dispatchEvent(evt);
        let payload = {text: this.text};

        publish(this.msgContext, demoLMS, payload);

    }

    
}
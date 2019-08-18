import { LightningElement, api } from 'lwc';

export default class StencilLwc extends LightningElement {

    @api opacities = ['opacity: 1', 'opacity: 0.9', 'opacity: 0.8', 'opacity: 0.7', 'opacity: 0.6', 'opacity: 0.5', 'opacity: 0.4', 'opacity: 0.3', 'opacity: 0.2', 'opacity: 0.1'];
    @api columns = [1,2,3];
    @api double = false;

}
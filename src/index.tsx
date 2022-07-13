
function Component(constructor: Function) {
    console.log('Decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Insert the component in the DOM');
        
    }
    
}

@Component
class ProfileComponent {
     
}
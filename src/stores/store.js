import Flux from "@4geeksacademy/react-flux-dash";

class Store extends Flux.DashStore{
    constructor(){
        super();
        this.addEvent("contacts",(data)=>{
            //transforma la data
            return data;
        });
    }
}
export default new Store();
export default class CustomerService {
    constructor() {
        console.log('new CustomerService');
    }

    getCustomer(id) {
        switch(id) {
            case 1:
                return Promise.resolve({ firstname: "Jose", lastname: "Bove" });
            case 2:
                return Promise.resolve({ firstname: "Guerric", lastname: "P" });
        }
        
    }
}
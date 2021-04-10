import { otherCode } from './otherCode.js';
import { customerService } from './services-facade/customer.service.js';

async function main() {
	const customer = await customerService.getCustomer(2);
	console.log(customer);
	otherCode();
}

main();

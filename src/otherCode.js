import { customerService } from './services-facade/customer.service.js';

export async function otherCode() {
  const customer = await customerService.getCustomer(1);
	console.log(customer);
}

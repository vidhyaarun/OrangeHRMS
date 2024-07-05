import { faker } from '@faker-js/faker';
const data =
{
     firstname : faker.person.firstName(6),
     lastname : faker.person.lastName(),
     empid : faker.number.int(3),
     password : faker.internet.password(8, true,true),
      

}
export default data
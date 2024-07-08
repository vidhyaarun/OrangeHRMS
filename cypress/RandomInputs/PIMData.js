import { faker } from '@faker-js/faker';
const data =
{
     firstname : faker.person.firstName(8),
     lastname : faker.person.lastName(),
     empid : faker.number.int({min: 1000, max: 9999 }),
   
     //username: faker.person.firstName(6),
     password : faker.internet.password(8, true,true),
    // password : faker.internet.password(12, false, /\w/) - contains only words
     vaccancyname : faker.internet.domainWord(),
     //Mno: faker.phone.number(9, true,true)
     //streetname : faker.internet.
     

}
export default data
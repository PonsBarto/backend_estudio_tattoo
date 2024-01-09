import { faker } from "@faker-js/faker";
import { User } from "../../models/User";



export class UserFactory {
    private static generate() {
       const user = new User();
       user.username = faker.internet.userName();
       user.fi
      
 
       return user;
    }
 
    static create(count = 1) {
       return Array.from({ length: count }, this.generate);
    }
 }
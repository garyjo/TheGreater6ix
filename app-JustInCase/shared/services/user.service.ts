import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name: 'Gary',
    username: 'garyuppiah',
    avatar: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVkfbHgVyXw7tVigsl2Gq9-knPZiBcmSc7Z7qQ5W600U7aoAwe'
  }

]);

@Injectable()
export class UserService {

  // get all users
  getUsers() {
    return usersPromise;
  }

  // find a specific user
  getUser(username) {
    return usersPromise.then(users => users.find(user => user.username === username));

    // let user = usersPromise.then(users => {
    //   return users.find(user => {
    //     return user.username === username;
    //   });
    // });

    // return user;
  }

}

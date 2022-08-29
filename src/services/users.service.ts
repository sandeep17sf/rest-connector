import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {UsersDataSource} from '../datasources';

export interface Users {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
}

export class UsersProvider implements Provider<Users> {
  constructor(
    // users must match the name property in the datasource json file
    @inject('datasources.users')
    protected dataSource: UsersDataSource = new UsersDataSource(),
  ) {}

  value(): Promise<Users> {
    return getService(this.dataSource);
  }
}

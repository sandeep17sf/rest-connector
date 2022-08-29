import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'users',
  connector: 'openapi',
  spec: 'http://localhost:3000/explorer/openapi.json',
  validate: false,
  positional: false,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class UsersDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'users';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.users', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

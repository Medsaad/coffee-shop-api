import express from 'express';
import DefaultController from './DefaultController';
import MachinesController from './MachinesController';
import PodsController from './PodsController';

export default class AppContainer {
  /**
   * Register all Controllers to the server Object
   * @param {Object} server
   */
  init(server: express.Application): express.Application {
    new PodsController(server).init();
    new MachinesController(server).init();
    new DefaultController(server).init();

    return server;
  }
}

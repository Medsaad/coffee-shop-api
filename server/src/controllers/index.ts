import express from 'express';
import DefaultController from './DefaultController';
import PodsController from './PodsController';

export default class AppContainer {
  /**
   * Register all Controllers to the server Object
   * @param {Object} server
   */
  init(server: express.Application): express.Application {
    new PodsController(server).init();
    new DefaultController(server).init();

    return server;
  }
}

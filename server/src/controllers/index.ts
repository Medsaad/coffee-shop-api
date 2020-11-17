import express from 'express';
import DefaultController from './DefaultController';
import GithubController from './PodsController';

export default class AppContainer {
  /**
   * Register all Controllers to the server Object
   * @param {Object} server
   */
  init(server: express.Application): express.Application {
    new GithubController(server).init();
    new DefaultController(server).init();

    return server;
  }
}

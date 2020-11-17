import express from 'express';
import BaseController from './BaseController';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '../swagger';
import { IController } from './IController.interface';

export default class DefaultController extends BaseController implements IController {
  constructor(server: express.Application) {
    super(server);
  }

  /**
   * Register Controller
   */
  init() {
    this.server.get('/', this.homeAction);
    this.server.get('/api', this.homeAction);
    this.server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    //handle undefined routes
    this.server.use((_: any, res: express.Response) => {
      res
        .status(404)
        .send(super.sendResponse('NOT_FOUND', 'Resource not found'));
    });
    //handle unknown errors
    this.server.use((err: Error, _: any, res: express.Response) => {
      res.status(500).send(super.sendResponse('UNKNOWN_ERROR', err.message));
    });
  }

  /**
   * @api {get} / Health Check
   * @apiName Github Searcher
   * @apiGroup Health Check
   * @ApiDescription Root request to check if service is responding
   * @apiUse HealthResponse
   */
  /**
   * @api {get} /api Health Check v1
   * @apiVersion 1.0.0
   * @apiName Github Searcher
   * @apiGroup Health Check
   * @ApiDescription V1 Request to check if service is responding
   * @apiUse HealthResponse
   */
  /**
   * Say Hello
   * @param {Object} req
   * @param {Object} res
   * @param {function} next
   */
  homeAction(_: any, res: express.Response) {
    let message = 'The Server is up and running';

    res.status(200).json(super.sendResponse('SUCCESS', message));
  }
}

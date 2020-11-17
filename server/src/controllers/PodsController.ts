import express from 'express';
import { conn } from '../services/mysql';
import { getGithubData } from '../services/request';
import { GHRepo, GHUser } from '../types';
import BaseController from './BaseController';
import { IController } from './IController.interface';

export default class GithubController extends BaseController implements IController {
  constructor(server: express.Application) {
    super(server);
  }

  /**
   * Register Controller
   */
  init() {
    this.server.get('/api/pods', this.getPods);
    this.server.get('/api/machines', this.getMachines);
  }

  /**
   * @api {get} /api/search Seach Github
   * @apiVersion 1.0.0
   * @apiName Github Searcher
   * @ApiDescription Takes a type and search string and returns repos or users that matches that search
   */
  async getPods(req: express.Request, res: express.Response) {
    const data = await conn.query('SELECT * FROM `coffee_pod` limit 10');

    // return res
    //   .status(200)
    //   .json(super.sendResponse('SUCCESS', ''));

    return res.status(200).json(data);
  }

  /**
   * @api {get} /api/clear-cache Clear Cache
   * @apiVersion 1.0.0
   * @apiName Github Searcher
   * @ApiDescription This path clears redis cache
   */
  async getMachines(_: express.Request, res: express.Response) {

    return res
      .status(200)
      .json(super.sendResponse('SUCCESS', ''));
  }
}

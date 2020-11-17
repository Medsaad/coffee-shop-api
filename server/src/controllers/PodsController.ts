import { Application, Request, Response } from 'express';
import { listPods, populatePods } from '../services/pods';
import BaseController from './BaseController';
import { IController } from './IController.interface';
import { FILTERS, POD } from '../types';
import { podSchema } from '../validators/validationSchema';

export default class PodsController extends BaseController implements IController {
  constructor(server: Application) {
    super(server);
  }

  /**
   * Register Controller
   */
  init() {
    this.server.get('/api/pods', this.getPods);
    this.server.get('/api/pods/init', this.initPods);
  }

  /**
   * @api {get} /api/pods/init 
   * @apiVersion 1.0.0
   * @apiName Coffee Shop
   * @ApiDescription Populates pods table with initial data
   */
  async initPods(_: Request, res: Response) {
    const populated = await populatePods();

    const msg = populated? 'Done Successfully' : 'Data already exists';
    const status = populated? 'SUCCESS' : 'FAILED';
    
    return res
      .status(200)
      .json(super.sendResponse(status, msg));
  }

  /**
   * @api {get} /api/pods Return list of pods with applied filters
   * @apiVersion 1.0.0
   * @apiName Coffee Shop
   * @ApiDescription Returns the list of pods with with filters
   */
  async getPods(req: Request, res: Response) {
    //extract filters
    const filters: FILTERS = req.query as any;

    try{
      //validate filters
      await podSchema.validate(filters);
      const castedFilters: FILTERS = await podSchema.cast(filters) as any;
      
      //query data
      const data: POD[] = await listPods(castedFilters);

      return res.status(200).json(data);
    }catch(err){
      console.log(err);
      return res
      .status(400)
      .json(super.sendResponse('FAILED', err.name, err.errors));
    }

  }
}

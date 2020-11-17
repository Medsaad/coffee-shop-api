import { Application, Request, Response } from 'express';
import { listMachines, populateMachines } from '../services/machines';
import BaseController from './BaseController';
import { IController } from './IController.interface';
import { FILTERS, MACHINE } from '../types';
import { machineSchema } from '../validators/validationSchema';

export default class MachinesController extends BaseController implements IController {
  constructor(server: Application) {
    super(server);
  }

  /**
   * Register Controller
   */
  init() {
    this.server.get('/api/machines', this.getMachines);
    this.server.get('/api/machines/init', this.initMachines);
  }

  /**
   * @api {get} /api/machines/init 
   * @apiVersion 1.0.0
   * @apiName Coffee Shop
   * @ApiDescription Populates machines table with initial data
   */
  async initMachines(_: Request, res: Response) {
    const populated = await populateMachines();

    const msg = populated? 'Done Successfully' : 'Data already exists';
    const status = populated? 'SUCCESS' : 'FAILED';
    
    return res
      .status(200)
      .json(super.sendResponse(status, msg));
  }

  /**
   * @api {get} /api/machines Return list of machines with applied filters
   * @apiVersion 1.0.0
   * @apiName Coffee Shop
   * @ApiDescription Returns the list of machines with with filters
   */
  async getMachines(req: Request, res: Response) {
    //extract filters
    const filters: FILTERS = req.query as any;

    try{
      //validate filters
      await machineSchema.validate(filters);
      const castedFilters: FILTERS = await machineSchema.cast(filters) as any;
  
      //query data
      const data: MACHINE[] = await listMachines(castedFilters);

      return res.status(200).json(data);
    }catch(err){
      return res
      .status(400)
      .json(super.sendResponse('FAILED', err.name, err.errors));
    }

  }
}

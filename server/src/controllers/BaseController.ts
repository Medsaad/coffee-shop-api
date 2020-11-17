import express from 'express';

export default class BaseController {
  server: express.Application;

  constructor(server: express.Application) {
    this.server = server;
  }

  init() {
    //Add routes here in controllers
  }

  getServer() {
    return this.server;
  }

  sendResponse(code: string, message: string, errors?: any[]) {
    if (errors) {
      return { code, message, errors };
    } else {
      return { code, message };
    }
  }
}

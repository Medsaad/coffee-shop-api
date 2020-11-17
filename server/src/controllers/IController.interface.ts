import express from 'express';

export interface IController {
  init(server: express.Application): void;
}

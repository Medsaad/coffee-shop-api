import { clear } from './clear.swagger';
import { search } from './search.swagger';

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Github Searcher',
    description: 'An API that searches through github users and repos',
    termsOfService: '',
    contact: {
      name: 'Ahmed Saad',
      email: 'ahmedthegicoder@gmail.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Github searcher',
    },
  ],
  paths: {
    '/search': {
      get: search,
    },
    '/clear-cache': {
      get: clear,
    },
  },
};

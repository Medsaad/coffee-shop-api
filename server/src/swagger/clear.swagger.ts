export const clear = {
  tags: ['clear'],
  description: 'This path clears redis cache',
  operationId: 'clear',
  responses: {
    200: {
      description: 'cleared successfully successfully',
      schema: {
        type: 'object',
        properties: { code: 'SUCCESS', message: 'cleared successfully' },
      },
    },
  },
};

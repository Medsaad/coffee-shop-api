export const search = {
  tags: ['search'],
  description:
    'Takes a type and search string and returns repos or users that matches that search',
  operationId: 'search',
  parameters: [
    {
      name: 'search',
      description: 'A keywork to lookup in github api',
      in: 'query',
      type: 'string',
      required: true,
    },
    {
      name: 'searchType',
      description:
        "The type of data you need to search through. It should 'users' or 'repositories'.",
      default: 'users',
      enum: ['users', 'repositories'],
      in: 'query',
      type: 'string',
      required: true,
    },
  ],
  responses: {
    200: {
      description: 'data returned successfully',
      schema: {
        type: 'array',
        properties: [{}],
      },
    },
    400: {
      description: 'bad request',
      schema: {
        type: 'object',
        properties: { code: 'ERROR', message: 'bad request' },
      },
    },
  },
};

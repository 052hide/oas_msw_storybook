import { rest } from 'msw'
import schema from '../openapi.json'

export const HANDLERS = {
  fetchPets: {
    success: (
      example: keyof typeof schema.paths['/pets']['get']['responses']['200']['content']['application/json']['examples']
    ) => {
      rest.get('/pets', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200),
          ctx.json(schema.paths['/pets'].get.responses[200].content['application/json'].examples[example]),
        )
      })
    },
  },
  addPet: {
    success: (
      example: keyof typeof schema.paths['/pets']['post']['responses']['200']['content']['application/json']['examples']
    ) => {
      rest.post('/pets', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200),
          ctx.json(schema.paths['/pets'].post.responses[200].content['application/json'].examples[example]),
        )
      })
    },
    invalid: (
        example: keyof typeof schema.paths['/pets']['post']['responses']['400']['content']['application/json']['examples']
      ) => {
        rest.post('/pets', (_req, res, ctx) => {
          return res(
            ctx.delay(1000),
            ctx.status(400),
            ctx.json(schema.paths['/pets'].post.responses[400].content['application/json'].examples[example]),
          )
        })
      },
  }
}


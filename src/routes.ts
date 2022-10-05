import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/', function (req: Request, res: Response) {
  return res.send({ msg: ` 🌄 Api Running` })
})

export default routes

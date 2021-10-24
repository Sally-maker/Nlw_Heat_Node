import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUser.controller'
import { CreateMessageController } from './controllers/CreateMessage.controller'
import { Getlast3MessageController } from './controllers/GetLast3Messages.controller'
import { ProfileUserController } from './controllers/PorfileUser.controller'
import { EnsureAuthenticate } from './middleware/EnsureAuthenticate'


const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)
router.post('/messages', EnsureAuthenticate, new CreateMessageController().handle)
router.get('/messages/last3', new  Getlast3MessageController().handle)
router.get('/profile', EnsureAuthenticate, new  ProfileUserController().handle)



export { router }
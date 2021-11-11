import { Router } from 'express'

import employees from './employees'

const router = Router()

// Add Employees Routes
router.use(employees)

export default router

import { PrismaClient } from '@prisma/client'
import { ErrorLogger } from '../utils';
import { Request, Response, Router } from 'express';

const prisma = new PrismaClient()

export const FoodRoutes = (router: Router) => {
    router.get('/', async (req: Request, res: Response) => {
        try {
            const food = await prisma.food.findMany({orderBy: { id: 'asc' }})
            return res.status(200).json({
                data: food,
                success: true,
            })
        } catch (e) {
            console.error("error", e)
            return ErrorLogger(res)
        }
    });

    router.post('/', async (req: Request, res: Response) => {
        try {
            const food = req.body
            console.log("food", food)
            // console.log("req", req)
            if (food) {
                let result
                if (food.id) {
                    const item = {
                        ...food
                    }
                    result = await prisma.food.update({ data: item, where: { id: item.id } })
                } else {
                    const item = {
                        name: food.name ? food.name : '',
                        price: food.price ? food.price : 0,
                        country: food.country ? food.country : '',
                        category: food.category ? food.category : '',
                        description: food.description ? food.description : ''
                    }
                    result = await prisma.food.create({ data: item })
                }

                
                return res.status(200).json({
                    data: result,
                    success: true,
                })
            } else {
                console.error("Food body is empty!")
                return ErrorLogger(res)
            }
        } catch (e) {
            console.error("error", e)
            return ErrorLogger(res)
        }
    });

    router.post('/delete', async (req: Request, res: Response) => {
        try {
            console.log("body", req.body)
            if (req.body.id) {
                const id = req.body.id
                await prisma.food.delete({ where: { id: id }})

                return res.status(200).json({
                    success: true,
                })
            } else {
                console.error("no id") 
                return ErrorLogger(res)
            }
        } catch (e) {
            console.error("error", e)
            return ErrorLogger(res)
        }
    });

    return router;
}

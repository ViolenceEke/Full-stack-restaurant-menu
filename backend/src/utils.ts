import { Response } from "express";

export const ErrorLogger = (res: Response, msg?: string) => {
    return res.status(500).json({
        success: false,
        msg: msg || null
    })
}
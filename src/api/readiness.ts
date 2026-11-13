import express, { type Express, type Request, type Response } from 'express';

export function handlerReadiness(req: Request, res: Response): void {
  res.set('Content-Type', 'text/plain'),
    res.send('OK')
}

import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../exceptions';

function validateGroup(req: Request, res: Response, next: NextFunction): void {
    const { name, faculty } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        throw new BadRequestError('Invalid name');
    }

    if (!faculty || typeof faculty !== 'string' || faculty.trim().length === 0) {
        throw new BadRequestError('Invalid faculty');
    }

    next();
}

function validateStudent(req: Request, res: Response, next: NextFunction): void {
    const { name, surname, email, phone, age, groupId } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        throw new BadRequestError('Invalid name');
    }

    if (!surname || typeof surname !== 'string' || surname.trim().length === 0) {
        throw new BadRequestError('Invalid surname');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
        throw new BadRequestError('Invalid email');
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
        throw new BadRequestError('Invalid phone');
    }

    if (!age || typeof age !== 'number' || age <= 0) {
        throw new BadRequestError('Invalid age');
    }

    if (!groupId || typeof groupId !== 'string' || groupId.trim().length === 0) {
        throw new BadRequestError('Invalid groupId');
    }

    next();
}

export { validateGroup, validateStudent };

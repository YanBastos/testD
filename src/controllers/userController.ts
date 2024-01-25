import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user';
import bcrypt from 'bcrypt';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { nome, email, telefone, senha } = req.body;

        const hashedSenha = await bcrypt.hash(senha, 10);
        const user = new UserModel({ nome, email, telefone, senha: hashedSenha });
        await user.save();
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }
}
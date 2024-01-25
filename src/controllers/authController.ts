import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, senha } = req.body;

        // enconrtar o usuario pelo email
        const user = await UserModel.findOne({ email });

        // verificar se o usuario existe e a senha está correta

        if (!user || !(await bcrypt.compare(senha, user.senha))) {
            return res.status(401).json({ msg: 'Credenciais invalidas' })
        }

        // gerar toke de autenticação
        const token = jwt.sign({ userId: user._id }, 'secreto', { expiresIn: '1h' });

    } catch (error) {
        next(error)
    }
}
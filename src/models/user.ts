import { Schema, model, Document } from "mongoose";

interface User extends Document {
    nome: string
    email: string
    telefone: string
    senha: string
}

const userSchema = new Schema<User>({
    nome: String,
    email: String,
    telefone: String,
    senha: String,
  });

const UserModel = model<User>('User', userSchema)

export default UserModel;
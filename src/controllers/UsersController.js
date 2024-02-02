const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

const knex = require('../database/knex');

class UsersController{
    /**
     * index - GET para listar vários registros.
     * show - GET para exibir um registro específico.
     * create - POST para criar um registro.
     * update - PUT para atualizar um registro.
     * delete - DELETE para remover um registro.
    */
    async index(req, res){
        const allUsers = await knex('users').select('*');

        return res.status(200).json(allUsers);
    }

    async show(req, res){
        const { id } = req.params;

        const user = await knex('users').select('*').where('id', id).first();

        return res.status(200).json(user);
    }

    async create(req, res){
        const { name, email, password } = req.body;

        const checkUserExists = await knex('users').select('*').where('email', email).first();

        if(checkUserExists){
            throw new AppError("Este e-mail já está em uso");
        }

        const hashedPassword = await hash(password, 8);

        await knex('users').insert({ name, email, password: hashedPassword });

        return res.status(201).json();
    }

    async update(req, res){
        const { name, email, password, old_password } = req.body;
        const { id } = req.params;

        const user = await knex('users').select('*').where('id', id).first();

        if(!user){
            throw new AppError("Usuário não encontrado");
        }

        const userWithUpdatedEmail = await knex('users').select('*').where('email', email).first();
        
        if(userWithUpdatedEmail && userWithUpdatedEmail.id == user.id){
           throw new AppError("Este e-mail já está em uso.");
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password){
            throw new AppError("Você precisa informar a senha antiga para definir a nova senha");
        }

        if(password && old_password){
            const checkOldPassword = await compare(old_password, user.password);

            if(!checkOldPassword){
                throw new AppError("A senha antiga não confere");
            }

            user.password = await hash(password, 8);
        }

        await knex('users')
        .where('id', user.id)
        .update({
          name: user.name,
          email: user.email,
          password: user.password,
          updated_at: knex.raw('CURRENT_TIMESTAMP')
        });

        return res.json();
    }

    async delete(req, res){
    }
}

module.exports = UsersController;

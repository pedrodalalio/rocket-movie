const AppError = require("../utils/AppError");

const knex = require('../database/knex');

class MovieTagsController{
    async index(req, res){
        const allTags = await knex('movie_tags').select('*');

        return res.status(200).json(allTags);
    }

    async show(req, res){
        const { id } = req.params;

        const tag = await knex('movie_tags').select('*').where('id', id).first();

        if(tag === undefined){
            throw new AppError("Tag não encontrada", 404);
        }

        return res.status(200).json(tag);
    }

    async create(req, res){
        const { note_id, user_id, name } = req.body;

        await knex('movie_tags').insert({ note_id, user_id, name });

        return res.status(201).json();
    }

    async update(req, res){
        const { name } = req.body;
        const { id } = req.params;

        const notes = await knex('movie_tags').select('*').where('id', id).first();

        if(!notes){
            throw new AppError("Tag não encontrada");
        }

        await knex('movie_tags')
        .where('id', id)
        .update({
          name: name
        });

        return res.json();
    }

    async delete(req, res){
        const { id } = req.params;

        const deletedNote = await knex('movie_tags').where('id', id).del().returning('*');

        if(!deletedNote){
            throw new AppError("Tag não encontrada");
        }

        return res.status(204).json();
    }
}

module.exports = MovieTagsController;

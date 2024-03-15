const AppError = require("../utils/AppError");

const knex = require('../database/knex');

class MovieNotesController{
    async index(req, res){
        const allNotes = await knex('movie_notes').select('*');

        return res.status(200).json(allNotes);
    }

    async show(req, res){
        const { id } = req.params;

        const notes = await knex('movie_notes').select('*').where('id', id).first();

        if(notes === undefined){
            throw new AppError("Nota não encontrada");
        }

        return res.status(200).json(notes);
    }

    async create(req, res){
        const { title, description, rating, user_id } = req.body;

        await knex('movie_notes').insert({ title, description, rating, user_id });

        return res.status(201).json();
    }

    async update(req, res){
        const { title, description, rating } = req.body;
        const { id } = req.params;

        const notes = await knex('movie_notes').select('*').where('id', id).first();

        if(!notes){
            throw new AppError("Nota não encontrada");
        }

        await knex('movie_notes')
        .where('id', id)
        .update({
          title: title,
          description: description,
          rating: rating,
          updated_at: knex.raw('CURRENT_TIMESTAMP')
        });

        return res.json();
    }

    async delete(req, res){
        const { id } = req.params;

        const deletedNote = await knex('movie_notes').where('id', id).del().returning('*');

        if(!deletedNote){
            throw new AppError("Nota não encontrada");
        }

        return res.status(204).json();
    }
}

module.exports = MovieNotesController;

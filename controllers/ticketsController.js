'user strict'

const Sequelize = require('sequelize');
const db = require('../models')
const TICKETS = db.tickets;

module.exports = {
    find (req, res) {
        return TICKETS.findAll()
        .then(cuenta => res.status(200).send(cuenta))
        .catch(error => res.status(400).send(error))
    },

    create(req, res) {
        const { id_mall, entrance } = req.body;
    
        TICKETS.create({
            id_mall: id_mall,
            entrance: entrance
        })
        .then(() => {
            res.status(201).json({ message: 'Ticket creado exitosamente' });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).json({ error: 'Error al crear ticket' });
        });
    }
}
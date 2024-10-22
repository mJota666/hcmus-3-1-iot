import express from 'express'

class LedControllers {
    index(req, res) {
        res.render('Led');
    }
}

export default new LedControllers
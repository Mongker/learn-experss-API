/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 8/18/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

'use strict'

const shortid = require('shortid');
const db = require('../../db');

module.exports = {
    get: (req, res) => {
        console.log(db.get('todo').value());
        res.json(db.get('todo').value())
    },
    detail: (req, res) => {
        const id = req.params.id;
        console.log(typeof id);
        const todo = db.get('todo').find({ id: id }).value();
        res.json(todo);
    },
    update: (req, res) => {
        const data = db.get('todo').value();
        let index = null;
        data.map((item, i) => {
            if(item.id === req.params.id) {
                index = i;
                console.log(index);
                const id_put = data[index].id;
                console.log(id_put);
                const obj = {
                    "id": id_put,
                    "todo": req.body.todo || "",
                    "date_start": req.body.date_start || "",
                    "date_end":  req.body.date_end || "",
                    "content":  req.body.content || "",
                    "data_string":  req.body.data_string || "{}",
                    "icon":  req.body.icon || ""
                };
                (index !== null) && db.set(`todo[${index}]`, obj).write();
            }
        });
        (index !== null) ? res.json({message: 'Insert success!'}) : res.json({message: 'Error'})
        
    },
    store: (req, res) => {
        const obj = {
            "id": shortid.generate(),
            "todo": req.body.todo || "",
            "date_start": req.body.date_start || "",
            "date_end":  req.body.date_end || "",
            "content":  req.body.content || "",
            "data_string":  req.body.data_string || "{}",
            "icon":  req.body.icon || ""
        };
        db.get('todo').push(obj).write();
        res.json({message: 'Post Insert success!'})
    },
    delete: (req, res) => {
        const arr = db.get('todo').value().filter(obj => obj.id !== req.params.id);
        console.log(arr);
        const test = db.set('todo', arr).write();
        console.log(test);
        res.json({message: 'Insert success!'})
    }
}
import express from 'express';
import cors from 'cors';

const middleWare = app => {
	app.use(express.json({ limit: '20mb' }));
	app.use(express.urlencoded({ extended: false, limit: '20mb' }));
	app.use(cors({ origin: '*' }));
};

export default middleWare;

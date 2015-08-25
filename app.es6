'use strict';

import koa from 'koa';
import koaBody from 'koa-body';
import fs from 'fs';
import GithubWebhookHandler from 'koa-github-webhook-handler';
import handlers from './handlers/handlers';
import trello from './trello';

const CONFIG = JSON.parse(fs.readFileSync('./config.json'));
trello.init(CONFIG.trello.key, CONFIG.trello.token);

let app = koa();

let githubWebhookHandler = new GithubWebhookHandler({
  path: '/webhook',
  secret: 'myhashsecret'
});
handlers.push(githubWebhookHandler);

app.use(koaBody({formidable:{uploadDir: __dirname}}));
app.use(githubWebhookHandler.middleware());

export default app;

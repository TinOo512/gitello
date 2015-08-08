'use strict';

import koa from 'koa';
import koaBody from 'koa-body';
import GithubWebhookHandler from 'koa-github-webhook-handler';
import handlers from './handlers/handlers'

let app = koa();

let githubWebhookHandler = new GithubWebhookHandler({
  path: '/webhook',
  secret: 'myhashsecret'
});
handlers.push(githubWebhookHandler);

app.use(koaBody({formidable:{uploadDir: __dirname}}));
app.use(githubWebhookHandler.middleware());

export default app;

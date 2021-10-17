import {rest} from 'msw';
import {userCategory, userCountry, lang, industry} from '../data';

export const handlers = [
  rest.get('/api/v1/public/user_category/input_list', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userCategory));
  }),
  rest.get('/api/v1/public/country/input_list', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userCountry));
  }),
  rest.get('/api/v1/public/lang/input_list', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(lang));
  }),
  rest.get('/api/v1/public/industry/input_list', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(industry));
  }),
];

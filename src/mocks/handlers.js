import {rest} from 'msw';
import {
  userCategory,
  userCountry,
  lang,
  industry,
  registeredUsers,
} from '../data';

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
  rest.post('/api/v1/public/auth/registration_demo', (req, res, ctx) => {
    const data = JSON.parse(req.body);
    console.log(registeredUsers);
    if (
      registeredUsers.find(
        user => user.corporate_email === data.corporate_email
      )
    ) {
      return res(
        ctx.status(409),
        ctx.json({message: 'Пользователь уже зарегистрирован.'})
      );
    }
    registeredUsers.push(data);
    return res(ctx.status(200));
  }),
];

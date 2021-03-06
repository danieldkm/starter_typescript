import { Router } from 'express';

const router = Router();

router.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
});
export default router;

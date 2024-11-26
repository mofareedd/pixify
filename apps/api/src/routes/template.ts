// @ts-ignore
import { zValidator } from '@hono/zod-validator';
import { database } from '@pixify/database';
import { Hono } from 'hono';
import { createTemplateSchema, updateTemplateSchema } from '../lib/schema';

const templateRoute = new Hono()
  .get('/', async (c) => {
    const templates = await database.template.findMany();
    return c.json(templates);
  })
  .post('/', zValidator('json', createTemplateSchema), async (c) => {
    const validated = c.req.valid('json');

    await database.template.create({
      data: {
        name: validated.name,
        description: validated.description,
        imageUrl: validated.imageUrl,
      },
    });
    return c.json({ message: 'template created' }, 201);
  })
  .get('/:id', async (c) => {
    const template = await database.template.findFirst({
      where: {
        id: c.req.param('id'),
      },
    });

    if (!template) {
      return c.json({ message: 'Template not found!' }, 404);
    }

    return c.json(template);
  })
  .put('/:id', zValidator('json', updateTemplateSchema), async (c) => {
    const id = c.req.param('id');
    const validated = c.req.valid('json');

    const template = await database.template.update({
      where: { id },
      data: {
        name: validated.name,
        description: validated.description,
        imageUrl: validated.imageUrl,
      },
    });

    return c.json({ message: 'Template updated', template });
  })
  .delete('/:id', async (c) => {
    const id = c.req.param('id');

    await database.template.delete({
      where: { id },
    });

    return c.json({ message: 'Template deleted' });
  });

export { templateRoute };

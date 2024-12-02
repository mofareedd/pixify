import { newApp } from '../lib/app';

const templateRoute = newApp().get('/', async (c) => {
  const { db } = c.get('services');
  const templates = await db.query.templates.findMany({
    with: {
      image: true,
    },
  });

  return c.json(templates);
});
// .post('/', zValidator('json', createTemplateSchema), async (c) => {
//   const validated = c.req.valid('json');
//   const { db } = c.get('services');

//   await db.insert(schema.templates).values({
//     name: validated.name,
//     description: validated.description,
//   });

//   return c.json({ message: 'template created' }, 201);
// });
// .get('/:id', async (c) => {
//   const template = await db.template.findFirst({
//     where: {
//       id: c.req.param('id'),
//     },
//   });

//   if (!template) {
//     return c.json({ message: 'Template not found!' }, 404);
//   }

//   return c.json(template);
// })
// .put('/:id', zValidator('json', updateTemplateSchema), async (c) => {
//   const id = c.req.param('id');
//   const validated = c.req.valid('json');

//   const template = await db.template.update({
//     where: { id },
//     data: {
//       name: validated.name,
//       description: validated.description,
//       imageUrl: validated.imageUrl,
//     },
//   });

//   return c.json({ message: 'Template updated', template });
// })
// .delete('/:id', async (c) => {
//   const id = c.req.param('id');

//   await db.template.delete({
//     where: { id },
//   });

//   return c.json({ message: 'Template deleted' });
// });

export { templateRoute };

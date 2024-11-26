import { type FileRouter, createUploadthing } from 'uploadthing/server';

const f = createUploadthing();

export const uploadRouter: FileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */

      maxFileSize: '4MB',
      maxFileCount: 1,
    },
  }).onUploadComplete((data) => {
    console.log(data);
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;

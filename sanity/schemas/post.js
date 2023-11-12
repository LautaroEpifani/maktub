export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      type: "image",
      name: "image",
      title: "Image",
    },
    {name: "description",
      type: "array",
      title: "Description",
      of: [
        {
          type: 'block',
        },
      ]

    }
   
  ],
};

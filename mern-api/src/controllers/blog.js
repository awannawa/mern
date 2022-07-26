exports.createBlogPost = (req, res, next) => {
  const title = req.body.title;
  // const image = req.body.image;
  const image = req.body.body;

  const result = {
    message: "Create Blog Post Success",
    data: {
      post_id: 1,
      title: "Title Blog",
      image: "iamgepath.png",
      body: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      created_at: "26/07/2022",
      author: {
        uid: 1,
        name: "awan",
      },
    },
  };
  res.status(201).json(result);
};

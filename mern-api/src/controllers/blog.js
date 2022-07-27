const { validationResult } = require("express-validator");
const path = require("path");
const fs = require("fs");
const BlogPost = require("../models/blog");

// exports.createBlogPost = (req, res, next) => {};
// --- Create Postingan ---
exports.createBlogPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Input Value Tidak Sesuai");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  if (!req.file) {
    const err = new Error("Gambar harus di upload");
    err.errorStatus = 422;
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;

  const Posting = new BlogPost({
    title: title,
    body: body,
    image: image,
    author: { uid: 1, name: "awan" },
  });

  Posting.save()
    .then((result) => {
      res.status(201).json({
        message: "Create Blog Post Success",
        data: result,
      });
    })

    .catch((err) => {
      console.log("err: ", err);
    });
};

// --- display 1 halaman 5 post ---
exports.getAllBlogPost = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 5;
  let totalItems;

  BlogPost.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return BlogPost.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then((result) => {
      res.status(200).json({
        message: "Data Blog Post Berhasil dipanggil",
        data: result,
        total_data: totalItems,
        per_page: perPage,
        currnet_page: currentPage,
      });
    })
    .catch((err) => {
      next(err);
    });
};

// --- Display Spesifik Postingan byId
exports.getBlogPostById = (req, res, next) => {
  const postId = req.params.postId;
  BlogPost.findById(postId)
    .then((result) => {
      if (!result) {
        const error = new Error("Blog Post tidak ditemukan");
        err.errorStatus = 404;
        throw error;
      }
      res.status(200).json({
        message: "Data blog post berhasil dipanggil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

// --- Update postingan by id ---
exports.updateBlogPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Input Value Tidak Sesuai");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  if (!req.file) {
    const err = new Error("Gambar harus di upload");
    err.errorStatus = 422;
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;
  const postId = req.params.postId;

  BlogPost.findById(postId)
    .then((post) => {
      if (!post) {
        const err = new Error("Blog Post tidak ditemukan");
        err.errorStatus = 404;
        throw err;
      }
      post.title = title;
      post.body = body;
      post.image = image;

      return post.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Update Success",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

// --- delete postingan by Id ---
exports.deleteBlogPost = (req, res, next) => {
  const postId = req.params.postId;

  BlogPost.findById(postId)
    .then((post) => {
      if (!post) {
        const err = new Error("Blog Post tidak ditemukan");
        err.errorStatus = 404;
        throw err;
      }

      removeImage(post.image);
      return BlogPost.findByIdAndRemove(postId);
    })
    .then((result) => {
      res.status(200).json({
        message: "Hapus postingan berhasil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const removeImage = (filePath) => {
  console.log("filePath", filePath);
  console.log("dir name: ", __dirname);

  filePath = path.join(__dirname, "../..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};

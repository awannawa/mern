exports.createProduct = (req, res, next) => {
  res.json({
    message: "create product sukses!!!",
    data: {
      id: 1,
      name: "sepatu baru",
      harga: 100000,
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: "get all product sukses",
    data: {
      id: 1,
      name: "sepatu",
      harga: 100000,
    },
  });
  next();
};

import axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "SET_IMG_PREVIEW", payload };
};

export const postToAPI = (form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);
  axios
    .post("http://localhost:4000/v1/blog/post", data, {
      header: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("post success: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

export const updateToAPI = (form, id) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  // benerin image biar pas pada gak ada requestnya dia bisa tetep input
  data.append("image", form.image);
  axios
    .put(`http://localhost:4000/v1/blog/post/${id}`, data, {
      header: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("update success: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

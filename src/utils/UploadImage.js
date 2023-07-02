const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dp6uypw0c/upload";
const CLOUDINARY_UPLOAD_PRESET = "gc6yg60l";

export const uploadImage = (image) => {
  const file = image;
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  return fetch(CLOUDINARY_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

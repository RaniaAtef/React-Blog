import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function EditForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    axios
      .patch(`http://localhost:3000/posts/${params.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (res) {
        console.log(res);
        navigate("/", { replace: true });
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  useEffect(() => {
    async function getPostById() {
      const res = await axios.get(`http://localhost:3000/posts/${params.id}`);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setImage(res.data.image);
      console.log(res);
    }
    getPostById();
  }, []);
  console.log(title);
  console.log(description);
  console.log(image);

  return (
    <div className="container mx-auto mt-12 ">
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div
          className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: " url('/assets/images/yoga1.jpg')",
          }}
        ></div>
        <div className="w-full lg:w-1/2 py-16 px-12">
          <h2 className="text-3xl mb-4">Edit Post</h2>
          <p className="mb-4">Tell us what you think</p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5">
              <input
                type="text"
                placeholder="Title"
                className="border border-gray-400 py-1 px-2"
                id="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mt-5">
              <input
                type="textarea"
                placeholder="Description"
                className="border border-gray-400 py-1 px-2 w-full"
                id="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="mt-5">
              <input
                type="file"
                placeholder="image"
                className="border border-gray-400 py-1 px-2 w-full"
                id="image"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setImage(e.target.files[0]);
                }}
              />
            </div>

            <div className="mt-5">
              <button className="w-full bg-[#A0C3D2] py-3 text-center text-white">
                Edit Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

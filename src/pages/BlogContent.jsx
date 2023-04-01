import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function BlogContent() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [error, setError] = useState();
  console.log(post);
  console.log(post.image);

  useEffect(() => {
    async function getPostById() {
      // try {
      const data = await axios.get(`http://localhost:3000/posts/${params.id}`);
      console.log("data:", data.data);

      setPost(data.data);
      console.log(post.title);
    }
    getPostById();
  }, []);
  return (
    <>
      {/* <div className="m-auto  flex justify-center items-center mt-52">
        <div className="card lg:card-side bg-base-100 shadow-xl flex ">
          <figure>
            <img className="w-96 " src={`../Data/${post?.image}`} alt="yoga" />
          </figure>

          <div className="card-body w-96">
            <h1 className="font-bold">Author: {post?.firstName}</h1>

            <h1 className="font-bold">{post?.title}</h1>

            <div className="card-actions justify-end">
              <p>{post?.description}</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="card p-2">
        <div className="card bg-base-100 shadow-xl">
          <div className="flex justify-between align-middle items-center px-6">
            <div className="flex justify-center align-middle py-2">
              <span className=" ml-3 pt-2 font-bold">{post?.firstName}</span>
            </div>
          </div>

          <figure>
            <img className="w-96 " src={`../Data/${post?.image}`} alt="yoga" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post?.title}</h2>
            <p>{post?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

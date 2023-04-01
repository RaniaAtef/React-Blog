import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Cards({ post, handleDelete }) {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const getContent = (post) => {
    console.log(post);
    console.log(post.id);
    navigate(`/blog/${post.id}`);
  };
  const handleEdit = (post) => {
    navigate(`/edit/${post.id}`);
  };

  return (
    <div className="container mx-auto flex justify-center items-center py-5 px-5">
      <div className="grid grid-cols-3 gap-8 ">
        <div className="card w-96 bg-base-100 shadow-xl flex">
          <figure>
            {/* <img src={post.image} alt="yoga" /> */}
            <img src={`Data/${post.image}`} alt="yoga" />
            {/* <img src="Data/uploads/6f2ejd5i.jpg" alt="yoga" /> */}
          </figure>
          <div className="card-body">
            {post.userId == id ? (
              <div className="flex gap-3 absolute right-6">
                <button
                  onClick={() => {
                    handleDelete(post);
                  }}
                >
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#A0C3D2"
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    handleEdit(post);
                  }}
                >
                  <svg
                    className="w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#A0C3D2"
                      d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              ""
            )}

            <h1 className="font-bold">Author: {post?.firstName}</h1>
            <h2 className="card-title">
              {post.title.substring(0, 60)}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{post.description.substring(0, 50)}</p>
            {/* <p>{post.userName}</p> */}

            {/* <p>{localStorage.getItem("firstName")}</p> */}
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Meditation</div>
              <div className="badge badge-outline radius">Peace</div>
            </div>
            <button
              type="submit"
              className="btn"
              onClick={() => getContent(post)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useContext, useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";
import Section from "../components/Section";
import AddButton from "../components/AddButton";
import AddForm from "../components/AddForm";
import UserContext from "../context/userContex";
import { ThreeDots, Circles } from "react-loader-spinner";

export default function Home() {
  const pageSize = 3;
  const [noOfPages, setNoOfPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [posts, setPosts] = useState([]);
  async function getPosts() {
    try {
      const { data } = await axios.get("http://localhost:3000/posts");

      setPosts(data);
      setNoOfPages(Math.ceil(data.length / pageSize));
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);
  ///pagination
  const pages = Array(noOfPages)
    .fill(0)
    .map((item, i) => i + 1);
  const start = currentPage * pageSize - pageSize;
  const end = start + pageSize;
  const itemsToRender = posts.slice(start, end);
  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  async function handleDelete(post) {
    try {
      const res = await axios.delete(`http://localhost:3000/posts/${post.id}`);
      console.log(res);
      getPosts();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/assets/images/yoga5.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Find Balance</h1>
            <p className="mb-5">Make your yoga life awesome</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-center items-center py-5 px-5">
        {posts.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 flex flex-col">
            {itemsToRender.map((post) => (
              <Cards
                key={post.id}
                post={post}
                handleDelete={handleDelete}
                className="h-full"
              />
            ))}
          </div>
        ) : (
          <div className="container mx-auto text-center h-10 flex justify-center items-center w-5">
            <Circles />
          </div>
        )}
      </div>

      <div className="flex justify-center">
        {pages.length > 1 && (
          <div>
            <div className="btn-group ">
              {pages.map((page) => (
                <button
                  onClick={() => changeCurrentPage(page)}
                  key={page}
                  className={`btn ${currentPage === page ? "btn-active" : ""}`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <AddButton />
    </>
  );
}

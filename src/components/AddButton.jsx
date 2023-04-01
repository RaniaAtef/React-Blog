import { useNavigate } from "react-router-dom";

export default function AddButton() {
  const navigate = useNavigate();

  function addPost() {
    navigate("/AddPost");
  }
  return (
    <button
      className="btn btn-circle items-center bg-[#A0C3D2] fixed right-0 bottom-0 m-6"
      onClick={addPost}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  );
}

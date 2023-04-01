export default function Section() {
  return (
    // <div className="container mx-auto mt-12 flex ">
    //   <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
    //     <div className="mt-12 align-middle justify-center items-center">
    //       <h1>hello</h1>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque
    //         magnam iure laudantium dolores. At veritatis delectus sapiente,
    //         cumque, dolorum doloremque quas unde quia quos, voluptatem labore
    //         alias eum nisi!
    //       </p>
    //     </div>
    //     <div>
    //       <img
    //         src="../../public/assets/images/yoga3.jpg"
    //         alt=""
    //         className="w-full bg-no-repeat bg-contain"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        content
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        content
      </div>
    </div>
  );
}

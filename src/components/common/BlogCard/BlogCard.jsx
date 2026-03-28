function BlogCard() {
  return (
    <div className="latestNews max-w-5xl margin-auto py-20">
      <h2 className="sectionTitle text-center text-3xl mb-20 font-bold">
        Latest News
      </h2>
      <div className="newsGrid">
        {/* <!-- CARD 1 --> */}

        <div className="newsCard grid grid-cols-<3,1fr> gap-8">
          <div className="newsImg overflow-hidden shadow-[0px_20px_50px 0p_rgba(0,0,0,0,0.08)]">
            <img
              className="w-auto object-cover"
              src="src/assets/Images/blogCards/BlogCard1.png"
              alt=""
            />
            <div className="newsDate absolute bottom-5 left-5 text-center w-10 rounded-md bg-white">
              <span className="block font-bold text-base">18</span>
              <small className="text-xs">NOV</small>
            </div>
          </div>

          <div className="newsContent flex p-20 flex-col justify-between">
            <ul className="newsMeta flex gap-4 text-xs mb-2.5 list-none items-center">
              <li className="flex items-center">
                <img className="w-4 m-1" src="assets/icons/Food.png" alt="" />
                Food
              </li>
              <li className="flex items-center">
                <img className="w-4 m-1" src="assets/icons/Admin.png" alt="" />
                By Admin
              </li>
              <li className="flex items-center">
                <img
                  className="w-4 m-1"
                  src="assets/icons/Comment.png"
                  alt=""
                />
                65 Comments
              </li>
            </ul>

            <h3 className="text-lg text-black mb-2.5 leading-none">
              Curabitur porttitor orci eget neque accumsan venenatis. Nunc
              fermentum.
            </h3>

            <a href="#" className="readMore">
              Read More <img src="assets/icons/Group.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard

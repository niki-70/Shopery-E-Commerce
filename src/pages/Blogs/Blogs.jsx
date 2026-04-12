import blogs from "../../Data/blogs";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import Filters from "../../components/Filters/Filters";

const Blogs = () => {
  return (
    <div className="container mx-auto flex">
      <Filters />
      <div className="grid grid-cols-2 grid-rows-2">
        {blogs.map((card) => {
          return (
            <BlogCard
              key={card.id}
              image={card.image}
              date={card.date}
              month={card.month}
              tag={card.tag}
              author={card.author}
              comments={card.comments}
              title={card.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;

import { useState } from "react";
import PostCard from "./post-card";
import { POST_DATA } from "./post.constant";

const Post = () => {
  const [listPost, setListPost] = useState(POST_DATA);

  return (
    <>
      <div className="filter">
        <button
          onClick={() => {
            const filteredPost = POST_DATA.filter((e) => e.userId === 8);
            setListPost(filteredPost);
          }}
        >
          Filter By userId 8
        </button>
      </div>
      <div className="post-container">
        {listPost.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </>
  );
};

export default Post;

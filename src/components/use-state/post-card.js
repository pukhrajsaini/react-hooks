const PostCard = ({ data }) => {
  const { title, body, id } = data;

  console.log(title, body, id);

  return (
    <div className="post-card">
      <h4 className="post-title">
        {id} {title}
      </h4>
      <p className="post-body">{body}</p>
    </div>
  );
};

export default PostCard;

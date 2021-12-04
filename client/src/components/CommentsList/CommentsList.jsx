import "./CommentsList.scss";
var moment = require('moment');

function CommentsList({comments, handleDeleteComment}) {
  return (
<>
    {comments.map(comment =>
    <li key={comment.id} className="comments-display">

      <div className="comments-display__wrapper">
        <div className="comments-display__user-info">
          <h3 className="comments-display__name">{comment.userName}</h3>
          <p className="comments-display__date">
          {moment(comment.timestamp).fromNow()} 
          </p>
        </div>
        <p className="comments-display__comment">{comment.comment}</p>
        <button
          className="comments-display__delete-button"
        onClick={() => handleDeleteComment(comment.id)}
        >
          Delete
        </button>
      </div>
    </li>
    )}
    </>
  );
}

export default CommentsList;

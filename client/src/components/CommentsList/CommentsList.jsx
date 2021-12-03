import "./CommentsList.scss";
var moment = require('moment');

function CommentsList(props) {
  return (
    <li key={props.id} className="comments-display">

      <div className="comments-display__wrapper">
        <div className="comments-display__user-info">
          <h3 className="comments-display__name">{props.name}</h3>
          <p className="comments-display__date">
          {moment(props.timestamp).fromNow()} 
          </p>
        </div>
        <p className="comments-display__comment">{props.comment}</p>
        {/* <button
          className="comments-display__delete-button" */}
        {/* onClick={() => props.handleDeleteComment(props.commentId)} */}
        {/* >
          Delete
        </button> */}
      </div>
    </li>
  );
}

export default CommentsList;

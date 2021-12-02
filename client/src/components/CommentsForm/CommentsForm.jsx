import './CommentsForm.scss';

const CommentsForm = (props) => {
    return (
      <section className="comments-form" id="comments-form">

        <div className="comments-form__wrapper">

          <form onSubmit={props.addComment} className="comments-form__form">
            <h1 className="comments-form__header">SHARE YOUR EXPERIENCE</h1>
            <label
              htmlFor="name"
              className="comments-form__name-label"
            ></label>
            <input
              className="comments-form__name-input"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <label
              htmlFor="comment"
              className="comments-form__comment-label"
            ></label>
            <input
              className="comments-form__comment-input"
              type="text"
              name="comment"
              placeholder="Add a new comment"
              required
            />
            <input
              type="submit"
              name="submit"
              value="COMMENT"
              className="comments-form__button"
            />
          </form>
        </div>
      </section>
    );
  };
  
  export default CommentsForm;
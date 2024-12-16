import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getGoals, editGoal, reset } from "../features/goals/goalSlice";

function EditGoal() {
  const [text, setText] = useState("");
  const { goalId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);
  if (isLoading) {
    return <Spinner />;
  }

  const goal = goals.find((goal) => goal._id === goalId);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editGoal({ id: goalId, text }));
    setText("");
    navigate("/");
  };

  return (
    <>
      <section className="edit-section">
        <h1>Edit Goal</h1>
        <form onSubmit={handleEdit}>
          <label htmlFor="text">Text: </label>
          <input
            type="text"
            placeholder={goal?.text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button>Edit</button>
        </form>
      </section>
    </>
  );
}

export default EditGoal;

import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { Link } from "react-router-dom";
import { compareSync } from "bcryptjs";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <p>{new Date(goal.createdAt).toLocaleString("en-US")}</p>
      <h2>{goal.text}</h2>
      <Link to={`goals/${goal._id}`}>
        <button className="edit-btn">Edit</button>
      </Link>
      <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>
        X
      </button>
    </div>
  );
};

export default GoalItem;

import React, { useState, useCallback } from "react";
import _ from "lodash";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/comments";

function Search() {
  const [textInput, setTextInput] = useState("");
  const [comments, setComments] = useState([]);

  const onChange = ({ target: { value } }) => {
    setTextInput(value);
    search(value);
  };

  const fetchItem = async (value) => {
    const url = `${URL}?postId=${value}`;
    const res = await axios.get(url);
    setComments(res.data);
  };

  const search = useCallback(
    _.debounce((value) => fetchItem(value), 500),
    []
  );

  return (
    <div>
      <input type="number" value={textInput} onChange={onChange} />
      {comments.map(comment => 
        <div key={comment.id}>{comment.name}</div>
        )}
    </div>
  );
}

export default Search;

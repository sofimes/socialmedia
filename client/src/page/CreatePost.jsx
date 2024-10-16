import React from "react";
import { LuImagePlus } from "react-icons/lu";
import classes from "../style/createpost.module.css";
import { LiaPhotoVideoSolid } from "react-icons/lia";
const CreatePost = () => {
  return (
    <div className={classes.CreatePost}>
      <div>
        <div className={classes.logo}>
          <LuImagePlus size={30} className={classes.imlo} />
          <h1>Create Post</h1>
        </div>
        <div className={classes.input}>
          <form>
            <label>Caption</label>
            <textarea>Some text...</textarea>
          </form>
        </div>
        <div className={classes.postcontainer}>
          <label>Add Photos</label>
          <div className={classes.addpost}>
            <LiaPhotoVideoSolid size={70} className={classes.postlogo} />
            <h3>Drag photo here.</h3>
            <h5>SVG, PNG, JPG</h5>
            <button type="submit">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

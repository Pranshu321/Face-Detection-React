import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";

function App() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const getImage = () => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImage({
          url: img.src,
          width: img.width,
          height: img.height,
        });
      };
    };

    file && getImage();
  }, [file]);

  return (
    <div>
      <Navbar />
      {image ? (
        <NewPost image={image} />
      ) : (
        <div className="newPostCard">
          <div className="addPost">
            <img
              src="https://user-images.githubusercontent.com/86917304/172907558-7fa7eb98-3098-414e-9fa0-b837e031daf1.png"
              alt=""
              className="avatar"
            />
            <div className="postForm">
              <input
                type="text"
                value="What's on your mind?"
                style={{ color: "#6732FF" }}
                className="postInput"
              />
              <label htmlFor="file">
                <img
                  className="addImg"
                  src="https://user-images.githubusercontent.com/86917304/172907160-b39b6528-50d9-46be-87f4-70ee257819f0.png"
                  alt=""
                />
                <img
                  className="addImg"
                  src="https://icon-library.com/images/maps-icon-png/maps-icon-png-5.jpg"
                  alt=""
                />
                <img
                  className="addImg"
                  src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
                  alt=""
                />
                <button> Send </button>
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                id="file"
                style={{ display: "none" }}
                type="file"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

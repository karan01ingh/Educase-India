import profile from "../assets/pfp.png";
import camera from "../assets/cam.png";
import "../css/components/profile.css";
import { useLocation } from "react-router";
import { useRef, useState } from "react";
import React from "react";
export const Profile = () => {
  const location = useLocation();
  const data = location.state;

  const [pfpUrl, setPfpUrl] = useState(profile);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPfpUrl(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <div className="page">
        <section className="content content-profile">
          <div className="profile-wrapper">
            <div className="banner">Account Settings</div>

            <div className="profile-details">
              <div className="pfp-group">
                <img
                  id="pfp"
                  src={pfpUrl}
                  alt="Profile Picture"
                  title="Profile Picture"
                />

                <div className="upload-btn-wrapper" onClick={handleUploadClick}>
                  <img
                    id="upload-btn"
                    src={camera}
                    alt="Upload PfP"
                    title="Upload Profile Picture"
                  />

                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div className="user-info">
                <h4 className="profile-name">{data?.name || "Marry Doe"}</h4>
                <p className="profile-email">
                  {data?.email || "Marry@gmail.com"}
                </p>
              </div>
            </div>

            <p className="description shorter-description">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>

          <div className="empty-space"></div>
        </section>
      </div>
    </div>
  );
};
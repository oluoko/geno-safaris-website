import { useState } from "react";
import profileImage from "../assets/images/userProfile.png";
import Back from "../Components/Back";
import { Link } from "react-router-dom";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const userData = localStorage.getItem("userData");
  console.log(userData);
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    bio: "Our pragmatic toolkit is designed to unleash the full potential of administrative support personnel, empowering them to execute their work excellently and efficiently. Through our coaching and training programs, we elevate 21st-century essential skills including organization, foresight, and proactiveness, ensuring assistants stay two steps ahead and always on the ball. Our coaching goes beyond the conventional. We harness the power of tested AI hacks and tech tools, incorporating innovative and strategic methods to streamline workflow and boost productivity.",
    profileImage: profileImage,
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Call the updateUser controller here
    // Example:
    // updateUser(profile).then(() => {
    //   setIsEditing(false);
    // });

    // After saving, toggle back to view mode
    setIsEditing(false);
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full">
      <Back />
      {window.innerWidth <= 768 && (
        <>
          {userData && userData.isAdmin && (
            <Link
              to="/admin-dashboard"
              className="button fixed top-2 right-1/2 -translate-x-1/2 font-bold py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline"
            >
              Admin Panel
            </Link>
          )}
          <button className="button fixed top-2 right-2 font-bold py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline">
            Log out
          </button>
        </>
      )}
      <div className="w-5/6 md:w-11/12 grid md:flex grid-col justify-center md:justify-around items-center p-2 md:p-4 m-16 md:m-4  mx-8 mt-28 gap-4 shadow-lg border-2 rounded-xl bg-gray-500 ">
        <div className="w-2/3 md:w-1/4 p-4 rounded-xl ">
          <img
            src={profile.profileImage}
            className="w-full h-auto rounded-full hover:border-2 hover:border-orange-500"
            alt="Profile"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              className="mt-2 w-full font-bold mb-4 text-xl shadow appearance-none border rounded w-full py-3 px-3 text-gray-600 bg-inherit leading-tight  focus:outline-none focus:shadow-outline focus:border-orange-500 "
              onChange={handleImageChange}
            />
          )}
        </div>

        <div className="p-3 w-full md:w-3/4 flex flex-col justify-center items-center rounded-xl bg-white">
          <div className="text-gray-400 text-2xl">
            <div className="grid md:grid-cols-2 text-xs md:text-xl">
              {[
                ["NAME", "name", ""],
                ["EMAIL", "email", ""],
                ["BIO", "bio", "h-20 md:h-10 overflow-y-hidden"],
              ].map(([label, fieldName, styling]) => (
                <div key={label} className="grid grid-cols-2 mb-2">
                  <div className="px-2 py-1 font-semibold text-black">
                    {label}:
                  </div>
                  <div className={`px-2 py-1 ${styling}`}>
                    {isEditing ? (
                      name === "bio" ? (
                        <textarea
                          name={fieldName}
                          value={profile[fieldName]}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md p-2"
                        />
                      ) : (
                        <input
                          type="text"
                          name={fieldName}
                          value={profile[fieldName]}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md p-2"
                        />
                      )
                    ) : (
                      <span>{profile[fieldName]}</span>
                    )}
                  </div>
                </div>
              ))}
              {!isEditing && (
                <>
                  <div className="grid grid-cols-2 mb-2">
                    <div className="px-2 py-1 font-semibold text-black">
                      REGISTERED AT:
                    </div>
                    <div className="px-2 py-1">11-Aug-2024</div>
                  </div>
                  <div className="grid grid-cols-2 mb-2">
                    <div className="px-2 py-1 font-semibold text-black">
                      BLOGGER STATUS:
                    </div>
                    <div className="px-2 py-1 bg-green-400 text-slate-800 flex justify-center items-center rounded-3xl">
                      Approved
                    </div>
                  </div>
                  <div className="grid grid-cols-2 mb-2">
                    <div className="px-2 py-1 font-semibold text-black">
                      EMPLOYEE STATUS:
                    </div>
                    <div className="px-2 py-1 bg-red-400 text-slate-800 flex justify-center items-center rounded-3xl">
                      Rejected
                    </div>
                  </div>
                  <div className="grid grid-cols-2 mb-2">
                    <div className="px-2 py-1 font-semibold text-black">
                      DATE EMPLOYED:
                    </div>
                    <div className="px-2 py-1">21-May-2024</div>
                  </div>
                  <div className="grid grid-cols-2 mb-2">
                    <div className="px-2 py-1 font-semibold text-black">
                      DATE RETRENCHED:
                    </div>
                    <div className="px-2 py-1">08-Aug-2024</div>
                  </div>
                </>
              )}
            </div>
          </div>
          <button
            onClick={isEditing ? handleSave : handleEditClick}
            className="button text-2xl font-extrabold rounded-xl w-full block p-3 my-4"
          >
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;

import React, { useState } from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { assets } from "../assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {

  const {userData, setUserData, token, backendURL, loadUserData} = useContext(AppContext);

  const [edit, setEdit] = useState(false);

  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);
      
      image && formData.append('image', image);

      const {data} = await axios.post(backendURL + "/api/user/update-profile", formData, {headers: {token}});
      if (data.success) {
        toast.success(data.message);
        await loadUserData();
        setEdit(false);
        setImage(false);
      }
      else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return userData && (
    <div className="max-w-lg flex flex-col">
      {edit ? (
        // EDIT MODE
        (userData.image || image) ? (
          // If there's already an image (either from server or newly chosen)
          <label className="w-36 h-36 relative cursor-pointer" htmlFor="image">
            <img
              className="w-36 h-36 object-cover rounded opacity-75"
              src={image ? URL.createObjectURL(image) : userData.image}
              alt="Profile"
            />
            <img
              className="w-10 absolute bottom-2 right-2"
              src={assets.upload_icon}
              alt="Upload"
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        ) : (
          // NO IMAGE YET → show placeholder with upload icon
          <label
            htmlFor="image"
            className="w-36 h-36 flex items-center justify-center border-2 border-dashed rounded cursor-pointer hover:bg-gray-300"
          >
            <img
              src={assets.upload_icon}
              className="w-10 h-10 opacity-60"
              alt="Add"
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        )
        ) : (
        // VIEW MODE (not editing)
        userData.image ? (
          <img
            className="w-36 h-36 object-cover rounded"
            src={userData.image}
            alt="Profile"
          />
        ) : (
          <div className="w-36 h-36 flex items-center justify-center border rounded bg-gray-50 text-gray-400 text-sm">
            No Image
          </div>
        )
      )}

      {edit ? (
        <input
          className="bg-gray-100 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="text-3xl font-medium text-neutral-800 mt-4">{userData.name}</p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none"/>
      <div>
        <p className="text-neutral-500 underline mt-3">Contact Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone</p>
          {edit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-500">{userData.phone}</p>
          )}
          <p className="font-medium">Address</p>
          {edit ? (
            <p>
              <input
                className="bg-gray-100"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                type="text"
              />
              <br />
              <input
                className="bg-gray-100"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
        <div>
          <p className="text-neutral-500 underline mt-3">Basic Information</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2 mt-3 text-color-700">
            <p className="font-medium">Gender:</p>
            {edit ? (
              <select
                className="max-w-20 bg-gray-100"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-400">{userData.gender}</p>
            )}
            <p className="font-medium">Birthday:</p>
            {edit ? (
              <input
                className="max-w-28 bg-gray-100"
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p className="text-gray-400">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10">
        {edit ? (
          <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white" onClick={updateUserProfileData}>Save</button>
        ) : (
          <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white" onClick={() => setEdit(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;

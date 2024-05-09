"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Changepass = () => {
  const [eye1, setEye1] = useState<Boolean>(false);
  const [eye2, setEye2] = useState<Boolean>(false);
  const [eye3, setEye3] = useState<Boolean>(false);
  return (
    <div className="max-w-6xl w-full m-auto p-4">
      <div className="collapse collapse-arrow bg-white border rounded-sm">
        <input type="checkbox" />
        <div className="collapse-title text-black">
          <p className="text-lg font-medium">Change Password</p>
        </div>
        <div className="collapse-content ">
          <div className="lg:grid grid-cols-6 text-black p-2 text-sm">
            <hr className="col-span-6 mb-5" />
            <p className="text-pink-600 col-span-2 font-semibold pt-2 pl-2 pb-2">
              CURRENT PASSWORD
            </p>
            <div className="col-span-4 flex justify-end">
              <input
                type={(eye1)?'text':'password'}
                placeholder="Current Password"
                className="input input-bordered w-full bg-white h-10"
                required
              />
              <div className="absolute cursor-pointer mt-3 pr-3">
                {eye1 ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={() => setEye1(false)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    onClick={() => setEye1(true)}
                  />
                )}
              </div>
            </div>
            <hr className="col-span-6 mb-5 mt-5" />
            <p className="text-pink-600 col-span-2 font-semibold pt-2 pl-2 pb-2">
              NEW PASSWORD
            </p>
            <div className="col-span-4 flex justify-end">
              <input
                type={(eye2)?'text':'password'}
                placeholder="New Password"
                className="input input-bordered w-full bg-white h-10"
                required
              />
              <div className="absolute cursor-pointer mt-3 pr-3">
                {eye2 ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={() => setEye2(false)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    onClick={() => setEye2(true)}
                  />
                )}
              </div>
            </div>
            <hr className="col-span-6 mb-5 mt-5" />
            <p className="text-pink-600 col-span-2 font-semibold pt-2 pl-2 pb-2">
              CONFIRM PASSWORD
            </p>
            <div className="col-span-4 flex justify-end">
              <input
                type={(eye3)?'text':'password'}
                placeholder="Confirm Password"
                className="input input-bordered w-full bg-white h-10"
                required
              />
              <div className="absolute cursor-pointer mt-3 pr-3">
                {eye3 ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={() => setEye3(false)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    onClick={() => setEye3(true)}
                  />
                )}
              </div>
            </div>
            <div className="w-full col-span-6 flex justify-end mt-4">
               <button className="text-white font-semibold bg-red-400 w-20 h-9 rounded-md hover:bg-blue-300">Save</button>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white border rounded-sm mt-4">
        <input type="checkbox" />
        <div className="collapse-title text-black">
          <p className="text-lg font-medium">Privacy Settings</p>
        </div>
        <div className="collapse-content ">
          <div className="lg:grid grid-cols-6 p-2 text-sm">
            <hr className="col-span-6 mb-5" />
            <div className="col-span-2"></div>
            <div className="col-span-4 md:flex p-4">
                <div className="form-control">
                    <label className="cursor-pointer label flex justify-start w-44">
                        <input type="checkbox"  className="checkbox checkbox-secondary h-4 w-4 rounded-sm" />
                        <span className="label-text p-1">Email</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label flex justify-start w-44">
                        <input type="checkbox"  className="checkbox checkbox-secondary h-4 w-4 rounded-sm" />
                        <span className="label-text p-1">Contact Info</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label flex justify-start w-44">
                        <input type="checkbox"  className="checkbox checkbox-secondary h-4 w-4 rounded-sm" />
                        <span className="label-text p-1">Company</span>
                    </label>
                </div>
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-4 md:flex p-4">
                <div className="form-control">
                    <label className="cursor-pointer label flex justify-start w-44">
                        <input type="checkbox"  className="checkbox checkbox-secondary h-4 w-4 rounded-sm" />
                        <span className="label-text p-1">Area of interest</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label flex justify-start w-44">
                        <input type="checkbox"  className="checkbox checkbox-secondary h-4 w-4 rounded-sm" />
                        <span className="label-text p-1">Communities</span>
                    </label>
                </div>
            </div>
            <div className="w-full col-span-6 flex justify-end mt-4">
               <button className="text-white font-semibold bg-red-400 w-20 h-9 rounded-md hover:bg-blue-300">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Changepass;

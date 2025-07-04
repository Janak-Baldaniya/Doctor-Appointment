import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { Context } from "../main";

export const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  const deleteDoctor = async (id) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/v1/user/doctor/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      toast.success("Doctor Deleted Successfully");
      setDoctors(doctors.filter((doctor) => doctor._id !== id));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => {
            return (
              <div className="card">
                <img
                  src={element.docAvatar && element.docAvatar.url}
                  alt="doctor avatar"
                />
                <h4>{`${element.firstName} ${element.lastName}`}</h4>
                <div className="details">
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    DOB: <span>{element.dob.substring(0, 10)}</span>
                  </p>
                  <p>
                    Department: <span>{element.doctorDepartment}</span>
                  </p>
                  <p>
                    NIC: <span>{element.nic}</span>
                  </p>
                  <p>
                    Gender: <span>{element.gender}</span>
                  </p>
                  {/* <div style={{ display: "flex", alignItems: "center" }}> */}
                    <button
                      onClick={() => deleteDoctor(element._id)}
                      style={{
                        cursor: "pointer",
                        background: "#dc2626",
                        color: "#fff",
                        height: "40px",
                        width: "50%",
                        borderRadius: "5px",
                        border: "none",
                        fontSize: "16px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: "600",
                      }}
                    >
                      Remove Doctor
                    </button>
                  {/* </div> */}
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

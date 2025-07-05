import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="biography container" style={{ marginTop: "20px" }}>
      <div className="banner">
        <img src={imageUrl} alt="biography" />
      </div>
      <div className="banner">
        <h2>Biography</h2>
        <h3>Who We Are</h3>
        <p>
          Zeecare Multi-Speciality Hospital was established in 2005 with the
          vision of providing affordable and quality healthcare to all. Located
          in the heart of Surat, it started with just 50 beds, a small emergency
          unit, and a dedicated team of doctors committed to serving patients
          with care and compassion. Over the years, Zeecare Hospital has grown
          into a 300-bed facility equipped with advanced technology, modular
          operation theatres, ICU units, and specialized departments such as
          Cardiology, Neurology, Orthopaedics, Pediatrics, and Oncology.
        </p>
        <p>
          The hospital was founded by Dr. Janak Baldaniya, a renowned
          cardiologist, who believed that healthcare should be accessible and
          transparent. Under his leadership, the hospital introduced 24x7
          emergency services, ambulance support, and a fully computerized system
          for patient record management, ensuring seamless and efficient patient
          care.
        </p>
        <p>
          Zeecare Hospital has a dedicated team of over 100 doctors, 200 nursing
          staff, and skilled technicians who work together to ensure patient
          safety and recovery. The hospital regularly conducts health camps,
          free check-ups for underprivileged communities, and blood donation
          drives as part of its commitment to social responsibility.
        </p>
        <p>Coding is fun!</p>
      </div>
    </div>
  );
};

export default Biography;

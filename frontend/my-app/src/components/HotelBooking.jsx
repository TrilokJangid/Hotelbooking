import React, { useState } from 'react';
//import '/App.css';


<h1>Hotel Booking Form</h1>
const BookingForm = () => {
    //   const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    //     firstName: '',
    //     lastName: '',
    //     aadhaar: '',
    //     familySize: 1,
    //   });

    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value,
    //     });
    //   };

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //       const response = await axios.post('http://localhost:5000/api/register', formData);
    //       alert('Booking successful!');
    //       console.log(response.data);
    //     } catch (error) {
    //       alert('Booking failed!');
    //       console.error(error);
    //     }
    //   };

    return (
        <>
            <form >
                <label>Email:</label>
                <input
                    type="email"
                    name="email"

                    required
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"

                    required
                />

                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"

                    required
                />

                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"

                    required
                />

                <label>Aadhaar Number:</label>
                <input
                    type="text"
                    name="aadhaar"

                />

                <label>Family Size:</label>
                <input
                    type="number"
                    name="familySize"

                    required
                />

                <button type="submit">Book Hotel</button>
            </form>
        </>
    );
};

export default BookingForm;
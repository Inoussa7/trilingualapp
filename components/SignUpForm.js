import React, { useState, useEffect } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    countryOfOrigin: '',
    password: '',
    languagesSpoken: '',
    major: '',
    specialization: '',
    classes: '',
    proficiencyLevel: '',
    learningStyle: ''
  });
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedCountries);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    // Here, you would typically handle the API request to submit the form data.
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up Form</h2>
      
      <label htmlFor="countryDropdown">Country:</label>
      <select id="countryDropdown" name="countryOfOrigin" onChange={handleChange}>
        <option value="">Select a Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name.common}>{country.name.common}</option>
        ))}
      </select><br/>

      <label htmlFor="nameInput">Name:</label>
      <input type="text" id="nameInput" name="name" onChange={handleChange} /><br/>

      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" onChange={handleChange} /><br/>

      <label htmlFor="passwordInput">Password:</label>
      <input type="password" id="passwordInput" name="password" required onChange={handleChange} /><br/>

      <label htmlFor="languagesSpokenInput">Languages Spoken:</label>
      <input type="text" id="languagesSpokenInput" name="languagesSpoken" onChange={handleChange} /><br/>

      <label htmlFor="majorInput">Major:</label>
      <input type="text" id="majorInput" name="major" onChange={handleChange} /><br/>

      <label htmlFor="specializationInput">Specialization:</label>
      <input type="text" id="specializationInput" name="specialization" onChange={handleChange} /><br/>

      <label htmlFor="classesInput">Classes:</label>
      <input type="text" id="classesInput" name="classes" onChange={handleChange} /><br/>

      <label htmlFor="proficiencyLevelDropdown">Proficiency Level:</label>
      <select id="proficiencyLevelDropdown" name="proficiencyLevel" onChange={handleChange}>
        <option value="">Select Proficiency Level</option>
        <option value="Beginner">Beginner</option>
        <option value="Elementary">Elementary</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Upper Intermediate">Upper Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Proficient">Proficient</option>
      </select><br/>

      <label htmlFor="learningStyleDropdown">Learning Style:</label>
      <select id="learningStyleDropdown" name="learningStyle" onChange={handleChange}>
        <option value="">Select Learning Style</option>
        <option value="Visual">Visual</option>
        <option value="Auditory">Auditory</option>
        <option value="ReadAndWrite">Read and Write</option>
        <option value="Kinesthetic">Kinesthetic</option>
      </select><br/>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;

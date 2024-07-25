// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';

// const Skills = ({ skills, handleInputChange, addSkill, deleteSkill, skillsfromapi }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [apiSkills, setApiSkills] = useState([]);

//   useEffect(() => {
//     if (Array.isArray(skillsfromapi)) {
//       setApiSkills(skillsfromapi.map(skill => ({ skillname: skill, skilldetails: '' })));
//     } else {
//       console.error('skillsfromapi is not an array');
//     }
//   }, [skillsfromapi]);

//   const fetchSuggestions = async (query) => {
//     const token = localStorage.getItem('token');
//     try {
//       const requestBody = {
//         Key: 'ai_keyword_request_key',
//         keyword: "Checklist of skills in manner of content and information",
//         Content: query,
//       };

//       const response = await axios.post(
//         'https://api.abroadium.com/api/jobseeker/ai-skills-data',
//         requestBody,
//         {
//           headers: {
//             Authorization: `${token}`
//           }
//         }
//       );

//       if (response.data.status === 'success') {
//         const skillsList = response.data.data.resume_analysis.skills;
//         setSuggestions(skillsList);
//         setShowDropdown(true); // Show dropdown after receiving suggestions
//       } else {
//         console.error('Error fetching suggestions:', response.data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     }
//   };

//   const handleSearchInputChange = (e) => {
//     setSearchQuery(e.target.value);
//     setShowDropdown(false); // Hide dropdown when typing
//   };

//   const handleSearchButtonClick = () => {
//     if (searchQuery.trim() !== '') {
//       fetchSuggestions(searchQuery); // Fetch suggestions when search button is clicked
//     }
//   };

//   const handleSuggestionSelect = (suggestion) => {
//     handleInputChange({ target: { name: 'skillname', value: suggestion } }, 0, 'skills');
//     setShowDropdown(false);
//   };

//   const handleSkillInputChange = (e, index, field) => {
//     const { name, value } = e.target;
//     const newSkills = [...skills];
//     newSkills[index] = { ...newSkills[index], [name]: value };

//     if (name === 'skillname' && value && newSkills[index].skilldetails) {
//       newSkills[index].newField = `${newSkills[index].skillname} - ${newSkills[index].skilldetails}`;
//     }

//     handleInputChange({ target: { name, value } }, index, field);
//   };

//   const handleApiSkillInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const newApiSkills = [...apiSkills];
//     newApiSkills[index] = { ...newApiSkills[index], [name]: value };
//     setApiSkills(newApiSkills);
//   };

//   const handleDeleteApiSkill = (index) => {
//     const newApiSkills = [...apiSkills];
//     newApiSkills.splice(index, 1);
//     setApiSkills(newApiSkills);
//   };

//   return (
//     <div className="mt-10 px-10 text-xs sm:text-xs md:text-xs lg:text-xs">
//       <button className="font-bold text-lg flex items-center mb-4" onClick={() => setShowDropdown(!showDropdown)}>
//         <h3>AI Assist</h3>
//         <svg className="h-5 w-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//         </svg>
//       </button>

//       <div className="mb-4">
//         <div className="flex items-center">
//           <input
//             type="text"
//             name="search"
//             value={searchQuery}
//             onChange={handleSearchInputChange}
//             placeholder="Search..."
//             className="w-full p-3 mb-4 mt-4 border border-black rounded-lg"
//           />
//           <button
//             className="ml-2 bg-violet-950 text-white font-bold px-4 py-3 rounded-lg"
//             onClick={handleSearchButtonClick}
//           >
//             Search
//           </button>
//         </div>

//         {showDropdown && suggestions.length > 0 && (
//           <div className="mt-2 flex flex-wrap">
//             {suggestions.map((suggestion, index) => (
//               <span
//                 key={index}
//                 className="bg-gray-500 text-white px-1 py-1 mr-2 mb-2 rounded-lg cursor-pointer"
//                 onClick={() => handleSuggestionSelect(suggestion)}
//               >
//                 {suggestion}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="mt-4">
//         <h4 className="text-lg font-bold">Skills from Uploaded </h4>
//         {apiSkills.length > 0 ? (
//           apiSkills.map((skill, index) => (
//             <div key={index} className="flex gap-6 mt-4">
//               <div className="w-3/4">
//                 <label htmlFor={`skillname-api-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
//                   Skill Name
//                 </label>
//                 <input
//                   type="text"
//                   id={`skillname-api-${index}`}
//                   name="skillname"
//                   value={skill.skillname}
//                   onChange={(e) => handleApiSkillInputChange(e, index)}
//                   className="w-full p-3 mb-4 border border-black rounded-lg"
//                 />
//               </div>
              
//               <button type="button" onClick={() => handleDeleteApiSkill(index)} className="mt-2 text-red-500">
//                 Delete Skill
//               </button>
//             </div>
//           ))
//         ) : (
//           <p></p>
//         )}
//       </div>

//       {skills.map((skill, index) => (
//         <div key={index} className="mt-4">
//           <div className="flex gap-6">
//             <div className="w-3/4">
//               <label htmlFor={`skillname-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
//                 Skill Name
//               </label>
//               <input
//                 type="text"
//                 id={`skillname-${index}`}
//                 name="skillname"
//                 value={skill.skillname}
//                 onChange={(e) => handleSkillInputChange(e, index, 'skills')}
//                 placeholder="Skill Name"
//                 className="w-full p-3 mb-4 border border-black rounded-lg"
//               />
//             </div>

//             {/* <div className="w-3/4">
//               <label htmlFor={`skilldetails-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
//                 Skill Details
//               </label>
//               <input
//                 type="text"
//                 id={`skilldetails-${index}`}
//                 name="skilldetails"
//                 value={skill.skilldetails}
//                 onChange={(e) => handleSkillInputChange(e, index, 'skills')}
//                 placeholder="Skill Details"
//                 className="w-full p-3 mb-4 border border-black rounded-lg"
//               />
//             </div> */}
//           </div>

//           <button type="button" onClick={() => deleteSkill(index)} className="mt-2 text-red-500">
//             Delete Skill
//           </button>
//         </div>
//       ))}

//       <button className="font-bold text-lg flex items-center mt-4" onClick={addSkill}>
//         <h3>Add Item</h3>
//         <svg className="h-5 w-5 text-white bg-black rounded-full m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <path fill="none" d="M0 0h24v24H0z" />
//           <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
//           <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// Skills.propTypes = {
//   skills: PropTypes.arrayOf(
//     PropTypes.shape({
//       skillname: PropTypes.string,
//       skilldetails: PropTypes.string,
//     })
//   ),
//   handleInputChange: PropTypes.func.isRequired,
//   addSkill: PropTypes.func.isRequired,
//   deleteSkill: PropTypes.func.isRequired,
//   skillsfromapi: PropTypes.arrayOf(PropTypes.string),
// };

// Skills.defaultProps = {
//   skills: [],
//   skillsfromapi: [],
// };

// export default Skills;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Skills = ({ skills, handleInputChange, addSkill, deleteSkill, skillsfromapi }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [apiSkills, setApiSkills] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    if (Array.isArray(skillsfromapi)) {
      setApiSkills(skillsfromapi.map(skill => ({ skillname: skill, skilldetails: '' })));
    } else {
      console.error('skillsfromapi is not an array');
    }
  }, [skillsfromapi]);

  const fetchSuggestions = async (query) => {
    const token = localStorage.getItem('token');
    try {
      const requestBody = {
        Key: 'ai_keyword_request_key',
        keyword: "Checklist of skills in manner of content and information",
        Content: query,
      };

      const response = await axios.post(
        'https://api.abroadium.com/api/jobseeker/ai-skills-data',
        requestBody,
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );

      if (response.data.status === 'success') {
        const skillsList = response.data.data.resume_analysis.skills;
        setSuggestions(skillsList);
        setShowDropdown(true); // Show dropdown after receiving suggestions
      } else {
        console.error('Error fetching suggestions:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowDropdown(false); // Hide dropdown when typing
  };

  const handleSearchButtonClick = () => {
    if (searchQuery.trim() !== '') {
      fetchSuggestions(searchQuery); // Fetch suggestions when search button is clicked
    }
  };

  const handleSuggestionSelect = (suggestion) => {
    handleInputChange({ target: { name: 'skillname', value: suggestion } }, 0, 'skills');
    setShowDropdown(false);
  };

  const handleSkillInputChange = (e, index, field) => {
    const { name, value } = e.target;
    const newSkills = [...skills];
    newSkills[index] = { ...newSkills[index], [name]: value };

    if (name === 'skillname' && value && newSkills[index].skilldetails) {
      newSkills[index].newField = `${newSkills[index].skillname} - ${newSkills[index].skilldetails}`;
    }

    handleInputChange({ target: { name, value } }, index, field);
  };

  const handleApiSkillInputChange = (e, index) => {
    const { name, value } = e.target;
    const newApiSkills = [...apiSkills];
    newApiSkills[index] = { ...newApiSkills[index], [name]: value };
    setApiSkills(newApiSkills);
  };

  const handleDeleteApiSkill = (index) => {
    const newApiSkills = [...apiSkills];
    newApiSkills.splice(index, 1);
    setApiSkills(newApiSkills);
  };

  const handleExpandClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="mt-10 px-5 sm:px-10 md:px-20 text-xs lg:text-sm">
      <button className="font-bold text-lg flex items-center mb-4" onClick={() => setShowDropdown(!showDropdown)}>
        <h3 className="mr-2">AI Assist</h3>
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="text"
            name="search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search..."
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="ml-2 bg-blue-500 text-white flex items-center justify-center font-bold px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            onClick={handleSearchButtonClick}
          >
            Search
          </button>
        </div>

        {showDropdown && suggestions.length > 0 && (
          <div className="mt-2 bg-white border border-gray-300 rounded-lg shadow-md">
            {suggestions.map((suggestion, index) => (
              <span
                key={index}
                className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionSelect(suggestion)}
              >
                {suggestion}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4">
        <h4 className="text-lg font-bold">Skills from Uploaded</h4>
        {apiSkills.length > 0 ? (
          apiSkills.map((skill, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 bg-gray-50 p-4 rounded-lg shadow-md mb-4">
              <div className="w-full md:w-3/4">
                <label htmlFor={`skillname-api-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                  Skill Name
                </label>
                <input
                  type="text"
                  id={`skillname-api-${index}`}
                  name="skillname"
                  value={skill.skillname}
                  onChange={(e) => handleApiSkillInputChange(e, index)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex items-center">
                <button type="button" onClick={() => handleDeleteApiSkill(index)} className="text-red-500 hover:underline">
                  Delete Skill
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No skills found</p>
        )}
      </div>

      {skills.map((skill, index) => (
        <div key={index} className="mt-4 bg-gray-50 p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">{skill.skillname || 'Skill Name'}</h4>
            <button
              type="button"
              onClick={() => handleExpandClick(index)}
              className="text-blue-500 hover:underline"
            >
              {expandedIndex === index ? 'Collapse' : 'Edit'}
            </button>
          </div>

          {expandedIndex === index && (
            <>
              <div className="mt-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-3/4">
                    <label htmlFor={`skillname-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                      Skill Name
                    </label>
                    <input
                      type="text"
                      id={`skillname-${index}`}
                      name="skillname"
                      value={skill.skillname}
                      onChange={(e) => handleSkillInputChange(e, index, 'skills')}
                      placeholder="Skill Name"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  {/* Uncomment and use if needed
                  <div className="w-full md:w-3/4">
                    <label htmlFor={`skilldetails-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                      Skill Details
                    </label>
                    <input
                      type="text"
                      id={`skilldetails-${index}`}
                      name="skilldetails"
                      value={skill.skilldetails}
                      onChange={(e) => handleSkillInputChange(e, index, 'skills')}
                      placeholder="Skill Details"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  */}
                </div>

                <button type="button" onClick={() => deleteSkill(index)} className="mt-4 text-red-500 hover:underline">
                  Delete Skill
                </button>
              </div>
            </>
          )}
        </div>
      ))}

      <button className="font-bold text-lg flex items-center mt-6 bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition duration-300" onClick={addSkill}>
        <h3 className="mr-2">Add Item</h3>
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
          <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
        </svg>
      </button>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skillname: PropTypes.string,
      skilldetails: PropTypes.string,
    })
  ),
  handleInputChange: PropTypes.func.isRequired,
  addSkill: PropTypes.func.isRequired,
  deleteSkill: PropTypes.func.isRequired,
  skillsfromapi: PropTypes.arrayOf(PropTypes.string),
};

Skills.defaultProps = {
  skills: [],
  skillsfromapi: [],
};

export default Skills;

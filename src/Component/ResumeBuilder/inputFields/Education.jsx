// const Education = ({ educations = [], handleInputChange, addEducation, deleteEducation ,schoolname,schoolplace,coursename}) => {
//   return (

//     <div className="mt-10 px-20 text-xs sm:text-xs md:text-xs lg:text-xs">
//       <h3 className="flex justify-between font-bold text-lg mt-4">Awards and Training, Education, 
//     Certifications, and Accolades:</h3>

// <div className="font-normal mb-8">
// Include all Education and Training including trainings 
// and Awards, Degrees, Certifications, Trainings, Recognitions, Awards and Accolades.

// </div>
// <h6 className='font-bold text-xs my-6 '>* indicates a required field</h6>

//       {educations.map((edu, index) => (
//         <div key={index} className="  mt-4 ">
          
//           <div className="flex gap-6">
//   <div className="w-3/4">

//   <label htmlFor="schoolname" className="block text-sm text-gray-700 mb-2 font-bold">
//            School Name *
//         </label>
//         <input 
//           type="text" 
//           name="schoolname" 
//           required
//           value={edu.schoolname || schoolname}
//               onChange={(e) => handleInputChange(e, index, 'educations')} 
//           placeholder="e.g. Delhi University" 
//           className="w-full p-3 mb-4 border border-black rounded-lg"
//         />
        
//   </div>

//   <div className="w-3/4">

//   <label htmlFor="schoolplace" className="block text-sm  text-gray-700 mb-2 font-bold">
//   School Location 
//         </label>
//         <input 
//           type="text" 
//           name="schoolplace" 
//           value={edu.schoolplace || schoolplace}
//               onChange={(e) => handleInputChange(e, index, 'educations')}
//           placeholder="e.g. Delhi, India" 
//           className="w-full p-3 mb-4 border border-black rounded-lg"
//         />
        
//   </div>
// </div>
// <label htmlFor="schoolplace" className="block text-sm  text-gray-700 mb-2 font-bold">
// Field Of Study
//         </label>
// <input 
//           type="text" 
//           name="coursename" 
//           value={edu.coursename || coursename}
//               onChange={(e) => handleInputChange(e, index, 'educations')}
//           placeholder="e.g. Financial Accounting" 
//           className="w-full p-3 mb-4 border border-black rounded-lg"
//         />
    
// <div className="flex gap-2 w-1/3 pe-2">
//   <div className="w-3/4">

//   <label htmlFor="month1" className="block text-sm font-medium text-gray-700 mb-2">
//                   Start: 
//         </label>
//         <input 
//           type="month" 
//           name="edmonth1" 
//            value={edu.edmonth1}
//               onChange={(e) => handleInputChange(e, index, 'educations')}           
//           className="w-full p-3 mb-4 border border-black rounded-lg"
//         /> 
//   </div>

//   <div className="w-3/4">

//   <label htmlFor="month2" className="block text-sm font-medium text-gray-700 mb-2">
//                End: 
//         </label>
//         <input 
//           type="month" 
//           name="edmonth2" 
//           value={edu.edmonth2}
//               onChange={(e) => handleInputChange(e, index, 'educations')}
//           className="w-full p-3 mb-4 border border-black rounded-lg"
//           />
       
        
//   </div>
// </div>
// <button
//               type="button"
//               onClick={() => deleteEducation(index)}
//               className="mt-2 text-red-500"
//             >
//               Delete Education
//             </button>

//         </div>
//       ))}
//       <button className="font-bold text-lg flex items-center" onClick={addEducation}>
//                 <h3>Add Item</h3>
//                 <svg className="h-5 w-5 text-white bg-black rounded-full m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path fill="none" d="M0 0h24v24H0z"/>
//                 <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
//                 <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
//                 </svg>

//             </button>
//     </div>
//   );
// };

//  export default Education;


import React, { useState } from 'react';

const Education = ({ educations = [], handleInputChange, addEducation, deleteEducation, schoolname, schoolplace, coursename }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleEditClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="mt-10 px-5 md:px-20 text-xs">
      <h3 className="flex justify-between font-bold text-lg mt-4">Awards and Training, Education, Certifications, and Accolades:</h3>
      <div className="font-normal mb-8">
        Include all Education and Training including trainings and Awards, Degrees, Certifications, Trainings, Recognitions, Awards and Accolades.
      </div>
      <h6 className='font-bold text-xs my-6'>* indicates a required field</h6>

      {educations.map((edu, index) => (
        <div key={index} className="mt-4 p-4 bg-gray-50 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">
              {edu.schoolname || schoolname} - {edu.coursename || coursename}
            </h4>
            <div>
              {expandedIndex === index ? (
                <button
                  type="button"
                  onClick={() => handleEditClick(index)}
                  className="text-white bg-black rounded-lg py-2 px-4 hover:underline"
                >
                  Collapse
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleEditClick(index)}
                  className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:underline"
                >
                  Edit
                </button>
              )}
              <button
                type="button"
                onClick={() => deleteEducation(index)}
                className="ml-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:underline"
              >
                Delete
              </button>
            </div>
          </div>

          {expandedIndex === index && (
            <>
              <div className="flex flex-col md:flex-row gap-6 mb-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="schoolname" className="block text-sm text-gray-700 mb-2 font-bold">
                    School Name *
                  </label>
                  <input
                    type="text"
                    name="schoolname"
                    required
                    value={edu.schoolname || schoolname}
                    onChange={(e) => handleInputChange(e, index, 'educations')}
                    placeholder="e.g. Delhi University"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="schoolplace" className="block text-sm text-gray-700 mb-2 font-bold">
                    School Location
                  </label>
                  <input
                    type="text"
                    name="schoolplace"
                    value={edu.schoolplace || schoolplace}
                    onChange={(e) => handleInputChange(e, index, 'educations')}
                    placeholder="e.g. Delhi, India"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <label htmlFor="coursename" className="block text-sm text-gray-700 mb-2 font-bold">
                Field Of Study
              </label>
              <input
                type="text"
                name="coursename"
                value={edu.coursename || coursename}
                onChange={(e) => handleInputChange(e, index, 'educations')}
                placeholder="e.g. Financial Accounting"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col md:flex-row gap-6 mb-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="edmonth1" className="block text-sm text-gray-700 mb-2 font-medium">
                    Start:
                  </label>
                  <input
                    type="month"
                    name="edmonth1"
                    value={edu.edmonth1}
                    onChange={(e) => handleInputChange(e, index, 'educations')}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="edmonth2" className="block text-sm text-gray-700 mb-2 font-medium">
                    End:
                  </label>
                  <input
                    type="month"
                    name="edmonth2"
                    value={edu.edmonth2}
                    onChange={(e) => handleInputChange(e, index, 'educations')}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      <button
        className="mt-4 font-bold text-lg flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
        onClick={addEducation}
      >
        <span>Add Item</span>
        <svg className="h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  );
};

export default Education;

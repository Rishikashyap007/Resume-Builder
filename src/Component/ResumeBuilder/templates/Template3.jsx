// // Importing React at the top as before
// import React from "react";

// const Template3 = ({
//   data,
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   predefinedText = {},
// }) => {
//   // Define classes based on props as before
//   const textSizeClass =
//     textSize === "small"
//       ? "text-sm"
//       : textSize === "medium"
//       ? "text-base"
//       : "text-lg";
//   const sectionSpacingClass =
//     sectionSpacing === "small"
//       ? "space-y-2"
//       : sectionSpacing === "medium"
//       ? "space-y-4"
//       : "space-y-6";
//   const paragraphSpacingClass =
//     paragraphSpacing === "small"
//       ? "mb-2"
//       : paragraphSpacing === "medium"
//       ? "mb-4"
//       : "mb-6";
//   const lineHeightClass =
//     lineSpacing === "1"
//       ? "leading-tight"
//       : lineSpacing === "1.5"
//       ? "leading-snug"
//       : "leading-relaxed";

//   // Destructuring data as before
//   const {
//     details = [],
//     experiences = [],
//     educations = [],
//     skills = [],
//   } = data || {};

//   // Function to check if all required fields are filled
//   const areAllFieldsFilled = (item, fields) => {
//     return fields.every((field) => item[field] && item[field].trim() !== "");
//   };

//   // Checking if all details are filled, as before
//   const allDetailsFilled = details.every((detail) =>
//     areAllFieldsFilled(detail, [
//       "Profession",
//       "phoneNumber",
//       "email",
//       "link",
//       "address",
//       "name",
//     ])
//   );

//   const allDetailsFilled2 = experiences.every((experience) =>
//     areAllFieldsFilled(experience, [
//       "Company",
//       "month1",
//       "role",
//       "companydescription",
//     ])
//   );

//   const allDetailsFilled3 = educations.every((education) =>
//     areAllFieldsFilled(education, [
//       "schoolname",
//       "edmonth1",
//       "edmonth2",
//       "coursename",
//     ])
//   );

//   const allDetailsFilled4 = skills.every((skill) =>
//     areAllFieldsFilled(skill, ["skillname", "skilldetails"])
//   );

//   return (
//     <div
//       className={`p-10 font-serif border-2 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
//       style={{ fontFamily: font, backgroundColor: boxBgColor }}
//     >
//       {/* Details */}
//       {details.map((del, index) => (
//         <div key={index}>
//           <h3 className="text-lg md:text-xl lg:text-1xl text-center font-serif font-bold">
//             {del.name || predefinedText.details.name}
//           </h3>
//           <div>
//             <ul className="flex text-xs md:text-xs lg:text-xs text-center justify-evenly">
//               <li>{del.address || predefinedText.details.address}</li>
//               <li
//                 className={`${
//                   del.phoneNumber.trim()
//                     ? 'before:content-["•"] before:mr-1'
//                     : ""
//                 } w-2/2 break-all`}
//               >
//                 {del.phoneNumber || predefinedText.details.phoneNumber}
//               </li>
//               <li
//                 className={`${
//                   del.email.trim() ? 'before:content-["•"] before:mr-1' : ""
//                 } w-2/2 break-all`}
//               >
//                 {del.email || predefinedText.details.email}
//               </li>
//               <li
//                 className={`${
//                   del.link.trim() ? 'before:content-["•"] before:mr-1' : ""
//                 } w-2/2 break-all`}
//               >
//                 <a href={del.link || "#"}>{del.link || predefinedText.details.link}</a>
//               </li>
//             </ul>
//           </div>
//           <br />
//         </div>
//       ))}

//       {/* Experiences */}
//       <div>
//         {experiences.map((exp, index) => (
//           <div key={index}>
//             <h5 className="font-bold">PROFESSIONAL EXPERIENCE</h5>
//             <div className="flex-grow border-t border-black align-super my-2"></div>
//             <div className="flex justify-between mt-4">
//               <h6 className="font-bold text-xs">
//                 {exp.Company || predefinedText.experiences.company}
//               </h6>
//               <p className="text-xs">
//                 {exp.month1} - {exp.month2}
//               </p>
//             </div>
//             <h6 className="text-xs">
//               {exp.role || predefinedText.experiences.role}
//             </h6>
//             {/* Render HTML content safely */}
//             {exp.companydescription && (
//               <div
//                 className="my-2"
//                 dangerouslySetInnerHTML={{ __html: exp.companydescription }}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Education */}
//       <div>
//         <h5 className="font-bold mt-">EDUCATION </h5>
//         <div className="flex-grow border-t border-black align-super my-2"></div>
//         {educations.map((edu, index) => (
//           <div key={index}>
//             <div className="flex justify-between">
//               <div className="flex">
//                 <h4 className="font-bold text-xs">
//                   {edu.coursename || predefinedText.educations.coursename},
//                 </h4>
//                 <h6 className="text-xs">
//                   {edu.schoolplace || predefinedText.educations.schoolplace}
//                 </h6>
//               </div>
//               <p className="text-xs">
//                 {edu.edmonth1} - {edu.edmonth2}
//               </p>
//             </div>
//             <p className="text-xs">
//               {edu.schoolname || predefinedText.educations.schoolname}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Skills */}
//       <div>
//         <h5 className="font-bold mt-3">Skills</h5>
//         <div className="flex-grow border-t border-black align-super my-2"></div>
//         {skills.map((skill, index) => (
//           <div key={index}>
//             <ol className="text-xs md:text-xs lg:text-xs mt-2 font-bold">
//               <li>{skill.skillname || predefinedText.skills.skillname}</li>
//             </ol>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Template3;

// import React, { useState, useRef } from 'react';

// const EnhancedTemplate3 = ({
//   data,
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   predefinedText = {},
// }) => {
//   const [sections, setSections] = useState(['details', 'experiences', 'educations', 'skills']);
//   const [draggingSection, setDraggingSection] = useState(null);
//   const dragNode = useRef();

//   // Define classes based on props
//   const textSizeClass = textSize === "small" ? "text-sm" : textSize === "medium" ? "text-base" : "text-lg";
//   const sectionSpacingClass = sectionSpacing === "small" ? "space-y-2" : sectionSpacing === "medium" ? "space-y-4" : "space-y-6";
//   const paragraphSpacingClass = paragraphSpacing === "small" ? "mb-2" : paragraphSpacing === "medium" ? "mb-4" : "mb-6";
//   const lineHeightClass = lineSpacing === "1" ? "leading-tight" : lineSpacing === "1.5" ? "leading-snug" : "leading-relaxed";

//   const handleDragStart = (e, sectionIndex) => {
//     setDraggingSection(sections[sectionIndex]);
//     dragNode.current = e.target;
//     dragNode.current.addEventListener('dragend', handleDragEnd);
//     setTimeout(() => {
//       setDraggingSection(sections[sectionIndex]);
//     }, 0);
//   };

//   const handleDragEnter = (e, targetIndex) => {
//     if (e.target !== dragNode.current) {
//       setSections(oldSections => {
//         let newSections = [...oldSections];
//         const draggedSectionIndex = newSections.indexOf(draggingSection);
//         newSections.splice(draggedSectionIndex, 1);
//         newSections.splice(targetIndex, 0, draggingSection);
//         return newSections;
//       });
//     }
//   };

//   const handleDragEnd = () => {
//     setDraggingSection(null);
//     dragNode.current.removeEventListener('dragend', handleDragEnd);
//     dragNode.current = null;
//   };

//   const {
//     details = [],
//     experiences = [],
//     educations = [],
//     skills = [],
//   } = data || {};

//   const renderSection = (sectionName, index) => {
//     const sectionProps = {
//       className: `p-6 bg-white rounded-lg shadow-md ${paragraphSpacingClass} ${
//         draggingSection === sectionName ? 'opacity-50' : ''
//       }`,
//       onDragStart: (e) => handleDragStart(e, index),
//       onDragEnter: draggingSection && draggingSection !== sectionName ? (e) => handleDragEnter(e, index) : null,
//       onDragOver: (e) => e.preventDefault(),
//       draggable: true,
//     };

//     switch (sectionName) {
//       case 'details':
//         return (
//           <div key={sectionName} {...sectionProps}>
//             {details.map((del, idx) => (
//               <div key={idx} className="text-center mb-4">
//                 <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${textSizeClass}`}>{del.name || predefinedText.details.name}</h3>
//                 <p className={`text-lg text-gray-600 ${textSizeClass}`}>{del.Profession || predefinedText.details.Profession}</p>
//                 <div className={`flex justify-center space-x-4 mt-2 text-sm text-gray-500 ${textSizeClass}`}>
//                   <span>{del.address || predefinedText.details.address}</span>
//                   <span>{del.phoneNumber || predefinedText.details.phoneNumber}</span>
//                   <span>{del.email || predefinedText.details.email}</span>
//                   <a href={del.link || "#"} className="">{del.link || predefinedText.details.link}</a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//       case 'experiences':
//         return (
//           <div key={sectionName} {...sectionProps}>
//             <h2 className={`text-2xl font-bold mb-4 text-gray-800 ${textSizeClass}`}>Professional Experience</h2>
//             {experiences.map((exp, idx) => (
//               <div key={idx} className="mb-6">
//                 <div className="flex justify-between items-baseline">
//                   <h3 className={`text-xl font-semibold text-gray-900 ${textSizeClass}`}>{exp.Company || predefinedText.experiences.company}</h3>
//                   <span className={`text-sm text-gray-600 ${textSizeClass}`}>{exp.month1} - {exp.month2}</span>
//                 </div>
//                 <p className={`text-lg text-gray-700 mt-1 ${textSizeClass}`}>{exp.role || predefinedText.experiences.role}</p>
//                 <div className={`mt-2 text-gray-600 ${textSizeClass}`} dangerouslySetInnerHTML={{ __html: exp.companydescription }} />
//               </div>
//             ))}
//           </div>
//         );
//       case 'educations':
//         return (
//           <div key={sectionName} {...sectionProps}>
//             <h2 className={`text-2xl font-bold mb-4 text-gray-800 ${textSizeClass}`}>Education</h2>
//             {educations.map((edu, idx) => (
//               <div key={idx} className="mb-4">
//                 <div className="flex justify-between items-baseline">
//                   <h3 className={`text-xl font-semibold text-gray-900 ${textSizeClass}`}>{edu.coursename || predefinedText.educations.coursename}</h3>
//                   <span className={`text-sm text-gray-600 ${textSizeClass}`}>{edu.edmonth1} - {edu.edmonth2}</span>
//                 </div>
//                 <p className={`text-lg text-gray-700 ${textSizeClass}`}>{edu.schoolname || predefinedText.educations.schoolname}</p>
//                 <p className={`text-gray-600 ${textSizeClass}`}>{edu.schoolplace || predefinedText.educations.schoolplace}</p>
//               </div>
//             ))}
//           </div>
//         );
//       case 'skills':
//         return (
//           <div key={sectionName} {...sectionProps}>
//             <h2 className={`text-2xl font-bold mb-4 text-gray-800 ${textSizeClass}`}>Skills</h2>
//             <div className="grid grid-cols-2 gap-4">
//               {skills.map((skill, idx) => (
//                 <div key={idx} className={`bg-gray-100 p-3 rounded ${textSizeClass}`}>
//                   <h3 className="font-semibold text-gray-800">{skill.skillname || predefinedText.skills.skillname}</h3>
//                   <p className="text-sm text-gray-600">{skill.skilldetails || predefinedText.skills.skilldetails}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div
//       className={``}
//     >
//       {sections.map((section, index) => renderSection(section, index))}
//     </div>
//   );
// };

// export default EnhancedTemplate3;

import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const EnhancedTemplate3 = ({
  data,
  boxBgColor = "bg-white",
  font = "font-sans",
  textSize = "text-base",
  sectionSpacing = "space-y-6",
  paragraphSpacing = "mb-4",
  lineSpacing = "leading-relaxed",
  predefinedText = {},
}) => {
  const [sections, setSections] = useState([
    "details",
    "experiences",
    "educations",
    "skills",
  ]);
  const [draggingSection, setDraggingSection] = useState(null);
  const dragNode = useRef();

  // Handle drag and drop functionality
  const handleDragStart = (e, sectionIndex) => {
    setDraggingSection(sections[sectionIndex]);
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDraggingSection(sections[sectionIndex]);
    }, 0);
  };

  const handleDragEnter = (e, targetIndex) => {
    if (e.target !== dragNode.current) {
      setSections((oldSections) => {
        let newSections = [...oldSections];
        const draggedSectionIndex = newSections.indexOf(draggingSection);
        newSections.splice(draggedSectionIndex, 1);
        newSections.splice(targetIndex, 0, draggingSection);
        return newSections;
      });
    }
  };

  const handleDragEnd = () => {
    setDraggingSection(null);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragNode.current = null;
  };

  // Destructure data with default values
  const {
    details = [],
    experiences = [],
    educations = [],
    skills = [],
  } = data || {};

  // Render different sections of the resume
  const renderSection = (sectionName, index) => {
    const sectionProps = {
      className: `p-6 rounded-lg shadow-md ${boxBgColor} ${paragraphSpacing} ${
        draggingSection === sectionName ? "opacity-50" : ""
      }`,
      onDragStart: (e) => handleDragStart(e, index),
      onDragEnter:
        draggingSection && draggingSection !== sectionName
          ? (e) => handleDragEnter(e, index)
          : null,
      onDragOver: (e) => e.preventDefault(),
      draggable: true,
    };

    switch (sectionName) {
      case "details":
        return (
          <div key={sectionName} {...sectionProps}>
            {details.map((del, idx) => (
              <div key={idx} className="text-center flex  flex-col justify-between gap-2">
                <h3
                  className={`text-2xl font-bold text-gray-900 mb-2 ${font} ${textSize}`}
                >
                  {del.name || predefinedText.details.name}
                </h3>
                <p className={`text-lg text-gray-600 ${font} ${textSize}`}>
                  {del.Profession || predefinedText.details.Profession}
                </p>
                {/* <div className={`flex justify-between space-x-4 mt-2 text-md text-gray-700 ${font} ${textSize}`}>
                  <span>{del.address || predefinedText.details.address}</span>
                  <span>{del.phoneNumber || predefinedText.details.phoneNumber}</span>
                  <span>{del.email || predefinedText.details.email}</span>
                  <a href={del.link || "#"} className="">{del.link || predefinedText.details.link}</a>
                  <a href={del.github || "#"} className="">{del.github || predefinedText.details.github}</a>
                </div> */}
                <div
                  className={`flex justify-between space-x-4 mt-2 text-md text-gray-700 ${font} ${textSize}`}
                >
                  <span className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>{del.address || predefinedText.details.address}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>
                      {del.phoneNumber || predefinedText.details.phoneNumber}
                    </span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>{del.email || predefinedText.details.email}</span>
                  </span>
                  <a
                    href={del.link || "#"}
                    className="flex items-center space-x-2"
                  >
                    <FontAwesomeIcon icon={faLink} />
                    <span>{del.link || predefinedText.details.link}</span>
                  </a>
                  <a
                    href={del.github || "#"}
                    className="flex items-center space-x-2"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>{del.github || predefinedText.details.github}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
      case "experiences":
        return (
          <div key={sectionName} {...sectionProps}>
            <h2
              className={`text-2xl font-bold mb-4 text-gray-800 ${font} ${textSize}`}
            >
              Professional Experience
            </h2>
            {experiences.map((exp, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex justify-between items-baseline">
                  <h3
                    className={`text-xl font-semibold text-gray-900 ${font} ${textSize}`}
                  >
                    {exp.Company || predefinedText.experiences.company}
                  </h3>
                  <span className={`text-sm text-gray-600 ${font} ${textSize}`}>
                    {exp.month1} - {exp.month2}
                  </span>
                </div>
                <p className={`text-lg text-gray-700 mt-1 ${font} ${textSize}`}>
                  {exp.role || predefinedText.experiences.role}
                </p>
                <div
                  className={`mt-2 text-gray-600 ${font} ${textSize}`}
                  dangerouslySetInnerHTML={{ __html: exp.companydescription }}
                />
              </div>
            ))}
          </div>
        );
      case "educations":
        return (
          <div key={sectionName} {...sectionProps}>
            <h2
              className={`text-2xl font-bold mb-4 text-gray-800 ${font} ${textSize}`}
            >
              Education
            </h2>
            {educations.map((edu, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3
                    className={`text-xl font-semibold text-gray-900 ${font} ${textSize}`}
                  >
                    {edu.coursename || predefinedText.educations.coursename}
                  </h3>
                  <span className={`text-sm text-gray-600 ${font} ${textSize}`}>
                    {edu.edmonth1} - {edu.edmonth2}
                  </span>
                </div>
                <div className="flex gap-2">
                <p className={`text-lg text-gray-700 ${font} ${textSize}`}>
                  {edu.schoolname || predefinedText.educations.schoolname}
                </p>
                <p className={`text-gray-600 ${font} ${textSize}`}>
                  {edu.schoolplace || predefinedText.educations.schoolplace}
                </p>
                </div>
              </div>
            ))}
          </div>
        );
      case "skills":
        return (
          <div key={sectionName} {...sectionProps}>
            <h2
              className={`text-2xl font-bold mb-4 text-gray-800 ${font} ${textSize}`}
            >
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`bg-gray-100 p-3 rounded ${font} ${textSize}`}
                >
                  <h3 className="font-semibold text-gray-800">
                    {skill.skillname || predefinedText.skills.skillname}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {skill.skilldetails || predefinedText.skills.skilldetails}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${font} ${textSize} ${sectionSpacing} ${lineSpacing}`}>
      {sections.map((section, index) => renderSection(section, index))}
    </div>
  );
};

export default EnhancedTemplate3;

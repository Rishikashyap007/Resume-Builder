
// import React, { useState, useEffect } from "react";
// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaLinkedin,
//   FaGithub,
// } from "react-icons/fa";

// const Template1 = ({
//   data = {},
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   isPreviewScreen,
//   isTemplate1Previewing,
//   predefinedText = {},
//   skillsfromapi,
// }) => {
//   // Define classes based on props
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

//   // Provide default values for data properties
//   const {
//     details = [],
//     experiences = [],
//     educations = [],
//     skills = [],
//     sectionadd = [],
//     summary = [],
//   } = data;

//   // Debug logs to trace the data flow
//   useEffect(() => {
//     console.log("data: ", data);
//     console.log("details: ", details);
//     console.log("experiences: ", experiences);
//     console.log("educations: ", educations);
//     console.log("skills: ", skills);
//     console.log("sectionadd: ", sectionadd);
//     console.log("summary: ", summary);
//   }, [data]);

//   // State variables to track user input
//   const [userDetails, setUserDetails] = useState("");
//   const [userExperiences, setUserExperiences] = useState("");
//   const [userEducations, setUserEducations] = useState("");
//   const [userSkills, setUserSkills] = useState("");
//   const [userAdditionalSections, setUserAdditionalSections] = useState("");
//   const [userSummary, setUserSummary] = useState("");

//   // Generic function to check if all required fields are filled
//   const areAllFieldsFilled = (item, fields) => {
//     return fields.every((field) => item[field] && item[field].trim() !== "");
//   };

//   // Check if all details are filled
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

//   const allDetailsFilled5 = sectionadd.some((section) =>
//     areAllFieldsFilled(section, ["sectiontitle", "sectiondescription"])
//   );

//   const allDetailsFilled6 = summary.some(
//     (summar) => summar.summarydescription.trim() !== ""
//   );

//   const truncate = (str, maxLength) => {
//     if (!str) return "";
//     return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
//   };

// return (
//   <div
//     className={`p-7 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
//     style={{ fontFamily: font, backgroundColor: boxBgColor }}
//   >
//     <div>
//       {details.map((del, index) => (
//         <div key={index} className="flex flex-col mb-6">
//           <div className="flex flex-col mb-4">
//             <h3 className="text-2xl text-black font-bold border-b-2 border-gray-400 pb-1 mb-2">
//               {del.name || predefinedText.details.name}
//             </h3>
//             <p className="text-xl text-gray-700">
//               {del.Profession || predefinedText.details.profession}
//             </p>
//           </div>

//           <div className="rounded-lg p-4 bg-white border border-gray-300 mb-6">
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center text-xs py-2 px-4">
//               {[
//                 {
//                   text: del.address || predefinedText.details.address,
//                 },
//                 {
//                   text: del.phoneNumber || predefinedText.details.phoneNumber,
//                 },
//                 {
//                   text: del.email || predefinedText.details.email,
//                 },
//                 {
//                   text: del.link || predefinedText.details.link,
//                   isLink: true,
//                   href: del.linkedin,
//                 },
//                 {
//                   text: del.github || predefinedText.details.github,
//                   isLink: true,
//                   href: del.github,
//                 },
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center space-x-2">
//                   <span className="text-black font-bold text-xl">•</span>
//                   {item.isLink ? (
//                     <a href={item.href} className="hover:underline text-xl text-gray-700">
//                       {item.text}
//                     </a>
//                   ) : (
//                     <span className="text-xl text-gray-700">{item.text}</span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {summary.length > 0 ? (
//             summary.map((sum, index) => (
//               <div key={index} className="mb-6">
//                 <div className="font-bold text-lg text-black border-b-2 border-gray-400 pb-1 mb-2">Summary</div>
//                 <p
//                   className={`${paragraphSpacingClass} text-sm text-gray-700 break-all`}
//                   dangerouslySetInnerHTML={{
//                     __html: sum.summarydescription.trim() || predefinedText.summary.summarydescription,
//                   }}
//                 />
//               </div>
//             ))
//           ) : (
//             <div className="mb-6">
//               <p
//                 className={`${paragraphSpacingClass} text-sm text-gray-700 break-all`}
//                 dangerouslySetInnerHTML={{
//                   __html: predefinedText.summary.summarydescription,
//                 }}
//               />
//             </div>
//           )}
//         </div>
//       ))}

//       <div className="mb-6">
//         <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">WORK EXPERIENCE</h5>
//         {experiences.map((exp, index) => (
//           <div key={index} className="mb-4">
//             <div className="flex justify-between mb-1">
//               <h6 className="font-bold text-lg text-gray-800 break-all">
//                 {exp.Company || predefinedText.experiences.company}
//               </h6>
//               <p className="text-sm text-gray-600">
//                 {exp.month1} - {exp.month2}
//               </p>
//             </div>
//             <div className="flex justify-between mb-1">
//               <h6 className="text-sm text-gray-700">
//                 {exp.role || predefinedText.experiences.role}
//               </h6>
//               <p className="text-sm text-gray-600">
//                 {exp.companyplace || predefinedText.experiences.companyplace}
//               </p>
//             </div>
//             <ul className="text-sm text-gray-700 w-[50%] break-all">
//               {exp.companydescription ? (
//                 exp.companydescription.split(/\r?\n/).map((line, i) => (
//                   <li
//                     key={i}
//                     className="text-sm text-gray-700 mb-1"
//                     dangerouslySetInnerHTML={{ __html: line }}
//                   />
//                 ))
//               ) : (
//                 <li className="text-gray-400 italic">No description provided</li>
//               )}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className="mb-6 page-break">
//         <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">EDUCATION</h5>
//         {educations.map((edu, index) => (
//           <div key={index} className="mb-4">
//             <div className="flex justify-between mb-1">
//               <h6 className="font-bold text-lg text-gray-800 break-all">
//                 {edu.schoolname || predefinedText.educations.schoolname}
//               </h6>
//               <p className="text-sm text-gray-600">
//                 {edu.edmonth1} - {edu.edmonth2}
//               </p>
//             </div>
//             <h6 className="text-sm text-gray-700">
//               {edu.coursename || predefinedText.educations.coursename}
//             </h6>
//           </div>
//         ))}
//       </div>

//       <div className="mb-6">
//         {/* <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">SKILLS</h5>
//         {skills && skills.length > 0 ? (
//           <div className="flex flex-wrap gap-4">
//             {skills.map((skill, index) => (
//               <div key={index} className="flex-grow">
//                 <div className="flex items-center mb-2">
//                   <h6 className="font-semibold text-lg text-gray-600">{skill.skillname}</h6>
//                 </div>
//                 <p className="text-sm text-gray-700">{skill.skilldetails}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-400 italic">No skills provided</p>
//         )} */}

// <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">SKILLS</h5>
//         {skills.length > 0 ? (
//           <div className="flex flex-wrap gap-4">
//             {skills.map((skill, index) => (
//               <div key={index} className="flex-grow">
//                 <div className="flex items-center mb-2">
//                   <h6 className="font-semibold text-lg text-gray-700">{skill.skillname}</h6>
//                 </div>
//                 <p className="text-sm text-gray-700">{skill.skilldetails}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-400 italic">No skills provided</p>
//         )}
//       </div>

//       <div className="mb-6">
//         {sectionadd.map((section, index) => (
//           <div key={index} className="mb-4">
//             <div className="font-bold text-lg text-black border-b-2 border-gray-400 pb-1 mb-2">
//               {section.sectiontitle}
//             </div>
//             <p className="text-sm text-gray-700">
//               {section.sectiondescription}
//             </p>
//           </div>
//         ))}
//       </div>


     
//     </div>
//   </div>
// );

// };

// export default Template1;

import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Template1 = ({
  data = {},
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen,
  isTemplate1Previewing,
  predefinedText = {},
  skillsfromapi,
}) => {
  const textSizeClass =
    textSize === "small"
      ? "text-sm"
      : textSize === "medium"
      ? "text-base"
      : "text-lg";
  const sectionSpacingClass =
    sectionSpacing === "small"
      ? "space-y-2"
      : sectionSpacing === "medium"
      ? "space-y-4"
      : "space-y-6";
  const paragraphSpacingClass =
    paragraphSpacing === "small"
      ? "mb-2"
      : paragraphSpacing === "medium"
      ? "mb-4"
      : "mb-6";
  const lineHeightClass =
    lineSpacing === "1"
      ? "leading-tight"
      : lineSpacing === "1.5"
      ? "leading-snug"
      : "leading-relaxed";

  const {
    details = [],
    experiences = [],
    educations = [],
    skills = [],
    sectionadd = [],
    summary = [],
  } = data;

  const [sections, setSections] = useState([
    { id: "details", content: details },
    { id: "summary", content: summary },
    { id: "experiences", content: experiences },
    { id: "educations", content: educations },
    { id: "skills", content: skills },
    { id: "sectionadd", content: sectionadd },
  ]);

  useEffect(() => {
    console.log("data: ", data);
    console.log("details: ", details);
    console.log("experiences: ", experiences);
    console.log("educations: ", educations);
    console.log("skills: ", skills);
    console.log("sectionadd: ", sectionadd);
    console.log("summary: ", summary);
  }, [data]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("sectionIndex", index);
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("sectionIndex");
    if (dragIndex === dropIndex) return;

    const updatedSections = [...sections];
    const draggedSection = updatedSections[dragIndex];
    updatedSections.splice(dragIndex, 1);
    updatedSections.splice(dropIndex, 0, draggedSection);
    setSections(updatedSections);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`p-7 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
      style={{ fontFamily: font, backgroundColor: boxBgColor }}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
          className="mb-6"
        >
          {section.id === "details" && (
            <div>
              {section.content.map((del, index) => (
                <div key={index} className="flex flex-col mb-6">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-2xl text-black font-bold border-b-2 border-gray-400 pb-1 mb-2">
                      {del?.name || predefinedText.details.name}
                    </h3>
                    <p className="text-xl text-gray-700">
                      {del?.Profession || predefinedText.details.profession}
                    </p>
                  </div>
                  <div className="rounded-lg p-4 bg-white border border-gray-300 mb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center text-xs py-2 px-4">
                      {[
                        {
                          text: del?.address || predefinedText.details.address,
                        },
                        {
                          text: del?.phoneNumber || predefinedText.details.phoneNumber,
                        },
                        {
                          text: del?.email || predefinedText.details.email,
                        },
                        {
                          text: del?.link || predefinedText.details.link,
                          isLink: true,
                          href: del?.linkedin,
                        },
                        {
                          text: del?.github || predefinedText.details.github,
                          isLink: true,
                          href: del?.github,
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <span className="text-black font-bold text-xl">•</span>
                          {item.isLink ? (
                            <a href={item.href} className="hover:underline text-xl text-gray-700">
                              {item.text}
                            </a>
                          ) : (
                            <span className="text-xl text-gray-700">{item.text}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {section.id === "summary" && (
            <div>
              {section.content.length > 0 ? (
                section.content.map((sum, index) => (
                  <div key={index} className="mb-6">
                    <div className="font-bold text-lg text-black border-b-2 border-gray-400 pb-1 mb-2">Summary</div>
                    <p
                      className={`${paragraphSpacingClass} text-sm text-gray-700 break-all`}
                      dangerouslySetInnerHTML={{
                        __html: sum?.summarydescription?.trim() || predefinedText.summary.summarydescription,
                      }}
                    />
                  </div>
                ))
              ) : (
                <div className="mb-6">
                  <p
                    className={`${paragraphSpacingClass} text-sm text-gray-700 break-all`}
                    dangerouslySetInnerHTML={{
                      __html: predefinedText.summary.summarydescription,
                    }}
                  />
                </div>
              )}
            </div>
          )}
          {section.id === "experiences" && (
            <div className="mb-6">
              <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">WORK EXPERIENCE</h5>
              {section.content.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <h6 className="font-bold text-lg text-gray-800 break-all">
                      {exp?.Company || predefinedText.experiences.Company}
                    </h6>
                    <p className="text-sm text-gray-600">
                      {exp?.month1} - {exp?.month2}
                    </p>
                  </div>
                  <div className="flex justify-between mb-1">
                    <h6 className="text-sm text-gray-700">
                      {exp?.role || predefinedText.experiences.role}
                    </h6>
                    <p className="text-sm text-gray-600">
                      {exp?.companyplace || predefinedText.experiences.companyplace}
                    </p>
                  </div>
                  <ul className="text-sm text-gray-700 w-[50%] break-all">
                    {exp?.companydescription ? (
                      exp?.companydescription.split(/\r?\n/).map((line, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-700 mb-1"
                          dangerouslySetInnerHTML={{ __html: line }}
                        />
                      ))
                    ) : (
                      <li className="text-gray-400 italic">No description provided</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {section.id === "educations" && (
            <div className="mb-6 page-break">
              <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">EDUCATION</h5>
              {section.content.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <h6 className="font-bold text-lg text-gray-800 break-all">
                      {edu?.schoolname || predefinedText.educations.schoolname}
                    </h6>
                    <p className="text-sm text-gray-600">
                      {edu?.edmonth1} - {edu?.edmonth2}
                    </p>
                  </div>
                  <h6 className="text-sm text-gray-700">
                    {edu?.coursename || predefinedText.educations.coursename}
                  </h6>
                </div>
              ))}
            </div>
          )}
          {section.id === "skills" && (
            <div className="mb-6">
              <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">Skills</h5>
              <ul className="list-disc list-inside flex justify-between">
                {section.content.length > 0 ? (
                  section.content.map((skill, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      {skill?.skillname || skillsfromapi}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-700">{skillsfromapi}</li>
                )}
              </ul>
            </div>
          )}

{section.id === "sectionadd" && Array.isArray(section.content) && section.content.length > 0 && (
  <div className="mb-6">
    {section.content.map((sect, index) => {
      // Check if section has non-empty values
      const hasContent = sect?.sectionname?.trim() || sect?.sectiondescription?.trim();

      return hasContent ? (
        <div key={index}>
          <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">
            {sect?.sectiontitle || predefinedText?.sectionadd?.sectiontitle || "Default Section Name"}
          </h5>
          <p
            className={`${paragraphSpacingClass} text-sm text-gray-700 break-all`}
            dangerouslySetInnerHTML={{
              __html: sect?.sectiondescription?.trim() || predefinedText?.sectionadd?.sectiondescription || "Default Description",
            }}
          />
        </div>
      ) : null; // Return null if the section is empty
    })}
  </div>
)}


        </div>
      ))}
    </div>
  );
};

export default Template1;


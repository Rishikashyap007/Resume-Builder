// import React from "react";
// import profilephoto from "../images/profilephoto.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faEnvelope,
//   faGlobe,
// } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import DOMPurify from "dompurify";


// // const createMarkup = (html) => {
// //   return {__html: DOMPurify.sanitize(html, {
// //     ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
// //     ALLOWED_ATTR: ['href', 'target', 'class']
// //   })};
// // }

// const createMarkup = (html) => {
//   return {
//     __html: DOMPurify.sanitize(html, {
//       ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
//       ALLOWED_ATTR: ['href', 'target', 'class']
//     }).replace(/<ul>/g, '<ul class="list-disc-bold">')
//       .replace(/<ol>/g, '<ol class="list-decimal-custom">')
//   };
// };


// // const createMarkup = (html) => {
// //   return {
// //     __html: DOMPurify.sanitize(html, {
// //       ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
// //       ALLOWED_ATTR: ['href', 'target', 'class']
// //     }).replace(/<ul>/g, '<ul class="list-decimal text-red-500">')
// //       .replace(/<li>/g, '<li class="text-red-500">')
// //   };
// // }

// const Template14 = ({
//   image,
//   data,
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   predefinedText = {},
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
//     favorites = [],
//     aboutMe = [],
//   } = data || {};

//   return (
//     <div
//       className={`p-10 font-serif ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
//       style={{ fontFamily: font }}
//     >
//       {/* Main Container */}
//       <div className="flex flex-col border-4 border-red-900 bg-gray-200 md:flex-row">
//         {/* Left Column */}
//         <div className="w-full md:w-1/4 p-2">
//           {/* Profile Picture */}
//           <div className="flex items-center">
//             <div className="w-24 h-24 bg-white border-4 border-red-950 text-center rounded-full overflow-hidden">
//               <img
//                 src={image || profilephoto}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Education */}
//           <div className="mb-4">
//             <h5 className="text-lg text-red-900 font-bold">Study</h5>
//             {educations.map((edu, index) => (
//               <div key={index} className="mt-2">
//                 <p className="text-sm">
//                   {edu.edmonth1} - {edu.edmonth2}
//                 </p>
//                 <p className="text-sm">{edu.schoolname}</p>
//               </div>
//             ))}
//           </div>

//           {/* Favorites */}
//           <div className="mb-4">
//             <h5 className="text-lg text-red-900 font-bold">Favorite</h5>
//             {favorites.map((fav, index) => (
//               <div key={index} className="mt-2">
//                 <p className="text-sm">{fav.activity}</p>
//               </div>
//             ))}
//           </div>

//           {/* Skills */}
//           <div className="mb-4">
//             <h5 className="text-lg text-red-900 font-bold">Skill</h5>
//             {skills.map((skill, index) => (
//               <div key={index} className="mt-2">
//                 <p className="text-sm">{skill.skillname}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="w-full md:w-3/4 p-4">
//           {/* Name and Profession */}
//           <div className="mb-4  border-b-4 border-b-red-800 text-center">
//             <h2 className="text-2xl text-red-900 font-bold">
//               {details[0]?.name || "JULIANA SILVA"}
//             </h2>
//             <h3 className="text-lg text-red-900">
//               {details[0]?.Profession || "Journalist"}
//             </h3>
//           </div>

//           {/* About Me */}
//           <div className="mb-4">
//             <h5 className="text-lg text-red-900 font-bold">About Me</h5>
//             <p className="text-sm">
//               {aboutMe[0]?.description ||
//                 "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work."}
//             </p>
//           </div>

//           {/* Experience */}
//           <div className="mb-4">
//       <h5 className="text-lg text-red-900 font-bold">Experience</h5>
//       {experiences.map((exp, index) => (
//         <div key={index} className="mt-2">
//           <p className="text-sm font-semibold">{exp.Company}</p>
//           <p className="text-sm">
//             {exp.month1} - {exp.month2}
//           </p>
//           <p className="text-sm">{exp.role}</p>
//           <div 
//             className="text-sm prose prose-sm max-w-none"
//             dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
//           />
//         </div>
//       ))}
//     </div>
//           {/* Contact */}
//           <div className="mb-4 ">
//             <h5 className="text-lg text-red-900 font-bold">Contact</h5>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <FontAwesomeIcon icon={faPhone} className="mr-2 text-sm" />
//                 <p className="text-sm">
//                   {details[0]?.phoneNumber || "123-456-7890"}
//                 </p>
//               </div>
//               <div className="flex items-center mt-2">
//                 <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-sm" />
//                 <p className="text-sm">
//                   {details[0]?.email || "example@example.com"}
//                 </p>
//               </div>
//               <div className="flex items-center mt-2 ">
//                 <FontAwesomeIcon icon={faGlobe} className="mr-2 text-sm" />
//                 <p className="text-sm">
//                   {details[0]?.link || "www.reallygreatsite.com"}
//                 </p>
//               </div>
//               {details[0]?.github && (
//                 <div className="flex items-center mt-2">
//                   <FontAwesomeIcon icon={faGithub} className="mr-2 text-sm" />
//                   <p className="text-sm">{details[0]?.github}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template14;

import React from "react";
import profilephoto from "../images/profilephoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import DOMPurify from "dompurify";

const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: ['href', 'target', 'class']
    }).replace(/<ul>/g, '<ul class="list-disc-bold">')
      .replace(/<ol>/g, '<ol class="list-decimal-custom">')
  };
};

const Template14 = ({
  image,
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  predefinedText = {},
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
    favorites = [],
    summary = [],
    sectionadd = [],
    sectionadd2 = [],
  } = data || {};

  return (
    <div
      className={`p-10 font-serif h-screen ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
      style={{ fontFamily: font }}
    >
      <div className="flex flex-col border-4 border-red-900 bg-gray-200 md:flex-row">
        <div className="w-full md:w-1/4 p-2">
          <div className="flex items-center">
            <div className="w-24 h-24 bg-white border-4 border-red-950 text-center rounded-full overflow-hidden">
              <img
                src={image || profilephoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mb-4">
            <h5 className="text-lg text-red-900 font-bold">Study</h5>
            {educations.map((edu, index) => (
              <div key={index} className="mt-2">
                <p> {edu.coursename}</p>
                <p className="text-sm font-medium">{edu.schoolname}</p>
                <p className="text-sm font-light">
                  {edu.edmonth1} - {edu.edmonth2}
                </p>
              </div>
            ))}
          </div>
          {/* <div className="mb-4">
            <h5 className="text-lg text-red-900 font-bold">Favorite</h5>
            {favorites.map((fav, index) => (
              <div key={index} className="mt-2">
                <p className="text-sm">{fav.activity}</p>
              </div>
            ))}
          </div> */}
          <div className="mb-4">
            <h5 className="text-lg text-red-900 font-bold">Skill</h5>
            {skills.map((skill, index) => (
              <div key={index} className="mt-2">
                <p className="text-sm">{skill.skillname}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/4 p-4">
          <div className="mb-4 border-b-4 border-b-red-800 text-center">
            <h2 className="text-2xl text-red-900 font-bold">
              {details[0]?.name || "JULIANA SILVA"}
            </h2>
            <h3 className="text-lg text-red-900">
              {details[0]?.Profession || "Journalist"}
            </h3>
          </div>
          {/* <div className="mb-4">
            <h5 className="text-lg text-red-900 font-bold">About Me</h5>
            <p className="text-sm">
              {summary[0]?.summarydescription
 ||
                "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work."}
            </p>
          </div> */}

<div className="mb-4">
  <h5 className="text-lg text-red-900 font-bold">About Me</h5>
  <p className="text-sm">
    <span
      dangerouslySetInnerHTML={{
        __html: summary[0]?.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work."
      }}
      className="prose"
    />
  </p>
</div>
          <div className="mb-4">
            <h5 className="text-lg text-red-900 font-bold">Experience</h5>
            {experiences.map((exp, index) => (
              <div key={index} className="mt-2">
                <p className="text-sm font-semibold">{exp.Company}</p>
                <p className="text-sm">
                  {exp.month1} - {exp.month2}
                </p>
                <p className="text-sm">{exp.role}</p>
                <div 
                  className="text-sm prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
                />
              </div>
            ))}
          </div>
          <div className="mb-4">
            <h5 className="text-lg text-red-900 font-bold">Contact</h5>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-sm" />
                <p className="text-sm">
                  {details[0]?.phoneNumber || "123-456-7890"}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-sm" />
                <p className="text-sm">
                  {details[0]?.email || "example@example.com"}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <FontAwesomeIcon icon={faGlobe} className="mr-2 text-sm" />
                <p className="text-sm">
                  {details[0]?.link || "www.reallygreatsite.com"}
                </p>
              </div>
              {details[0]?.github && (
                <div className="flex items-center mt-2">
                  <FontAwesomeIcon icon={faGithub} className="mr-2 text-sm" />
                  <p className="text-sm">{details[0]?.github}</p>
                </div>
              )}
            </div>
          </div>
          {sectionadd.map((section, index) => (
            <div key={index} className="mb-4">
              <h5 className="text-lg text-red-900 font-bold">
                {section.sectiontitle || "Section Title"}
              </h5>
              <p className="text-sm font-semibold">{section.sectionname}</p>
              <p className="text-sm">{section.sectiondescription}</p>
            </div>
          ))}
          {sectionadd2.map((section, index) => (
            <div key={index} className="mb-4">
              <h5 className="text-lg text-red-900 font-bold">
                {section.sectiontitle || "Section Title"}
              </h5>
              <p className="text-sm font-semibold">{section.sectionname}</p>
              <p className="text-sm">{section.sectiondescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template14;

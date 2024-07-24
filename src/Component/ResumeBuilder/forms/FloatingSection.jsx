// import React, { useState, useEffect } from 'react';

// const FloatingReorderSections = ({ data }) => {
//   const [sections, setSections] = useState([]);

//   useEffect(() => {
//     const sectionKeys = Object.keys(data);
//     const initialSections = sectionKeys.reduce((acc, key) => {
//       if (key === 'sectionadd2' && (Array.isArray(data[key]) && data[key].length === 0)) {
//         // Skip sectionadd2 if it is empty
//         return acc;
//       }

//       let content = key.charAt(0).toUpperCase() + key.slice(1); // Default content is the key with the first letter capitalized

//       if (key === 'sectionadd' || key === 'sectionadd2') {
//         if (Array.isArray(data[key]) && data[key].length > 0 && data[key][0].sectiontitle) {
//           content = data[key][0].sectiontitle; // Use sectiontitle if available
//         }
//       }

//       acc.push({ id: key, content: content });
//       return acc;
//     }, []);

//     setSections(initialSections);
//   }, [data]);

//   useEffect(() => {
//     console.log('Current sections:', sections);
//   }, [sections]);

//   const onDragStart = (e, index) => {
//     e.dataTransfer.setData('index', index);
//   };

//   const onDrop = (e, dropIndex) => {
//     const dragIndex = e.dataTransfer.getData('index');
//     if (dragIndex === dropIndex) return;

//     const reorderedSections = Array.from(sections);
//     const [draggedItem] = reorderedSections.splice(dragIndex, 1);
//     reorderedSections.splice(dropIndex, 0, draggedItem);

//     setSections(reorderedSections);
//   };

//   const onDragOver = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-sm mx-auto">
//       <h2 className="text-lg font-semibold mb-4">Reorder Sections</h2>
//       <ul className="space-y-2">
//         {sections.map((section, index) => (
//           <li
//             key={section.id}
//             draggable
//             onDragStart={(e) => onDragStart(e, index)}
//             onDragOver={onDragOver}
//             onDrop={(e) => onDrop(e, index)}
//             className="bg-white p-2 rounded-md shadow-sm transition-shadow duration-200 cursor-move hover:shadow-md"
//           >
//             {section.content}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FloatingReorderSections;


import React, { useState, useEffect } from 'react';

const FloatingReorderSections = ({ data }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const sectionKeys = Object.keys(data);
    const initialSections = sectionKeys.reduce((acc, key) => {
      if (key === 'sectionadd2' && (Array.isArray(data[key]) && data[key].length === 0)) {
        // Skip sectionadd2 if it is empty
        return acc;
      }

      let content = key.charAt(0).toUpperCase() + key.slice(1); // Default content is the key with the first letter capitalized

      if (key === 'sectionadd' || key === 'sectionadd2') {
        if (Array.isArray(data[key]) && data[key].length > 0 && data[key][0].sectiontitle) {
          content = data[key][0].sectiontitle; // Use sectiontitle if available
        }
      }

      acc.push({ id: key, content: content });
      return acc;
    }, []);

    setSections(initialSections);
  }, [data]);

  useEffect(() => {
    console.log('Current sections:', sections);
  }, [sections]);

  useEffect(() => {
    // Log the last order of sections after drag-and-drop
    console.log('Last order:', sections.map(section => section.id));
  }, [sections]); // This useEffect runs whenever `sections` changes

  const onDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const onDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData('index');
    if (dragIndex === dropIndex) return;

    const reorderedSections = Array.from(sections);
    const [draggedItem] = reorderedSections.splice(dragIndex, 1);
    reorderedSections.splice(dropIndex, 0, draggedItem);

    setSections(reorderedSections);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4">Reorder Sections</h2>
      <ul className="space-y-2">
        {sections.map((section, index) => (
          <li
            key={section.id}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, index)}
            className="bg-white p-2 rounded-md shadow-sm transition-shadow duration-200 cursor-move hover:shadow-md"
          >
            {section.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FloatingReorderSections;

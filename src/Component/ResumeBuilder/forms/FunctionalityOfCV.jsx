// // import React, { useState } from 'react';
// // import TemplateSelector from '../cvFunctionality/TemplateSelector';
// // import FontSelector from '../cvFunctionality/FontSelector';
// // import Slider2 from '../cvFunctionality/Slider2';
// // import ColorButtons from '../cvFunctionality/ColorButtons';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faTools, faPalette, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
// // import Modal from '../cvFunctionality/Modal';

// // const FunctionalityOfCV = ({
// //   data,
// //   selectedTemplate,
// //   setSelectedTemplate,
// //   selectedFont,
// //   setSelectedFont,
// //   textSize,
// //   setTextSize,
// //   sectionSpacing,
// //   setSectionSpacing,
// //   paragraphSpacing,
// //   setParagraphSpacing,
// //   lineSpacing,
// //   setLineSpacing,
// //   boxBgColor,
// //   setBoxBgColor,
// //   sections = [],
// //   addSection,
// //   deleteSection
// // }) => {
// //   const [formattingModalOpen, setFormattingModalOpen] = useState(false);
// //   const [templateModalOpen, setTemplateModalOpen] = useState(false);
// //   const [addSectionModalOpen, setAddSectionModalOpen] = useState(false);
// //   const [newSection, setNewSection] = useState({ sectionname: '', sectiondescription: '', sectiontitle: '' });

// //   const toggleFormattingModal = () => {
// //     setFormattingModalOpen(!formattingModalOpen);
// //   };

// //   const toggleTemplateModal = () => {
// //     setTemplateModalOpen(!templateModalOpen);
// //   };

// //   const toggleAddSectionModal = () => {
// //     setAddSectionModalOpen(!addSectionModalOpen);
// //   };

// //   const handleAddSection = () => {
// //     addSection(newSection);
// //     setNewSection({ sectionname: '', sectiondescription: '', sectiontitle: '' });
// //     toggleAddSectionModal();  // Close modal after adding
// //   };




  
// //   return (
// //     <div className="functinalityofcv w-full lg:w-full p-5 justify-center bg-white rounded-lg border-2 border-black">
// //       <div className="justify-around mb-2">
// //         <div className="my-2">
// //           <button
// //             onClick={toggleTemplateModal}
// //             className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full flex items-center justify-center"
// //           >
// //             <FontAwesomeIcon icon={faPalette} className="mr-2" />
// //             Change Template
// //           </button>
// //           <Modal isOpen={templateModalOpen} onClose={toggleTemplateModal}>
// //             <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
// //           </Modal>
// //         </div>
// //         <FontSelector selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
// //       </div>

// //       <div className="text-center mb-4">
// //         <button
// //           onClick={toggleFormattingModal}
// //           className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full flex items-center justify-center"
// //         >
// //           <FontAwesomeIcon icon={faTools} className="mr-2" />
// //           Formatting Tools
// //         </button>
// //         <Modal isOpen={formattingModalOpen} onClose={toggleFormattingModal}>
// //           <div className="flex flex-col items-center">
// //             <div className="flex justify-around w-full border-x-2 border-black px-4 py-3">
// //               <Slider2 label="Text Size" min={1} max={3} step={1} value={textSize} setValue={setTextSize} />
// //               <Slider2 label="Section Spacing" min={1} max={3} step={1} value={sectionSpacing} setValue={setSectionSpacing} />
// //               <Slider2 label="Paragraph Spacing" min={1} max={3} step={1} value={paragraphSpacing} setValue={setParagraphSpacing} />
// //               <Slider2 label="Line Spacing" min={1} max={2} step={0.5} value={lineSpacing} setValue={setLineSpacing} />
// //             </div>
// //             <ColorButtons setBoxBgColor={setBoxBgColor} />
// //           </div>
// //         </Modal>
// //       </div>

// //       {/* <div className="text-center mb-4">
// //         <button
// //           onClick={toggleAddSectionModal}
// //           className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full flex items-center justify-center"
// //         >
// //           <FontAwesomeIcon icon={faPlus} className="mr-2" />
// //           Add Section
// //         </button>
// //         <Modal isOpen={addSectionModalOpen} onClose={toggleAddSectionModal}>
// //           <div className="flex flex-col p-4">
// //             <h2 className="text-xl font-bold mb-4">Add New Section</h2>
// //             <input
// //               type="text"
// //               placeholder="Section Name"
// //               value={newSection.sectionname}
// //               onChange={(e) => setNewSection({ ...newSection, sectionname: e.target.value })}
// //               className="border rounded p-2 w-full mb-2"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Section Title"
// //               value={newSection.sectiontitle}
// //               onChange={(e) => setNewSection({ ...newSection, sectiontitle: e.target.value })}
// //               className="border rounded p-2 w-full mb-2"
// //             />
// //             <textarea
// //               placeholder="Section Description"
// //               value={newSection.sectiondescription}
// //               onChange={(e) => setNewSection({ ...newSection, sectiondescription: e.target.value })}
// //               className="border rounded p-2 w-full mb-2"
// //             />
// //             <button
// //               onClick={handleAddSection}
// //               className="text-white bg-blue-500 border-2 border-blue-500 rounded p-2 w-full"
// //             >
// //               Save
// //             </button>
// //           </div>
// //         </Modal>
// //       </div>

// //       <div className="mt-4">
// //         {sections.length > 0 ? (
// //           sections.map((section, index) => (
// //             <div key={index} className="flex justify-between items-center border p-2 mb-2 rounded">
// //               <div>
// //                 <h3 className="font-bold">{section.sectiontitle}</h3>
// //                 <p>{section.sectionname}</p>
// //                 <p>{section.sectiondescription}</p>
// //               </div>
// //               <button
// //                 onClick={() => deleteSection(index)}
// //                 className="text-red-500 border border-red-500 rounded p-1"
// //               >
// //                 <FontAwesomeIcon icon={faTrash} />
// //               </button>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-center">No sections added yet.</p>
// //         )}
// //       </div> */}
// //       <div className='mt-4 text-center'>
// //         <button className='text-black border-blue-950 border-2 rounded font-bold p-2 w-full flex items-center justify-center'>
// //            ManageSections
// //         </button>
// //         <Modal isOpen={formattingModalOpen} onClose={toggleFormattingModal}>
// //               <div className="sections">
// //                   No section added
// //               </div>
// //         </Modal>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FunctionalityOfCV;

// import React, { useState } from 'react';
// import TemplateSelector from '../cvFunctionality/TemplateSelector';
// import FontSelector from '../cvFunctionality/FontSelector';
// import Slider2 from '../cvFunctionality/Slider2';
// import ColorButtons from '../cvFunctionality/ColorButtons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTools, faPalette, faPlus, faTrash, faList } from '@fortawesome/free-solid-svg-icons';
// import Modal from '../cvFunctionality/Modal';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const FunctionalityOfCV = ({
//   data,
//   selectedTemplate,
//   setSelectedTemplate,
//   selectedFont,
//   setSelectedFont,
//   textSize,
//   setTextSize,
//   sectionSpacing,
//   setSectionSpacing,
//   paragraphSpacing,
//   setParagraphSpacing,
//   lineSpacing,
//   setLineSpacing,
//   boxBgColor,
//   setBoxBgColor,
//   sections = [],
//   addSection,
//   deleteSection,
//   reorderSections
// }) => {
//   const [formattingModalOpen, setFormattingModalOpen] = useState(false);
//   const [templateModalOpen, setTemplateModalOpen] = useState(false);
//   const [addSectionModalOpen, setAddSectionModalOpen] = useState(false);
//   const [manageSectionsModalOpen, setManageSectionsModalOpen] = useState(false);
//   const [newSection, setNewSection] = useState({ sectionname: '', sectiondescription: '', sectiontitle: '' });

//   const toggleFormattingModal = () => {
//     setFormattingModalOpen(!formattingModalOpen);
//   };

//   const toggleTemplateModal = () => {
//     setTemplateModalOpen(!templateModalOpen);
//   };

//   const toggleAddSectionModal = () => {
//     setAddSectionModalOpen(!addSectionModalOpen);
//   };

//   const toggleManageSectionsModal = () => {
//     setManageSectionsModalOpen(!manageSectionsModalOpen);
//   };

//   const handleAddSection = () => {
//     addSection(newSection);
//     setNewSection({ sectionname: '', sectiondescription: '', sectiontitle: '' });
//     toggleAddSectionModal(); // Close modal after adding
//   };

//   const onDragEnd = (result) => {
//     if (!result.destination) return;
//     reorderSections(result.source.index, result.destination.index);
//   };

//   return (
//     <div className="functinalityofcv w-full lg:w-full p-5 justify-center bg-white rounded-lg border-2 border-black">
//       <div className="justify-around mb-2">
//         <div className="my-2">
//           <button
//             onClick={toggleTemplateModal}
//             className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full flex items-center justify-center"
//           >
//             <FontAwesomeIcon icon={faPalette} className="mr-2" />
//             Change Template
//           </button>
//           <Modal isOpen={templateModalOpen} onClose={toggleTemplateModal}>
//             <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
//           </Modal>
//         </div>
//         <FontSelector selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
//       </div>

//       <div className="text-center mb-4">
//         <button
//           onClick={toggleFormattingModal}
//           className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full flex items-center justify-center"
//         >
//           <FontAwesomeIcon icon={faTools} className="mr-2" />
//           Formatting Tools
//         </button>
//         <Modal isOpen={formattingModalOpen} onClose={toggleFormattingModal}>
//           <div className="flex flex-col items-center">
//             <div className="flex justify-around w-full border-x-2 border-black px-4 py-3">
//               <Slider2 label="Text Size" min={1} max={3} step={1} value={textSize} setValue={setTextSize} />
//               <Slider2 label="Section Spacing" min={1} max={3} step={1} value={sectionSpacing} setValue={setSectionSpacing} />
//               <Slider2 label="Paragraph Spacing" min={1} max={3} step={1} value={paragraphSpacing} setValue={setParagraphSpacing} />
//               <Slider2 label="Line Spacing" min={1} max={2} step={0.5} value={lineSpacing} setValue={setLineSpacing} />
//             </div>
//             <ColorButtons setBoxBgColor={setBoxBgColor} />
//           </div>
//         </Modal>
//       </div>

//       <div className="text-center mb-4">
//         <button
//           onClick={toggleAddSectionModal}
//           className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full flex items-center justify-center"
//         >
//           <FontAwesomeIcon icon={faPlus} className="mr-2" />
//           Add Section
//         </button>
//         <Modal isOpen={addSectionModalOpen} onClose={toggleAddSectionModal}>
//           <div className="flex flex-col p-4">
//             <h2 className="text-xl font-bold mb-4">Add New Section</h2>
//             <input
//               type="text"
//               placeholder="Section Name"
//               value={newSection.sectionname}
//               onChange={(e) => setNewSection({ ...newSection, sectionname: e.target.value })}
//               className="border rounded p-2 w-full mb-2"
//             />
//             <input
//               type="text"
//               placeholder="Section Title"
//               value={newSection.sectiontitle}
//               onChange={(e) => setNewSection({ ...newSection, sectiontitle: e.target.value })}
//               className="border rounded p-2 w-full mb-2"
//             />
//             <textarea
//               placeholder="Section Description"
//               value={newSection.sectiondescription}
//               onChange={(e) => setNewSection({ ...newSection, sectiondescription: e.target.value })}
//               className="border rounded p-2 w-full mb-2"
//             />
//             <button
//               onClick={handleAddSection}
//               className="text-white bg-blue-500 border-2 border-blue-500 rounded p-2 w-full"
//             >
//               Save
//             </button>
//           </div>
//         </Modal>
//       </div>

//       <div className="mt-4 text-center">
//         <button
//           onClick={toggleManageSectionsModal}
//           className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full flex items-center justify-center"
//         >
//           <FontAwesomeIcon icon={faList} className="mr-2" />
//           Manage Sections
//         </button>
//         <Modal isOpen={manageSectionsModalOpen} onClose={toggleManageSectionsModal}>
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-4">Manage Sections</h2>
//             <DragDropContext onDragEnd={onDragEnd}>
//               <Droppable droppableId="sections">
//                 {(provided) => (
//                   <div {...provided.droppableProps} ref={provided.innerRef}>
//                     {sections.length > 0 ? (
//                       sections.map((section, index) => (
//                         <Draggable key={index} draggableId={`section-${index}`} index={index}>
//                           {(provided) => (
//                             <div
//                               ref={provided.innerRef}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               className="flex justify-between items-center border p-2 mb-2 rounded"
//                             >
//                               <div>
//                                 <h3 className="font-bold">{section.sectiontitle}</h3>
//                                 <p>{section.sectionname}</p>
//                                 <p>{section.sectiondescription}</p>
//                               </div>
//                               <button
//                                 onClick={() => deleteSection(index)}
//                                 className="text-red-500 border border-red-500 rounded p-1"
//                               >
//                                 <FontAwesomeIcon icon={faTrash} />
//                               </button>
//                             </div>
//                           )}
//                         </Draggable>
//                       ))
//                     ) : (
//                       <p className="text-center">No sections added yet.</p>
//                     )}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//             </DragDropContext>
//           </div>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default FunctionalityOfCV;

import React, { useState } from 'react';
import TemplateSelector from '../cvFunctionality/TemplateSelector';
import FontSelector from '../cvFunctionality/FontSelector';
import Slider2 from '../cvFunctionality/Slider2';
import ColorButtons from '../cvFunctionality/ColorButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faPalette, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from '../cvFunctionality/Modal';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import FloatingReorderSections from './FloatingSection';
import PreviewSection from './PreviewSection';

const FunctionalityOfCV = ({
  data,
  selectedTemplate,
  setSelectedTemplate,
  selectedFont,
  setSelectedFont,
  textSize,
  setTextSize,
  sectionSpacing,
  setSectionSpacing,
  paragraphSpacing,
  setParagraphSpacing,
  lineSpacing,
  setLineSpacing,
  boxBgColor,
  setBoxBgColor,
  updateData,
  sections
}) => {
  const [formattingModalOpen, setFormattingModalOpen] = useState(false);
  const [templateModalOpen, setTemplateModalOpen] = useState(false);
  const [manageSectionsModalOpen, setManageSectionsModalOpen] = useState(false);
  
  const toggleFormattingModal = () => {
    setFormattingModalOpen(!formattingModalOpen);
  };
   console.log(sections,"Sections")
  const toggleTemplateModal = () => {
    setTemplateModalOpen(!templateModalOpen);
  };

  const toggleManageSectionsModal = () => {
    setManageSectionsModalOpen(!manageSectionsModalOpen);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(data.sections);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    const reorderedData = {};
    reorderedItems.forEach(item => {
      reorderedData[item.key] = data[item.key];
    });

    // Update the parent component with the new order
    updateData(reorderedData);
  };

  // Create an array of section keys for reordering
  const sectionKeys = Object.keys(data).map(key => ({
    key,
    label: key.charAt(0).toUpperCase() + key.slice(1)
  }));

  return (
    <div className="functionalityofcv w-full lg:w-full p-5 justify-center bg-white rounded-lg border-2 border-black">
      <div className="justify-around mb-2">
        <div className="my-2">
          <button
            onClick={toggleTemplateModal}
            className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faPalette} className="mr-2" />
            Change Template
          </button>
          <Modal isOpen={templateModalOpen} onClose={toggleTemplateModal}>
            <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
          </Modal>
        </div>
        <FontSelector selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
      </div>

      <div className="text-center mb-4">
        <button
          onClick={toggleFormattingModal}
          className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faTools} className="mr-2" />
          Formatting Tools
        </button>
        <Modal isOpen={formattingModalOpen} onClose={toggleFormattingModal}>
          <div className="flex flex-col items-center">
            <div className="flex justify-around w-full border-x-2 border-black px-4 py-3">
              <Slider2 label="Text Size" min={1} max={3} step={1} value={textSize} setValue={setTextSize} />
              <Slider2 label="Section Spacing" min={1} max={3} step={1} value={sectionSpacing} setValue={setSectionSpacing} />
              <Slider2 label="Paragraph Spacing" min={1} max={3} step={1} value={paragraphSpacing} setValue={setParagraphSpacing} />
              <Slider2 label="Line Spacing" min={1} max={2} step={0.5} value={lineSpacing} setValue={setLineSpacing} />
            </div>
            <ColorButtons setBoxBgColor={setBoxBgColor} />
          </div>
        </Modal>
      </div>

      {/* <div className="mt-4 text-center">
        <button
          className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full flex items-center justify-center"
          onClick={toggleManageSectionsModal}
        >
          Manage Sections
        </button>
        <Modal isOpen={manageSectionsModalOpen} onClose={toggleManageSectionsModal}>
          
          <FloatingReorderSections data={data} />
        </Modal> */}
      {/* </div> */}
    </div>
  );
};

export default FunctionalityOfCV;

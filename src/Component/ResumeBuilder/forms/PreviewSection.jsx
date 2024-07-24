

import React, { useState } from 'react';
import axios from 'axios';
import TemplateComponent from './templateComponent';
import FunctionalityOfCV from './FunctionalityOfCV';
import { Link } from 'react-router-dom';

const PreviewSection = ({
  cvRef,
  handlePrint,
  setIsPreviewing,
  formData,
  predefinedText,
  selectedTemplate,
  handleSectionInputChange,
  addSectionAdd,
  deleteSectionAdd,
  setSelectedTemplate,
  selectedFont,
  setSelectedFont,
  boxBgColor,
  setBoxBgColor,
  skillsfromapi,
  sections,
  addSection,
  deleteSection,
  id
}) => {
  const [textSize, setTextSize] = useState(2);
  const [sectionSpacing, setSectionSpacing] = useState(2);
  const [paragraphSpacing, setParagraphSpacing] = useState(2);
  const [lineSpacing, setLineSpacing] = useState(1.5);
  const [isPreviewScreen, setIsPreviewScreen] = useState(true);
  const [accuracyPercentage, setAccuracyPercentage] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  // Existing functions (resumeScore, updateResume, handleDownload, handlePrintWithPaymentCheck) remain unchanged
  const resumeScore = async () => {
    try {
      const token = localStorage.getItem('token');
      const requestBody = {
        keyword: "Rate this resume content in percentage ? and checklist of scope improvments in manner of content and informations",
        file_location: "/etc/ai_job_portal/jobseeker/resume_uploads/black-and-white-standard-professional-resume-1719321080.pdf"
      };

      const response = await axios.post(
        'https://api.abroadium.com/api/jobseeker/file-based-ai',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        }
      );

      const { content_acuracy_percentage } = response.data.data;
      setAccuracyPercentage(content_acuracy_percentage);
    } catch (error) {
      console.error('Error fetching data from API', error);
    }
  };

  const updateResume = async () => {
    const token = localStorage.getItem('token');
    const url = `https://api.abroadium.com/api/jobseeker/resume-update/${id}`;
  
    const skillsFromApiArray = Array.isArray(skillsfromapi) ? skillsfromapi : [];
  
    const payload = {
      templateData: {
        templatename: selectedTemplate || "Template1",
        details: {
          firstname: formData.details[0]?.name || "",
          lastname: formData.details[0]?.lastname || "",
          address: formData.details[0]?.address || "",
          phone: formData.details[0]?.phoneNumber || "",
          email: formData.details[0]?.email || "",
          postalcode: formData.details[0]?.postalcode || "",
          drivinglicense: formData.details[0]?.drivinglicense || "",
          nationality: formData.details[0]?.nationality || "",
          placeofbirth: formData.details[0]?.placeofbirth || "",
          dateofbirth: formData.details[0]?.dateofbirth || "",
          securityclearance: formData.details[0]?.securityclearance || "",
          city: formData.details[0]?.city || "",
          country: formData.details[0]?.country || "",
          github: formData.details[0]?.github || "",
          languages: formData.languages?.map(language => `${language.Languagename1} ${language.Languagename2}`) || [],
          projects: formData.projects || [],
          achievement: formData.achievement || [],
          photo: formData.photo || "",
          profession: formData.profession || "",
          linkdin: formData.linkdin || "",
          wantedjobtitle: formData.wantedjobtitle || "",
        },
        professionalsummary: formData.summary[0]?.summarydescription || "",
        skills: [...skillsFromApiArray, ...(formData.skills?.map(skill => skill.skillname) || [])] || [],
        education: formData.educations?.map(edu => ({
          degree: edu.coursename || "",
          city1: edu.schoolplace || "",
          school: edu.schoolname || "",
          start: edu.edmonth1 || "",
          edmonth2: edu.edmonth2 || "",
        })) || [],
        employmenthistory: formData.experiences?.map(exp => ({
          company_name: exp.Company || "",
          jobtitle1: exp.role || "",
          jobdescription: exp.companydescription || "",
          jobstart: exp.month1 || "",
          month2: exp.month2 || "",
          jobcity: exp.companyplace || "",
        })) || [],
        other_sections: formData.sectionadd?.map(section => ({
          sectionname: section.sectionname || "",
          sectiondescription: section.sectiondescription || "",
          sectiontitle: section.sectiontitle || "",
        })) || [],
      },
    };
  
    console.log('Payload:', JSON.stringify(payload, null, 2));
  
    try {
      const response = await axios.put(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      });
      console.log('Resume updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating resume:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
    }
  };

  const handleDownload = () => {
    if (paymentCompleted) {
      // Proceed with download action
      // Trigger the download functionality
      cvRef.current?.download();
    } else {
      setShowPaymentPopup(true); // Show payment popup
    }
  };

  const handlePrintWithPaymentCheck = () => {
    if (paymentCompleted) {
      handlePrint(); // Proceed with print action
    } else {
      setShowPaymentPopup(true); // Show payment popup
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-navy-blue text-white p-4 flex justify-between items-center">
        <button 
        onClick={() => setIsPreviewing(false)}
        className='text-black bg-yellow-500 rounded-lg text-xl px-4 py-2 '>
          Back
        </button>
        <div className="flex items-center space-x-4">
          <button onClick={handleDownload} className="bg-black text-navy-blue px-4 py-2 rounded">Download</button>
          <button onClick={handlePrintWithPaymentCheck} className="bg-black text-navy-blue px-4 py-2 rounded">Print</button>
          {/* <button className="bg-black text-navy-blue px-4 py-2 rounded">Email</button> */}
         <Link to={'/userdashboard'} >
         <button className="bg-teal-500 text-white px-4 py-2 rounded">Finish resume</button>
         </Link>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
       
        <div className="w-64 bg-white p-4 overflow-auto">
          <FunctionalityOfCV
            data={formData}
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
            selectedFont={selectedFont}
            setSelectedFont={setSelectedFont}
            textSize={textSize}
            setTextSize={setTextSize}
            sectionSpacing={sectionSpacing}
            setSectionSpacing={setSectionSpacing}
            paragraphSpacing={paragraphSpacing}
            setParagraphSpacing={setParagraphSpacing}
            lineSpacing={lineSpacing}
            setLineSpacing={setLineSpacing}
            setBoxBgColor={setBoxBgColor}
            sections={sections}
        addSection={addSection}
        deleteSection={deleteSection}
          />
        </div>

        {/* Resume preview */}
        <div className="flex-1 overflow-auto p-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            
            <TemplateComponent
              ref={cvRef}
              data={formData}
              selectedTemplate={selectedTemplate}
              selectedFont={selectedFont}
              textSize={textSize}
              sectionSpacing={sectionSpacing}
              paragraphSpacing={paragraphSpacing}
              lineSpacing={lineSpacing}
              boxBgColor={boxBgColor}
              isPreviewScreen={isPreviewScreen}
              predefinedText={predefinedText}
              skillsfromapi={skillsfromapi}
            />
          </div>
        </div>        
      </div>

      {/* Payment popup */}
      {showPaymentPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Payment Required</h2>
            <p className="mb-4">You need to complete the payment before you can download or print the resume.</p>
            <button
              onClick={() => setShowPaymentPopup(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewSection;



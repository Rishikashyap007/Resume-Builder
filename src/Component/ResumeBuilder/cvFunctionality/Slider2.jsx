// import React from 'react';

// const Slider2 = ({ label, min, max, step, value, setValue }) => (
//   <div className="flex flex-col items-center  justify-between  " >
//     <label>{label}</label>
//     <input style={{width:"100%"}}
//       type="range"
//       min={min}
//       max={max}
//       step={step}
//       value={value}
//       onChange={(e) => setValue(parseFloat(e.target.value))}
//     />
//   </div>
// );

// export default Slider2;

import React from 'react';

const Slider2 = ({ label, min, max, step, value, setValue }) => (
  <div className="flex flex-col items-center justify-between w-full mb-4">
    <label className="mb-2 text-lg font-medium">{label}</label>
    <input
      style={{ width: '100px' }}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => setValue(parseFloat(e.target.value))}
      className="slider"
    />
  </div>
);

export default Slider2;



import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const Project = () => {
    const [toggler, setToggler] = useState(false);
    return (
        
            // <button onClick={() => setToggler(!toggler)}>
            //     Toggle Lightbox
            // </button>
            <FsLightbox
                toggler={toggler}
                sources={['Images/project/3.jpg', 'Images/project/4.jpg', 'Images/project/5.jpg'] }
captions={[
<>
<h2>First image title</h2>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
</>,
<h2>Second image title</h2>,
'Third image caption'
]}
  
/>
      
        
    );
};

export default Project;
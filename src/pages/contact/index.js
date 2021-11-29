<<<<<<< HEAD
import { ContactDesktopForm } from '../../components/desktop-view/contactDesktopForm';

import { ContactMobileForm } from '../../components/mobile-view/ContactMobileForm';
=======

import { ContactDesktopForm } from "../../components/desktop-view/contactDesktopForm";

import { ContactMobileForm } from "../../components/mobile-view/ContactMobileForm";

>>>>>>> 856bf54dd573c48e86220641ecf1e69807504d5f

function Contact() {
  // The current width of the viewport
  const width = window.innerWidth;
  // The width below which the mobile view should be rendered
  const breakpoint = 620;
<<<<<<< HEAD
  console.log(width < breakpoint);

  /* If the viewport is more narrow than the breakpoint render the
     mobile component, else render the desktop component */
  return width < breakpoint ? <ContactMobileForm /> : <ContactDesktopForm />;
}

export default Contact;
=======
  
  /* If the viewport is more narrow than the breakpoint render the
     mobile component, else render the desktop component */
  return width < breakpoint ? <ContactMobileForm /> : <ContactDesktopForm />;
  
}

export default Contact;
>>>>>>> 856bf54dd573c48e86220641ecf1e69807504d5f

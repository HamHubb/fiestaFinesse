import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';  
import Home from './Home';      
import Pricing from './Pricing';
import OurCouples from './OurCouples'; 
// import Inquire from './Inquire'; 
// import Contact from './Contact'; 

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="our-couples" element={<OurCouples />} />
        {/* <Route path="inquire" element={<Inquire />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}
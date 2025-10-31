import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SingUp } from "./pages/singUp/SingUp";
import { LogIn } from "./pages/logIn/LogIn";
import { Forgot } from "./pages/forgot/Forgot";
import { AboutUs } from "./pages/aboutUs/AboutUs";
import { NotFound } from "./pages/notFound/NotFound";
import { CatalogHome } from "./pages/catalogHome/CatalogHome";
import { Discounts } from "./pages/discounts/Discounts";
import { PersonalAccount } from "./pages/personalAccount/PersonalAccount";
import { OurWorks } from "./pages/ourWorks/OurWorks";
import { PrivacyPolicy } from "./pages/privacyPolicy/PrivacyPolicy";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about_us" element={<AboutUs />} />
            <Route path="sing_up" element={<SingUp />} />
            <Route path="log_in" element={<LogIn />} />
            <Route path="forgot" element={<Forgot />} />
            <Route path="404" element={<NotFound />} />
            <Route path="catalog_home" element={<CatalogHome />} />
            <Route path="discounts" element={<Discounts />} />
            <Route path="personal_account" element={<PersonalAccount/>} />
            <Route path="our_works" element={<OurWorks />} />
            <Route path="privacy_policy" element={<PrivacyPolicy />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

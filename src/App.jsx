import React from "react";

import api from "./api";

import "./App.css";

import Header from "./components/Header/Header";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Footer from "./components/Footer/Footer";

import Curriculum from "./components/Curriculum/Curriculum";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [informations, setInformations] = React.useState({});
  const [curriculum, setCurriculum] = React.useState({});
  const [portfolio, setPortfolio] = React.useState([]);

  const fatchData = async () => {
    try{
       const informations = await api.get(`/informations/1`);
        setInformations({
        photo: informations.data.photo,
        name: informations.data.name,
        office: informations.data.office
       });
       
       const academicExperience = await api.get(`/experiences?type=academic`);
       const professionalExperience = await api.get(`/experiences?type=professional`);
       
       setCurriculum({
        summary: informations.data.summary,
        academicExperience: academicExperience.data.academicExperience,
        professionalExperience: professionalExperience.data.professionalExperience
       });

       const portfolio = await api.get(`/portfolio`);
       setPortfolio(portfolio.data);
    }
    catch (error){
      console.error('Erro ao buscar dados!');
    }
  };

  React.useEffect(() => {
    fatchData();
  }, []);

    return (
      <>
        <Header informations={informations}></Header>

        <BrowserRouter>
            <NavigationMenu></NavigationMenu>
            <Routes>
                <Route index element={<Curriculum curriculum={curriculum} />} />
                <Route path="portfolio" element={<Portfolio portfolio={portfolio} />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
        
        <Footer></Footer>
      </>
    );
}

export default App;


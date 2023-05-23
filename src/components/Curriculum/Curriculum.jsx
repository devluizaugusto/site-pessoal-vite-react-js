import React from "react";

import "./Curriculum.css";

function Curriculum(props){
    const { summary, academicExperience, professionalExperience } = props.curriculum;

    if(!summary || !academicExperience || !professionalExperience){
        return <p>Carregando...</p>
    }

    return(
        <>
            
            <section>
                <h2>Resumo</h2>
                <p>{summary}</p>
            </section>
            
            <section>
                <h2>Acadêmico</h2>
                    <ul>
                        {academicExperience.map((item, index) => (
                            <li key={index}>
                                <b>({item.startYear} - {item.endYear})</b>{item.title}
                            </li>
                        ))}
                    </ul>                        
            </section>
 
            <section>
                <h2>Profissional</h2>
                    <ul>
                        {professionalExperience.map((item, index) => (
                            <li key={index}>
                                <b>({item.startYear} - {item.endYear})</b>{item.title}
                            </li>
                        ))}
                    </ul>
            </section>

        </>
    )
}

export default Curriculum;
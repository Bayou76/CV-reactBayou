import React from 'react';
import "./Skills.css";
import Skill from "./Skill";
import Intersts from "./interests";

function Skills () {
    return (
        <>
            <div className="skills">
                <h2 className="h2">Compétences</h2>
                <Skill title="HTML" rating="5"/>
                <Skill title="CSS" rating="5"/>
                <Skill title="JAVASCRIPT" rating="3"/>
                <Skill title="PHP" rating="3"/>
                <Skill title="LARAVEL" rating="2"/>
                <Skill title="REACT" rating="3"/>
                <Skill title="BOOSTRAP" rating="4"/>
                <Skill title="PYTHON/C" rating="3"/>
            </div>
            <div className="skills">
                <h2 className="h2">Langue</h2>
                <Skill title="Anglais" rating="3"/>
            </div>
            <Intersts/>
        </>

    );
};

export default Skills;
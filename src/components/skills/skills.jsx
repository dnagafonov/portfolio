import React from 'react';
import ReactSVG from '@assets/react.svg';
import ReduxSVG from '@assets/redux.svg';
import NodeSVG from '@assets/node.svg';
import FigmaSVG from '@assets/figma.svg';

import './skills.scss';
import SkillNotes from './__notes/skills__notes';


const Skills = () => {
    const technologies = [
        { name: "React", path: ReactSVG, stars: 4 },
        { name: "Redux", path: ReduxSVG, stars: 4 },
        { name: "NodeJS", path: NodeSVG, stars: 3 },
        { name: "Figma", path: FigmaSVG, stars: 3 },
    ];
    return(
        <article className="skills">
            <div className="wrapper">
                <h2 className="h2">Skills</h2>
                <SkillNotes notes={technologies} />
            </div>
        </article>
    )
}

export default Skills;
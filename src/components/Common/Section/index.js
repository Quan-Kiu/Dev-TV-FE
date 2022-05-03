import React from 'react';
import { SectionWrapper } from './Section.style';

const Section = ({ title, desc, children, className }) => {
    return (
        <SectionWrapper className={className}>
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
            <div className="content">{children}</div>
        </SectionWrapper>
    );
};

export default Section;

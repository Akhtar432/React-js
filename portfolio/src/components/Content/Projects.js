import React from 'react'
import ProjectCard from './ProjectCard'
function Projects() {
  return (
    <div id="Projects" className="px-10 text-white ">
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Blogging Website"
          main="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
          title="Youtue Clone"
          main="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        />
        <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        />
      </div>
    </div>
  )
}

export default Projects

import React from 'react'
import ProjectCard from './ProjectCard'
import Todolist_img from './Assets/todolistproject.png'
import ApiStore_img from './Assets/apistoreproject.png'
import TextUtils_img from './Assets/textUtilsimg.png'

function Projects() {
  return (
    <div id="Projects" className="w-full px-10 text-white mt-10 ">
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          image={Todolist_img}
          title="Todo Lists App"
          main="Manage your tasks efficiently with my Todo Lists App, built using React and TailwindCSS. This app allows users to create, update, and delete tasks seamlessly, helping to stay organized and productive throughout the day and Store data in Local system."
          href={"https://github.com/Akhtar432/React-js/tree/main/redux-toolkit-todo"}
        />
        <ProjectCard
          image={ApiStore_img}
          title="Api Store App"
          main="Api store app simulates real-world data interactions, allowing users to create, read, update, and delete items via a mock RESTful API. It demonstrates CRUD operations with simulated responses, ideal for front-end developers to practice integration and test UI components without connecting to a live backend."
          href={"https://github.com/Akhtar432/React-js/tree/main/fake-api"}
          
        />
        <ProjectCard
          image={TextUtils_img}
          title="TextUtils App"
          main="The TextUtils App allows users to manipulate and transform text with features like uppercase, lowercase, word count, and character count, enhancing productivity and simplifying text formatting tasks. Ideal for writers and professionals needing quick text editing capabilities."
          href={"https://github.com/Akhtar432/text-utiles-app"}
        />
      </div>
    </div>
  )
}

export default Projects

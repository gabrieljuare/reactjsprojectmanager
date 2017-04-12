import React, { Component } from 'react';
import ProjectItem from "../Components/ProjectItem"
class Projects extends Component {

  render() {
    let projectItems;
    if(this.props.projects){
        projectItems = this.props.projects.map(p =>{
            return (
                <ProjectItem key={p.title} project={p}/>
            );
        });
    }


    return (
      <div className="Projects">
        My Projects
        {projectItems}
      </div>
    );
  }
}

export default Projects;

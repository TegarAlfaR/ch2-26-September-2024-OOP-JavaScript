class Tooltip{

}

class ProjectItem{
    constructor (id, updateProjectListFunction){
        this.id = id;
        this.updateProjectListFunction = updateProjectListFunction;
        this.connectSwitchButton();
        this.connectMoreInfoButton();
    }

    connectMoreInfoButton(){

    }
    connectSwitchButton(){
        const projectItemElement = document.getElementById(this.id);
        const switchButton = projectItemElement.querySelector('button:last-of-type');
        switchButton.addEventListener("click", this.updateProjectListFunction);
    }
}

class ProjectList{
    projects = [];
    constructor(type){
        this.type = type;

        // EXAMPLE: #active-project li
        const projectItems = document.querySelectorAll(`#${type}-project li`); 
        for(const projectItem of projectItems){
            console.log(projectItem);
            this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this)));
        }
    }

    setswicthHandlerFunction(swicthHandlerFunction){
        this.switchHandler = swicthHandlerFunction;
    }

    addProject(){
        console.log(this);
    }

    switchProject(projectId){
        this.addProject = this.projects.find(i => i.id === projectId);
        this.swicthHandlerFunction(
            this.projects.find((i) => i.id === projectId)
            );
    }
}

class App{
    static init(){
        const activeProjectList = new ProjectList("active");
        const finishProjectList = new ProjectList("finished");
        activeProjectList.setswicthHandlerFunction(finishProjectList.addProject.bind(finishProjectList));
    }
}

App.init();

// ProjectList("pass parameter 1");
// new ProjectList("");
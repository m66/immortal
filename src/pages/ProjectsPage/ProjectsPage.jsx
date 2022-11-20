import {projects} from '../../constants/const'
import ProjectItem from './ProjectItem/ProjectItem';

import styles from './projectsPage.module.scss';

function ProjectsPage() {
    return (
        <div className={styles.projects}>
            <div className={styles.projectsBody}>
                {
                    projects.map(piData => <ProjectItem key={piData.id} piData={piData}/>)
                }
            </div>
        </div>
    );
}

export default ProjectsPage;
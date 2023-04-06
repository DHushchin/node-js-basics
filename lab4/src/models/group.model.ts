// import uiid
import { v4 as uuidv4 } from 'uuid';

class Group {
    id: string;
    name: string;
    faculty: string;

    constructor(name: string, faculty: string) {
        this.id = uuidv4();
        this.name = name;
        this.faculty = faculty;
    }
}

export default Group;

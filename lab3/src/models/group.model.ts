class Group {
    id: string;
    name: string;

    constructor(id: string, name: string, permissions: string[]) {
        this.id = id;
        this.name = name;
    }
}

export default Group;

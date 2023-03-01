class Group {
    id: string;
    name: string;
    permissions: string[];

    constructor(id: string, name: string, permissions: string[]) {
        this.id = id;
        this.name = name;
        this.permissions = permissions;
    }
}

export default Group;

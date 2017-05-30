
export interface Employee {
    id: string,
    name: string,
    empid: string,
    role: string,
    phone: string,
    email: string,
    extension: string,
    cubicle: string,

    team: {
        name: string,
        process: string,
        coach: string,
        manager: string
    }
}
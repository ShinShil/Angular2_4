export class Logger {
    
    static default = (msg: string) => {
        return (data: any) => {
            console.log(msg);
            console.log(data);
        }
    }
}
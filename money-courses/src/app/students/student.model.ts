export class Student {
    constructor(
        public name: string,
        public surname: string,
        public email: string,
        public phone: string,
        public $key: string,
        public adv: [
            {
                name: string,
                value: string
            }
        ]
    ) { }
}

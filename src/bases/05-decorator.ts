class NewPokemon {
    constructor (
        public readonly id: number, 
        public readonly name: string,
    ){}

    scream(){
        console.log(`No Quiero Hablar`);  
    }
    speak(){
        console.log(`No quiero Hablar!!!`);  
    }
}

const MyDecorator =()=>{
    return (target: Function)=>{
        return NewPokemon
        
    }

}

@MyDecorator()

export class Pokemon{
    constructor(
        public readonly id: number, 
        public readonly name: string,
        // public imgUrl: string
        ) {}
    
        scream(){
            console.log(`${this.name.toUpperCase()}!!!`);  
        }
        speak(){
            console.log(`${this.name}, ${this.name}!!!`);  
        }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();
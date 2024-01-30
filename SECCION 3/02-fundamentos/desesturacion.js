const Deadpool={
    nombre: 'Wade',
    apellido: 'Winson',
    poder:"Regeneración",
    edad:50,
    getNombre:function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
function imprimeHeroe ({nombre,apellido,poder,edad = 0}){
    // const {nombre,apellido,poder,edad = 0 } = heroe
    console.log(nombre,apellido,poder,edad)
}

// imprimeHeroe(Deadpool)

const heroes = ['Deadpool, Superman', 'Batman']

const [heroe1,heroe2,heroe3] = heroes
// const [,,heroe3] = heroes
console.log(heroe1,heroe2,heroe3)

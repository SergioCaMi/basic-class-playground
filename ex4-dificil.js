class LimitedArray {
    
    constructor(limit) {
        this.element = [];
        this.limit = limit;
    }

    add(elem) {
        if (this.element.length < this.limit && !this.element.includes(elem)) {
                    console.log('añadido: ', elem)

            this.element.push(elem);
        }
    }

    values() {
        return this.element; 
    }

    size() {
        return this.element.length;
    }

    removeElement(elem) {
        const index = this.element.indexOf(elem);
        if (index !== -1) {
            this.element.splice(index, 1);
            console.log('eliminado: ', elem)
        }
                

    }
}


const l = new LimitedArray(3);
console.log(l.size()); // 0
l.add("a");
l.add("b");
l.add("c");
l.add("d"); // Ignorado
console.log(l.size()); // 3
console.log(l.values()); // ["a", "b", "c"]
l.removeElement("b");
console.log(l.values()); // ["a", "c"]
l.add("gato");
console.log(l.values()); // ["a", "c", "gato"]
type genderType = 'boy' | 'girl'

let count = {
    nums: 0,
    // images = []
}

class Human{
    name: string;
    gender: genderType;
    id: number;

    constructor(name:string, gender:genderType){
        count.nums += 1;

        this.name = name;
        this.gender = gender;
        this.id = count.nums;
        
        let mainR = document.getElementById('main-row');
        
        let row = document.createElement('div');
        row.classList.add('col-lg-3');
        row.innerHTML= 'a';

        switch (this.gender) {

            case 'boy':
                row.innerHTML = `<div class="char-boy">` +
                    `<img class = "img-boy" src="static/images/boy-walk.png" alt="", id = "${String(count.nums)}"  >` +
                    `</div>`
                
                mainR?.appendChild(row)
                break;
     

            case 'girl':
                // let row2 = document.createElement('div');
                // row2.classList.add('col-lg-3')
                row.innerHTML = `<div class="char-girl">` +
                    `<img class = "img-girl" src="static/images/girl-walk.png" alt="" id = ${count.nums}>` +
                    `</div>`  
                
                
                mainR?.appendChild(row)
                break;
        
            default:
                break;
        }


        row.onclick = () => {
            console.log(this.id,this.gender)
            ChangeMove(this.gender,String(this.id));
        }


    }
}

class Boys extends Human{
    
    constructor(name:string){
        super(name, 'boy')
    }
}

class Girls extends Human{

    constructor(name:string){
        super(name, 'girl')
    }
}

let ChangeMove: (gend:string, id:string)=> void = function(gend,id){
    let tempElement = document.getElementById(id)
    switch (gend) {
        case 'boy':
            tempElement?.setAttribute('src','static/images/boy-jump.png')
            tempElement?.classList.remove('img-boy')
            tempElement?.classList.add('img-boy-jump')
            setTimeout(() => {
                tempElement?.setAttribute('src', 'static/images/boy-walk.png')
                tempElement?.classList.remove('img-boy-jump')
                tempElement?.classList.add('img-boy')
            }, 900)
            break;


        case 'girl':
            tempElement?.setAttribute('src','static/images/girl-jump.png')
            tempElement?.classList.remove('img-girl')
            tempElement?.classList.add('img-girl-jump')
            setTimeout(() => {
                tempElement?.setAttribute('src', 'static/images/girl-walk.png')
                tempElement?.classList.remove('img-girl-jump')
                tempElement?.classList.add('img-girl')
            }, 900)
            
            break;
    
        default:
            break;
    }
}

document.querySelector('button')?.addEventListener('click' ,()=> {
    let sel = <HTMLSelectElement>document.querySelector('#select-gender')
    console.log(sel.value);

    switch (sel.value) {
        case 'boy':
            new Boys('')
            break;
        case 'girl':
            new Girls('')
            break;
    
        default:
            break;
    }
})

new Boys('');
new Girls(' ');



// document.querySelectorAll('button').forEach(v=>{
//     v.addEventListener('click', (e) =>{
//         console.log((e))
//     })
// })
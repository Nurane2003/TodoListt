let input=document.querySelector('#toDoInput')
let button=document.querySelector('#addButton')
let list=document.querySelector('#toDoList')


let arr=[]

button.addEventListener('click',function() {
    let soz=input.value
    // console.log(soz);
    arr.push(soz)
    list.innerHTML=''
    for(let i=0;i<arr.length; i++){
        let li=document.createElement('li')
        li.innerHTML=arr[i]
        list.appendChild(li)


        let trashIcon=document.createElement("i");
        trashIcon.classList.add("fa-solid", "fa-trash-can");
        li.appendChild(trashIcon)
        trashIcon.addEventListener('click',function(){
            arr.splice(i,1);
            list.removeChild(li);
        })
        

        list.appendChild(li);
    }
})
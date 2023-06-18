const scr = document.querySelector('#scr')
const scr2 = document.querySelector('#scr2')

const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')

const inp = document.querySelector('#inp')
const inp2 = document.querySelector('#inp2')





btn.addEventListener('click', () => {
  let res1 = inp.value

  if (inp.value != '') {
    const newDivBl = document.createElement("div")
    const newDiv = document.createElement("div")
    newDivBl.id = 'newDivBl'
    newDiv.id = 'newDiv'
    scr.appendChild(newDivBl)
    newDivBl.appendChild(newDiv)
    newDiv.innerHTML = res1
    inp.value = ''

    setTimeout(() => {
      const newDivBl1 = document.createElement("div")
      const newDiv1 = document.createElement("div")
      newDiv1.id = 'newDiv1'
      newDivBl1.id = 'newDivBl1'
      scr2.appendChild(newDivBl1)
      newDivBl1.appendChild(newDiv1)
      newDiv1.innerHTML = res1
    }, 200);
  }
})

btn2.addEventListener('click', () => {
  let res2 = inp2.value

  if (inp2.value != '') {
    const newDivBl2 = document.createElement("div")
    const newDiv2 = document.createElement("div")
    newDivBl2.id = 'newDivBl2'
    newDiv2.id = 'newDiv2'
    scr2.appendChild(newDivBl2)
    newDivBl2.appendChild(newDiv2)
    newDiv2.innerHTML = res2
    inp2.value = ''
    
    setTimeout(() => {
      const newDivBl3 = document.createElement("div")
      const newDiv3 = document.createElement("div")
      newDiv3.id = 'newDiv3'
      newDivBl3.id = 'newDivBl3'
      scr.appendChild(newDivBl3)
      newDivBl3.appendChild(newDiv3)
      newDiv3.innerHTML = res2
    }, 200);
  }
})
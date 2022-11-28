const blocks = document.querySelectorAll('.wrapper')
const unreadNum = document.querySelector('.unreadNum')
const readBtn = document.getElementById('readAll')

let currentUnread = 3;

blocks.forEach( x=>{
  
  const symbol = x.querySelector('.symbol')

  readBtn.addEventListener('click', ()=>{
    if (x.classList.contains('unread')) {
      x.classList.remove('unread');
      symbol.textContent = '';
      currentUnread = 0
      unreadNum.textContent = currentUnread;
    }
  })

  const statusP = x.querySelector('#statusP')

  x.addEventListener('click', ()=>{
    if (x.classList.contains('unread')) {
      statusP.textContent = 'Mark as read'
    } else {
      statusP.textContent = 'Mark as unread'
    }
  })
  
  x.addEventListener('mouseleave', ()=>{
    
    if (main.classList.contains('show')){
      main.classList.toggle('show')
    }
    mark.style.display = 'none';
  })
  
  const main = x.querySelector('.main')
  const mark = x.querySelector('.mark')
  const btn = x.querySelector('#ellipsis');
  
  btn.addEventListener('click', ()=>{
    
    main.classList.toggle('show')
    
    if (main.classList.contains('show')){
      mark.style.display = "inline-block"
    } else {
      mark.style.display = 'none';
    }
  })
  
  mark.addEventListener('click', ()=>{
    if (x.classList.contains('unread')) {
      x.classList.remove('unread')
      symbol.textContent = '';
      currentUnread--
      unreadNum.textContent = currentUnread;
    } else {
      x.classList.add('unread')
      symbol.textContent = '•';
      currentUnread++
      unreadNum.textContent = currentUnread;
    }
  })
})
 let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;
    

    
    const heartCountEl = document.getElementById('heartCount');
    const coinCountEl = document.getElementById('coinCount');
    const copyCountEl = document.getElementById('copyCount');
    const historyListEl = document.getElementById('historyList');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    const navHeartBtn = document.getElementById('navHeartBtn');
    

    
    function updateHeart() { heartCountEl.textContent = heartCount; }
    function updateCoins() { coinCountEl.textContent = coinCount; }
    function updateCopies() { copyCountEl.textContent = copyCount; }


    
    document.querySelectorAll('.card-heart-btn').forEach(btn=>{
      btn.addEventListener('click', function(e){
        heartCount++;
        updateHeart();

        navHeartBtn.addEventListener("click", () => {
      alert("আপনি হার্টে ক্লিক করেছেন❤️");
    });

        
        const burst = document.createElement('span');
        burst.className = 'heart-burst';
        burst.textContent = '❤️';
        this.appendChild(burst);
        setTimeout(()=> burst.remove(),600);
      });
    });

    
    document.querySelectorAll('.copy-btn').forEach(btn=>{
      btn.addEventListener('click', async function(){
        const card = this.closest('article');
        const number = card.querySelector('.service-number').textContent.trim();
        try {
          await navigator.clipboard.writeText(number);
          
          const original = this.innerHTML;
          this.innerHTML = 'Copied';
          this.disabled = true;
          copyCount++;
          updateCopies();
          
          const li = document.createElement('li');
          li.className = 'bg-gray-100 p-3 rounded-lg text-sm';
          const now = new Date();
          li.textContent = `Copied: ${card.querySelector('h3').textContent.trim()} - ${number} (${now.toLocaleString()})`;
          historyListEl.prepend(li);
          setTimeout(()=> {
            this.innerHTML = original;
            this.disabled = false;
          },1200);
        } catch(err){
          alert('Copy failed: ' + err);
        }
      });
    });

    
    document.querySelectorAll('.call-btn').forEach(btn=>{
      btn.addEventListener('click', function(){
        const card = this.closest('article');
        const service = card.querySelector('h3').textContent.trim();
        const number = card.querySelector('.service-number').textContent.trim();

        if (coinCount < 20) {
          alert('কয়েন পর্যাপ্ত নেই — কল করতে হবে ২০ কয়েন।');
          return;
        }

        
        coinCount -= 20;
        updateCoins();

        
        alert(`Calling ${service}: ${number}`);

        
        const now = new Date();
        const li = document.createElement('li');
        li.className = 'bg-gray-100 p-3 rounded-lg text-sm';
        li.textContent = `${service} - ${number} (${now.toLocaleString()})`;
        historyListEl.prepend(li);

        
      });
    });

    
    clearHistoryBtn.addEventListener('click', ()=> {
      historyListEl.innerHTML = '';
    });

    
    updateHeart();
    updateCoins();
    updateCopies();
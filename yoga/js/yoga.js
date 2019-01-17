window.addEventListener('DOMContentLoaded', function() { 

    'use_strict';
    
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');  
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Таймер

    let deadLine = '2019-02-01';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            // hours = Math.floor((t/1000/60/60) % 24),
            // days = Math.floor((t/1000*60*60*24));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock,1000);
        
        function updateClock() {
            let t = getTimeRemaining(endtime);
            for(let key in t) {
                if(key != 'total'){
                    if (t[key] < 0){
                        t[key] = '00';
                    } else if(t[key] < 10) {
                        t[key] = '0' + t[key];
                    }
                }
            };
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }

        }


    }

    setClock('timer', deadLine);

    // Modal - модальное окно

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelectorAll('.description-btn');

    
    more.addEventListener('click', moreKnow);
    descriptionBtn.forEach(function(value){
        value.addEventListener('click', moreKnow);
    });
    

    function moreKnow(){
        overlay.style.display = 'block';
        this.classList.add('more-splas');
        document.body.style.overflow = 'hidden';
    }

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splas');
        document.body.style.overflow = '';
    });
});
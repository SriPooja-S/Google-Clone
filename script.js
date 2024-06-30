let query=document.querySelector('.query');
        let search_button=document.querySelector('.searchBtn');

        search_button.onclick = function() {
            let url= 'https://www.google.com/search?q='+query.value;
            window.open(url);
        }
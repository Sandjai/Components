(function() {
    'use strict';


    class App { 
        constructor({el}) {

            let menu = new Menu({
                el: el.querySelector('.js-menu'),
                data: {},
                
            });

            menu.setData(
              {
              title: 'SINGLE PAGE APP',
              items: [
                {
              anchor: 'Яндекс',
              href: 'yandex.ru'              
            },          
            {
              anchor: 'Гугл',
              href: 'google.ru'              
            },          
            {
              anchor: 'Рамблер',
              href: 'rambler.ru'              
            }]
          }
          );

           /* this.menu.setData({
                title: 'Сайты',
                items: [
                    {title: 'Первый'},
                    {
                      title: 'Второй',
                      items: [
                        {title: 'Второй-первый'},  
                        {
                          title: 'Второй-второй',
                          items: [
                            {title: 'Второй-второй-1'},
                            {title: 'Второй-второй-2'},
                            {title: 'Второй-второй-3'}
                          ]
                        },  
                      ]
                    },
                    {title: 'Третий'},
                    {title: 'Четвертый'}
                  ]
            });*/



            let form = new Form({
              el: el.querySelector('.js-form'),
              data: {}    

          });

          form.addEventListener('save', (event) => {
            
             /* menu._addItem({
                href: form.getField('href').value,
                anchor: form.getField('anchor').value

              }, el.querySelector('.js-menu-list')); */
              console.log((event.detail);
              menu._addItem(event.detail, el.querySelector('.js-menu-list'));

            

          });

           

        }
    }


    

    // export
    window.App = App;
    


})();
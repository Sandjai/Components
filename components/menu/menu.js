(function () {
    'use strict';

    const tmpls = window.menuTmpl;

    /**
     * @typedef {Item} Тип элемента меню
     * @prop {string} href URL
     * @prop {string} anchor
     */

    class Menu {
        constructor({el, data}) {
            this.$el = el;
            this.data = data;
            
            this.$title       = el.querySelector('.js-title');
            this.$menuList    = el.querySelector('.js-menu-list');
          
          this.initEvents();
        }

        setData (data) {
            this.data = data;
            this.render();
        }

        render () {

            this.$title.innerText = this.data.title;
            this.renderItems(this.data.items, this.$menuList);
        }
        

        renderItems(items, container) {
          items.forEach(item => {
            this._addItem(item, container); // пусть _addItem работает только с одним элментом
          });
        }
      
        initEvents() {
          /*this.$title.addEventListener('click', this.toggleDisplayMenu.bind(this));*/
          this.$menuList.addEventListener('click', this.removeItem.bind(this));
          
        }
        
        /*toggleDisplayMenu() {
          this.$el.classList.toggle('_open');
        }*/
        
        removeItem(ev) {
          let currentRemoveIcon = ev.target,
              currentItem,
              currentList;
          
          if (currentRemoveIcon.tagName == 'SUP') {
            // для поддержки в IE11-
            currentItem = currentRemoveIcon.closest('li');
            currentList = currentItem.closest('ul');
            currentList.removeChild(currentItem);
          }
        }

        
        _addItem(item, container) {
          let ulEl = document.createElement('ul'),
              liEl = document.createElement('li'),
              spanEl = document.createElement('span'),
              spanE2 = document.createElement('span'),
              removeIcon = document.createElement('sup');
              
          spanEl.textContent = item.anchor;
          spanE2.textContent = item.href;
          removeIcon.textContent = ' x';
          
          liEl.append(spanEl, " ", spanE2, removeIcon);
          
          if (item.items) { // а здесь нужно рекурсивно вызвать renderItems,
            liEl.append(ulEl);
            this.renderItems(item.items, ulEl); // указываем, что рендерим и куда
          } 
      
          container.append(liEl);
        }
      }
    
    //export
    window.Menu = Menu;

})();
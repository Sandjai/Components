(function () {
    'use strict';

    class Form {
        constructor ({el, data, onSubmit}) {
            this.el = el;
            this.data = data;
            this.onSubmit = onSubmit;

            this._initEvents();
            this.render();
        }

        /*Создаем HTML*/
        render() {
            
            this.el.innerHTML = `
            <form class="form pure-form" name="collectLinks">
            <fieldset>
                <ul>
                    
                    <li>
                        <label for="siteLink">Адрес сайта</label>
                        <input type="url" id="siteLink" class="form__input" name="href" required="required" placeholder="url"/>
                    </li>
                    <li>
                        <label for="siteName">Название сайта</label>
                        <input type="text" id="siteName" class="form__input" name="anchor" required="required" placeholder="anchor"/>
                    </li>
                    <li>
                        <button class="btn-sbm form__btn pure-button" type="submit">Отправить</button>
                    </li>
                </ul>

            </fieldset>

        </form>`;
            
        }

        /**
        * Получение элемента формы по имени
        * @param  {string} name
        * @return {HTMLElement}
        */

        getField(name) {
            return this.el.querySelector(`[name="${name}"]`);
        }

        /**
        * Развешиваем события
        */

        _initEvents() {            
            
            this.el.addEventListener("submit", this._onSubmit.bind(this));            
        }

        /**
        * Отправка данных формы
        * @param {Event} event
        * @private
        */

        _onSubmit(event) {
            event.preventDefault();
            

            this.trigger('save', {
                href: this.el.querySelector('input[name="href"]').value,
                anchor: this.el.querySelector('input[name="anchor"]').value
            });
            event.target.reset();

            

        }
        /**
         * 
         * @param {string} eventName 
         * @param {function} callback 
         */

        addEventListener(eventName, callback) {
            this.el.addEventListener(eventName, callback);
        }

        /**
         * Генерация события на элементе
         * @param {string} eventName
         * @param {*} eventData
         */

        trigger(eventName, eventData) {
            let event = new CustomEvent(eventName, {
            detail: eventData});
            this.el.dispatchEvent(event);
        }

           


    }

    //export
    window.Form = Form;
    
})();



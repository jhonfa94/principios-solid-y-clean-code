(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) { }
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {

        }
    }

    class InputEvents {

        constructor() { }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }


    //? Idea para la nueva clase InputElement
    interface InputElementProps {
        id: string;
        value: string;
        placeholder: string;
    }

    class InputElement {

        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;


        constructor(
            { id, value, placeholder }: InputElementProps
        ) {
            this.html = new HtmlElement(id, 'input');
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }

    }

    const nameField = new InputElement(
        {
            value: 'Fernando',
            id: 'txtName',
            placeholder: 'Nombre'
        }
    );

    console.log({ nameField });

})()
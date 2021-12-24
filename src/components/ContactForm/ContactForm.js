import { useState } from "react";
import s from './ContactForm.module.css';

function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (event) => {
        const nameClick = event.currentTarget.name;
        if (nameClick === 'name') {           
            setName(event.currentTarget.value);
        };

        if (nameClick === 'number') {            
            setNumber(event.currentTarget.value);
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({name, number});

        resetForm();
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={s.form}>
            <label className={s.form__label}>
                Имя <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={handleChange}
                    className={s.form__input}
                    required
                />
            </label>

            <label className={s.form__label}>
                Телефон <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={handleChange}
                    className={s.form__input}
                    required
                />
            </label>

            <button type="submit" className={s.form__button}>Add contact</button>
        </form>
    )
}
export default ContactForm;
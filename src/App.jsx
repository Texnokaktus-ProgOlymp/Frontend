import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputMask from 'react-input-mask';
const Input = (props) => (
    <InputMask alwaysShowMask={false} className="input" placeholder='xxx-xxx-xxx xx' mask="999-999-999 99" value={props.value} onChange={props.onChange}/>
  );
function App() {
    const [showForm, setShowForm] = useState(false);
    if (showForm) {
        return <div className='flex items-center flex-col'>
        <h2 className='text-xl font-bold text-center'>Заголовок формы</h2>

        <div class="collapse collapse-arrow bg-base-100 border border-base-300 w-4/5 shrink-0 shadow-2xl">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title">Информация об участнике</div>
                        <fieldset className="fieldset collapse-content">
                            <label className="fieldset-label">Фамилия, имя, отчество участника</label>
                            <input type="text" className="input"/>
                            <label className='fieldset-label'>Дата рождения</label>
                            <input type="date" className="input"/>
                            <label className="fieldset-label">Снилс</label>
                            <Input className="input"/>
                            <label className="fieldset-label">Класс обучения</label>
                            <select className="select select-primary w-full max-w-xs">
                                <option>8 класс</option>
                                <option>9 класс</option>
                                <option>10 класс</option>
                                <option>11 класс</option>
                            </select>
                        </fieldset>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
            </div>


            <button className="btn btn-primary " onClick={() => setShowForm(false)}>Клик сюда</button>
        </div>
    }
    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Добро пожаловать</h1>
                <p className="py-6">
                    Для прохождение регистрации авторизируйтесь
                </p>
                <button className="btn btn-primary" onClick={() => setShowForm(true)}>Клик сюда</button>
                </div>
            </div>
        </div>
    )
}

export default App

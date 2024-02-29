// import React from 'react';
// import styles from './BuyList.module.css'
// import styles_g from '../../components/styles/Global.module.css'
import NavBar from '../../components/navBar/NavBar';

// export default function BuyList() {
//     return (
//         <div>
//             <NavBar/>
//             <h1>This is BuyList component</h1>
//         </div>
//     );
// };


import React, { Component } from 'react';

class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                { id: 1, title: 'Заметка 1', content: 'Упаковать подарки' },
                { id: 2, title: 'Заметка 2', content: 'Купить украшения' },
            ],
            formValues: { id: null, title: '', content: '' },
            isEditing: false,
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            formValues: { ...this.state.formValues, [name]: value },
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { formValues, notes, isEditing } = this.state;

        if (isEditing) {
            const updatedNotes = notes.map((note) =>
                note.id === formValues.id ? { ...note, ...formValues } : note
            );
            this.setState({ notes: updatedNotes, isEditing: false });
        } else {
            const newNote = { id: notes.length + 1, ...formValues };
            this.setState((prevState) => ({
                notes: [...prevState.notes, newNote],
            }));
        }

        this.setState({
            formValues: { id: null, title: '', content: '' },
        });
    };

    handleEdit = (note) => {
        this.setState({
            formValues: { ...note },
            isEditing: true,
        });
    };

    handleDelete = (id) => {
        const updatedNotes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes: updatedNotes, isEditing: false });
    };

    render() {
        const { notes, formValues, isEditing } = this.state;

        return (
            <>
                <NavBar />
                <div className="container mt-5">
                    <h1>Заметки</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Название</label>
                            <input type="text" className="form-control" name="title" value={formValues.title} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Описание</label>
                            <textarea className="form-control" name="content" rows="3" value={formValues.content} onChange={this.handleInputChange}></textarea>
                        </div>
                        <button type="submit" className="btn btn-sucess">
                            {isEditing ? 'Сохранить' : 'Создать'}
                        </button>
                    </form>

                    <table className="table table-bordered table-hover mt-3">
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Описание</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notes.map((note) => (
                                <tr key={note.id}>
                                    <td>{note.title}</td>
                                    <td>{note.content}</td>
                                    <td>
                                        <button className="btn btn-light mr-2" onClick={() => this.handleEdit(note)}>
                                            Редактировать
                                        </button>
                                        <button className="btn btn-danger" onClick={() => this.handleDelete(note.id)}>
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default NotesApp;

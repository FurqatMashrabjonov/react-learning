import React, {Component} from 'react';

class AppClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {
                    id: 1,
                    title: 'Reading Book',
                    isCompleted: false
                },
                {
                    id: 2,
                    title: 'Coding',
                    isCompleted: false
                },
                {
                    id: 3,
                    title: 'Do Something',
                    isCompleted: false
                },
                {
                    id: 4,
                    title: 'Learn React',
                    isCompleted: false
                },

            ]
        }
    }

    render() {
        return (
            <div className="App">
                <section className="vh-100 gradient-custom-2">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-12 col-xl-10">

                                <div className="card mask-custom">
                                    <div
                                        className="card-header text-center d-flex justify-content-center align-items-center">
                                        <input
                                            type="text"
                                            className="form-control w-50"
                                        />
                                        <button className="btn btn-primary m-2">Add</button>
                                    </div>
                                    <div className="card-body p-4 text-white">
                                        <table className="table text-white mb-0">
                                            <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Done</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.state.todos.map((todo, index) => (
                                                <tr key={index} className="fw-normal">
                                                    <th>{todo.id}</th>
                                                    <td className="align-middle">
                                                        <span>{todo.title}</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <h6 className="mb-0"><span className={`badge bg-${todo.isCompleted ? 'success' : 'danger'}`} >{todo.isCompleted ? 'Done' : 'Todo'}</span></h6>

                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AppClass;
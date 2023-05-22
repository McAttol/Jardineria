import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../components/Header';
import Login from '../components/Login';
import Footer from '../components/Footer';
import Calendar from '../components/Calendar';
import TaskListByDate from '../components/TaskListByDate';
import TaskDetail from '../components/TaskDetail';
import TasckList from '../components/TaskList';

function Router() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/home' element={<Calendar/>}></Route>
                <Route path='/tasks' element={<TasckList/>}></Route>
                <Route path='/tasks/date/:date' element={<TaskListByDate/>}></Route>
                <Route path='/tasks/:id' element={<TaskDetail/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router;
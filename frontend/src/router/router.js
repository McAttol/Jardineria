import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../components/Header';
import Login from '../components/Login';
import Footer from '../components/Footer';
import Calendar from '../components/Calendar';
import TaskList from '../components/TaskList';
import TaskDetail from '../components/TaskDetail';

function Router() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/home' element={<Calendar/>}></Route>
                <Route path='/tasks/date/:date' element={<TaskList/>}></Route>
                <Route path='/tasks/:id' element={<TaskDetail/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router;
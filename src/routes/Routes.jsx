import { Route, Routes} from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'

import Home from '../containers/Home'
import Movies from '../containers/Home/Movies'
import Series from '../containers/Home/series'


function Router(){
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/series" element={<Series />} />
            </Route>
        </Routes>
    )
}
export default Router;
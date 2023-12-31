import { Route, Routes} from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'

import Home from '../containers/Home'
import Movies from '../containers/Movies'

import Series from '../containers/series'


function Router(){
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/series" element={<Series />} />
            </Route>
        </Routes>
         </Routes>
    )
}
export default Router;

import React from 'react';
import ReactDOM from 'react-dom';

import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

ReactDOM.render(<Pai nome='Paulo' sobrenome='William'>
                    <Filho nome='Pedro'/>
                    <Filho nome='Mia'/>
                    <Filho nome='Carla'/>
                    <Filho nome='Hidaila'/>
                </Pai>
, document.getElementById('root'))
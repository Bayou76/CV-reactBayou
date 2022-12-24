import React from 'react';
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball"
import CodeIcon from "@material-ui/icons/Code"
import ScoreIcon from "@material-ui/icons/ScoreOutlined"
import SportsEsportsIcon from "@material-ui/icons/SportsEsports"
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary"
function interests() {
  return (
    <div className='skills'>
        <h2 className='h2'>Centres d'intérêts</h2>
        <ul>
            <li>Informatique</li>
            <li>Veille technologique</li>
            <li>Participer à la vie de <br/> l'association sportive de mon club</li>
            <li>BasketBall</li>
            <li>Coach des enfants de 6-13ans</li>
        </ul>
        <div className="interests">
        <SportsEsportsIcon style={{ fontSize: 30 }} />
        <LocalLibraryIcon style={{ fontSize: 30 }} />
        <CodeIcon style={{ fontSize: 30 }} />
        <SportsBasketballIcon style={{ fontSize: 30 }} />
        <ScoreIcon style={{ fontSize: 30 }} />
      </div>
    </div>
  )
}

export default interests
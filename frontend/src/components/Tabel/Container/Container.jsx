import React from 'react'
import "./Container.css"
//components
import Tabel from '../Tabel/Tabel'
import Title from '../Title/Title'
import Subtitle from '../Title/Subtitle/Subtitle'

const Container = (props) => {
    return (
        <div className="container">
            <Title title="Panou de administrare" />
            <Subtitle title="Fluidizeaza-ti activitatile si administreaza-ti proiectele mai usor"/>
            <Tabel/>
        </div>
    )
}

export default Container

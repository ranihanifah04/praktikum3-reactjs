import React from 'react'
import Media from './Components/Media'; 

class Beranda extends React.Component{
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <Media image="rani.jpeg">  
                        <h1 className="display-4">Perkenalan Diri</h1>
                        <p className="lead">Assalamualaikum, Halo! Perkenalkan, Saya Rani Hanifah Putri Ma'arif dari Kelas XI RPL 5.
                                            Disini, Saya akan memperkenalkan diri saya melalui web Praktikum 3. Terimakasih. Maaf
                                            apabila ada kesalahan dan kekurangan ya Buuu. Baru belajar soalnya hihii.</p>
                        </Media>     
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Beranda;


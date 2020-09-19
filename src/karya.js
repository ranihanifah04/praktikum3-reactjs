import React from 'react'
import Media from './Components/Media';

class karya extends React.Component{
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <Media image="poster.png">  
                        <h1 className="display-4">Karya Saya</h1>
                        <p className="lead">Berikut ini adalah salah satu karya saya. Saya bisa membuat poster, dan ada beberapa
                                            teman saya dari MTs yang memesan poster ke saya. Dengan karya tersebut, saya bisa menambahkan
                                            uang jajan hasil usaha sendiri saat pandemi ini. Selain membuat poster, saya juga bisa membuat ilustrator
                                            sebuah objek, digital art, dan masih banyak lagi. Karya saya juga ada berupa cerita-cerita fiksi, dan yang paling
                                            sering adalah karya berbentuk makanan, yaitu kue.</p>
                        </Media>     
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default karya;
import React from 'react'
import Media from './Components/Media';

class kontak extends React.Component{
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <Media image="raniIG.jpeg">  
                        <h1 className="display-4">Kontak Saya</h1>
                        <p className="lead">Untuk yang mau berteman, bisa follow Instagram saya @ranihanifah_.
                                            Atau, follow second account saya @runnytabuthi. Bisa add saya di WA kontak
                                            082334976564 terimakasih!</p>
                        </Media>     
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default kontak;
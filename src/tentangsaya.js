import React from 'react'
import Media from './Components/Media';

class tentangsaya extends React.Component{
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <Media image="rani2.jpeg">  
                        <h1 className="display-4">Tentang Rani Hanifah</h1>
                        <p className="lead">Assalamualaikum, halo semuanya! Nama saya, Rani Hanifah Putri Ma'arif. Biasa dipanggil Rani, Runny, Hanifah.
                                            Saya sekarang duduk di kelas XI RPL 5, SMK Telkom Malang. Saya lahir di Denpasar, 4 Juni 2004. Rumah saya di Jember.
                                            Zodiak saya adalah Gemini. Hobi saya adalah memasak, mendengarkan musik, bernyanyi, dan lain-lain. Mata pelajaran yang
                                            saya suka adalah Bahasa Inggris dan Agama. Di Malang, saya ngekos di BW V. Terimakasih.</p>
                        </Media>     
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default tentangsaya;

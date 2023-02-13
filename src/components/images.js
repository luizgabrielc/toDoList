import Mountain from '../assets/img1.jpg';

const Images = () =>{
    return(
        <div>
            <img src="/img2.jpg" alt="imagem"/>
            <img src={Mountain} alt="imagem"/>
        </div>
    )
}

export default Images;
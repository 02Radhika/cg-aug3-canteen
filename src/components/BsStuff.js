import slide2 from '../assets/images/canteen1.jpg';
import slide3 from '../assets/images/canttenfood.jpg';
import slide4 from '../assets/images/Canteengroup.jpg';

// source: https://getbootstrap.com/docs/4.0/components/carousel/ `
// source: https://daveceddia.com/react-image-tag/ 

const BsStuff = () => {
    return (
        <div className="border border-primary">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" height={350} src={slide2}  alt="First slide" />
                        {/* <img class="d-block w-100" src="https://d3nn873nee648n.cloudfront.net/900x600/9168/20-SM239948.jpg" alt="First slide" /> */}
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" height={350} src={slide3} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" height={350} src={slide4} alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default BsStuff;
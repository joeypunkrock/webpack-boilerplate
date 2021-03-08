import 'Vendor/bootstrap/bootstrap';
import 'Vendor/fontawesome/fontawesome';
import 'Sass/main.scss';
import Glide from '@glidejs/glide';
import ImageDescriptionModal from './shared/imgDescriptionModal/imgDescriptionModal';

// Main Carousel
const glide = new Glide('#image-slider', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center'
});
glide.mount();

function eventListeners() {

    // Build new ImageDescriptionModal class on click of a clickable img
    $('.js-img-description-modal-open').on('click', function() {
        const $this = $(this);

        //Create new class and import the data
        const imgDescriptionModal = new ImageDescriptionModal({
            imgDescription: $this.attr('alt'),
            modalTitle: $this.data('title'),
        });
        
        imgDescriptionModal.show();
    });

};

$(function () {
    eventListeners();
});
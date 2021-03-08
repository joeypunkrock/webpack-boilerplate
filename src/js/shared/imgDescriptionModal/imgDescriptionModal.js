/**
 * A modal to show img descriptions within the alt attr
 * @param {object} options 
 */
class ImgDescriptionModal {
    
    constructor(options = {}) {

        // Assign default values from options into this
        Object.assign(this, {
            modalClass: '',
            modalId: '',
            modalDialogClass: 'modal-md',
            modalTitle: 'Modal',
            imgDescription: '',
        }, options);

        // Modal HTML
        this.$modal = $(`

            <div class="modal modal-img-description-modal ${this.modalClass} js-img-description-modal fade" id="${this.modalId}" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static">
                <div class="modal-dialog ${this.modalDialogClass}" role="document" id="js-img-description-modal-dialog">
                <div class="modal-content modal-content-img-description-modal">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h5 class="modal-title">${this.modalTitle}</h5>
                        <p>${this.imgDescription}</p>
                    </div>
                </div>
                </div>
            </div>

        `);

        this.modal = this.$modal[0];
        
    }

    show() {
        this.$modal.modal('show');
    }

    hide() {
        this.$modal.modal('hide');
    }

    dispose() {
        this.$modal.remove();
        this.$modal.modal('dispose');
    }

    eventListeners() {

        // Ensure we properly remove the modal from the DOM on close
        this.$modal.on('hidden.bs.modal', e => {
            this.dispose();
        });

    }
   
}

export default ImgDescriptionModal;
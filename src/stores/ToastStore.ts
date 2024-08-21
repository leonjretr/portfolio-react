import {makeAutoObservable} from "mobx";

class ToastStore {

    toastSuccessful: boolean = false;
    showToast: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setToastSuccessful = () => {
        this.toastSuccessful = true
        console.log(this.toastSuccessful);
    }
    setToastUnsuccessful = () => {
        this.toastSuccessful = false
    }

    setShowToast = () => {
        this.showToast = true;
        console.log(this.showToast);
    }
    setHideToast = () => {
        this.showToast = false;
    }
}

export default new ToastStore();

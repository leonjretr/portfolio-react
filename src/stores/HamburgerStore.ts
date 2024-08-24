import {makeAutoObservable} from "mobx";

class HamburgerStore {

    isOpen: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    // setIsOpenTrue = () => {
    //     this.isOpen = true
    // }
    // setIsOpenFalse = () => {
    //     this.isOpen = false
    // }
}

export default new HamburgerStore();

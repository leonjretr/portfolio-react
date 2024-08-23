const useScrollNavigate = () => {
    return (id:string) => {
        const element = document.getElementById(id);

        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    }
}

export default useScrollNavigate;
import Popover from "../popover/Popover.tsx";

const AboutText = () => {
    return (
        <div className={"text-justify font-poppinsFont text-lg mx-36 font-medium"}>
            Originally from Ukraine, currently residing in England. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam sit amet felis tortor.
            Integer metus mauris, rhoncus sit amet dolor et, fringilla ultrices leo.
            Pellentesque a justo <Popover linkToWiki={"https://www.google.com/search?q=Kharkiv+National+University+of+Economics"}
            title={"About university"} description={"Simon Kuznets Kharkiv National University of Economics is the largest economic higher educational and research institution in Eastern Ukraine."}>
                <a className={"underline hover:no-underline text-blue-500"}>dignissim</a>
            </Popover> malesuada mauris vitae, fermentum libero.
            Praesent magna leo, commodo sit amet hendrerit dictum, aliquet laoreet elit.
            Mauris et lorem justo. Aenean in posuere arcu, a hendrerit dolor.
            Phasellus fermentum aliquet vehicula.
            Curabitur scelerisque tincidunt tellus, nec mattis nisl molestie nec.
            In eu lacus ut felis rhoncus egestas.
        </div>
    );
};

export default AboutText;
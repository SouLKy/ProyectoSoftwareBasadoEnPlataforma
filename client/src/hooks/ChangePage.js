

const ChangePage = () =>{
    const images = ["https://picsum.photos/id/237/200/300","https://picsum.photos/800/800/?blur","https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1125/posts/30546/preview_image/RN.jpg"]
    const [Countt, setCount] = useState(0);
    const [Image, setImage] = useState(images[0]);

    useEffect(() => {
        if (Countt>2){
            setCount(0);
            console.log(0)
        }
        if (Countt<0){
            setCount(2);
        }
    }, [Countt]);

    const PreviousImage = () =>{
        console.log("click")
    }

    const NextImage = () =>{
        console.log("click")
        setCount(Countt+1)
        console.log(Countt)
        setImage(images[Countt])
    };
    return{
        NextImage,
        PreviousImage,

    }
}
export default ChangePage;
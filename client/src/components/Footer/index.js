import React,{useState, useEffect} from "react";
const Footer = () =>{

    const [SizeW,setSizeW] = useState(window.innerWidth);
    
    const SizeChange=()=>{
        setSizeW(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize',SizeChange)

        return()=>{
            window.removeEventListener('resize',SizeChange)
        }
    }
    ,[])
    /* [] pq queremos que se ejecute una vez nms el useEffect (la creación del event listener), 
    el remove ocurrirá solo cuando se elimine el componente por completo. Si no pondriamos nada en donde está
    [] se renderiza el useEffect en cada cambio del componente con su event listener y dps su nuevo renderizado con su remove
    event listener con su nuevo add event listener.
    En este caso nos interesa que se renderice una vez el event listener en la app
    */


    if (SizeW < 768){
        return (
            <>
                <footer className="Footer">
                    <svg className="SvgFooter" viewBox="0 0 1080 222" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0L49.3801 8.34104C99.6919 16.6821 198.452 33.3642 298.144 61.5954C397.836 90.4682 496.596 131.532 596.288 139.873C695.98 148.214 794.74 123.191 894.432 115.491C994.124 107.15 1092.88 115.491 1143.2 119.341L1192.58 123.191V222H1143.2C1092.88 222 994.124 222 894.432 222C794.74 222 695.98 222 596.288 222C496.596 222 397.836 222 298.144 222C198.452 222 99.6919 222 49.3801 222H0V0Z" fill="#242F9B" fillOpacity="0.8"/>
                    </svg>
                
                    <svg className="SvgFooter" viewBox="0 0 1080 222" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 88.8L39.7525 106.56C79.5051 124.32 159.01 159.84 238.515 150.96C318.02 142.08 397.525 88.8 477.031 53.28C556.536 17.76 636.041 0 715.546 0C795.051 0 874.556 17.76 954.061 48.84C1033.57 79.92 1113.07 124.32 1152.82 146.52L1192.58 168.72V222H1152.82C1113.07 222 1033.57 222 954.061 222C874.556 222 795.051 222 715.546 222C636.041 222 556.536 222 477.031 222C397.525 222 318.02 222 238.515 222C159.01 222 79.5051 222 39.7525 222H0V88.8Z" fill="#06283D" fillOpacity="0.8"/>
                    </svg>
                    <div className="FooterText">PYTYM</div>
                </footer>
                
            </>
        )
    }else{
        return (
            <>
                <footer className="Footer2">
                    <div>
                        PYTYM
                    </div>
                </footer>
            </>
        )
    }

    
}

export default Footer;
/*
<>
    <svg viewBox="0 0 2198 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L91.0109 8.34104C183.739 16.6821 365.761 33.3642 549.5 61.5954C733.239 90.4682 915.261 131.532 1099 139.873C1282.74 148.214 1464.76 123.191 1648.5 115.491C1832.24 107.15 2014.26 115.491 2106.99 119.341L2198 123.191V222H2106.99C2014.26 222 1832.24 222 1648.5 222C1464.76 222 1282.74 222 1099 222C915.261 222 733.239 222 549.5 222C365.761 222 183.739 222 91.0109 222H0V0Z" fill="#224957" fill-opacity="0.8"/>
            </svg>
    
            <svg viewBox="0 0 2198 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 88.8L73.2667 106.56C146.533 124.32 293.067 159.84 439.6 150.96C586.133 142.08 732.667 88.8 879.2 53.28C1025.73 17.76 1172.27 0 1318.8 0C1465.33 0 1611.87 17.76 1758.4 48.84C1904.93 79.92 2051.47 124.32 2124.73 146.52L2198 168.72V222H2124.73C2051.47 222 1904.93 222 1758.4 222C1611.87 222 1465.33 222 1318.8 222C1172.27 222 1025.73 222 879.2 222C732.667 222 586.133 222 439.6 222C293.067 222 146.533 222 73.2667 222H0V88.8Z" fill="#DB6E59" fill-opacity="0.8"/>
            </svg>
</>
*/

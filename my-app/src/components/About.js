
function About({mode}){
    // const [myStyle, setMyStyle]=useState({
    //     color: `black`,
    //     backgroundColor: `white`
    // })
    let myStyle={
        color: mode===`dark`? `white`: `black`,
        backgroundColor: mode===`dark`? `#495057`: `white`,
        borderColor: mode===`dark`? `white`: `black`
    }
    return (
            <div className="container" style={myStyle}>
                <h1 className="my-3">About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       <strong> Analyze Your Text</strong>
        </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">"TextUtils" is a web application designed to help users gain insights into their written content. The app allows users to paste or type their text into the provided text box and perform a variety of text analysis functions such as word count, character count, and reading time estimation. The app also provides an option to convert the text to uppercase or lowercase and replace specific words or phrases within the text. This makes it easy for users to quickly identify key information within their content and make necessary changes. With its simple and intuitive interface, Analyze Your Text is a valuable tool for anyone looking to improve their writing skills, from students to professionals.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
           <strong>Free to Use</strong> 
        </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body" style={myStyle}>"TextUtils" is a completely free web application that can be accessed by anyone with an internet connection. There are no hidden fees, subscriptions, or limitations on the number of times a user can access the app. This makes it an ideal tool for students, professionals, or anyone else who needs to analyze their written content quickly and efficiently without worrying about any financial costs. The app is designed to be user-friendly and accessible, so anyone can use it with ease. Users can simply type or paste their text into the provided text box, perform the desired text analysis functions, and get instant results. With its no-charge policy, TextUtils is a valuable resource for anyone who wants to improve their writing skills without breaking the bank.</div>
        </div>
    </div>
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
           <strong>Browser Compatible</strong> 
        </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">TextUtils is designed to be compatible with most modern web browsers, including Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. This ensures that users can access and use the app regardless of the browser they prefer to use. The app has been tested and optimized to work seamlessly on each of these browsers, so users can expect a consistent and reliable experience no matter which one they use. In addition, TextUtils is designed to be responsive, which means that the app can adapt to different screen sizes and devices, such as desktop computers, laptops, tablets, and smartphones. This makes it easy to access and use the app from virtually anywhere, making it a versatile tool for anyone who wants to improve their writing skills on the go.</div>
        </div>
    </div>
    </div>
            </div>
    );
}

export default About;
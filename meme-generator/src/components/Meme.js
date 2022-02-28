import React from "react";
import memeData from "../memeData"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "Top Text",
        bottomText: "Bottom Text",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    function getMemeImage(){
        let randNum = Math.floor(Math.random() * 100)
        let newMeme = allMemeImages.data.memes[randNum];
        let url = newMeme.url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
    }
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState => {
            return {
                ...meme,
                [name]: value,
            }
        })
    }

    return (
        <main>
            <div className="meme-container">
                    <div className="meme-forms">
                    <input type="text" name="topText" onChange={handleChange} value={meme.topText} placeholder="Top text"></input>
                    <input type="text" name="bottomText" onChange={handleChange} value={meme.bottomText} placeholder="Bottom text"></input>
                    </div>
                    <button onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme"></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
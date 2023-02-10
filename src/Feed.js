import React from 'react'
import "./Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'





function Feed() {



    return (
        <div className='feed'>
            {/* {Header} */}
            <div className='feed__header'>
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Post
                displayName="Kalp Prajapati"
                username='KalpPrajapati13'
                verified={true}
                text="React is awesome !!!"
                avatar="https://pbs.twimg.com/profile_images/1573963453215125510/bZZiW-Mr_400x400.jpg"
                image="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"

            />
            <Post
                displayName="Elon Musk"
                username='elonmusk'
                verified={true}
                text=""
                avatar="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
                image="https://pbs.twimg.com/media/FnmZ2MdWYAI_LfI?format=jpg&name=small"

            />
                    
                     <Post
                displayName="Narendra Modi"
                username='narendramodi'
                verified={true}
                text="सभी तटरक्षक कर्मियों को उनके स्थापना दिवस पर बधाई। भारतीय तटरक्षक अपने व्यावसायिकता और हमारे तटों को सुरक्षित रखने के प्रयासों के लिए जाना जाता है। मैं उन्हें उनके भविष्य के प्रयासों के लिए अपनी शुभकामनाएं भी देता हूं।"
                image="https://pbs.twimg.com/media/Fn2aY75aAAEazR1?format=jpg&name=large"
                avatar="https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg"

            />

            <Post
                displayName="Kevin Hart"
                username='kevinhart244'
                verified={false}
                text="OpenAI was just like “hope you are cool redoing your entire 2023 plan in February” to every business in the world OpenAI was just like “hope you are cool redoing your entire 2023 plan in February” to every business in the world.👍"
                avatar="https://pbs.twimg.com/profile_images/1565802856162246656/hxpT-aZr_400x400.jpg"
                image="https://pbs.twimg.com/media/FbgD2qYVEAAY41V?format=jpg&name=large"

            />
            <Post
                displayName="Suhail"
                username='Suhail'
                verified={true}
                text="I can never just let GPUs sit idle at night. It makes me sad to see compute wasted. There’s always a script to be run while you sleep."
                avatar="https://pbs.twimg.com/profile_images/1467327500967579651/M-hifx0d_400x400.jpg"
                image="https://pbs.twimg.com/media/FoUDXpXaIAA2RB_?format=jpg&name=large"

            />
            <Post
                displayName="Naval"
                username='naval'
                verified={true}
                text="Automation means not having to do anything twice.

                Automation with the Internet means not having to do anything that anyone else has already done.
                
                All that remains are creativity and judgement."
                avatar="https://pbs.twimg.com/profile_images/1256841238298292232/ycqwaMI2_400x400.jpg"
                image="https://pbs.twimg.com/media/FbgEMFWUEAAs4bs?format=jpg&name=4096x4096"

            />
           

        </div>
    )
}

export default Feed

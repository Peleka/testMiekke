import React from 'react';
import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import {Image} from "./components/Image/Image";
import {Card} from "./components/Card/Card";
import {Content} from "./components/Content/Content";
import {Button} from "./components/Button/Button";
import image1 from './images/cat.jpg'
import image2 from './images/02.jpg'
import image3 from './images/03.jpg'
import iconLike from './images/like.png'
import iconShare from './images/share.png'

function App() {
    const redirect = useNavigate()
    const icons = [iconLike, iconShare]

    return (
        <div className="App">
            <Routes>
                <Route path={'/testMiekke'} element={
                    <Card>
                        <Image
                            image={image1}
                            alt={'cat'}
                        />
                        <Content
                            title={'Relaxed And Calm'}
                            text={'A cat who is relaxed will have loose body movements and their breathing will be slow and steady. They may fold their feet in front of themselves or stretched way out in front.'}
                        />
                        <Button
                            buttonText={'Read more..'}
                            onClickButtonHandler={() => redirect('/page2')}
                        />
                    </Card>
                }/>
                <Route path={'/page2'} element={
                    <Card>
                        <Image
                            image={image2}
                            alt={'cat'}
                        />
                        <Content
                            title={'Communicate With You And Express Emotions'}
                            text={'Most cat caregivers would love if their cats could talk to them and they do, but mostly using nonverbal communication.'}
                        />
                        <Button
                            buttonText={'Read more..'}
                            onClickButtonHandler={() => redirect('/page3')}
                        />
                        <Button
                            buttonText={'Home page'}
                            onClickButtonHandler={() => redirect('/')}
                        />
                    </Card>
                }>
                </Route>
                <Route path={'/page3'} element={
                    <Card>
                        <Image
                            image={image3}
                            alt={'cat'}
                        />
                        <Content
                            title={'Top 10 Facts About Cats'}
                            text={'A cue is a signal that triggers a behavior. Cats are always learning, and we are teaching them even if we do not realize it. For example, when you take out the can opener when your first wake up, your cat comes running in anticipation of food.'}
                        />
                        <Button
                            buttonText={'Home page'}
                            onClickButtonHandler={() => redirect('/testMiekke')}
                            buttonText2={'Go back'}
                            onClickButtonHandler2={() => redirect('/page2')}
                            icons={icons}
                        />
                    </Card>
                }>
                </Route>
                <Route path="/*" element={<div>Error</div>}/>
            </Routes>
        </div>
    );
}

export default App;

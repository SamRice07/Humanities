import React from 'react'
import './CharCard.scss'

export default function CharCard() {
  return (
    <>
        <div class="wrapper">



            <div class="charCard-wrapper">
            <div class="charCard">
                <div class="charCard-inner">
                <div class="charCard-info">
                    <h1 class="title">Jay Gatsby</h1>
                    <p class="sub-title">Jay Gatsby, formerly known as Jay Gatz, is the epitome of my improvement and striving for greatness. Once his mysterious past is revealed it becomes clear he was never born into nor inherited any wealth but rather built it through sheer determination. This shows Gatsby's resolve and how he had an innate motive to reach greater and greater heights.</p>
                </div>
                <div class="charCard-media">
                    <img src="https://i.imgur.com/5ijGqkT.png" class="charCard-img Gatsby" />
                </div>
                </div>

            </div>

            <div class="charCard">
                <div class="charCard-inner">
                <div class="charCard-info">
                    <h1 class="title">Tom Buchanan</h1>
                    <p class="sub-title">Tom Buchanan seemingly contradicts the notion that there is an innate need for improvement in one's self but that is not the case. It is simply a difference of what improvement means, for Tom improvement means something like getting more mistresses or hiding his infidelity better. Although this is atypical it is still an innate motive for success just a different kind.</p>
                </div>
                <div class="charCard-media">
                    <img src="https://i.imgur.com/Que2NuV.png" class="charCard-img Tom" />
                </div>
                </div>

            </div>

            <div class="charCard">
                <div class="charCard-inner">
                <div class="charCard-info">
                    <h1 class="title">Nick Carraway</h1>
                    <p class="sub-title">Nick Carraway is a prime example of a person going through the process of harnessing their inner drive for results, in contrast to Tom and Gatsby he has not been able to enjoy the benefits of the work he put in as he hasn't completed the work yet. Nick is an exemplary example of how a person must pass through the process and that innate drive doesn't mean innate results.</p>
                </div>
                <div class="charCard-media">
                    <img src="https://i.imgur.com/DOIc29E.png" class="charCard-img Nick" />
                </div>
                </div>
            </div>
            </div>

        </div>


    </>
  )
}

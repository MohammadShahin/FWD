<header>
    <div class="heading1">Mohammad Shahin</div>
    <div class="heading3 blue">Full-Stack Developer</div>
    <div class="reach-me">
        <div class="phone">
            <img
                src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Phone-game-play-others-inmotus-design-2.png"
                alt="phone icon"
            />
            <a href="tel:+79870659239"> +79870659239 </a>
        </div>
        <div class="email">
            <img
                src="https://img.icons8.com/fluency-systems-regular/48/000000/circled-envelope.png"
                alt="email icon"
            />
            <a href="mailto:pr.hash2001@gmail.com">pr.hash2001@gmail.com</a>
        </div>
        <div class="linkedin">
            <img
                src="https://img.icons8.com/ios/50/000000/linkedin-circled--v1.png"
                alt="linkedin icon"
            />
            <a href="https://www.linkedin.com/in/hashx/" target="_blank"
                >LinkedIn</a
            >
        </div>
        <div class="github">
            <img
                src="https://img.icons8.com/ios/50/000000/github--v1.png"
                alt="github icon"
            />
            <a href="https://github.com/MohammadShahin" target="_blank"
                >Github</a
            >
        </div>
    </div>
</header>

<style>
    header {
        margin-top: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    div.reach-me {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .reach-me > div {
        padding-left: 1rem;
        padding-right: 1rem;
        display: flex;
        align-items: center;
    }

    .reach-me > div:not(:first-child) {
        border-left: 2px solid lightgrey;
    }

    .reach-me > div > img {
        height: 40px;
        width: 40px;
        filter: hue-rotate(190deg) sepia(100%) saturate(900%);
    }
</style>

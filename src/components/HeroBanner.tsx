import { Container } from "@material-ui/core";

export default function HeroBanner() {
    return (
        <div className="hero-banner" id="hero">
            <Container>
                <div className="hero-content">
                    <h2>
                        Welcome to the home of the Happy Huskies
                    </h2>
                    <p>
                        a pack of huskies living on the Solana blockchain!<br />
                        Each husky is programmatically generated from over 150 traits to ensure uniqueness.
                    </p>
                    {/* <p>
                        The Happy Huskies will compete in a P2E sled racing game where training your husky will be the key to success! Earn $HUSKY tokens by playing mini-games in our
                        &nbsp;<a href="#">game room</a>.&nbsp; <br />

                        $HUSKY can then be used to upgrade the stats of your husky and give them a better chance at winning Sled Races. As the Husky ecosystem develops, you may be able to buy accessories to flex on the track or even upgrade a home for your pup 👁‍🗨. <br />
                        For more information and the tokenomics on $HUSKY, check out &nbsp;<a href="#">$HUSKY Token</a>.&nbsp;
                    </p> */}
                </div>
            </Container>
            {/* eslint-disable-next-line */}
            <img
                src="/hero-banner.svg"
                alt=""
            />
        </div>
    )
}
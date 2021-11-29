import React from 'react';
import { Box as BUI, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ArticlePreview from 'assets/images/articlePreview.png';
import videoImage from 'assets/images/HeroImage.png';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
const Article = () => {
  return (
    <Box className="article">
      <div className="headline">
        <Typography variant="h5" component="h5">
          DeMoralizing: How DeMar DeRozan has transformed Chicago's offense
        </Typography>
        <div className="stamp">
          <Typography variant="p" component="p">
            Justina Chucks
          </Typography>{' '}
          <Typography variant="p" component="p">
            {new Date().toLocaleDateString(undefined, {
              year: 'numeric',
              day: '2-digit',
              month: 'short',
              hour: '2-digit',
            })}
          </Typography>
          <div className="icon">
            <BsTwitter />

            <BsInstagram />
            <BsFacebook />
          </div>
        </div>
        <img src={ArticlePreview} />
      </div>
      <Box className="content content1">
        <Typography variant="p" component="p">
          It's easy to gravitate towards a tough shot-maker. How cool is it to
          see a player defended well, pushed to an uncomfortable spot and knock
          down a jumper or convert a contested finish anyway?
        </Typography>
        <Typography variant="p" component="p">
          DeRozan's off to a hot start, averaging 27.0 points with a 59.5% True
          Shooting percentage to boot. Honestly, he's got it going from
          everywhere. His shot distribution (along with field-goal percentages
          by distance) is as follows:
        </Typography>{' '}
        <Typography variant="p" component="p" className="third1">
          According to Rohr, the jet-heeled forward asked for permission to sit
          out the World Cup qualifiers in a bid to concentrate on his club
          career following a topsy-turvy 2021-22 campaign.
        </Typography>{' '}
        <Typography variant="p" component="p">
          “I spoke with him and he asked not to be selected,” the former Gabon
          and Burkina Faso handler told France Bleu Gironde.
        </Typography>
        <Typography variant="p" component="p" className="last1">
          “He made a very good argument about wanting to concentrate on the club
          - he told me that the time had come for him to give his all, to fight
          to regain his place in the Girondin's squad. I found his speech to be
          very positive.
        </Typography>
      </Box>
      <div className="frame">
        <img src={videoImage} sx={{ width: '100%' }} />
      </div>
      <Box className="content content2">
        <Typography variant="p" component="p">
          “We have a lot of wingers in our squad, that is true. The competition
          is fierce, but I think what matters now is for him to have a starting
          place at Girondins. He has the means, but he has to be in top physical
          condition.”
        </Typography>{' '}
        <Typography variant="p" component="p">
          In the 2021-22 campaign, Kalu has featured in just nine Ligue 1
          matches – with three of them in the starting XI. His only goal of the
          season campaign came in the 3-3 draw against Montpellier on September
          22.
        </Typography>{' '}
        <Typography variant="p" component="p">
          Since collapsing during a league game against Olympique Marseille in
          August, the former Gent and AS Trencin man has been battling with one
          injury or the other.
        </Typography>
      </Box>
    </Box>
  );
};
const Box = styled(BUI)`
  background-color: #111;
  color: #fff;
  /* min-height: 50vh; */
  padding: clamp(30px, 50px, 80px) clamp(50px, 150px, 200px);
  display: flex;
  flex-direction: column;
  .stamp {
    display: flex;
    gap: 3rem;
    .icon {
      display: flex;
      gap: 1rem;
    }
  }
  .content {
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 3rem, 5rem);
    width: clamp(60%, 80%, 100%);
    margin: auto;
    p.third1 {
      color: rgba(255, 255, 255, 0.7);
    }
    p.last1 {
      color: #fce61d;
    }
    &:last-of-type {
      color: rgba(255, 255, 255, 0.7);
      p:nth-of-type(2) {
        color: red;
      }
    }
  }
  .headline {
    display: flex;
    flex-direction: column;
    gap: clamp(2rem, 3rem, 5rem);
    img {
      width: clamp(60%, 80%, 100%);
      align-self: center;
    }
  }
  .frame {
    width: clamp(150px, 500px, 600px);
    height: clamp(300px, 500px, 600px);
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: #000;
    /* padding: 10px; */
    border-radius: 10px;
    img {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 30px 20px;
    .frame {
      width: 100%;
      height: 400px;
    }
    .stamp {
      width: 100%;
      flex-direction: column;
      gap: 1rem;
    }
    .content {
      width: 100%;
    }
  }
`;
export default Article;

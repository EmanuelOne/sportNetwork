import React from "react";
import { Box as BUI, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ArticlePreview from "assets/images/articlePreview.png";
import videoImage from "assets/images/previewImage.png";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Article = () => {
  return (
    <Box className="article">
      <div className="headline">
        <Typography variant="h5" component="h5">
        Basketball Africa League : Place à l'Elite 16, la seconde phase des éliminatoires
        </Typography>
        <div className="stamp">
          <Typography variant="p" component="p">
            Justina Chucks
          </Typography>{" "}
          <Typography variant="p" component="p">
            {new Date().toLocaleDateString(undefined, {
              year: "numeric",
              day: "2-digit",
              month: "short",
              hour: "2-digit",
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
        Le premier tour des éliminatoires de la Basketball Africa League s’est achevé dimanche avec les qualifications de Nigelec (Niger) et des Ulinzi Warriors (Kenya). Association Sportive Salé (Maroc), Matero Magic (Zambie), Cobra Sport (Sud Soudan) et ASPAC (Bénin) complètent le tableau de l’Elite 16.
        </Typography>
        <Typography variant="p" component="p">
        On connaît désormais les 16 équipes qualifiées pour la seconde phase des éliminatoires de la BAL. Logé dans le groupe B, Nigelec s’impose devant ASPAC (65-35). Ce succès a permis à la formation nigérienne de s’emparer de la 2ème place du groupe derrière la Société Omnisports de l’Armée de Côte d’Ivoire.
        </Typography>{" "}
        <Typography variant="p" component="p" className="third1">
        Dans le groupe D, ce sont les Ulinzi Warriors du Kenya qui se qualifient sur le terrain. Ils ont battu les Cobra Sport du Sud Soudan (53-47), lors de la 3e et dernière journée
        </Typography>{" "}
        <Typography variant="p" component="p">
        Championne du Maroc, l’AS Salé est directement qualifiée pour l’Elite 16. Le club marocain avait atteint les quarts de finale lors de la première édition de la BAL. Il y aura aussi Matero Magic (Zambie), Cobra Sport (Sud Soudan) et ASPAC (Bénin) qui ont fini meilleurs 3e des groupes..
        </Typography>
   
      </Box>
      <div className="frame">
        <img src={videoImage} sx={{ width: "100%" }} />
      </div>
      <Box className="content content2">
        <Typography variant="p" component="p">
        Pour la seconde phase, les 16 équipes seront réparties en deux groupes (G et H) de 8. Les rencontres de l’Elite 16 se dérouleront du 16 au 21 novembre (Groupe G) et du 14 au 19 décembre (Groupe H). Les trois premières formations de chaque groupe se qualifieront pour la 2ème édition de la Basketball Africa League. Ces équipes rejoindront les champions du Nigeria, de la Tunisie, de l’Angola, du Sénégal, de l’Egypte et du Rwanda.
        </Typography>{" "}
           
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

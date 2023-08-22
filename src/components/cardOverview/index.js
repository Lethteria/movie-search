import React, {useState} from 'react';
import styles from "./cardOverview.module.scss"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CardOverview({text}) {

    const [fullOverview, setFullOverview] = useState(false);
    const showReadMore = (text.length > 200) ;
    //const [readMore, setReadMore] = useState(false);

    function onClickReadMore(){
        setFullOverview(!fullOverview);
    }

    const movieOverview = fullOverview ? text : text.slice(0, 200);

    return (
        <Card.Text className={styles.wrap}>

            {movieOverview}

            {showReadMore && <Button variant="link"
                                     size="sm"
                                     className={styles.button}
                                     onClick={onClickReadMore}
                             >
                                {fullOverview ? "less" : "... read more"}
                            </Button>
            }

        </Card.Text>
    );
}

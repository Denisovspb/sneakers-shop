import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';

function Card({
    id,
    parentId, 
    name, 
    price, 
    src, 
    onPlus, 
    onFavorite, 
    favorited = false, 
    loading = false
}) {
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const { isItemAdded } = React.useContext(AppContext);

    const obj = { id, parentId: id, name, price, src};

    const handleClickPlus = () => {
        onPlus(obj);
    }
    
    const onClickFavorite = () => {
        onFavorite(obj)
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            {
                loading ? 
                <ContentLoader 
                    speed={2}
                    width={150}
                    height={250}
                    viewBox="0 0 150 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                    <rect x="0" y="107" rx="5" ry="5" width="150" height="15" /> 
                    <rect x="0" y="132" rx="5" ry="5" width="93" height="15" /> 
                    <rect x="0" y="180" rx="5" ry="5" width="80" height="25" /> 
                    <rect x="118" y="21" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
                : 
                <>
                    {onFavorite && <div className={styles.favorite}>
                        <img width={32} height={32} src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Heart" onClick={onClickFavorite} />
                    </div>}
                    
                    <img width={133} height={112} src={src} alt="Sneakers" />
                    <h5 className="flex">{name}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        {onPlus && <img className={styles.plus} onClick={handleClickPlus} width={32} height={32} src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />}
                    </div>
                </>
            }
        </div>
    );
}

export default Card;
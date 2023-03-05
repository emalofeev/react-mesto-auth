import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  onCardClick,
  onCardDelete,
  onCardLike,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);
  const cardsElements = cards.map((card) => {
    return (
      <Card
        key={card._id}
        onCardClick={onCardClick}
        onCardDelete={onCardDelete}
        onCardLike={onCardLike}
        card={card}
      />
    );
  });

  return (
    <main className="content">
      <section className="profile">
        <img
          className="profile__avatar"
          alt="Аватар"
          src={currentUser.avatar}
        />
        <div className="profile__avatar-button" onClick={onEditAvatar}></div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__edit-name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__info-about">{currentUser.about}</p>
        </div>
        <button
          className="profile__button"
          type="button"
          aria-label="Добавить карточку с фотографией"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">{cardsElements}</section>
    </main>
  );
}

export default Main;

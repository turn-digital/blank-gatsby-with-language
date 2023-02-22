import React from "react";
import SimpleSlider from "../../components/slider-simple/SliderSimple";
// import patternLine from "/pattern-line.svg";

const ArticleAuthor = (props) => {
  const author = props.author;
  return <p className="article-card__author">Foto: {author}</p>;
};

const ArticleImage = (props) => {
  const fileSrc = props.fileFormat,
    content = props.content;
  let authorTag = true;
  const imageAlt = props.imageAlt;

  if (content.author === undefined || content.author === null) {
    authorTag = false;
  }

  return (
    <div className="article-card__image">
      <div className="article-card__col">
        <picture>
          <img className="article-card__img" src={fileSrc} alt={imageAlt} />
        </picture>
        {authorTag ? <ArticleAuthor author={content.author} /> : ""}
      </div>
      <div className="article-card__col">
        <h3
          className={
            authorTag
              ? "article-card__title article-card__title--author"
              : "article-card__title"
          }
        >
          {content.title}
          <span>
            <picture>
              <img src="/pattern-line.svg" alt="Pattern line" />
            </picture>
          </span>
        </h3>
        <div
          className="article-card__content"
          dangerouslySetInnerHTML={{ __html: content.content }}
        ></div>
      </div>
    </div>
  );
};

const ArticleVideo = (props) => {
  const fileFormat = props.fileFormat,
    content = props.content;
  return (
    <div className="article-card__video">
      <div className="article-card__col">
        <div className="youtube" data-embed={fileFormat}>
          <div className="play-button"></div>
        </div>
        <p className="article-card__author">Video: {content.author}</p>
      </div>
      <div className="article-card__col">
        <h3 className="article-card__title">
          {content.title}
          <span>
            <picture>
              <img src="/pattern-line.svg" alt="Pattern line" />
            </picture>
          </span>
        </h3>
        <div
          className="article-card__content"
          dangerouslySetInnerHTML={{ __html: content.content }}
        ></div>
      </div>
    </div>
  );
};

const ArticleSlider = (props) => {
  const fileFormat = props.fileFormat,
    content = props.content;
  return (
    <div className="article-card__video">
      <div className="article-card__col">
        <SimpleSlider className="article-card__slider" slide={fileFormat} />
        <p className="article-card__author">Foto: {content.author}</p>
      </div>
      <div className="article-card__col">
        <h3 className="article-card__title">
          {content.title}
          <span>
            <picture>
              <img src="/pattern-line.svg" alt="Pattern line" />
            </picture>
          </span>
        </h3>
        <div
          className="article-card__content"
          dangerouslySetInnerHTML={{ __html: content.content }}
        ></div>
      </div>
    </div>
  );
};

const ArticleCard = (props) => {
  const articles = props.article;
  const imagesAlt = props.imagesAlt;

  const ArticleType = (props) => {
    const attachment = props.attachment,
      fileFormat = props.file,
      content = props.content,
      imageAlt = props.imageAlt;

    //   return <>aaaaaaaaaaaaaa<ArticleSlider fileFormat={fileFormat} content={content} /></>;
    if (attachment === "image") {
      return (
        <ArticleImage
          fileFormat={fileFormat}
          content={content}
          imageAlt={imageAlt}
        />
      );
    } else if (attachment === "video") {
      return <ArticleVideo fileFormat={fileFormat} content={content} />;
    } else if (attachment === "slider") {
      return <ArticleSlider fileFormat={fileFormat} content={content} />;
    }
  };

  return (
    <div className="article-card">
      <div className="article-card__wrap">
        <div className="article-card__list">
          {articles.map((anObjectMapped, index) => (
            <div className="article-card__item" key={`${index}`}>
              <ArticleType
                attachment={`${anObjectMapped.type}`}
                file={anObjectMapped.item}
                content={anObjectMapped}
                imageAlt={imagesAlt[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

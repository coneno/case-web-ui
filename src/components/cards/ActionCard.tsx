import clsx from 'clsx';
import React from 'react';
import styles from './ActionCard.module.scss';

interface ActionCardProps {
  title: string;
  image?: {
    url: string;
    className?: string;
    backgroundPosition?: string;
    backgroundSize?: string;
    placement: 'top' | 'left';
    height?: string;
    width?: string;
    minWidth?: string | number;
    maxWidth?: string | number;
    minHeight?: string | number;
    maxHeight?: string | number;
  };
  footerText?: string;
  actionBtnText?: string;
  className?: string;
  onClick?: () => void;
}

const ActionCard: React.FC<ActionCardProps> = (props) => {
  return (
    <div className={clsx(
      'bg-secondary d-flex',
      styles.card,
      {
        'flex-row': props.image?.placement === 'left',
        'flex-column': props.image?.placement !== 'left',
        [styles.actionable]: props.actionBtnText
      },
      props.className,
    )}
      onClick={props.onClick}
    >
      {props.image ? <div
        className={clsx("flex-grow-1", props.image.className)}
        style={{
          height: props.image.height,
          maxHeight: props.image.maxHeight,
          minHeight: props.image.minHeight,
          width: props.image.width,
          minWidth: props.image.minWidth,
          maxWidth: props.image.maxWidth,
          backgroundImage: `url(${props.image.url})`,
          backgroundPosition: props.image.backgroundPosition ? props.image.backgroundPosition : 'center',
          backgroundSize: props.image.backgroundSize ? props.image.backgroundSize : 'cover',
        }}>

      </div> : null}
      <div className={clsx("p-2 d-flex flex-column",
        { "flex-grow-1": props.image?.placement !== 'left', }
      )}>
        <h5 className="fw-bold">
          {props.title}
        </h5>
        <div className="flex-grow-1">
          {props.children}
        </div>
        <div className="mt-1a d-flex align-items-center">
          {props.footerText ? <span className="text-grey-5">
            {props.footerText}
          </span> : null}
          <span className="flex-grow-1"></span>
          {props.actionBtnText ? <button className="btn btn-link text-body p-0">
            {props.actionBtnText}
            <i className="fs-btn">
              <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </i>
          </button>
            : null}
        </div>
      </div>
    </div >
  );
};

export default ActionCard;
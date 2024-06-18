import React, { useState, useEffect } from 'react';
import { SurveySingleItem, ItemGroupComponent, ResponseItem, ItemComponent, isItemGroupComponent } from 'survey-engine/data_types';
import { getClassName, getItemComponentByRole, getItemComponentsByRole, getLocaleStringTextByCode } from './utils';
import HelpGroup from './SurveyComponents/HelpGroup';
import TextViewComponent from './SurveyComponents/TextViewComponent';
import ErrorComponent from './SurveyComponents/ErrorComponent';
import WarningComponent from './SurveyComponents/WarningComponent';
import ResponseComponent, { CustomSurveyResponseComponent } from './ResponseComponent/ResponseComponent';
import clsx from 'clsx';
import BulletList from './SurveyComponents/BulletList';
import MarkdownComponent from './SurveyComponents/MarkdownComponent';
import { renderFormattedContent } from './renderUtils';

interface SurveySingleItemViewProps {
  renderItem: SurveySingleItem;
  languageCode: string;
  responsePrefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  showInvalid?: boolean;
  invalidWarning: string;
  showKeys?: boolean;
  customResponseComponents?: Array<CustomSurveyResponseComponent>;
  dateLocales?: Array<{ code: string, locale: any, format: string }>;
}


const SurveySingleItemView: React.FC<SurveySingleItemViewProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.responsePrefill);
  const [touched, setTouched] = useState(false);

  const paddingX = 'px-2 px-sm-3';
  const paddingY = 'py-2 py-sm-2a';

  useEffect(() => {
    if (touched) {
      props.responseChanged(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const renderHelpGroup = (): React.ReactNode => {
    if (!props.renderItem.components) { return null; }
    const helpGroup = getItemComponentByRole(props.renderItem.components.items, 'helpGroup') as ItemGroupComponent;
    if (!helpGroup) {
      return null;
    }
    return (
      <HelpGroup
        itemKey={props.renderItem.key.replace('.', '-')}
        componentGroup={helpGroup}
        languageCode={props.languageCode}
      />
    )
  }

  const requiredItem = props.renderItem.validations?.find(val => val.type === 'hard');

  const renderBodyComponents = (): React.ReactNode => {
    if (!props.renderItem.components) { return null; }
    return <React.Fragment>
      {
        props.renderItem.components.items.map((component: ItemComponent, index: number) => {
          if (component.displayCondition === false) {
            return null;
          }
          switch (component.role) {
            case 'title':
              return null;
            case 'subtile':
              return null;
            case 'helpGroup':
              return null;
            case 'footnote':
              return null;
            case 'responseGroup':
              return <ResponseComponent key={index.toFixed()}
                itemKey={props.renderItem.key}
                languageCode={props.languageCode}
                compDef={component}
                prefill={props.responsePrefill}
                isRequired={requiredItem ? true : false}
                dateLocales={props.dateLocales ? props.dateLocales : []}
                responseChanged={(response) => {
                  console.log('new response set', response)
                  setTouched(true);
                  setResponse(response);
                }}
                showOptionKey={props.showKeys}
                customResponseComponents={props.customResponseComponents}
              />
            case 'text':
              return <TextViewComponent key={index.toFixed()}
                compDef={component}
                languageCode={props.languageCode}
              />;
            case 'bullets':
              return <BulletList key={index.toFixed()}
                compDef={component}
                languageCode={props.languageCode}
              />
            case 'markdown':
              return <MarkdownComponent key={index.toFixed()}
                compDef={component}
                languageCode={props.languageCode}
              />;
            case 'error':
              return <ErrorComponent key={index.toFixed()}
                compDef={component}
                languageCode={props.languageCode}
              />
            case 'warning':
              return <WarningComponent key={index.toFixed()}
                compDef={component}
                languageCode={props.languageCode}
              />
            default:
              console.warn('component role not implemented: ' + component.role);
              return <p key={index.toFixed()}>{component.role} not implemented</p>
          }
        })
      }
    </React.Fragment>;
  }

  // const titleComp = props.renderItem.components ? getItemComponentTranslationByRole(props.renderItem.components.items, 'title', props.languageCode) : undefined;
  const titleComp = getItemComponentByRole(props.renderItem.components?.items, 'title')
  let subTitleComp = getItemComponentByRole(props.renderItem.components?.items, 'subtitle')
  // fallback to legacy survey subtitle
  if (!subTitleComp && titleComp && titleComp.description) {
    subTitleComp = {
      key: 'legacy-subtitle',
      role: 'text',
      content: titleComp.description,
    }
  }

  const renderTitleComp = (): React.ReactNode => {
    if (!titleComp) {
      if (props.showKeys) {
        return <h5 className={clsx(
          paddingX,
          paddingY,
          'bg-grey-2',
          "text-primary me-2 fw-bold")}>{props.renderItem.key}</h5>
      }
      return null;
    }

    let content = renderFormattedContent(titleComp, props.languageCode, undefined, props.dateLocales ? props.dateLocales : []);
    const subTitleContent = subTitleComp ? renderFormattedContent(subTitleComp, props.languageCode, 'italic', props.dateLocales ? props.dateLocales : []) : null;

    return (
      <div
        className={
          clsx(
            'd-flex align-items-center',
            paddingX,
            paddingY,
            'bg-grey-2',
            getClassName(titleComp.style),
            {
              'bg-danger-light': props.showInvalid
            }
          )}
      >
        <div className="flex-grow-1">
          <h5 className="m-0 fw-bold fs-survey-item-title">
            {props.showKeys ?
              <span className="text-primary me-2">{props.renderItem.key}</span>
              : null}
            {content}
            {requiredItem ?
              <span
                className={clsx(
                  'ms-1',
                  {
                    'text-primary': !props.showInvalid,
                    'text-danger': props.showInvalid
                  }
                )}
              >
                {'*'}
              </span> : null}
          </h5>

          {subTitleContent && <div>{subTitleContent}</div>}
        </div>

        {renderHelpGroup()}
      </div >
    )
  }

  const renderFootnote = (): React.ReactNode => {
    if (!props.renderItem.components) { return null; }
    const currentComponents = getItemComponentsByRole(props.renderItem.components.items, 'footnote');
    if (currentComponents.length < 1) {
      return null;
    }

    return currentComponents.map((component: ItemComponent, index: number) => {
      if (component.displayCondition === false) {
        return null;
      }
      return <TextViewComponent
        className={clsx(paddingX, 'mt-2a')}
        key={index.toFixed()}
        compDef={component}
        languageCode={props.languageCode}
      />
    })
  }

  return (
    <React.Fragment>
      <div
        className={'bg-grey-1'}>
        {renderTitleComp()}
        <div className={clsx(
          paddingX,
          paddingY
        )}
        >
          {renderBodyComponents()}
        </div>
        {props.showInvalid ?
          <p className={clsx(
            paddingX,
            'fw-bold',
            'py-2',
            'bg-danger-light  m-0 text-danger'
          )}
            style={{ fontSize: '1.1875rem' }}
          >
            {props.invalidWarning}
          </p>
          : null}
      </div>
      {renderFootnote()}
    </React.Fragment>
  );
};

export default SurveySingleItemView;
